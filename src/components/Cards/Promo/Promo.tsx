import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CardProps } from '../../../interfaces/data';
import backgroundImage from '../../../assets/promo-background.svg';
import promoImage from '../../../assets/shirt-promo.png';
import './Promo.scss';

function Promo({ title, url }: CardProps) {
  const navigate = useNavigate();
  const onKeyPressHandler = (e: { keyCode: number }) => {
    if (e.keyCode === 13) {
      navigate(url);
    }
  };
  return (
    <article
      className="promo__container"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        minHeight: '100%',
        minWidth: '100%',
      }}
    >
      <div
        role="link"
        onClick={() => navigate(url)}
        tabIndex={0}
        onKeyPress={onKeyPressHandler}
      >
        <div className="image__container">
          <img src={promoImage} alt="promo" className="promo__image" />
        </div>
        <h6>AVAILABLE NOW</h6>
        <h4>{title}</h4>
      </div>
    </article>
  );
}

export default Promo;
