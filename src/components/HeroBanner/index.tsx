import {
  LogoContainer,
  EventDate,
  HighlightedText,
  EventLogo,
} from "./styles";

export const HeroBanner = () => {
  return (
    <LogoContainer>
      <EventLogo
        src="src/assets/images/wecompLogo.png"
        alt="Logo de apresentação"
      />
      <EventDate>
        <HighlightedText>VI Semana da Computação</HighlightedText>
        Dia da semana da computação
      </EventDate>
    </LogoContainer>
  );
};
