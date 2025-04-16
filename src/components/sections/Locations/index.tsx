import { Section } from "../../commons/structure/Section";
import SubTitle from "../../commons/toolkit/SubTitle";
import ArrowButton from "../../commons/toolkit/ArrowButton";
import Map from "./subcomponents/Map";

import locationContent from "../../../assets/content/location";

import { LocalContent, MapsContainer } from "./styles";

export default function Locations() {
  return (
    <Section sectionId="Locations">
      <LocalContent>
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
      <ArrowButton sectionId="Contact" />
    </Section>
  );
}
