// Components
import MenuNavigation from "../menus/Navigation";
import MenuMobile from "../menus/Mobile";

// Hooks
import useSectionRefs from "../../hooks/useSectionRefs";

// Types
import { LinkAnchor } from "../../types/Navigation";

// Styles
import { Nav } from "./styles";

export default function Header() {
  const { sections } =  useSectionRefs();

  const links: LinkAnchor[] = [
    { text: "Início", ref: sections.HeroBanner },
    { text: "Sobre", ref: sections.prologue },
    { text: "Apoiadores", ref: sections.supporters },
    { text: "Programação", ref: sections.programming },
    { text: "Maratona", ref: sections.Marathon },
    { text: "Destaques", ref: sections.Highlights },
    { text: "Locais", ref: sections.Locations },
    { text: "Contato", ref: sections.Contact },
    { text: "Edições", ref: sections.Editions },
    { text: "FAQ", ref: sections.FAQs },
  ];

  return (
    <Nav>
      <MenuNavigation links={links} />
      <MenuMobile links={links} />
    </Nav>
  );
}
