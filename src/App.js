import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Break from './components/Break'
import Session from './components/Session'
import TimeLeft from './components/TimeLeft'

function App() {
const audioElement = useRef(null)
const [ currentSessionType, setCurrentSessionType ] = useState('Work Hard!');
const [ intervalId, setIntervalId ] = useState(null);
const [ sessionLength, setSessionLength ] = useState(1500);
const [ timeLeft, setTimeLeft ] = useState(sessionLength);
const [ breakLength, setBreakLength ] = useState(300);

useEffect(() => {
  setTimeLeft(sessionLength);

  
}, [sessionLength]);

useEffect(() => {
  if(timeLeft === 0) {
    audioElement.current.play()
    if(currentSessionType === 'Work Hard!') {
      setCurrentSessionType('Play Hard!')
      setTimeLeft(breakLength)
      console.log(currentSessionType)
    } else if(currentSessionType === 'Play Hard!'){
      setCurrentSessionType('Work Hard!')
      setTimeLeft(sessionLength)
      console.log(currentSessionType)
      //return sessionLength;
      }
  }
}, [breakLength, currentSessionType, sessionLength, timeLeft]);


const decrementBreakLength = () => {
        const newBreakLength = breakLength - 60
if (newBreakLength > 0) {
  setBreakLength(newBreakLength)
}

    };

const incrementBreakLength = () => {
    const newBreakLength = breakLength + 60
    if(newBreakLength <= 60 * 60){
      setBreakLength(newBreakLength); 
    }
        
    }

const decrementSession = () => {
    //setBreakLength(breakLength + 60)  
   const newSessionLength = sessionLength - 60
if (newSessionLength > 0) {
  setSessionLength(newSessionLength);
}

}

const incrementSession = () => {
    const newSessionLength = sessionLength + 60;
    if(newSessionLength <= 60 * 60){
      setSessionLength(sessionLength + 60)
    }
}


const isStarted = intervalId !== null;
const handleStartStopClick = () => {
   if(isStarted){
       clearInterval(intervalId);
       setIntervalId(null);
   } else{

    const newIntervalId = setInterval(() => {
           setTimeLeft(prevTimeLeft => prevTimeLeft - 1);
       }, 100);
       setIntervalId(newIntervalId);
   }
};


const handleResetButtonClick = () => {
  audioElement.current.load();
  clearInterval(intervalId);
  setIntervalId(null);
  setCurrentSessionType('Work Hard!')
  setSessionLength(60 * 25)
  setBreakLength(60 * 5)
  setTimeLeft(60 * 25)
}
  return (
    <div className="App">
  
     <Break 
     breakLength = {breakLength}
     incrementBreakLength = {incrementBreakLength}
     decrementBreakLength = {decrementBreakLength}

     />
        <TimeLeft
        timerLabel = {currentSessionType}
        handleStartStopClick = {handleStartStopClick}
        startStopButtonLabel = {isStarted ? 'Stop' : 'Start'}
        timeLeft = {timeLeft}
        />
     <Session
     sessionLength = {sessionLength}
     decrementSessionLength = {decrementSession}
     incrementSessionLength = {incrementSession}
   
     />
    <button id="reset" onClick={handleResetButtonClick}>Reset</button>
    
    <audio id="beep" ref={audioElement}>
      <source src="https://onlineclock.net/audio/options/default.mp3" type="audio/mpeg" />
    </audio>

    </div>
  );
}

export default App;
