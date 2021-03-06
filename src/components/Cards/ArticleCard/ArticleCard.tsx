import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CardProps } from '../../../interfaces/data';
import dateTransform from '../../../utilities/dateTransform';
import './ArticleCard.scss';

function ArticleCard({ url, image, title, category, date }: CardProps) {
  const navigate = useNavigate();
  const onKeyPressHandler = (e: { keyCode: number }) => {
    if (e.keyCode === 13) {
      navigate(url);
    }
  };
  return (
    <article className="card__container">
      <a href={url} tabIndex={0} onKeyPress={onKeyPressHandler}>
        <img src={image} alt="" className="articleCard__image" />
        <div className="articleCard__category__container">
          <Link to={`/${category}`} className="articleCard__category">
            {category}
          </Link>
        </div>
        <h3 className="articleCard__title">{title}</h3>
        <span>{dateTransform(date)}</span>
      </a>
    </article>
  );
}

export default ArticleCard;
