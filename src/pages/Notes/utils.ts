import type { Note } from "../../types";

interface FilterParams {
  notes: Note[];
  search: string;
  selectedTag: string;
}

export const filterNotes = ({
  notes,
  search,
  selectedTag,
}: FilterParams): Note[] => {
  return notes.filter((note) => {
    const matchesTitle =
      search && search.trim() !== ""
        ? note.title.toLowerCase().includes(search.toLowerCase().trim())
        : true;
    const matchesTag =
      selectedTag && selectedTag !== "Alle"
        ? note.tags.includes(selectedTag)
        : true;

    return matchesTitle && matchesTag;
  });
};
