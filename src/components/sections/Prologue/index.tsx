import SubTitle from "../../ui/SubTitle";
import Text from "../../ui/Text";
import RedirectButton from "../../ui/RedirectButton";

import useSectionRefs from "../../../hooks/useSectionRefs";
import useFetchPrologueSection from "../../../hooks/useFetchPrologueSection";

import { PrologueContainer, PrologueContent } from "./styles";

export default function Prologue() {
  const { sections } = useSectionRefs();
  const { buttonLabel, buttonlink, description, sectionLabel } =
    useFetchPrologueSection();

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
