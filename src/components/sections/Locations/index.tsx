import SubTitle from "../../ui/SubTitle";
import ArrowButton from "../../ui/ArrowButton";
import Map from "./subcomponents/Map";

import useSectionRefs from "../../../hooks/useSectionRefs";
import useFetchLocationSection from "../../../hooks/useFetchLocationSection";

import { LocalContainer, LocalContent, MapsContainer } from "./styles";

export default function Locations() {
  const { sections } = useSectionRefs();
  const { eventLocations } = useFetchLocationSection();

  return (
    <LocalContainer>
      <LocalContent ref={sections.Locations}>
        <SubTitle children="Locais do evento" />
        <MapsContainer>
          {eventLocations.map((local, index) => (
            <Map
              key={index}
              url={local.url}
              alt={`Location of the ${local.localName}`}
              address={local.address}
              localName={local.localName}
            />
          ))}
        </MapsContainer>
      </LocalContent>
      <ArrowButton sectionRef={sections.Contact} />
    </LocalContainer>
  );
}
