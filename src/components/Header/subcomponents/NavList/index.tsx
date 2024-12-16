// Styles
import { NavigationLink, NavigationList, NavigationItem } from "./styles";

// Types
import { NavListProps } from "../../../../types/Navigation";

export function NavList({ links }: NavListProps) {
  return (
    <NavigationList>
      {links.map((link, index) => (
        <NavigationItem key={index}>
          <NavigationLink href={link.url}>{link.text}</NavigationLink>
        </NavigationItem>
      ))}
    </NavigationList>
  );
}
