import React from 'react';
import './NewsCard.css';
import { useHistory } from 'react-router-dom';

export const NewsCard = ({ article, id }) => {
  const history = useHistory();
  const handleClick = () => {
    history.push('/article/' + id);
  };

  return (
    <div className='Card'>
      <header>
        <img
          src='/images/article-black-18dp.svg'
          alt='news-icon'
          className='news-icon'
        />
        {article.source.name}
      </header>
      <img
        src={article.urlToImage ? article.urlToImage : '/images/no-image.png'}
        alt='news'
        className='news-preview-img'
      />
      <p className='card-title'>{article.title}</p>
      <div className='author'>
        <div className='author-icon'>
          <img src='/images/person-black-18dp.svg' alt='user icon' />
        </div>
        <div className='author-name'>
          <p>{article?.author ? article.author : '~'}</p>
          <em>Source: {article.source?.name ? article.source.name : '~'}</em>
        </div>
      </div>
      <div className='Card-description'>
        {article?.description
          ? article?.description && article?.description.length > 82
            ? article.description.substring(0, 79) + '...'
            : article.description
          : 'No description...'}
      </div>
      <input
        className='Card-submit-btn'
        type='button'
        value='READ FULL ARTICLE'
        onClick={handleClick}
      />
    </div>
  );
};
