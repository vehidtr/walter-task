import React from 'react';
import { connect } from 'react-redux';
import { NewsCard } from '../../components/NewsCard';
import { getNews } from '../../store/actions/news.action';
import Fuse from 'fuse.js';
import './Home.css';

const Home = ({ articles, getNews, value }) => {
  const options = {
    includeScore: true,
    minMatchCharLength: 3,
    keys: ['title', 'description', 'content'],
  };
  let result = [];
  if (articles) {
    const fuse = new Fuse(articles, options);

    result = value?.length > 3 ? fuse.search(value) : articles;
  }
  React.useEffect(() => {
    getNews();
  }, []);

  return (
    <>
      <div className='header-image'>
        <img src='/images/big-logo.svg' alt='Flash news' />
        <span>
          <h1 className='first-subtitle'>Fastest news</h1>
          <h1 className='second-subtitle'>Best information</h1>
        </span>
      </div>
      {/* <p className='quote'>
        "Good news is rare these days, and every glittering ounce of it should
        be cherished and hoarded and worshipped and fondled like a priceless
        diamond."
        <br /> <b>~Hunter S. Thompson</b>
      </p> */}
      <h3 className='news-header-title'>
        <img src='/images/menu_book-black-18dp.svg' alt='book' />
        Latest news
      </h3>
      {articles
        ? result.map((article, index) => (
            <NewsCard
              key={
                index
              } /* Using index as key since there is no unique values in array, but it's bad practice */
              article={article?.item ? article.item : article}
              id={index}
            />
          ))
        : 'No results for this search...'}
    </>
  );
};

const mapState = (state) => {
  return { articles: state.newsReducer.news };
};
const mapProps = (dispatch) => {
  return {
    getNews: () => {
      dispatch(getNews());
    },
  };
};

export default connect(mapState, mapProps)(Home);
