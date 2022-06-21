import React from 'react';
import './Card.scss';
import { CardProps } from '../../interfaces/data';
import ArticleCard from './ArticleCard/ArticleCard';

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
      {}
    </>
  );
}
