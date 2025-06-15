import { useContext } from "react"
import NoteCards from "../components/NoteCards";
import { NoteContext } from "../context/notecontext";

function NotePage() {
  const {notes} = useContext(NoteContext);

  const valueNoteCards = notes.map(valueNotes => {
    return(
      <li key={valueNotes.id}>
        <NoteCards note={valueNotes}/>
      </li>
    )
  })

  return (
    <div style={{
      textAlign: 'center'
    }}>
      <h2>Notes</h2>

      <ul className="note-list">
        {valueNoteCards}
      </ul>
    </div>
  )
}

export default NotePage