import { useState, useEffect } from 'react';
import '../App.css';

import ReactPlayer from 'react-player';
function Timer(props) {

    
    const [timeLeft, setTimeLeft] = useState(props.time);
    const [isActive, setIsActive] = useState(false);
  
    // starts counting down
    function startTimer() {
      setIsActive(true);
      // playAudio();
    }
  
    // pauses the timer
    function pauseTimer() {
      setIsActive(false);
      // pauseAudio();
    }
  
    // formats the time and minutes to mimic a digital clock
    function timeify(time) {
      return (time < 10 ? '0' + time : time)
    } 
  
    // decrements timer every second
    useEffect(() => {
      
      // if timer is running
      if (isActive) {
        if (!timeLeft) {
            
            alert("Time is Up!");
            setIsActive(false); // pause counting down
            return;
        }
        const intervalId = setInterval(() => {
            if (timeLeft > 0) {
                setTimeLeft(timeLeft-1);
            }
        }, 1000); 
        return (()=> clearInterval(intervalId));
      } else {
        // setTimeLeft(props.time);
      }
    }, [timeLeft, isActive, props.time]);
  
    //
    useEffect(() => {
        setTimeLeft(props.time);
        
        pauseTimer();
    }, [props.time])

    return(
        <div className="timer-container">
        <h1 className="timer">{timeify(Math.floor(timeLeft/60))}:{timeify(timeLeft%60)}</h1>
        <button className={isActive ? "btn-clicked" : "btn"} onClick={isActive ? pauseTimer : startTimer}>   {isActive ? "Pause" : "Start"}
        </button>

        
      </div>
    )
}

export default Timer;