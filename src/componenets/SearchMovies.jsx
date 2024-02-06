// MovieList.jsx
import  { useState, useEffect, useRef } from 'react';
import getMoviesByGenre from '../api/Movies';
import ProfileImg from '../assets/profileBig.png'
import './compoStyle/MovieList.css'; // Import the CSS file for styling

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const moviesContainerRef = useRef(null);

  useEffect(() => {
    const storedGenres = JSON.parse(localStorage.getItem('selectedMovies')) || [];
    if (storedGenres.length > 0) {
      setGenres(storedGenres);
      fetchMoviesForGenres(storedGenres);
    }
  }, []);

  const fetchMoviesForGenres = async (selectedGenres) => {
    const allMovies = [];

    for (const genre of selectedGenres) {
      const moviesData = await getMoviesByGenre(genre);
      allMovies.push({ genre, movies: moviesData });
    }

    setMovies(allMovies);
  };

  const scrollLeft = () => {
    if (moviesContainerRef.current) {
      moviesContainerRef.current.scrollLeft -= 150; // Adjust the scroll distance as needed
    }
  };

  const scrollRight = () => {
    if (moviesContainerRef.current) {
      moviesContainerRef.current.scrollLeft += 150; // Adjust the scroll distance as needed
    }
  };

  return (
    <div style={{background:'#000',
   
    }}>
        <div className="profile-icons heading" style={{display:'flex',paddingTop:'25px', justifyContent:'space-between'}}>
            <h2 style={{paddingLeft:'30px'}}>Super App</h2>
            <img style={{width:'60px', borderRadius:'100%', height:'70px', marginRight:'20px'}} src={ProfileImg} alt="" />
        </div>
      <h3 style={{ margin:'0', color:'#fff', paddingLeft:'30px',
    padding:'0'}}>Entertainment according to your choice</h3>
      {movies.map((genreMovies) => (
        <div key={genreMovies.genre}>
             <div className="scroll-buttons">
            <button onClick={scrollLeft}>Scroll Left</button>
            <button onClick={scrollRight}>Scroll Right</button>
          </div>
          <h2 style={{paddingLeft:'30px'}}>{genreMovies.genre}</h2>
         
          <div className="movie-posters-container" ref={moviesContainerRef}>
            {genreMovies.movies.map((movie) => (
              <img key={movie.imdbID} src={movie.Poster} alt={movie.Title} />
            ))}
          </div>
         
        </div>
      ))}
    </div>
  );
};

export default MovieList;
