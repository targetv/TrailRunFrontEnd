import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material/styles";
import { ThemeProvider } from "styled-components";
import { theme } from "./components/Theme.jsx";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <StyledEngineProvider injectFirst>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </StyledEngineProvider>
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById("root")
);
