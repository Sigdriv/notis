import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Box,
  Button,
  Dialog,
  IconButton,
  List,
  ListItem,
  Stack,
} from "@mui/material";
import { Add, Check, Delete, Edit } from "@mui/icons-material";

import type { Note } from "../../types";
import { Header1, Text, TextInput } from "../../components";
import { getFromLocalStorage, setToLocalStorage } from "../../helperFunctions";
import { useFilter } from "../Notes/FilterContext";
import { initialNoteState } from "../StartHere/utils";

export function NotePage() {
  const navigate = useNavigate();
  const { noteId } = useParams();
  const [note, setNote] = useState<Note>(initialNoteState);
  const [editTitle, setEditTitle] = useState(false);
  const [newTag, setNewTag] = useState("");
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);

  const { setIsSaved } = useFilter();

  useEffect(() => {
    const notes = getFromLocalStorage("notes");

    const currentNote = notes.find((n: Note) => n.id === noteId);
    setNote(currentNote);
  }, [noteId]);

  function handleTitleChange(title: string) {
    const updatedNote = {
      ...note,
      title,
      lastModified: new Date().toISOString(),
    };

    setNote(updatedNote);
  }

  function handleNoteChange(value: string) {
    const updatedNote = {
      ...note,
      note: value,
      lastModified: new Date().toISOString(),
    };

    setNote(updatedNote);
  }

  useEffect(() => {
    const allNotes: Note[] = getFromLocalStorage("notes");
    const updatedNotes = allNotes.map((n) => (n.id === note.id ? note : n));
    setToLocalStorage("notes", updatedNotes);
    setIsSaved(true);
  }, [note, setIsSaved]);

  function addNewTag() {
    setAttemptedSubmit(true);
    setErrorText("");

    if (newTag !== "") {
      if (note.tags.includes(newTag.toUpperCase())) {
        setErrorText("Taggen finnes allerede");
        return;
      }

      const updatedNote = {
        ...note,
        tags: [...note.tags, newTag.toUpperCase()],
      };

      setNote(updatedNote);
      setAttemptedSubmit(false);
      setNewTag("");
    }
    setErrorText("Tag er påkrevd");
  }

  function deleteTag(tag: string) {
    const updatedTags = note.tags.filter((t) => t !== tag);
    const updatedNote = {
      ...note,
      tags: updatedTags,
    };

    setNote(updatedNote);
  }

  function handleDeleteNote() {
    const allNotes: Note[] = getFromLocalStorage("notes");
    const updatedNotes = allNotes.filter((n) => n.id !== note.id);
    setToLocalStorage("notes", updatedNotes);
    setIsSaved(true);

    navigate(-1);
  }

  return (
    <Stack gap="2rem">
      <Stack direction="row" justifyContent="space-between" width="100wh">
        <Stack direction="row" gap=".5rem">
          {!editTitle && (
            <Header1 headerLevel="h1">Notat: {note.title}</Header1>
          )}

          {editTitle && (
            <TextInput
              label=""
              onChange={(value) => handleTitleChange(value)}
              value={note.title}
              autoFocus={editTitle}
            />
          )}

          <IconButton onClick={() => setEditTitle(!editTitle)}>
            {editTitle && <Check color="secondary" />}

            {!editTitle && <Edit color="secondary" />}
          </IconButton>
        </Stack>

        <Box justifyContent="flex-end">
          <Button
            variant="contained"
            color="error"
            sx={{ height: "3rem", color: "white" }}
            onClick={() => setDialogOpen(true)}
          >
            Slett notat
          </Button>
        </Box>
      </Stack>

      <Stack gap="1rem">
        <TextInput
          label="Notat"
          fullWidth
          rows={10}
          multiline
          autoFocus
          onChange={(value) => handleNoteChange(value)}
          value={note.note}
        />
      </Stack>

      <div>
        <Stack gap="1rem" direction="row">
          <TextInput
            onChange={(value) => setNewTag(value)}
            value={newTag}
            label="Legge til tagg"
            errorText={errorText}
            shouldShowError={attemptedSubmit && errorText !== ""}
          />

          <IconButton onClick={addNewTag}>
            <Add sx={{ height: "2rem", width: "2rem", color: "white" }} />
          </IconButton>
        </Stack>

        <List sx={{ width: "10rem" }}>
          {note.tags.map((tag) => (
            <ListItem
              key={tag}
              secondaryAction={
                <IconButton onClick={() => deleteTag(tag)}>
                  <Delete sx={{ color: "white" }} />
                </IconButton>
              }
            >
              <Text>{tag}</Text>
            </ListItem>
          ))}
        </List>
      </div>

      <Dialog open={dialogOpen} fullWidth>
        <Stack padding="2rem" gap="2rem">
          <Text>Er du sikker på at du vil slette notatet?</Text>

          <Stack direction="row" gap="2rem" justifyContent="center">
            <Box width="10rem">
              <Button
                variant="contained"
                fullWidth
                onClick={() => setDialogOpen(false)}
              >
                Avbryt
              </Button>
            </Box>

            <Box width="10rem">
              <Button
                variant="contained"
                color="error"
                sx={{ color: "white" }}
                fullWidth
                onClick={handleDeleteNote}
              >
                Slett
              </Button>
            </Box>
          </Stack>
        </Stack>
      </Dialog>
    </Stack>
  );
}
