function NoteCards(props) {
  return (

    <article>
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