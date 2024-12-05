import {
  createContext,
  type ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { getFromLocalStorage, onlyUnique } from "../../helperFunctions";
import type { Note } from "../../types";
import { filterNotes, sortDesending } from "./utils";

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
}

export function useFilter() {
  return useContext(FilterContext);
}

interface Props {
  children: ReactNode;
}

export function FilterProvider({ children }: Props) {
  const location = useLocation();
  const navigate = useNavigate();

  const [notes, setNotes] = useState<Note[]>([]);
  const [search, setSearch] = useState("");
  const [selectedTag, setSelectedTag] = useState("Alle");
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    setNotes(getFromLocalStorage("notes"));

    setIsSaved(false);
  }, [isSaved]);

  if (notes.length === 0 && location.pathname === "/notater") {
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
    };
  }, [filteredNotes, isSaved, search, selectedTag, tags]);

  return (
    <FilterContext.Provider value={memoedState}>
      {children}
    </FilterContext.Provider>
  );
}
