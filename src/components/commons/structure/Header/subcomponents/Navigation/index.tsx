import useScrollToSection from "../../../../../../hooks/references/useScrollToSection";

import { NavListProps } from "../types";

import { NavigationItem, NavigationLink, NavigationList } from "./styles";

export default function MenuNavigation({ links }: NavListProps) {
  const smoothScrollToTarget = useScrollToSection();

  return (
    <NavigationList>
      {links.map((link, index) => (
        <NavigationItem key={index}>
          <NavigationLink onClick={() => smoothScrollToTarget(link.sectionId)}>
            {link.text}
          </NavigationLink>
        </NavigationItem>
      ))}
    </NavigationList>
  );
}
