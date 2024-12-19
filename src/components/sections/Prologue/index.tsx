// Components
import { SubTitle } from "../../SubTitle";

// Styles
import { PrologueContainer, PrologueContent } from "./styles";
import Text from "../../Text";
import LinkButton from "../../LinkButton/styles";

export default function Prologue() {
  return (
    <PrologueContainer>
      <PrologueContent>
        <SubTitle>Sobre a Wecomp</SubTitle>
        <Text>
          A Wecomp é a semana da computação do IFSP São Carlos, que neste ano
          realizará sua sexta edição. O objetivo do evento é proporcionar uma
          maior interação entre os estudantes, o mercado de tecnologia e a
          cidade de São Carlos. Ao longo de cinco dias de evento, serão
          realizados diversos minicursos, talks e processos seletivos, que visam
          reduzir a distância entre a teoria e a prática, ensinar tecnologias
          novas e promover o ingresso dos participantes no mercado de trabalho.
        </Text>
        <LinkButton>Veja mais</LinkButton>
      </PrologueContent>
    </PrologueContainer>
  );
}
