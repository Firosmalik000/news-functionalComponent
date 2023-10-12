import axios from 'axios';

export const getNews = (callback) => {
  axios
    .get('https://newsapi.org/v2/top-headlines?country=id&apiKey=b1fcac5f23714f5ab2582ce347bbff75&i=google-news')
    .then((res) => {
      callback(res.data.articles);
    })
    .catch((err) => {
      console.log(err);
    });
};
