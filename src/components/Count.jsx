import React, {useState, useEffect} from "react";
import Popup from "./Popup";
import Background from "./IMG_0854.PNG";
import $ from 'jquery';

function Count(props){

    const [studyMinutes, setStudyMinutes] = useState(25);
    const [breakMinutes, setBreakMinutes] = useState(5);
    const [studyPopup, setstudyPopup] = useState(false);
    const [breakPopup, setBreakPopup] =useState(false);
    const [minutes, setMinutes] = React.useState(studyMinutes);
    const [seconds, setSeconds] = React.useState(0);
    const [start, setStart] = React.useState(false);
    const [rounds, setRounds] = React.useState(2);
    const [currentIntervalTime, setCurrentInterval] = React.useState(25);

    const alarm = new Audio("Alarm clock_3.m4a")
    
    useEffect(() => {
        import("image-map-resizer").then((module) => module.default());
      }, []);

    
  

    function increase(){
        setMinutes(minutes + 1);
    }
    
    function decrease(){
        
        
        setMinutes(minutes - 1);
    }
    function startTimer(){
      setStart(true);
    }
    function stopTimer(){
        setStart(false);
    }
    function resetTimer(){
        setStart(false);
        setMinutes(currentIntervalTime);
        setSeconds(0);
       
    }
   
    useEffect(() => {
    if (start){
        const interval = setInterval(() => {
            if (seconds > 0){
                setSeconds(seconds-1);
            }
            if(minutes > 0 && seconds === 0){
                setMinutes(minutes - 1);
                setSeconds(59);
            }
            if (seconds === 0 && minutes === 0){
                setStart(false);
                setRounds(rounds + 1);
                alarm.play();
                if (rounds % 8 === 0){
                    setMinutes(15);
                    setBreakPopup(true);
                    setCurrentInterval(15);
                }else if (rounds % 3 === 0){
                        setstudyPopup(true);
                        setMinutes(25);
                        setCurrentInterval(25); // study time
                    }else if (rounds % 3 != 0 && rounds % 6 != 0){
                        setBreakPopup(true);
                        setMinutes(5);
                        setCurrentInterval(5); // break time
                    }   
                
            }   
        }, 1000);
    
        return () => {
          clearInterval(interval);
        };
    }
      });
   
   

  

    return(
        <div>
        
        
       
        <Popup trigger={props.buttonPopup} setTrigger={props.setButtonPopup}>
        <div className="timerContainer">
        <h1>Rounds: {rounds -2}</h1>
       
            <h1>Minutes: </h1> 
           
            
            
        <div className="counter">

            <button className="increase" onClick={increase}>+</button>
            <h1 className="minutes">{minutes}</h1>
            <button className="decrease" onClick={minutes > 0? decrease:""}>-</button>
        
   
      <button onClick={stopTimer}>stop</button>
    <button onClick={startTimer}>start</button>
    <button onClick={resetTimer}>reset</button>
      </div>
      
      
      </div>  
        </Popup>
            <h1 className="time">{minutes}:{ seconds < 10 ? `0${seconds }` : seconds}</h1>
            
              
            <Popup trigger={studyPopup} setTrigger={setstudyPopup}>
                    <h1>Time to study!</h1>
                    </Popup>   
        <Popup trigger={breakPopup} setTrigger={setBreakPopup}>
        <h1>Time to to take a break!</h1>
        </Popup> 
        </div>
        
    );

}
export default Count;