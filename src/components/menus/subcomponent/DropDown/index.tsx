import { AnimatePresence } from "framer-motion";

import { NavListProps } from "../../types";

import { handlePageScrollingOnClick } from "../../../../utils/pageScrollingOnClick";

import { DropDownLink, DropDownList, DropDownRow, Wrapper } from "./styles";

import { SIDE_ANIMATION } from "../../../../animations/dropDown";

export default function DropDownMenu({ links, isOpen }: NavListProps) {
  return (
    <AnimatePresence initial={false}>
      {isOpen ? (
        <Wrapper {...SIDE_ANIMATION}>
          <DropDownList>
            {links.map((link, index) => (
              <DropDownRow key={index}>
                <DropDownLink
                  onClick={() =>
                    handlePageScrollingOnClick({ sectionRef: link.ref })
                  }
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
