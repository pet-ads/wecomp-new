import { AnimatePresence } from "framer-motion";

import { NavListProps } from "../../../types";

import useScrollToSection from "../../../../../../../../hooks/references/useScrollToSection";

import { DropDownLink, DropDownList, DropDownRow, Wrapper } from "./styles";

import { SIDE_ANIMATION } from "../../../../../../../../animations";

export default function DropDownMenu({ links, isOpen }: NavListProps) {
  const smoothScrollToTarget = useScrollToSection();

  return (
    <AnimatePresence initial={false}>
      {isOpen ? (
        <Wrapper {...SIDE_ANIMATION}>
          <DropDownList>
            {links.map((link, index) => (
              <DropDownRow key={index}>
                <DropDownLink
                  onClick={() => smoothScrollToTarget(link.sectionId)}
                >
                  {link.text}
                </DropDownLink>
              </DropDownRow>
            ))}
          </DropDownList>
        </Wrapper>
      ) : null}
    </AnimatePresence>
  );
}
