import "./App.css";
import { AppRoutes } from "./components/AppRoutes/AppRoutes";
import { BrowserRouter } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";

export function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <AppRoutes />
    </BrowserRouter>
  );
}
