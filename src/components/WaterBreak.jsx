import React, {useState, useEffect} from 'react';
import Popup from "./Popup";
const alarm = new Audio("Alarm clock_3.m4a")

function WaterBreak(){
    const [buttonPopup, setButtonPopup] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setButtonPopup(true);
      alarm.play();
    }, 18000);
    return () => clearInterval(interval);
  }, []);

  return(

    <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
    <h1>Take a Water Break!</h1>
    
  </Popup>
  );

}
export default WaterBreak;