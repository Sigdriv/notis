import { Box, Stack, TextField } from "@mui/material";
import { Text } from "../Typography/Text/Text";

interface Props {
  label: string;
  helperText?: string;
  value: string;
  onChange: (value: string) => void;
  fullWidth?: boolean;
  errorText?: string;
  shouldShowError?: boolean;
  autoFocus?: boolean;
  rows?: number;
  maxRows?: number;
  multiline?: boolean;
  sublabel?: string | React.ReactNode;
}
export function TextInput({
  label,
  helperText,
  value,
  onChange,
  fullWidth = false,
  errorText,
  shouldShowError = false,
  autoFocus = false,
  rows = 1,
  maxRows,
  multiline = false,
  sublabel,
}: Props) {
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between">
        <Text color={shouldShowError ? "error" : "white"}>{label}</Text>

        {sublabel && typeof sublabel === "string" ? (
          <Text>{sublabel}</Text>
        ) : (
          sublabel
        )}
      </Stack>

      <TextField
        fullWidth={fullWidth}
        multiline={multiline}
        rows={rows}
        maxRows={maxRows}
        value={value}
        onChange={({ target: { value } }) => onChange(value)}
        error={shouldShowError}
        sx={{
          ".MuiInputBase-input": {
            resize: "vertical",
          },
        }}
        autoFocus={autoFocus}
      />

      {shouldShowError && <Text color="error">{errorText}</Text>}

      {helperText && !shouldShowError && <Text>{helperText}</Text>}
    </Box>
  );
}
