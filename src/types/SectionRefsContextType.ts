// External library
import React from "react"

export interface SectionRefsContextType {
  sections: {
    prologue: React.RefObject<HTMLDivElement>;
    supporters: React.RefObject<HTMLDivElement>;
    programming: React.RefObject<HTMLDivElement>;
  };
}

export interface ChildrenContext {
  children: React.ReactNode;
}
