import React, {useState} from "react";
import ToDoItem from "./ToDoItem";
function Input(props){
    const [inputText, setInputText] = useState("");
    const charecterLimit = 70;
    

    function handleChange(event) {
      const newValue = event.target.value;
      if(charecterLimit-newValue.length >= 0){
        setInputText(newValue);
      }      
    }
    
    function handleClick(){
        props.updateList(prevItems => {
         
            return [...prevItems, inputText];
          
          });
          setInputText("");

          
            
    }
   
  
    return (
      <div className={props.styleClassName}>
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={handleClick}>
          <span>+</span>
          
        </button>
        <div className="note-footer">
                <small>{charecterLimit-inputText.length} Charecters left</small>
        </div>
      </div>
    );
  }
export default Input;
