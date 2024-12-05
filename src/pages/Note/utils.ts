import { getFromLocalStorage, setToLocalStorage } from "../../helperFunctions";
import type { Note } from "../../types";

export const getCurrentNote = (noteId: string): Note => {
  const notes = getFromLocalStorage("notes");
  return notes.find((n: Note) => n.id === noteId);
};

export const updateNote = (note: Note) => {
  const allNotes: Note[] = getFromLocalStorage("notes");
  const updatedNotes = allNotes.map((n) => (n.id === note.id ? note : n));
  setToLocalStorage("notes", updatedNotes);
};

export const deleteNote = (noteId: string) => {
  const allNotes: Note[] = getFromLocalStorage("notes");
  const updatedNotes = allNotes.filter((n) => n.id !== noteId);
  setToLocalStorage("notes", updatedNotes);
};
