// Components
import SubTitle from "../../ui/SubTitle";
import Text from "../../ui/Text";
import RedirectButton from "../../ui/RedirectButton";
import ArrowButton from "../../ui/ArrowButton";

// Hooks
import useSectionRefs from "../../../hooks/useSectionRefs";
import useFetchPrologueSection from "../../../hooks/useFetchPrologueSection";

// Styles
import { PrologueContainer, PrologueContent } from "./styles";

export default function Prologue() {
  const { sections } = useSectionRefs();
  const { prologueInformation } = useFetchPrologueSection();

  return (
    <PrologueContainer>
      <PrologueContent ref={sections.prologue}>
        <SubTitle children={prologueInformation?.sectionLabel || ""} />
        <Text children={prologueInformation?.description || ""} />
        {prologueInformation?.buttonlink &&
          prologueInformation?.buttonLabel && (
            <RedirectButton
              link={prologueInformation?.buttonlink}
              children={prologueInformation?.buttonLabel}
            />
          )}
      </PrologueContent>
      <ArrowButton sectionRef={sections.supporters} />
    </PrologueContainer>
  );
}
