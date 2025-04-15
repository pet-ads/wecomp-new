import SubTitle from "../../components/ui/SubTitle";
import Map from "./subcomponents/Map";

import useSectionRefs from "../../hooks/references/useSectionRefs";
import useFetchLocationSection from "../../hooks/fetch/useFetchLocationSection";

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
<<<<<<< HEAD:src/components/sections/Locations/index.tsx
      <ArrowButton sectionId="Contact" />
    </Section>
=======
    </LocalContainer>
>>>>>>> development:src/sections/Locations/index.tsx
  );
}
