import { useState } from "react";
import action from "../../assets/action.png";
import drama from "../../assets/drama.png";
import fantasy from "../../assets/fantasy.png";
import fiction from "../../assets/fiction.png";
import horror from "../../assets/horror.png";
import music from "../../assets/music.png";
import romance from "../../assets/romance.png";
import thriller from "../../assets/thriller.png";
import western from "../../assets/western.png";
import MoviesBox from '../../componenets/MoviesBox'
import Chip from "../../componenets/Chip";
import {useNavigate} from 'react-router-dom'
const genres = [
  {
    id: "Action",
    color: "#FF5209",
    image: <img style={{ width: "160px", height: "120px" }} src={action} />,
  },
  {
    id: "Drama",
    color: "#D7A4FF",
    image: <img style={{ width: "160px", height: "120px" }} src={drama} />,
  },
  {
    id: "Fantasy",
    color: " #FF4ADE",
    image: <img style={{ width: "160px", height: "120px" }} src={fantasy} />,
  },
  {
    id: "Fiction",
    color: "#6CD061",
    image: <img style={{ width: "160px", height: "120px" }} src={fiction} />,
  },
  {
    id: "Horror",
    color: "#7358FF",
    image: <img style={{ width: "160px", height: "120px" }} src={horror} />,
  },
  {
    id: "Music",
    color: "#E61E32",
    image: <img style={{ width: "160px", height: "120px" }} src={music} />,
  },
  {
    id: "Romance",
    color: "#11B800",
    image: <img style={{ width: "160px", height: "120px" }} src={romance} />,
  },
  {
    id: "Thriller",
    color: "#84C2FF",
    image: <img style={{ width: "160px", height: "120px" }} src={thriller} />,
  },
  {
    id: "Western",
    color: "#912500",
    image: <img style={{ width: "160px", height: "120px" }} src={western} />,
  },
];

function Index() {
  const [selectedMovies, setSelectedMovies] = useState([]);
  const navigate = useNavigate();
  return (
    <div className="main_full" style={{
      display: 'grid', justifyContent: 'center', alignItems: 'center', width: '100vw',
      height: '100vh', backgroundColor: '#000',
    }}>
      <div style={{


        display: 'grid',
        gridTemplateColumns: '1fr 2fr',
        gap: '200px',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff'
      }}>
        <div
          style={{
            /* display: "flex",
             gap: "12px",
             flexWrap: "wrap",
             marginTop: "12px",
              */
            color: "#fff"
          }}
        >
          <div className="heading">
            <h2>Super App</h2>
            <h1 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '40px' }}>Choose your <br /> entertainment <br /> category</h1>
          </div>
          <div className="chip-div"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '13px'
            }}
          >
            {selectedMovies.map((movie) => (
              <Chip
                key={movie}
                data={movie}
                selectedMovies={selectedMovies}
                setSelectedMovies={setSelectedMovies}

              />
            ))}
            
          </div>
          {selectedMovies.length < 3 ? (
              <p style={{ color: "red" }}>Minimum 3 categories are required</p>
            ) : (
              <></>
            )}
        </div>
        <div className="actionType" style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "12px",
        }}>
          {genres.map((genre) =>
            <MoviesBox
              key={genre.id}
              data={genre}
              selectedMovies={selectedMovies}
              setSelectedMovies={setSelectedMovies}
            />
          )}


        </div>







      </div>
      <button
        style={{
          background: "green",
          padding: "12px",
          borderRadius: "22px",
          width:'150px',
          position:'absolute',
          right:'190px',
          color:'#fff',
        
          bottom:'25px',
          border: "none",
          marginTop: "12px",
        }}
        onClick={() => {
          window.localStorage.setItem(
            "selectedMovies",
            JSON.stringify(selectedMovies)
          );
          navigate("/showcase");
        }}
        disabled={selectedMovies.length < 3}
      >
        Next
      </button>
    </div>
  )
}

export default Index