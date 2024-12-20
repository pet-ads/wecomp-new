// External library
import { createContext, useRef } from "react";

// Types
import {
  ChildrenContext,
  SectionRefsContextType,
} from "../../types/SectionRefsContextType";

// Context
export const SectionRefsContext = createContext<
  SectionRefsContextType | undefined
>(undefined);

export default function SectionReferences({ children }: ChildrenContext) {
  const prologueSection = useRef<HTMLDivElement>(null);
  const supportersSection = useRef<HTMLDivElement>(null);
  const programmingSection = useRef<HTMLDivElement>(null);

  return (
    <SectionRefsContext.Provider
      value={{
        sections: {
          prologue: prologueSection,
          supporters: supportersSection,
          programming: programmingSection,
        },
      }}
    >
      {children}
    </SectionRefsContext.Provider>
  );
}
