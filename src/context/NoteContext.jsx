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

  return (
    <NoteContext.Provider value={{notes, setNotes}}>
      {props.children}
    </NoteContext.Provider>
  )
}

export {NoteContext};
export default NoteProviderWrapper;
