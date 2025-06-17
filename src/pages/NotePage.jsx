import { useContext } from "react"
import NoteCards from "../components/NoteCards";
import { NoteContext } from "../context/notecontext";
import './NotePage.css'
import CreateNote from "../components/CreateNote";

function NotePage() {
  const {noteList} = useContext(NoteContext);

  const valueNoteCards = noteList.map(valueNotes => {
    return(
      <li key={valueNotes.id}>
        <NoteCards objNotes={valueNotes}/>
      </li>
    )
  })

  return (
    <div>
      <section id="notes-page">
        <h2 className=" title">Lista de notas</h2>

        <ul className="note-list">

          <li><CreateNote/></li>

          {valueNoteCards}
        </ul>
      </section>
    </div>
  )
}

export default NotePage