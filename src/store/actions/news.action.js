export const NEWS = '[News]';
export const GET_ALL_NEWS = `${NEWS} GET`;

export const getNews = () => {
  return { type: GET_ALL_NEWS, payload: { news: [] } };
};
