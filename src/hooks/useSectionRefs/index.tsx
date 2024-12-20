// External library
import { useContext } from "react";

// Context
import { SectionRefsContext } from "../../context/SectionReferences";

export default function useSectionRefs() {
  const context = useContext(SectionRefsContext);

  if (!context) {
    throw new Error(
      "useSectionRefs deve ser usado dentro de SectionRefsProvider"
    );
  }

  return context;
}
