import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Button, IconButton, Stack } from "@mui/material";
import { Check, Edit } from "@mui/icons-material";

import type { Note } from "../../types";
import { Dialog, Header1, Text, TextInput } from "../../components";
import { useFilter } from "../Notes/FilterContext";
import { initialNoteState } from "../StartHere/utils";
import { deleteNote, getCurrentNote, updateNote } from "./utils";
import { Tags } from "./Tags";

export function NotePage() {
  const navigate = useNavigate();
  const { noteId } = useParams();
  const [note, setNote] = useState<Note>(initialNoteState);
  const [editTitle, setEditTitle] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  const { setIsSaved } = useFilter();

  useEffect(() => {
    setNote(getCurrentNote(noteId ?? ""));
  }, [noteId]);

  useEffect(() => {
    updateNote(note);
    setIsSaved(true);
  }, [note, setIsSaved]);

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
              onChange={(value) =>
                setNote({
                  ...note,
                  title: value,
                  lastModified: new Date().toISOString(),
                })
              }
              value={note.title}
              autoFocus={editTitle}
            />
          )}

          <IconButton onClick={() => setEditTitle(!editTitle)}>
            {editTitle && <Check sx={{ color: "white" }} />}

            {!editTitle && <Edit sx={{ color: "white" }} />}
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
          sublabel={
            <Stack direction="row" gap=".5rem">
              <Text>Alle endringer er lagret</Text>
              <Check color="success" />
            </Stack>
          }
          fullWidth
          rows={5}
          maxRows={25}
          multiline
          autoFocus
          onChange={(value) =>
            setNote({
              ...note,
              note: value,
              lastModified: new Date().toISOString(),
            })
          }
          value={note.note}
        />
      </Stack>

      <Tags note={note} setNote={setNote} />

      <Dialog
        open={dialogOpen}
        header="Slett notat"
        label="Er du sikker på at du vil slette dette notatet?"
        confirmText="Slett notat"
        onClose={() => setDialogOpen(false)}
        onConfirm={() => {
          deleteNote(note.id);
          setIsSaved(true);
          navigate(-1);
        }}
      />
    </Stack>
  );
}
