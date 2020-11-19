// modules
import React from 'react'

const Note = ({notes}) =>    
    notes.map(note => 
        <div key={note.key} className="note">
            <h1>{note.title}</h1>
            <p>{note.content}</p>
        </div>
    )

export default Note;