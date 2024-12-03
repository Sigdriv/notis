import { Button, Stack } from "@mui/material";
import { Text } from "../../components/Typography/Text/Text";
import { Header1 } from "../../components/Typography/Header/Header";

export function NotFound() {
  return (
    <Stack
      flexGrow={1}
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="80vh"
      gap="2rem"
    >
      <div>
        <Header1>404 – Side ikke funnet</Header1>

        <Text variant="ingress">
          Hmmm, hvordan kom du deg hit? Mulig du er litt nysgjerrig?
        </Text>
      </div>

      <Button variant="contained" color="primary" href="/">
        Til forsiden
      </Button>
    </Stack>
  );
}
