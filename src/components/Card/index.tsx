import * as React from 'react';
import './Card.css';
import makeRequest from '../../utils/MakeRequest';
import { UPDATE_BLOG_POST } from '../../constants/apiEndPoints';
import CardData from '../../types';

const formatDate = (dateString: string): string => {
  const options: any = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const Card: React.FC<CardData> = (cardData: CardData): JSX.Element => {
  const [claps, setClaps] = React.useState(cardData.claps);

  const blackHeart = 'heart-black.svg';
  const redHeart = 'heart-red.svg';
  const [_redHeart, setHeart] = React.useState(cardData.liked ? true : false);
  const [disabled, setDisabled] = React.useState(false);

  const handleClaps = async () => {
    try {
      await makeRequest(UPDATE_BLOG_POST(cardData.id), {
        data: { claps: claps + 1 },
      });
      setClaps(claps + 1);
      setDisabled(!disabled);
    } catch (err) {
      console.log(err);
    }
  };

  const handleLike = async () => {
    try {
      await makeRequest(UPDATE_BLOG_POST(cardData.id), {
        data: {
          liked: !_redHeart,
        },
      });
      setHeart(!_redHeart);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="card" data-testid="card">
      <div className="img">
        {/* <img src={process.env.PUBLIC_URL + `/Images/${cardData.image}`} alt="Image" className="cardImage" /> */}
        <img src={cardData.image} alt="Image" className="cardImage" />
      </div>
      <div className="belowImage">
        <div className="textBelowImage">
          <p>{formatDate(cardData.date)}</p>
          <p>{cardData.readingTime}</p>
        </div>
        <div className="title">
          <h3>{cardData.title}</h3>
        </div>
        <div className="description">
          <p>{cardData.description}</p>
        </div>
        <hr />
        <div className="reactions">
          <div className="hands">
            <button data-testid="testClapButton" className="claps" disabled={disabled} onClick={handleClaps}>
              <img src={process.env.PUBLIC_URL + '/Icons/clapping.svg'} alt="image" />
            </button>
            <p data-testid="claps">{claps}</p>
          </div>
          <div className="heart">
            <button data-testid="testHeartButton" onClick={handleLike}>
              <img src={process.env.PUBLIC_URL + '/Icons/' + `${_redHeart ? redHeart : blackHeart}`} alt="image" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
