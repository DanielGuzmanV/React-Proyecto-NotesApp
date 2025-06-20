import { createContext, useState } from "react";

const NoteContext = createContext();
const API_URL = 'https://ca091376fa0129e65743.free.beeceptor.com/api/notes/';

function NoteProviderWrapper(props) {
  const [noteList, setNotes] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  // Realizamos la peticion a la API
  const getNotes = async () => {
    try {
      const response = await fetch(API_URL);
      const date = await response.json();
      setNotes(date.reverse());
      setHasError(false);
      setHasLoaded(true);

    } catch (error) {
      console.log(error);
      setHasError(true);
    }
  }
  // =========================================

  // Actualizamos el dato de una nota:
  const updateNote = (valueNote) => {
    const newNotes= noteList.map(objectNote => {
      if(objectNote.id !== valueNote.id) return objectNote;
      return valueNote
    })
    setNotes(newNotes);
  }
  //===========================================
  
  // Agregar nuevas notas:
  const addNewNotes = async (addNote) => {
    try {
      await fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(addNote)
      })
      setNotes([addNote, ...noteList]);

    } catch (error) {
      console.log(error);
    }
  }
  //===========================================

  return (
    <NoteContext.Provider value={{noteList, hasError, hasLoaded, getNotes, setNotes, addNewNotes, updateNote}}>
      {props.children}
    </NoteContext.Provider>
  )
}

export {NoteContext};
export default NoteProviderWrapper;
