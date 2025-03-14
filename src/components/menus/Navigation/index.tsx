import { NavListProps } from "../types";

import { handlePageScrollingOnClick } from "../../../utils/pageScrollingOnClick";

import { NavigationItem, NavigationLink, NavigationList } from "./styles";

export default function MenuNavigation({ links }: NavListProps) {
  return (
    <NavigationList>
      {links.map((link, index) => (
        <NavigationItem key={index}>
          <NavigationLink
            onClick={() => handlePageScrollingOnClick({ sectionRef: link.ref })}
          >
            {link.text}
          </NavigationLink>
        </NavigationItem>
      ))}
    </NavigationList>
  );
}
