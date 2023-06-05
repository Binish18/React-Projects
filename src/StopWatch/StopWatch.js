import React, { useEffect, useState } from 'react'

const StopWatch = () => {
    const [time, setTime] = useState(0); // time set kar raha
  const [running, setRunning] = useState(false);  //
  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  return (
    <>
      <div className="container">
      <h1>Timer</h1>
      <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span> 
      {/* rounds down a given number to the nearest integer time/6000 converts milliseconds to mins % 60 gives remainder of 
       minutes divided by 60 which gives number remaing minutes after full hours .slice takes last two
       characters which ensures that mins and secs are represented by two digits eig 05 instead of 5  */}
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      <div className='mt-2'>
      <button onClick={() => setRunning(true)}>Start</button>
        <button onClick={() => setRunning(false)}>Stop</button>
        <button onClick={() => setTime(0)}>Reset</button>    
      </div>
    </div>

    </>
  )
}

export default StopWatch
