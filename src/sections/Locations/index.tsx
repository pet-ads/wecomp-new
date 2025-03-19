import SubTitle from "../../components/ui/SubTitle";
import Map from "./subcomponents/Map";

import useSectionRefs from "../../hooks/references/useSectionRefs";
import useFetchLocationSection from "../../hooks/fetch/useFetchLocationSection";

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
    </LocalContainer>
  );
}
