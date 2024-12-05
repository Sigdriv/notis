import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material";

import { theme } from "./theme";
import { AppRoutes } from "./pages/AppRoutes/AppRoutes";
import "./App.css";

export function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}
