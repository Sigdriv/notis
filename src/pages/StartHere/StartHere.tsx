import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Card, CardContent, Stack } from "@mui/material";

import { Header1, Header2, TextInput } from "../../components";
import { Note } from "../../types";
import {
  getFromLocalStorage,
  randomId,
  setToLocalStorage,
} from "../../helperFunctions";
import { useColors } from "../../utils";
import { initialNoteState } from "./utils";

export function StartHere() {
  const navigate = useNavigate();
  const [formState, setFormState] = useState<{ title: string; tags: string[] }>(
    { title: "", tags: [] }
  );
  const [submittAttempted, setSubmitAttempted] = useState(false);

  const { secondaryMain } = useColors();

  const handleSubmit = () => {
    setSubmitAttempted(true);

    if (formState.title !== "") {
      const id = randomId();
      const notes: Note[] = getFromLocalStorage("notes");

      setToLocalStorage("notes", [
        ...notes,
        {
          ...initialNoteState,
          id: id,
          title: formState.title,
          createdAt: new Date().toISOString(),
          lastModified: new Date().toISOString(),
          tags: formState.tags,
        },
      ]);

      navigate(`/notater/${id}`);
    }
  };

  function handleTagChange(value: string) {
    const tags = value.split(",").map((tag) => tag.trim().toUpperCase());
    if (tags[0] === "") {
      tags.pop();
    }

    setFormState({ ...formState, tags });
  }

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      gap="2rem"
      minHeight="80vh"
    >
      <div>
        <Header1>Kom igang</Header1>

        <Stack>
          <Card
            sx={{
              backgroundColor: secondaryMain,
              width: "fit-content",
              px: "2rem",
              pb: "1rem",
            }}
          >
            <CardContent>
              <Header2>Opprett nytt notat</Header2>
            </CardContent>

            <Stack gap="1rem">
              <TextInput
                label="* Tittel"
                onChange={(value) =>
                  setFormState({ ...formState, title: value })
                }
                value={formState.title}
                fullWidth
                shouldShowError={formState.title === "" && submittAttempted}
                errorText="Tittel er påkrevd"
              />

              <TextInput
                label="Tagger"
                onChange={(value) => handleTagChange(value)}
                value={formState.tags.map((tag) => tag).join(", ")}
                helperText="Separer tagger med komma"
                fullWidth
              />

              <Box width="10rem">
                <Button
                  onClick={handleSubmit}
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Opprett
                </Button>
              </Box>
            </Stack>
          </Card>
        </Stack>
      </div>
    </Stack>
  );
}
