import { useContext } from "react";

import { SectionRefsContext } from "../../../context/SectionReferences/context";

export default function useSectionRefs() {
  const context = useContext(SectionRefsContext);

  if (!context) {
    throw new Error(
      "useSectionRefs deve ser usado dentro de SectionRefsProvider"
    );
  }

  return context;
}
