import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import GlobalStyles from "./global/GlobalStyles.ts";

import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalStyles />
    <App />
  </StrictMode>
);
