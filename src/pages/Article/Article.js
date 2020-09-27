import React from 'react';
import './Article.css';
import { connect } from 'react-redux';
import { getNews } from '../../store/actions/news.action';
import { useParams, useHistory } from 'react-router-dom';

const Article = ({ articles, getNews }) => {
  const { id } = useParams();
  const history = useHistory();
  React.useEffect(() => {
    getNews();
  }, []);

  const handleClick = () => {
    history.push('/');
  };

  return (
    <div className='Article'>
      <button onClick={handleClick}>{'< Back'}</button>
      {articles && (
        <>
          <div className='description'>
            <a href={articles[id].url}>{articles[id].title}</a>
            <p>
              <em>Source:</em> <b>{articles[id].source.name}</b>
            </p>
          </div>
          <div className='image'>
            <img
              src={
                articles[id].urlToImage
                  ? articles[id].urlToImage
                  : '/images/no-image.png'
              }
              alt='news'
            />
          </div>
          <p className='text-overlay'>"{articles[id].description}"</p>
          <div className='content'>{articles[id].content}</div>
          <div className='details'>
            <em>{articles[id].publishedAt}</em>
            <p>By: {articles[id].author}</p>
          </div>
        </>
      )}
    </div>
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

export default connect(mapState, mapProps)(Article);
