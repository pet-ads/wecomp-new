// Types
import { NavListProps } from '../../../types/Navigation'

// Styles
import { NavigationItem, NavigationLink, NavigationList } from "./styles";

export default function MenuNavigation({links}: NavListProps){
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
