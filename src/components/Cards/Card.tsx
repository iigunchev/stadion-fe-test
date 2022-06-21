import React from 'react';
import './Card.scss';
import { CardProps } from '../../interfaces/data';
import ArticleCard from './ArticleCard/ArticleCard';
import GalleryCard from './GalleryCard/GalleryCard';
import Promo from './Promo/Promo';

export default function Card({ card }: { card: CardProps }) {
  return (
    <>
      {card.type === 'article' && (
        <ArticleCard
          id={card.id}
          title={card.title}
          url={card.url}
          image={card.image}
          category={card.category}
          date={card.date}
        />
      )}
      {(card.type === 'gallery' || card.type === 'video') && (
        <GalleryCard
          id={card.id}
          title={card.title}
          url={card.url}
          image={card.image}
          category={card.category}
          date={card.date}
        />
      )}
      {card.label === 'promo' && (
        <Promo
          id={card.id}
          title={card.title}
          url={card.url}
        />
      )}
    </>
  );
}
