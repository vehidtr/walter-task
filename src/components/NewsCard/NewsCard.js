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
      <header>{article.source.name}</header>
      <img
        src={article.urlToImage ? article.urlToImage : '/images/no-image.png'}
        alt='news'
      />
      <p className='card-title'>{article.title}</p>
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
