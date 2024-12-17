// Components
import { NavList } from "./subcomponents/NavList";

// Styles
import { Nav } from "./styles";
import { LinkAnchor } from "../../types/Navigation";

export default function Header(){
  const links: LinkAnchor[] = [
    { text: "Início", url: "" },
    { text: "Sobre", url: "" },
    { text: "Parceiros", url: "" },
    { text: "Programação", url: "" },
    { text: "Locais", url: "" },
    { text: "Editais", url: "" },
    { text: "Contato", url: "" },
    { text: "Eventos", url: "" },
    { text: "FAQ", url: "" },
  ];

  return (
    <Nav>
      <NavList links={links} />
    </Nav>
  );
}
