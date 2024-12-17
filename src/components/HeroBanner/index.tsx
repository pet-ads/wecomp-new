import {
  LogoContainer,
  EventDate,
  HighlightedText,
  EventLogo,
} from "./styles";

export default function HeroBanner(){
  return (
    <LogoContainer>
      <EventLogo
        src="images/wecompLogo.svg"
        alt="Logo de apresentação"
      />
      <EventDate>
        <HighlightedText>VI Semana da Computação</HighlightedText>
        Dia da semana da computação
      </EventDate>
    </LogoContainer>
  );
};
