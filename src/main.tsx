// Config
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Component
import App from "./App.tsx";

// External library
import GlobalStyles from "./global/GlobalStyles.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalStyles />
    <App />
  </StrictMode>
);
