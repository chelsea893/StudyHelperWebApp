
import React, {useState, useEffect} from 'react';
import Note from "./Note";
import AddNote from "./AddNote";

function NotesList({notes,handleAddNote, handleDeleteNote}){
    return(
        <div className="noteList">
        {notes.map((note)=>  <Note id ={note.id}text={note.text} time={note.time} date={note.date} handleDeleteNote={handleDeleteNote}/>)}
        <AddNote handleAddNote={handleAddNote}/>
           
        </div>
    )
}
export default NotesList;