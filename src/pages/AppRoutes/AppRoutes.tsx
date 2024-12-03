import { Outlet, Route, Routes } from "react-router-dom";
import { Home } from "../Home/Home";
import { NotFound } from "../NotFound/NotFound";
import { StartHere } from "../StartHere/StartHere";
import { NotePage } from "../Note/NotePage";
import { Notes } from "../Notes/Notes";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Outlet />}>
        <Route index element={<Home />} />
        <Route path="kom-igang" element={<StartHere />} />'
        <Route path="notater" element={<Outlet />}>
          <Route index element={<Notes />} />

          <Route path=":noteId" element={<NotePage />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
