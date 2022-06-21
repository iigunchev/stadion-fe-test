import React from 'react';
import './App.scss';
import Card from './components/Card/Card';
import FeaturedCard from './components/Card/FeaturedCard/FeaturedCard';
import Grid from './components/Layout';
import { CardProps } from './interfaces/data';
import data from './data/mockdata';

function App() {
  return (
    <div className="App">
      <main className="main__container">
        <FeaturedCard />
        <Grid>
          {data
            && data.map((card: CardProps) => <Card key={card.id} card={card} />)}
        </Grid>
      </main>
    </div>
  );
}

export default App;
