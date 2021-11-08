import React, {useState, useEffect} from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

function Note({id, text, date, time, handleDeleteNote}) {
    return(
        <div className="note">
        <div className="topcorner">
        <small>{time}</small>
        </div>
        <span>{text}</span>
        <div className="note-footer">
            <small>{date}</small>
            
            <DeleteIcon onClick={()=> handleDeleteNote(id)}className="delete-icon"/>
        </div>

        </div>
    )
}

export default Note;
