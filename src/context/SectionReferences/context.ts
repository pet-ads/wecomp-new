// External library
import { createContext } from "react";

// Types
import { SectionRefsContextType } from "../../types/SectionRefsContextType";

// Context
export const SectionRefsContext = createContext<
  SectionRefsContextType | undefined
>(undefined);
