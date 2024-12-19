// External library
import { FaHeart } from "react-icons/fa";

// Components
import RedirectSpan from "../ui/RedirectSpan";

// Styles
import { FooterContainer, FooterContent } from "./styles";

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        Desenvolvido com
        <FaHeart color="red" />
        <RedirectSpan
          link="http://petads.paginas.scl.ifsp.edu.br/#/"
          children="PET/ADS"
        />
        por @
        <RedirectSpan
          link="https://portais.ifsp.edu.br/scl/"
          children="IFSP/SCL"
        />
      </FooterContent>
    </FooterContainer>
  );
}
