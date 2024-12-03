import "./App.css";
import { AppRoutes } from "./pages/AppRoutes/AppRoutes";
import { BrowserRouter } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";

export function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          {/* <NavBar /> */}

          <AppRoutes />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}
