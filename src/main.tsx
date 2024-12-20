// Config
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// External library
import GlobalStyles from "./global/GlobalStyles.ts";

// Component
import App from "./App.tsx";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalStyles />
    <App />
  </StrictMode>
);
