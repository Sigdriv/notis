import { Route, Routes } from "react-router-dom";
import { Home } from "../Home/Home";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  );
}
