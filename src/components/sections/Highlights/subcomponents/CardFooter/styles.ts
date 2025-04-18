import styled from "styled-components";

import ButtonContainer from "../../../../../styles/ButtonContainer";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  min-width: 100%;
  max-width: 100%;

  gap: 1rem;

  @media (max-width: 380px){
    flex-direction: column;
  }
`;

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const EventDescriptionButton = styled(ButtonContainer)<ButtonProps>``;
