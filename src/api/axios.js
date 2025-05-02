import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://api.themoviedb.org/3/',
  params: {
    api_key: '73f222409371e4cb51dfd081fe45a9d0',
    language: 'ko-KR',
  },
});

export default instance;
