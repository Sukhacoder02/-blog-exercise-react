import * as React from 'react';
import Card from './../Card';
import './Cards.css';
import postsJson from '../../mockData/index.json';

const Cards: React.FunctionComponent = (): JSX.Element => {
  const cards = postsJson.map((post, index) => {
    return (
      <Card
        key={index}
        date={post.date}
        readingTime={post.readingTime}
        title={post.title}
        description={post.description}
        claps={post.claps}
        image={post.image}
        liked={post.liked}
      />
    );
  });
  return <div className="cards">{cards}</div>;
};
export default Cards;
