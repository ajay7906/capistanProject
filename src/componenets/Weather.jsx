import Rain from '../assets/rain.png'
import { CiTempHigh } from "react-icons/ci";
import { FaWind } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
const Weather = ({ weather, setWeather, error, setError, loading, setLoading }) => {
  return (
    <div
      style={{
        width: '30vw',
        height: '20vh',
        backgroundColor: 'red',
        borderRadius: '20px',
        marginTop: '25px'

      }}
    >
      <div className="upper-waether" style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: '30px',
        paddingTop: '15px',
        borderTopLeftRadius: '20px',
        borderTopRightRadius: '20px', background: '#FF4ADE',
        gap: '10px',
        color: '#fff',
        fontSize: '18px'
      }}>
        <p style={{ marginTop: '-1px', }}>2-20-2023</p>
        <p style={{ marginTop: '-1px' }}>07:35 PM</p>

      </div>
      <div className="lower-weather" style={{ display: 'grid',
       gridTemplateColumns:'1fr 1fr 1fr ',
       justifyContent:'center',
      
       alignItems:'center'
        }}>
        <div className="rain" style={{textAlign:'center'}}>
          <img src={Rain} alt="" style={{ width: '40%', marginBottom: '-18px',  }} />
          <p>Heavy Rain</p>
        </div>
 
        <div className="tempreature" style={{ display: 'flex', flexDirection: 'column', textAlign:'center' }}>
          <p style={{ marginBottom: '-14px' }}>24°C</p>
          <div style={{ display: 'flex' }}>
            <p><CiTempHigh /></p>
            <p>1010 Mbr <br />Pressure</p>
          </div>
        </div>
     
        <div className="wind" style={{textAlign:'center', display:'flex', flexDirection:'column', gap:'20px' }}>

          <div className="firstwind" style={{ display: 'flex' }}>
            <p><FaWind /> </p>
            <p>3.7KM/h  Wind</p>

          </div>
          <div className="humidity" style={{ marginTop: '-20px',  display: 'flex' }}>
            <WiHumidity />
            <p style={{ marginTop: '-0px' }}>83%  humidity</p>
          </div>
        </div>
      </div>



    </div>
  )
}

export default Weather