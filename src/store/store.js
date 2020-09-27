import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducer/root.reducer';
import { newsMiddleware } from './middleware/news.middleware';

const middlewares = [newsMiddleware];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);
