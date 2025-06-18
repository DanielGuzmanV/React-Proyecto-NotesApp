import { useContext, useEffect } from "react"
import NoteCards from "../components/NoteCards";
import { NoteContext } from "../context/NoteContext";
import './NotePage.css'
import CreateNote from "../components/CreateNote";

function NotePage() {
  const {noteList, getNotes, hasError, hasLoaded} = useContext(NoteContext);

  useEffect(() => {
    getNotes()
  }, [])

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

          { hasError 
            ? (<h2>Ups... ocurrio un error </h2>)
            : !hasLoaded 
            ? (<h2>Cargando datos...</h2>)
            : (valueNoteCards)
          }
        </ul>
      </section>
    </div>
  )
}

export default NotePage