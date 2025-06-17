import { useContext } from 'react'
import './NoteCard.css'
import { NoteContext } from '../context/notecontext'

function NoteCards(props) {
  const {objNotes} = props

  const {updateNote} = useContext(NoteContext);

  const handleInput = (event) => {
    const updateValueNote = {
      ...objNotes, 
      title: event.target.value
    };
    updateNote(updateValueNote);
  }

  const handleCheck = (event) => {
    const updateValueNote = {
      ...objNotes, 
      marked: !objNotes.marked
    };
    updateNote(updateValueNote);
  }

  return (
    <article className="note-card">
      <input 
        type="text" 
        className="card-title" 
        value={objNotes.title} 
        onChange={handleInput}
      />
      <input 
        type="checkbox" 
        checked={objNotes.marked}
        onChange={handleCheck}
      />
    </article>
    
  )
}

export default NoteCards