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
      <ArrowButton sectionRef={sections.supporters} />
    </PrologueContainer>
  );
}
