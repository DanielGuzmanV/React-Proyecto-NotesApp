import './NoteCard.css'

function NoteCards(props) {
  return (

    <article className="note-card">
      <input 
        type="text" 
        className="card-title" 
        value={props.note.title} 
      />
      <input 
        type="checkbox" 
        checked={props.note.marked}
      />
    </article>
    
  )
}

export default NoteCards