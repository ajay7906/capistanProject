// api.js
import axios from 'axios';

const apiKey = '3ec5e9abe17f4ec6b4cc8c180814f7e1'; 

const getNews = async () => {
  try {
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
    const response = await axios.get(apiUrl);
    return response.data.articles;
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
};

export default getNews;
