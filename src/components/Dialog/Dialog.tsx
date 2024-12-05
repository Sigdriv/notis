import { Dialog as DialogMui, Stack, Box, Button } from "@mui/material";

import { Header2, Text } from "../";

interface Props {
  open: boolean;
  header?: string;
  label?: string;
  confirmText?: string;
  onClose: () => void;
  onConfirm: () => void;
}

export function Dialog({
  open,
  header,
  label,
  confirmText,
  onClose,
  onConfirm,
}: Props) {
  return (
    <DialogMui open={open} fullWidth>
      <Stack padding="2rem" gap="2rem">
        <div>
          <Header2>{header ? header : "Er du sikker?"}</Header2>

          <Text>
            {label
              ? label
              : "Er du sikker på at du vil gjøre denne handlingen?"}
          </Text>
        </div>

        <Stack direction="row" gap="2rem" justifyContent="center">
          <Box width="10rem">
            <Button variant="contained" fullWidth onClick={onClose}>
              Avbryt
            </Button>
          </Box>

          <Box width="10rem">
            <Button
              variant="contained"
              color="error"
              sx={{ color: "white" }}
              fullWidth
              onClick={onConfirm}
            >
              {confirmText ? confirmText : "Ja"}
            </Button>
          </Box>
        </Stack>
      </Stack>
    </DialogMui>
  );
}
