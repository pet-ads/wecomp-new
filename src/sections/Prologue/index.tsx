import SubTitle from "../../components/ui/SubTitle";
import Text from "../../components/ui/Text";
import RedirectButton from "../../components/ui/RedirectButton";
import { useScrollToNext } from "../../hooks/useScrollToNext";
import usePrologueSectionData from "../../hooks/fetch/usePrologueSectionData";

import { PrologueContainer, PrologueContent, ArrowDown } from "./styles";

export default function Prologue() {
  const { sectionRef, scrollToNextSection } = useScrollToNext();
  const { buttonLabel, buttonlink, description, sectionLabel } = usePrologueSectionData();

  return (
    <PrologueContainer ref={sectionRef as React.RefObject<HTMLElement>} className="section">
      <PrologueContent>
        <SubTitle>{sectionLabel || ""}</SubTitle>
        <Text>{description || ""}</Text>
        {buttonlink && buttonLabel && <RedirectButton link={buttonlink}>{buttonLabel}</RedirectButton>}
      </PrologueContent>
      <ArrowDown onClick={scrollToNextSection}>▼</ArrowDown>
    </PrologueContainer>
  );
}
