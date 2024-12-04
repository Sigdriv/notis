import { Box, TextField } from "@mui/material";
import { Text } from "../Typography/Text/Text";
import { useColors } from "../../utils";

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
  multiline?: boolean;
}
export function TextInput({
  label,
  helperText,
  value,
  onChange,
  fullWidth = false,
  errorText,
  shouldShowError,
  autoFocus = false,
  rows = 1,
  multiline = false,
}: Props) {
  const { secondaryMain } = useColors();

  return (
    <Box>
      <Text color={shouldShowError ? "error" : "white"}>{label}</Text>

      <TextField
        fullWidth={fullWidth}
        multiline={multiline}
        rows={rows}
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

      {helperText && !shouldShowError && (
        <Text color="white">{helperText}</Text>
      )}
    </Box>
  );
}
