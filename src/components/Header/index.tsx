import MenuNavigation from "../menus/Navigation";
import MenuMobile from "../menus/Mobile";

import { LinkAnchor } from "../menus/types";

import { Nav } from "./styles";

export default function Header() {
  const links: LinkAnchor[] = [
    { text: "Início", sectionId: "Hero" },
    { text: "Sobre", sectionId: "About" },
    { text: "Apoiadores", sectionId: "Sponsors" },
    { text: "Realizadores", sectionId: "Organization" },
    { text: "Programação", sectionId: "Programming" },
    { text: "Maratona", sectionId: "Marathon" },
    { text: "Destaques", sectionId: "Highlights" },
    { text: "Locais", sectionId: "Locations" },
    { text: "Contato", sectionId: "Contact" },
    { text: "Edições", sectionId: "Editions" },
    { text: "FAQ", sectionId: "FAQ" },
  ];

  return (
    <Nav>
      <MenuNavigation links={links} />
      <MenuMobile links={links} />
    </Nav>
  );
}
