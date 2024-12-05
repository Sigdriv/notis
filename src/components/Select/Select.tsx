import { MenuItem, Select as SelectMui } from "@mui/material";

import { Text } from "../";

interface Props {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { label: string; value: string }[];
}
export function Select({ label, value, onChange, options }: Props) {
  return (
    <div>
      <Text>{label}</Text>

      <SelectMui
        label="Tags"
        variant="filled"
        fullWidth
        value={value}
        onChange={({ target: { value } }) => onChange(value)}
      >
        {options.map(({ label, value }) => (
          <MenuItem
            key={JSON.stringify({ label, value })}
            value={value}
            sx={{ color: "black" }}
          >
            {label}
          </MenuItem>
        ))}
      </SelectMui>
    </div>
  );
}
