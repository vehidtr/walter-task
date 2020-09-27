import * as actions from '../actions/news.action';
const initialState = [];

export const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_ALL_NEWS:
      return { news: action.payload.news };
    default:
      return state;
  }
};
