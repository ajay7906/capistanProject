import { useNavigate } from "react-router-dom"
import Notes from "../../componenets/Notes"
import ProfileExplain from "../../componenets/ProfileExplain"
import Timer from "../../componenets/Timer"
import UserInfo from "../../componenets/UserInfo"
import Weather from "../../componenets/Weather"
import '../../componenets/compoStyle/register.css'
import { useEffect, useState } from "react";
function ShoCase() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  //fetch data from weather api
  useEffect(() => {
    // setLoading(true);
    //  fetch(
    //    "https://api.tomorrow.io/v4/weather/forecast?location=42.3478,-71.0466&apikey=O6hIIKUOhewW3VNl4A3fPj2skP32Ws3c"
    //  )
    //    .then((res) => res.json())
    //    .then((data) => setWeather(data))
    //    .catch((err) => setError(err))
    //    .finally(() => setLoading(false));
  }, []);
  return (
    <div className="main-profile"
      style={{
        display: 'grid',
        gridTemplateColumns: '2fr 1fr',
        width: '100vw',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#000'

      }}
    >
      <div className="left-profile"
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '25px'
        }}
      >
        <div className="left-upper" style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '25px'
        }}>
          <div className="profile"

          >
            <div className="profile-detailes">
              <UserInfo />
            </div>
            <div className="weather">
              <Weather weather={weather} setWeather={setWeather}
                error={error} setError={setError} loading={loading} setLoading={setLoading}
              />
            </div>
          </div>
          <div className="notes">
            <Notes />
          </div>
        </div>
        <div className="left-lower"
          style={{
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <Timer />
        </div>
      </div>
      <div className="right-profile" style={{ background: '#fff', width: '28vw', height: '87vh', borderRadius: '20px ', }}>
        <ProfileExplain />
        
      </div>
      <button style={{
        position: 'absolute',
        right: '70px',
        bottom: '7px',
        height: '31px',
        background: '#148A08',
        border: 'none',
        width: '120px',
        color: '#fff',
        borderRadius: '20px'
      }}
     onClick={()=>{
      navigate('/movies')
     }}
      >Browse</button>
    </div>
  )
}

export default ShoCase