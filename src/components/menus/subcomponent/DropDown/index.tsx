// External library
import { AnimatePresence } from "framer-motion";

// Types
import { NavListProps } from "../../../../types/Navigation";

// Utils
import { handlePageScrollingOnClick } from "../../../../utils/pageScrollingOnClick";

// Styles
import { DropDownLink, DropDownList, DropDownRow, Wrapper } from "./styles";

// Animations
import { SIDE_ANIMATION } from "../../../../animations/dropDown";


export default function DropDownMenu({ links, isOpen }: NavListProps) {
  return (
    <AnimatePresence initial={false}>
      {isOpen ? (
        <Wrapper {...SIDE_ANIMATION}>
          <DropDownList>
            {links.map((link, index) => (
              <DropDownRow key={index}>
                <DropDownLink onClick={() => handlePageScrollingOnClick({sectionRef: link.ref})}>{link.text}</DropDownLink>
              </DropDownRow>
            ))}
          </DropDownList>
        </Wrapper>
      ) : null}
    </AnimatePresence>
  );
}
