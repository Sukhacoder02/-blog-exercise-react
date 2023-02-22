import * as React from 'react';
import Card from './../Card';
import './Cards.css';
import makeRequest from '../../utils/MakeRequest';
import { GET_BLOG_POSTS } from '../../constants/apiEndPoints';
import { useNavigate } from 'react-router-dom';

const Cards: React.FunctionComponent = (): JSX.Element => {
  const [blogData, setBlogData] = React.useState<any[]>();
  const [error, setError] = React.useState();
  const navigate = useNavigate();
  React.useEffect(() => {
    makeRequest(GET_BLOG_POSTS, {}, navigate)
      .then(response => {
        setBlogData(response);
      })
      .catch(error => {
        setError(error);
      });
  }, []);
  if (error) {
    return (
      <div className="blogDataError">
        <p>{error}</p>
      </div>
    );
  }
  if (blogData) {
    const cards = blogData.map((post, index) => {
      return (
        <Card
          key={index}
          id={post.id}
          date={post.date}
          readingTime={post.reading_time}
          title={post.title}
          description={post.description}
          claps={post.claps}
          image={post.image}
          liked={post.liked}
        />
      );
    });
    return <div className="cards">{cards}</div>;
  } else {
    return (
      <div className="blogDataError">
        <p>Loading...</p>
      </div>
    );
  }
};
export default Cards;
