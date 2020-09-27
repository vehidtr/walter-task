import { GET_ALL_NEWS } from '../actions/news.action';

export const newsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_ALL_NEWS:
      fetch(
        'https://newsapi.org/v2/top-headlines?country=us&apiKey=11015151f2f74ee19cd09ad87aa849ca'
      )
        .then((res) => res.json())
        .then((data) => {
          action.payload.news = data.articles;
          next(action);
        })
        .catch((error) => console.log(error));
      break;
    default:
      next(action);
  }
};
