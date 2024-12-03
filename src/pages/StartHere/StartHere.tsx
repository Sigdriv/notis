import {
  Box,
  Button,
  Card,
  CardContent,
  Input,
  Stack,
  useTheme,
} from "@mui/material";
import { Header1, Header2 } from "../../components/Typography/Header/Header";
import { useState } from "react";
import { Note } from "../../types";
import {
  getFromLocalStorage,
  randomId,
  setToLocalStorage,
} from "../../helperFunctions";

export function StartHere() {
  const [formState, setFormState] = useState({ title: "" });
  const [submittAttempted, setSubmitAttempted] = useState(false);

  const {
    palette: {
      secondary: { main },
    },
  } = useTheme();

  const handleSubmit = () => {
    setSubmitAttempted(true);

    if (formState.title !== "") {
      const id = randomId();
      const notes: Note[] = getFromLocalStorage("notes");

      setToLocalStorage("notes", [
        ...notes,
        {
          id: id,
          title: formState.title,
          note: "",
          createdAt: new Date().toISOString(),
          lastModified: new Date().toISOString(),
        },
      ]);

      window.location.href = `/notater/${id}`;
    }

    if (formState.title === "") {
      // TODO: Use InfoBox
      alert("Tittel er påkrevd");
    }
  };

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
              backgroundColor: main,
              width: "fit-content",
              px: "2rem",
              pb: "1rem",
            }}
          >
            <CardContent>
              <Header2>Opprett nytt notat</Header2>
            </CardContent>

            <Stack gap="1rem">
              <Input
                placeholder="Tittel"
                name="title"
                onChange={({ target: { value } }) =>
                  setFormState({ ...formState, title: value })
                }
                value={formState.title}
                error={formState.title === "" && submittAttempted}
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
