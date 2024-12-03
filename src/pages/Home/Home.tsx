import { Button, Stack } from "@mui/material";
import { Text } from "../../components/Typography/Text/Text";
import { Header1 } from "../../components/Typography/Header/Header";
import { getFromLocalStorage } from "../../helperFunctions";

export function Home() {
  const notes = getFromLocalStorage("notes");

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      minHeight="80vh"
      gap="2rem"
    >
      <Stack>
        <Header1>NOTIS</Header1>

        <Text>
          Velkommen til NOTIS. Dette er notisappen du alltid har ønsket deg
        </Text>
      </Stack>

      <div>
        {notes.length === 0 && (
          <Button variant="contained" color="primary" href="/kom-igang">
            Kom i gang
          </Button>
        )}

        {notes.length > 0 && (
          <Button variant="contained" color="primary" href="/notater">
            Gå til notater
          </Button>
        )}
      </div>
    </Stack>
  );
}
