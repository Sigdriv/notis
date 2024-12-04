import {
  createContext,
  type ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  getFromLocalStorage,
  onlyUnique,
  sortDesending,
} from "../../helperFunctions";
import type { Note } from "../../types";
import { filterNotes } from "./utils";
import { useNavigate } from "react-router-dom";

const FilterContext = createContext<NoteFilterContext>({} as NoteFilterContext);

interface NoteFilterContext {
  search: string;
  selectedTag: string;
  setSearch: (search: string) => void;
  setSelectedTag: (tag: string) => void;
  tags: string[];
  filteredNotes: Note[];
  isSaved: boolean;
  setIsSaved: (isSaved: boolean) => void;
  notes: Note[];
}

export function useFilter() {
  return useContext(FilterContext);
}

interface Props {
  children: ReactNode;
}

export function FilterProvider({ children }: Props) {
  const navigate = useNavigate();

  const [notes, setNotes] = useState<Note[]>([]);
  const [search, setSearch] = useState("");
  const [selectedTag, setSelectedTag] = useState("Alle");

  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    setNotes(getFromLocalStorage("notes"));

    setIsSaved(false);
  }, [isSaved]);

  if (notes.length === 0 && window.location.pathname === "/notater") {
    navigate("/kom-igang");
  }

  const sortedNotes = sortDesending(notes);

  const filteredNotes = filterNotes({
    notes: sortedNotes,
    search,
    selectedTag,
  });

  const tags = onlyUnique(notes.map((note) => note.tags));
  tags.unshift("Alle");

  const memoedState = useMemo<NoteFilterContext>(() => {
    return {
      search,
      selectedTag,
      setSearch,
      setSelectedTag,
      tags,

      filteredNotes,

      isSaved,
      setIsSaved,

      notes,
    };
  }, [filteredNotes, isSaved, search, selectedTag, tags, notes]);

  return (
    <FilterContext.Provider value={memoedState}>
      {children}
    </FilterContext.Provider>
  );
}
