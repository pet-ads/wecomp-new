import { createContext } from "react";

import { SectionRefsContextType } from "./types";

export const SectionRefsContext = createContext<
  SectionRefsContextType | undefined
>(undefined);
