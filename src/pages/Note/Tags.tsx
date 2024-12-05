import { useState } from "react";
import { Add, Delete } from "@mui/icons-material";
import { IconButton, List, ListItem, Stack } from "@mui/material";

import { Text, TextInput } from "../../components";
import type { Note } from "../../types";

interface Props {
  note: Note;
  setNote: (note: Note) => void;
}

export function Tags({ note, setNote }: Props) {
  const [newTag, setNewTag] = useState("");
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);
  const [errorText, setErrorText] = useState("");

  function addNewTag() {
    setAttemptedSubmit(true);
    setErrorText("");

    if (newTag !== "") {
      if (note.tags.includes(newTag.toUpperCase())) {
        setErrorText("Taggen finnes allerede");
        return;
      }

      setNote({
        ...note,
        tags: [...note.tags, newTag.toUpperCase()],
      });
      setAttemptedSubmit(false);
      setNewTag("");
    }
    setErrorText("Tag er påkrevd");
  }

  function deleteTag(tag: string) {
    const updatedTags = note.tags.filter((t) => t !== tag);

    setNote({
      ...note,
      tags: updatedTags,
    });
  }
  return (
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

      <Stack direction="row" justifyContent="space-between">
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
      </Stack>
    </div>
  );
}
