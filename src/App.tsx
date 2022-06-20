import React from 'react';
import './App.scss';
import ArticleCard from './components/Cards/ArticleCard/ArticleCard';
import FeaturedCard from './components/Cards/FeaturedCard/FeaturedCard';
import Grid from './components/Layout';

function App() {
  return (
    <div className="App">
      <main className="main__container">
        <FeaturedCard />
        <Grid>
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
        </Grid>
      </main>
    </div>
  );
}

export default App;
