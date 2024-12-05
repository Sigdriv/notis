import type { Note } from "../../types";

export const initialNoteState: Note = {
  id: "",
  title: "",
  note: "",
  tags: [],
  createdAt: new Date().toISOString(),
  lastModified: new Date().toISOString(),
};
