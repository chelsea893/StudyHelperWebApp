import React, {useState} from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import { textSpanEnd } from "typescript";

function ToDoItem(props) {
  const [isClicked, clicked] = useState(false);
  const displayedList = props.text.substring(0,12) + "...";
  const text =  props.text;
  function handleClick(){
    clicked(prevValue => {
      if (prevValue === false){
        return true;
      }else if(prevValue == true){
        return false;
      }
    });
  }

  return (
    <div className="listStyle">
    <DeleteIcon onClick={() => {
        props.delete(props.id);
      }}></DeleteIcon>
     <span>
     
     <li onClick={handleClick} style={{textDecoration: isClicked? "line-through": "none"}}>{props.toDo? text: displayedList}</li>
     </span>
    
    
    </div>
  
  );
}

export default ToDoItem;
