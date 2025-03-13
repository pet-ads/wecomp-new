import React from "react";

export interface SectionRefsContextType {
  sections: {
    HeroBanner: React.RefObject<HTMLDivElement>;
    prologue: React.RefObject<HTMLDivElement>;
    supporters: React.RefObject<HTMLDivElement>;
    directors: React.RefObject<HTMLDivElement>;
    programming: React.RefObject<HTMLDivElement>;
    Locations: React.RefObject<HTMLDivElement>;
    Highlights: React.RefObject<HTMLDivElement>;
    Marathon: React.RefObject<HTMLDivElement>;
    Contact: React.RefObject<HTMLDivElement>;
    Editions: React.RefObject<HTMLDivElement>;
    FAQs: React.RefObject<HTMLDivElement>;
    DropDownMenu: React.RefObject<HTMLDivElement>;
  };
}

export interface ChildrenContext {
  children: React.ReactNode;
}
