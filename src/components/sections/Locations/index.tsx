// Styles
import SubTitle from "../../ui/SubTitle";
import { LocalContainer, LocalContent, MapsContainer, Map } from "./styles";


export default function Locations() {
  return (
    <LocalContainer>
      <LocalContent>
        <SubTitle children="Locais do evento" />
        <MapsContainer>
          <Map>map1</Map>
          <Map>map2</Map>
        </MapsContainer>
      </LocalContent>
    </LocalContainer>
  );
}