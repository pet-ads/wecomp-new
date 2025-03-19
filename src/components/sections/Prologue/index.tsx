import SubTitle from "../../ui/SubTitle";
import Text from "../../ui/Text";
import RedirectButton from "../../ui/RedirectButton";

import useSectionRefs from "../../../hooks/references/useSectionRefs";
import usePrologueSectionData from "../../../hooks/fetch/usePrologueSectionData";

import { PrologueContainer, PrologueContent } from "./styles";

export default function Prologue() {
  const { sections } = useSectionRefs();
  const { buttonLabel, buttonlink, description, sectionLabel } =
    usePrologueSectionData();

  return (
    <PrologueContainer>
      <PrologueContent ref={sections.prologue}>
        <SubTitle children={sectionLabel || ""} />
        <Text children={description || ""} />
        {buttonlink && buttonLabel && (
          <RedirectButton link={buttonlink} children={buttonLabel} />
        )}
      </PrologueContent>
    </PrologueContainer>
  );
}
