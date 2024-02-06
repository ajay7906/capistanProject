// api.js
import axios from 'axios';

const apiKey = '5e156a57'; // Replace with your OMDB API key 
//https://www.omdbapi.com/?apikey=5e156a57&s=Music
//https://www.omdbapi.com/?i=tt3896198&apikey=5e156a57&s=Music
const getMoviesByGenre = async (title) => {
  try {
    const apiUrl = `https://www.omdbapi.com/?apikey=${apiKey}&s=${title}`;
    const response = await axios.get(apiUrl);
    console.log(response);
    return response.data.Search || [];
  } catch (error) {
    console.error('Error fetching movies:', error);
    return [];
  }
};

export default getMoviesByGenre;
