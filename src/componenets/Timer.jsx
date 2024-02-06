
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import 'react-circular-progressbar/dist/styles.css';
import Increament from '../assets/up.png';
import Decreament from '../assets/down.png'
import { useEffect, useRef, useState } from 'react';
function Timer() {


  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [countdownDuration, setCountdownDuration] = useState(0);
  const [countdownKey, setCountdownKey] = useState(0);
  const countdownRef = useRef(null);





  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => {
          const updatedTime = { ...prevTime };

          if (updatedTime.seconds === 0) {
            if (updatedTime.minutes === 0) {
              if (updatedTime.hours === 0) {
                // If all time is exhausted, pause the timer
                setIsRunning(false);
                clearInterval(interval);
                return updatedTime;
              }
              updatedTime.hours -= 1;
              updatedTime.minutes = 59;
            } else {
              updatedTime.minutes -= 1;
            }
            updatedTime.seconds = 59;
          } else {
            updatedTime.seconds -= 1;
          }

          let totalSeconds = updatedTime.hours * 3600 + updatedTime.minutes * 60 + updatedTime.seconds;
          setCountdownKey((prevKey) => prevKey + 1);

          setCountdownDuration(totalSeconds);
          return updatedTime;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, countdownDuration]);

  const handleIncrement = (unit) => {
    setTime((prevTime) => {
      const updatedTime = { ...prevTime };
      if (unit === 'seconds') {
        updatedTime.seconds += 1;
        if (updatedTime.seconds === 60) {
          updatedTime.seconds = 0;
          handleIncrement('minutes');
        }
      } else if (unit === 'minutes') {
        updatedTime.minutes += 1;
        if (updatedTime.minutes === 60) {
          updatedTime.minutes = 0;
          handleIncrement('hours');
        }
      } else {
        updatedTime.hours += 1;
      }
      return updatedTime;
    });
  };

  const handleDecrement = (unit) => {
    setTime((prevTime) => {
      const updatedTime = { ...prevTime };
      if (unit === 'seconds') {
        updatedTime.seconds -= 1;
        if (updatedTime.seconds < 0) {
          updatedTime.seconds = 59;
          handleDecrement('minutes');
        }
      } else if (unit === 'minutes') {
        updatedTime.minutes -= 1;
        if (updatedTime.minutes < 0) {
          updatedTime.minutes = 59;
          handleDecrement('hours');
        }
      } else {
        updatedTime.hours -= 1;
        if (updatedTime.hours < 0) {
          updatedTime.hours = 0;  // Prevent negative hours
        }
      }
      return updatedTime;
    });
  };

  const handleStartPause = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
    if (isRunning) {
      setCountdownKey((prevKey) => prevKey + 1); // Reset CountdownCircleTimer on pause
    }
  };
  return (
    <>
      <div
        style={{
          background: '#1E2343',
          width: '58vw',
          height: '23vh',
          borderRadius: '20px'
        }}
      >
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 2fr ',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          padding: '12px 20px 20px 30px',
          gap: '30px',
          color: 'white'
        }}>
          <div style={{
            width: '57%', height: '100%', borderRadius: '100%', background: '#191E39',
            padding: '10px', boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.5);'
          }}  >
            {
              <CountdownCircleTimer
              key={countdownKey}
                ref={countdownRef}
                isPlaying={isRunning}
                duration={time.hours*3600 + time.minutes*60 + time.seconds}

                size={115}
                colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                colorsTime={[7, 5, 2, 0]}
                strokeWidth={6}
              >
                {({ remainingTime }) => {
                  const hours = Math.floor(remainingTime / 3600)
                  const minutes = Math.floor((remainingTime % 3600) / 60)
                  const seconds = remainingTime % 60

                  return `${hours}:${minutes}:${seconds}`
                }}
              </CountdownCircleTimer>

            }


          </div>
          <div style={{


          }}>
            <div className="mints" style={{ display: 'flex', marginTop: '-18px', gap: '130px' }}>
              <p>Hours</p>
              <p>Minutes</p>
              <p>Second</p>

            </div>
            <div className="timer-min" style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr'
            }}>
              <div className="hours" style={{ marginTop: '-10px' }}>
                <img src={Increament} width={20} alt="" onClick={() => handleIncrement('hours')} />
                <p style={{ marginTop: '-3px', marginBottom: '-3px', marginLeft: '-4px', fontSize: '23px' }}>{String(time.hours).padStart(2, '0')}</p>
                <img src={Decreament} width={20} alt="" onClick={() => handleDecrement('hours')} />
              </div>
              <div>
                <p>:</p>
              </div>
              <div className="min" style={{ marginTop: '-10px' }}>
                <img src={Increament} width={20} alt="" onClick={() => handleIncrement('minutes')} />
                <p style={{ marginTop: '-3px', marginBottom: '-3px', marginLeft: '-4px', fontSize: '23px' }}>{String(time.minutes).padStart(2, '0')}</p>
                <img src={Decreament} width={20} alt="" onClick={() => handleDecrement('minutes')} />
              </div>
              <div>
                <p>:</p>
              </div>
              <div className="sec" style={{ marginTop: '-10px' }}>
                <img src={Increament} width={20} alt="" onClick={() => handleIncrement('seconds')} />
                <p style={{ marginTop: '-3px', marginBottom: '-3px', marginLeft: '-4px', fontSize: '23px' }}>{String(time.seconds).padStart(2, '0')}</p>
                <img src={Decreament} width={20} alt="" onClick={() => handleDecrement('seconds')} />
              </div>


            </div>
            <div className="button">
              <button style={{
                background: '#FF6A6A', width: '90%',
                border: 'none',
                height: '25px',
                marginTop: '10px',
                color: '#fff',
                fontFamily: "'DM Sans', sans-serif",
                borderRadius: '20px',


              }} onClick={handleStartPause} >{isRunning ? 'Pause' : 'Start'}</button>
            </div>
          </div>
        </div>


      </div>
      
    </>

  )
}

export default Timer



