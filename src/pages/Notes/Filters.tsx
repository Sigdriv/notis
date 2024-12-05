import { Box, Stack } from "@mui/material";

import { Select, TextInput } from "../../components";
import { useFilter } from "./FilterContext";

export function Filters() {
  const { search, setSearch, selectedTag, setSelectedTag, tags } = useFilter();

  return (
    <Stack direction="row" gap="2rem">
      <Box width="20rem">
        <TextInput
          label="Søk"
          fullWidth
          value={search}
          onChange={(value) => setSearch(value)}
        />
      </Box>

      <Box width="20rem">
        <Select
          label="Tagger"
          value={selectedTag}
          onChange={(value) => setSelectedTag(value)}
          options={tags.map((tag) => ({ label: tag, value: tag }))}
        />
      </Box>
    </Stack>
  );
}
