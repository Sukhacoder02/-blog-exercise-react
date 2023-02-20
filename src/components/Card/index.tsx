import * as React from 'react';
import './Card.css';

interface CardData {
  date: string;
  readingTime: string;
  title: string;
  description: string;
  claps: number;
  image: string;
  liked: boolean;
}

const Card = (cardData: CardData): JSX.Element => {
  const [claps, setClaps] = React.useState(cardData.claps);

  const blackHeart = 'heart-black.svg';
  const redHeart = 'heart-red.svg';
  const [_redHeart, setHeart] = React.useState(cardData.liked ? true : false);
  const [disabled, setDisabled] = React.useState(false);

  return (
    <div className="card">
      <div className="img">
        <img src={process.env.PUBLIC_URL + `/Images/${cardData.image}`} alt="Image" className="cardImage" />
      </div>
      <div className="belowImage">
        <div className="textBelowImage">
          <p>{cardData.date}</p>
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
            <button
              data-testid="testClapButton"
              className="claps"
              disabled={disabled}
              onClick={() => {
                setClaps(claps + 1);
                setDisabled(true);
              }}>
              <img src={process.env.PUBLIC_URL + '/Icons/clapping.svg'} alt="image" />
            </button>
            <p data-testid="claps">{claps}</p>
          </div>
          <div className="heart">
            <button
              data-testid="testHeartButton"
              onClick={() => {
                setHeart(!_redHeart);
              }}>
              <img src={process.env.PUBLIC_URL + '/Icons/' + `${_redHeart ? redHeart : blackHeart}`} alt="image" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
