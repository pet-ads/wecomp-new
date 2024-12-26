// Components
import SubTitle from "../../ui/SubTitle";
import Text from "../../ui/Text";
import RedirectButton from "../../ui/RedirectButton";

// Hooks
import useSectionRefs from "../../../hooks/useSectionRefs";

// Styles
import { PrologueContainer, PrologueContent } from "./styles";

export default function Prologue() {
  const { sections } = useSectionRefs();
  
  return (
    <PrologueContainer>
      <PrologueContent ref={sections.prologue}>
        <SubTitle children="Sobre a Wecomp" />
        <Text>
          A Wecomp é a semana da computação do IFSP São Carlos, que neste ano
          realizará sua sexta edição. O objetivo do evento é proporcionar uma
          maior interação entre os estudantes, o mercado de tecnologia e a
          cidade de São Carlos. Ao longo de cinco dias de evento, serão
          realizados diversos minicursos, talks e processos seletivos, que visam
          reduzir a distância entre a teoria e a prática, ensinar tecnologias
          novas e promover o ingresso dos participantes no mercado de trabalho.
        </Text>
        <RedirectButton
          link="http://petads.paginas.scl.ifsp.edu.br/#/"
          children="Veja mais"
        />
      </PrologueContent>
    </PrologueContainer>
  );
}
