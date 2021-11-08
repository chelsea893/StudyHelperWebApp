
import React, {useState, useEffect} from 'react';
import {nanoid} from 'nanoid';
import Input from "./Input";
import Count from "./Count";
import Popup from "./Popup";
import NotesList from "./NotesList";
import { NavigateNextOutlined, NoteTwoTone, TurnedInOutlined } from '@material-ui/icons';
import WaterBreak from "./WaterBreak";
import { transpileModule } from 'typescript';
import Search from "./Search";
import ToDoItem from './ToDoItem';
import Background from "./IMG_0854.PNG";


function App() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [timer, setTimer] = useState(false);
  const [reminder, setReminder] = useState(false);
  const [notesPop, setNotesPop] = useState(false);
  const [notes, setNotes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [todo, setTodo] = useState(false);
  const [listOf, updateList] = useState([]);
  
  useEffect(() => {
    import("image-map-resizer").then((module) => module.default());
  }, []);

  useEffect(()=>{
    const savedNotes = JSON.parse(localStorage.getItem('react-note-app-data'));

    if(savedNotes){
      setNotes(savedNotes);
    }
  },[]);

  useEffect(()=>{
    localStorage.setItem('react-note-app-data', JSON.stringify(notes));
  },[notes]);

  useEffect(()=>{
    const savedReminder = JSON.parse(localStorage.getItem('react-water-app-data'));

    if(savedReminder){
      setReminder(savedReminder);
    }
  },[]);

  useEffect(()=>{
    localStorage.setItem('react-water-app-data', JSON.stringify(reminder));
  },[reminder]);

  useEffect(()=>{
    const savedTodo = JSON.parse(localStorage.getItem('react-todolist-data'));

    if(savedTodo){
      updateList(savedTodo);
    }
  },[]);

  useEffect(()=>{
    localStorage.setItem('react-todolist-data', JSON.stringify(listOf));
  },[listOf]);

  function addNote(textOf){
    const date = new Date();
    const newNote = {
      text: textOf,
      date:date.toLocaleDateString(),
      time:date.toLocaleTimeString(),
      id:nanoid()
    }
    const newNotes=[...notes, newNote];
    setNotes(newNotes);
  };

  function deleteNote(id){
    const newNotes = notes.filter((note)=> note.id != id);
    setNotes(newNotes);
  }
  function deleteItem(id) {
    updateList(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }
  

 
  return (
    
    <div>
      <img src={Background} id="physicalimage" usemap="#image-map"/>

      <map name="image-map">
      <div className="Heading">
      
        <area target="" onClick={()=> setTimer(true)} alt="bpleft" title="bpleft"  coords="1360,502,1050,687" shape="rect" />
        <Count buttonPopup={timer} setButtonPopup={setTimer}/>
        <h1>To Do List</h1>
        <div>
        <Input updateList={updateList} styleClassName="form"/>
        <ul>
          {listOf.map((todoItem, index) => (
              <ToDoItem delete={deleteItem} key={index} id={index} text={todoItem}></ToDoItem> 
                    
            ))}
          </ul>
        </div>
  

      </div>
      <button onClick ={()=> setNotesPop(true)}>open</button>
      <area target="" onClick ={()=> setNotesPop(true)} alt="bpleft" title="bpleft"  coords="797,417,419,415,424,695,456,710,456,756,512,758,522,654,792,656,789,558,787,492" shape="poly" />
      <Popup trigger={notesPop} setTrigger={setNotesPop}>
        <h1>Notes</h1>
        <Search handleSearchNote ={setSearchText}/>
        <NotesList notes={notes.filter((note)=> note.text.toLowerCase().includes(searchText))} handleAddNote ={addNote} handleDeleteNote={deleteNote}/>
        
      </Popup>
      <area target="" onClick={()=> setTodo(true)} alt="bpleft" title="bpleft"  coords="802,470,1004,731" shape="rect" />
      <Popup trigger={todo} setTrigger={setTodo}>
          
        <h1>To Do List</h1>
        
        <div className="container">
        <Input updateList={updateList} styleClassName="popupTodo"/>
        <div>
        <ul>
          
          {
            listOf.map((todoItem, index) => (
              <ToDoItem toDo={todo} delete={deleteItem} key={index} id={index} text={todoItem}></ToDoItem>          
            ))}
            
          </ul>
        </div>

        </div>
        
      </Popup>
      
      <area target="" onClick={()=> setButtonPopup(true)} alt="bpleft" title="bpleft"  coords="1567,1070,1348,897" shape="rect" />
      
      <button onClick ={()=> setButtonPopup(true)}>open</button>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <div className="waterReminder">
          <h1>Turn on reminder for waterbreaks? </h1>
          <label class="switch"> 
            <input type="checkbox" onChange={(event)=>{
              let checkedEvent = event.target.checked;
              setReminder(checkedEvent);}} checked={reminder}></input>
    
            
            <span class="slider round"></span>
            
          </label>

        </div>
      </Popup>
      {(() => {
        if (reminder) {
          return (
            <WaterBreak/>
          )
        }
      })()}  
      </map>
    </div>
  );
}

export default App;