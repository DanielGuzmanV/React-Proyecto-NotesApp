import { createContext, useState } from "react";

const NoteContext = createContext();

function NoteProviderWrapper(props) {
// Lista de notas
  const objListNotes = [
    {
      id: 1,
      title: 'Aprender React',
      marked: false
    },
    {
      id: 2,
      title: 'Aprender Javascript',
      marked: false
    },
    {
      id: 3,
      title: 'Aprender Typescript',
      marked: false
    },
    {
      id: 4,
      title: 'Aprender node.js',
      marked: false
    },
  ]

  const [noteList, setNotes] = useState(objListNotes);

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
  const addNewNotes = (addNote) => {
    setNotes([addNote, ...noteList]);
  }
  //===========================================

  return (
    <NoteContext.Provider value={{noteList, setNotes, addNewNotes, updateNote}}>
      {props.children}
    </NoteContext.Provider>
  )
}

export {NoteContext};
export default NoteProviderWrapper;
