import { AppBar, Stack } from "@mui/material";

export function NavBar() {
  return (
    <AppBar position="static">
      <Stack flexGrow={1} display="flex">
        <div>NavBar</div>

        <div>NavBar</div>
      </Stack>
    </AppBar>
  );
}
