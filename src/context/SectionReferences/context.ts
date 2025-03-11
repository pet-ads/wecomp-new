import { createContext } from "react";

import { SectionRefsContextType } from "../../types/SectionRefsContextType";

export const SectionRefsContext = createContext<
  SectionRefsContextType | undefined
>(undefined);
