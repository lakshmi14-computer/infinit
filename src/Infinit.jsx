import React, { useState, useRef } from 'react';

function Infinit() {
  const [counter, setCounter] = useState(0);
  const intervalRef = useRef(null);

  const startCounting = () => {
    if (intervalRef.current) return; // Prevent multiple intervals
    intervalRef.current = setInterval(() => {
      setCounter(prevCounter => prevCounter + 1);
    }, 1000); // Increment every second
  };

  const stopCounting = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const resetCounter = () => {
    stopCounting();
    setCounter(0);
  };

  return (
    <>
      <div className="container mt-5">
        <h1 className='text-center text-primary'>Counter App</h1>
        <h2 className='text-center'>{counter}</h2>
        <div className='text-center text-primary'>
          <button className='btn btn-success m-3' onClick={startCounting}>Start</button>
          <button className='btn btn-danger m-3' onClick={stopCounting}>Stop</button>
          <button className='btn btn-warning m-3' onClick={resetCounter}>Reset</button>
        </div>
      </div>
    </>
  );
}

export default Infinit;
