import SubTitle from "../../ui/SubTitle";
import ArrowButton from "../../ui/ArrowButton";
import Map from "./subcomponents/Map";

import useSectionRefs from "../../../hooks/references/useSectionRefs";

import locationContent from "../../../assets/content/location";

import { LocalContainer, LocalContent, MapsContainer } from "./styles";

export default function Locations() {
  const { sections } = useSectionRefs();

  return (
    <LocalContainer>
      <LocalContent ref={sections.Locations}>
        <SubTitle children="Locais do evento" />
        <MapsContainer>
          {locationContent.map((local, index) => (
            <Map
              key={index}
              url={local.url}
              alt={`Imagem do local ${local.name}`}
              address={local.address}
              name={local.name}
            />
          ))}
        </MapsContainer>
      </LocalContent>
      <ArrowButton sectionRef={sections.Contact} />
    </LocalContainer>
  );
}
