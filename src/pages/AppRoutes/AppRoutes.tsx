import { useEffect, useState } from "react";
import { Outlet, Route, Routes, useLocation } from "react-router-dom";

import { Breadcrumbs } from "../../components";
import { getFromLocalStorage } from "../../helperFunctions";
import type { Note } from "../../types";
import { Home } from "../Home/Home";
import { NotFound } from "../NotFound/NotFound";
import { StartHere } from "../StartHere/StartHere";
import { NotePage } from "../Note/NotePage";
import { Notes } from "../Notes/Notes";
import { FilterProvider } from "../Notes/FilterContext";

export function AppRoutes() {
  const location = useLocation();
  const [noteId, setNoteId] = useState<string | undefined>(undefined);
  const [note, setNote] = useState<Note | undefined>(undefined);

  useEffect(() => {
    const noteId = location.pathname.split("/").pop();
    setNoteId(noteId);

    const notesLocalstorage: Note[] = getFromLocalStorage("notes");
    const note = notesLocalstorage.find((n) => n.id === noteId);
    setNote(note);
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Outlet />}>
        <Route index element={<Home />} />

        <Route
          path="kom-igang"
          element={
            <Breadcrumbs
              crumbs={[
                { label: "Hjem", href: "/" },
                { label: "Kom i gang", href: "/kom-igang" },
              ]}
            >
              <StartHere />
            </Breadcrumbs>
          }
        />

        <Route
          path="notater"
          element={
            <FilterProvider>
              <Outlet />
            </FilterProvider>
          }
        >
          <Route
            index
            element={
              <Breadcrumbs
                crumbs={[
                  { label: "Hjem", href: "/" },
                  { label: "Notater", href: "/notater" },
                ]}
              >
                <Notes />
              </Breadcrumbs>
            }
          />

          <Route
            path=":noteId"
            element={
              <Breadcrumbs
                crumbs={[
                  { label: "Hjem", href: "/" },
                  { label: "Notater", href: "/notater" },
                  {
                    label: note ? note.title : "Note",
                    href: `/notater/${noteId}`,
                  },
                ]}
              >
                <NotePage />
              </Breadcrumbs>
            }
          />
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
