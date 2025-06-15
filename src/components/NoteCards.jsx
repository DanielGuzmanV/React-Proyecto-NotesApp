import { useContext } from 'react'
import './NoteCard.css'
import { NoteContext } from '../context/notecontext'

function NoteCards(props) {
  const {note} = props

  const {updateNote} = useContext(NoteContext);

  const handleInput = (event) => {
    const updateValueNote = {
      ...note, 
      title: event.target.value
    };
    updateNote(updateValueNote);
  }

  const handleCheck = (event) => {
    const updateValueNote = {
      ...note, 
      marked: !note.marked
    };

    updateNote(updateValueNote);
  }

  return (
    <article className="note-card">
      <input 
        type="text" 
        className="card-title" 
        value={note.title} 
        onChange={handleInput}
      />
      <input 
        type="checkbox" 
        checked={note.marked}
        onChange={handleCheck}
      />
    </article>
    
  )
}

export default NoteCards