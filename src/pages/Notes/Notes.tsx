import { useNavigate } from "react-router-dom";
import { Box, Button, Stack } from "@mui/material";

import {
  getFromLocalStorage,
  setToLocalStorage,
  randomId,
} from "../../helperFunctions";
import { Header1, Text } from "../../components";
import { Filters } from "./Filters";
import { NotesTable } from "./NotesTable";

export function Notes() {
  const navigate = useNavigate();
  function handleNewNote() {
    const existingNotes = getFromLocalStorage("notes");
    const id = randomId();

    setToLocalStorage("notes", [
      ...existingNotes,
      {
        id,
        title: "Nytt notat " + new Date().toLocaleDateString("no-NB"),
        note: "",
        createdAt: new Date().toISOString(),
        lastModified: new Date().toISOString(),
        tags: [],
      },
    ]);

    navigate(`${id}`);
  }

  return (
    <Stack gap="2rem">
      <div>
        <Header1>Notater</Header1>

        <Text variant="ingress">
          Her kan du se og administrere dine notater
        </Text>
      </div>

      <Stack direction="row" justifyContent="space-between">
        <Filters />

        <Box alignContent="end">
          <Button variant="contained" onClick={handleNewNote}>
            Nytt notat
          </Button>
        </Box>
      </Stack>

      <NotesTable />
    </Stack>
  );
}
