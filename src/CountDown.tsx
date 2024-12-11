import  { useEffect, useRef, useState } from 'react'

function CountDown() {
    const startTime = useRef(0);
    const [time, setTime] = useState(0);
    const [isRuning, setRunning] = useState(false);
    useEffect(() => {
      if (time === 0 || !isRuning) return;
      const interval = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
      return () => clearTimeout(interval);
    }, [time, isRuning]);
    const formatTime = (sec:number) => {
      const hours = Math.floor(sec / 3600);
      const minutes = Math.floor((sec % 3600) / 60);
      const seconds = sec % 60;
      return `${hours}:${minutes < 10 ? '0' + minutes : minutes}:${
        seconds < 10 ? '0' + seconds : seconds
      }`;
    };
    return (
      <div>
        
        <h1>time is: {time === 0 ? ' over' : formatTime(time)}</h1>
        <div style={{display:'grid'}}>
        <input
          value={startTime.current}
          placeholder="enter minuts+"
          onChange={(e) => {
            const min = Number(e.target.value);
            setTime(min * 60);
            startTime.current = min;
          }}
        />
        <div>
        <button onClick={() => setRunning(!isRuning)}>
          {isRuning ? 'pause' : 'play'}
        </button>
        <button
        style={{margin:10}}
          onClick={() => {
            setTime(startTime.current * 60);
          }}
        >
          reset
        </button>
        </div>
      </div>
        </div>
    );
}

export default CountDown
