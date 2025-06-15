import { useContext } from "react"
import NoteCards from "../components/NoteCards";
import { NoteContext } from "../context/notecontext";
import './NotePage.css'

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
    <div>
      <section id="notes-page">
        <h2 className=" title">Lista de notas</h2>
        <ul className="note-list">
          {valueNoteCards}
        </ul>
      </section>
    </div>
  )
}

export default NotePage