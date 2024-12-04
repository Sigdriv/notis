import { Box, MenuItem, Select, Stack, TextField } from "@mui/material";

import { Text } from "../../components";
import { useColors } from "../../utils";
import { useFilter } from "./FilterContext";

export function Filters() {
  const { search, setSearch, selectedTag, setSelectedTag, tags } = useFilter();
  const { secondaryMain } = useColors();

  return (
    <Stack direction="row" gap="2rem">
      <Box width="20rem">
        <Text>Søk</Text>

        <TextField
          variant="filled"
          fullWidth
          sx={{ bgcolor: secondaryMain }}
          value={search}
          onChange={({ target: { value } }) => setSearch(value)}
        />
      </Box>

      <Box width="20rem">
        <Text>Tagger</Text>

        <Select
          label="Tags"
          variant="filled"
          fullWidth
          value={selectedTag}
          onChange={({ target: { value } }) => setSelectedTag(value)}
        >
          {tags.map((tag) => (
            <MenuItem key={tag} value={tag} sx={{ color: "black" }}>
              {tag}
            </MenuItem>
          ))}
        </Select>
      </Box>
    </Stack>
  );
}
