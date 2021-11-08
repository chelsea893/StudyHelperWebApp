
import React, {useState, useEffect} from 'react';
function AddNote({handleAddNote}){
    const [noteText, setNoteText] = useState("");
    const charecterLimit = 200;
    function handleChange(event){
        if(charecterLimit-event.target.value.length >= 0){
            setNoteText(event.target.value);
        }    
    }
    function handleSaveClick(){
        if (noteText.trim().length > 0){
            handleAddNote(noteText);
            setNoteText("");
        }
        
    
        
    };
    return(
        <div className="note new">
            <textarea 
            
            rows="8" 
            cols="10" 
            placeholder="Type to add a note"
            value={noteText}
            onChange={handleChange} ></textarea>
            <div className="note-footer">
                <small>{charecterLimit-noteText.length} Remaining</small>
                <button className="save" onClick={handleSaveClick}>save</button>
            </div>
        </div>
    )
}
export default AddNote;