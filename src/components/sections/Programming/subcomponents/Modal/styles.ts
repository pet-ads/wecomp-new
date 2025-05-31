import styled from "styled-components";
import { mq } from "../../../../../utils/responsive/breakpoints";
import { AiOutlineClose } from "react-icons/ai";
import ButtonContainer from "../../../../../styles/ButtonContainer";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 1.5rem;
  gap: 1rem;
  border-radius: 1rem;

  background-color: var(--white-100);
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);

    
  ${mq({
    width: ["10rem", "12rem", "14rem", "16rem", "16rem", "18rem", "20rem"],
    height: ["8rem", "8.5rem", "9rem", "9.2rem", "8.5rem", "9.5rem", "10rem"],
  })}

`;

export const ContainerEvent = styled.div`
`;

export const ContainerEventModal = styled.div``;

export const AbertoContainer = styled.div`
  top: 20vh;
  z-index: 100;
  width: auto;
  max-height: 100%;
  height: auto;
  left: 300px;
  overflow: auto;
  right: 300px;
  padding: 1rem 1rem 0 1rem;
  position: relative;
  box-sizing: border-box;
  background-color: var(--white-100);

  @media (max-width: 768px) {
    max-width: 100%;
    min-width: 100%;
    min-height: 100%;
    max-height: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: fixed;
  }
  @media (max-height: 686px) {
    max-width: 100%;
    min-width: 100%;
    min-height: 100%;
    max-height: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: fixed;
  }
`;

export const CloseButton = styled(AiOutlineClose)`
  
  margin-left: auto;
  width: 1rem;
  height: 1rem;
  
  
`;

export const ContainerMainModal = styled.div`
  display: flex;
  flex-direction:  row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-radius: 1rem;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 60%;
  @media (max-height: 701px) {
    min-height: 50%;
    max-height: 50%;
  }
  @media (max-height: 512px) {
    min-height: 30%;
    max-height: 30%;
    margin-top: 5%;
  }
  `;

export const ContainerMain = styled.div`
  width: 100%;
`;


export const InformationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;

  width: 60%;
  
  gap: 0.5rem;

  text-align: justify;

  @media (max-width: 768px) {
    width: 100%;

    gap: 1rem;
  }
`;

export const EventImage = styled.img`
  width: 30%;
  
  object-fit: cover;
  display: block;
  
  border-radius: 10px;
  
`;

export const ContainerVacancies = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 1rem;
  

  @media (max-height: 701px) {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    min-width: 100%;
    max-width: 100%;
  }

  
`;

export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
  gap: 1rem;
  margin-right: 2rem;

`;

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
export const EventDescriptionButton = styled(ButtonContainer)<ButtonProps>``;

export const EventTitle = styled.div<{isOpen: boolean}>`
  display: inline-block;
  text-align: start;
  
  font-weight: bold;

  max-width: 100%;


  cursor: pointer;

  font-size: ${({ isOpen }) => isOpen 
  ? '3rem' : mq({ fontSize: ['0.5rem', '0.8rem', '0.8rem', '1rem', '1rem', '1rem', '1.2rem'] }) };
  @media (max-width: 768px) {
    white-space: normal;
    overflow: visible;
    text-overflow: unset;
  };
`;

export const EventDetails = styled.div<{isOpen: boolean}>`
  font-size: ${({ isOpen }) => isOpen 
  ?  mq({ fontSize: ['0.5rem', '0.8rem', '0.8rem', '1rem', '1rem', '1rem', '1.2rem'] }) : mq({ fontSize: ['0.5rem', '0.5rem', '0.6rem', '0.6rem', '0.6rem', '0.6rem', '0.8rem'] }) };
  font-weight: 600;
`;

export const EventSpeakers = styled.div`
  font-size: 1rem;
  font-weight: 600;

  color: var(--gray-1000);
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: flex-start; 
  justify-content: space-between;
  gap: 0.1rem;
  margin-top: -1rem;

`;

export const Icon = styled.img`

  ${mq({
      width: ["1rem", "2rem", "2rem", "2rem", "2rem", "2rem", "2rem"],
    })}
  object-fit: contain;
  flex-shrink: 0;

`;

export const TagContainer = styled.div<{isOpen: boolean}>`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top:  ${({ isOpen }) => isOpen 
  ? '1rem' : '-0.5rem'};
  ${mq({
      width: ["1rem", "2rem", "2rem", "2rem", "2rem", "2rem", "5rem"],
      height: ["1rem", "2rem", "2rem", "2rem", "2rem", "2rem", "5rem"],
    })}

`;
