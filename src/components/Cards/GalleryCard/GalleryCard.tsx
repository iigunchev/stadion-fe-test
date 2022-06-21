import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CardProps } from '../../../interfaces/data';
import galleryIcon from '../../../assets/gallery-icon.svg';
import videoIcon from '../../../assets/video-icon.svg';
import './GalleryCard.scss';
import dateTransform from '../../../utilities/dateTransform';

function GalleryCard({ url, image, title, category, date, type }: CardProps) {
  const navigate = useNavigate();
  const onKeyPressHandler = (e: { keyCode: number }) => {
    if (e.keyCode === 13) {
      navigate(url);
    }
  };
  return (
    <article
      className="gallery__container"
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        minHeight: '100%',
      }}
    >
      <a
        href={url}
        onClick={() => navigate(url)}
        tabIndex={0}
        onKeyPress={onKeyPressHandler}
      >
        <img
          src={type === 'gallery' ? galleryIcon : videoIcon}
          alt={title}
          className="galleryCard__icon"
        />
        <div className="galleryCard__info">
          <div className="galleryCard__category__container">
            <Link to={`/${category}`} className="galleryCard__category">
              {category}
            </Link>
          </div>
          <h3 className="articleCard__title">{title}</h3>
          <span>{dateTransform(date)}</span>
        </div>
      </a>
    </article>
  );
}

export default GalleryCard;
