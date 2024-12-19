// Components
import MenuNavigation from "../menus/Navigation";
import MenuMobile from "../menus/Mobile";

// Styles
import { Nav } from "./styles";
import { LinkAnchor } from "../../types/Navigation";

export default function Header() {
  const links: LinkAnchor[] = [
    { text: "Início", url: "" },
    { text: "Sobre", url: "" },
    { text: "Apoiadores", url: "" },
    { text: "Programação", url: "" },
    { text: "Locais", url: "" },
    { text: "Destaques", url: "" },
    { text: "Contato", url: "" },
    { text: "Edições", url: "" },
    { text: "FAQ", url: "" },
  ];

  return (
    <Nav>
      <MenuNavigation links={links} />
      <MenuMobile links={links} />
    </Nav>
  );
}
