import { Box, Button, Stack } from "@mui/material";
import { Header1 } from "../../components/Typography/Header/Header";
import { Text } from "../../components/Typography/Text/Text";
import { useParams } from "react-router-dom";
import type { Note } from "../../types";
import { useEffect, useState } from "react";
import { getFromLocalStorage } from "../../helperFunctions";

export function NotePage() {
  const { noteId } = useParams();
  const [note, setNote] = useState<Note | null>(null);
  const [savedNotes, setSavedNotes] = useState<Note[]>([]);

  useEffect(() => {
    const notes = getFromLocalStorage("notes");

    setSavedNotes(notes);

    const note = notes.find((note: Note) => note.id === noteId);
    setNote(note);
  }, [noteId]);

  const handleNoteChange = (value: string) => {
    if (note) {
      const updatedNote = {
        ...note,
        note: value,
        lastModified: new Date().toISOString(),
      };

      setNote(updatedNote);
    }
  };

  // TODO: Fix saving
  const handleSave = () => {
    console.log("savedNotes", savedNotes);
    console.log("note", note);

    if (note) {
      const updatedNotes = savedNotes.map((n) => (n.id === note.id ? note : n));

      setSavedNotes(updatedNotes);

      localStorage.setItem(`notes`, JSON.stringify(savedNotes));

      console.log("savedNotes success", savedNotes);
    }
  };

  return (
    <Stack>
      <Header1 headerLevel="h1">Notat: {note?.title}</Header1>

      <Stack gap="1rem">
        <textarea
          id={noteId}
          rows={5}
          cols={33}
          autoFocus
          onChange={({ target: { value } }) => handleNoteChange(value)}
          value={note?.note}
        />

        <Text>
          Du må trykke to ganger for å lagre per nå (dette er en bug, ikke en
          feature)
        </Text>

        <Box width="10rem">
          <Button variant="contained" onClick={handleSave}>
            Lagre
          </Button>
        </Box>
      </Stack>
    </Stack>
  );
}
