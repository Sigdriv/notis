import { Button, Stack } from "@mui/material";

import { Header1, Text } from "../../components";

export function NotFound() {
  return (
    <Stack
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="80vh"
      gap="2rem"
    >
      <Stack alignItems="center">
        <Header1>404 – Side ikke funnet</Header1>

        <Text variant="ingress">
          Hmmm, hvordan kom du deg hit? Mulig du er litt nysgjerrig?
        </Text>
      </Stack>

      <Button variant="contained" color="primary" href="/">
        Til forsiden
      </Button>
    </Stack>
  );
}
