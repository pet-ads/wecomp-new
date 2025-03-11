import SubTitle from "../../ui/SubTitle";
import ArrowButton from "../../ui/ArrowButton";

import useSectionRefs from "../../../hooks/useSectionRefs";

import { LocalContainer, LocalContent, MapsContainer, Map } from "./styles";

export default function Locations() {
  const { sections } = useSectionRefs();

  return (
    <LocalContainer>
      <LocalContent ref={sections.Locations}>
        <SubTitle children="Locais do evento" />
        <MapsContainer>
          <Map src="">map1</Map>
          <Map>map2</Map>
        </MapsContainer>
      </LocalContent>
      <ArrowButton sectionRef={sections.Contact} />
    </LocalContainer>
  );
}
