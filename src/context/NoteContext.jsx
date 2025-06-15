import { createContext, useState } from "react";

const NoteContext = createContext();

function NoteProviderWrapper(props) {
// Lista de notas
  const noteList = [
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

  const [notes, setNotes] = useState(noteList);

  // Actualizamos una nota:
  const updateNote = (valueNote) => {
    const newNotes= notes.map(note => {
      if(note.id !== valueNote.id) return note;
      return valueNote
    })
    setNotes(newNotes);
  }

  const addNewNotes = (addNote) => {
    setNotes([addNote, ...notes]);
  }

  return (
    <NoteContext.Provider value={{notes, setNotes, updateNote}}>
      {props.children}
    </NoteContext.Provider>
  )
}

export {NoteContext};
export default NoteProviderWrapper;
