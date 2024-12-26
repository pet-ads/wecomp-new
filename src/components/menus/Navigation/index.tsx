// Types
import { NavListProps } from '../../../types/Navigation'

// Utils
import { handlePageScrollingOnClick } from '../../../utils/pageScrollingOnClick';

// Styles
import { NavigationItem, NavigationLink, NavigationList } from "./styles";

export default function MenuNavigation({links}: NavListProps){
  return (
    <NavigationList>
      {links.map((link, index) => (
        <NavigationItem key={index}>
          <NavigationLink onClick={() => handlePageScrollingOnClick({sectionRef: link.ref})}>{link.text}</NavigationLink>
        </NavigationItem>
      ))}
    </NavigationList>
  );
}
