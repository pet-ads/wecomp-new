import SubTitle from "../../ui/SubTitle";
import Text from "../../ui/Text";
import ArrowButton from "../../ui/ArrowButton";

import useSectionRefs from "../../../hooks/references/useSectionRefs";
import usePrologueSectionData from "../../../hooks/fetch/usePrologueSectionData";

import { PrologueContainer, PrologueContent } from "./styles";

export default function Prologue() {
  const { sections } = useSectionRefs();
  const { description, sectionLabel } =
    usePrologueSectionData();

  return (
    <PrologueContainer>
      <PrologueContent ref={sections.prologue}>
        <SubTitle children={sectionLabel} />
        <Text children={description} fontSize="12.5pt" width="80%"/>
      </PrologueContent>
      <ArrowButton sectionRef={sections.supporters} />
    </PrologueContainer>
  );
}
