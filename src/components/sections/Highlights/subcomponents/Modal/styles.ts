import styled from "styled-components";
import { mq } from "../../../../../utils/responsive/breakpoints";
import { AiOutlineClose } from "react-icons/ai";
import ButtonContainer from "../../../../../styles/ButtonContainer";

export const Container = styled.div<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${({ isOpen }) => (isOpen ? '0rem' : '1rem')};
  border-radius: 1rem;
  background-color: var(--white-100);
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);

  ${mq({
    width: ["13rem", "15rem", "16.5rem", "17rem", "17rem", "17rem", "20rem"],
    minHeight: ["15.2rem", "14rem", "12rem", "12.5rem", "13rem", "12.5rem", "13.5rem"],
    padding: ["1rem", "1rem", "1.2rem", "1.2rem", "1.2rem", "1.2rem", "1.5rem"],
  })}

  max-height: 100%;

  @media (orientation: landscape) and (max-width: 930px) {
    ${mq({
      width: ["8rem", "7rem", "12rem", "17rem", "17rem", "19rem", "20rem"],
      minHeight: ["8.5rem", "10rem", "10rem", "12rem", "13rem", "13rem", "13.5rem"],
    })}
  }
`;

export const ContainerEvent = styled.div``;

export const AbertoContainer = styled.div`
  top: 20vh;
  z-index: 100;
  width: auto;
  max-height: 100%;
  height: auto;
  left: 300px;
  overflow: auto;
  right: 300px;
  padding: 50px 9%;
  position: relative;
  box-sizing: border-box;
  background-color: var(--white-100);

  @media (max-width: 768px),
         (max-height: 686px) {
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

  @media (orientation: landscape) and (max-height: 400px) {
    padding: 20px 5%;
  }
`;

export const InformationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
  width: 60%;
  text-align: justify;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const EventImage = styled.img`
  width: 30%;
  height: fit-content;
  max-width: 150px;
  object-fit: cover;
  display: block;
  border-radius: 10px;
`;

export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
export const EventDescriptionButton = styled(ButtonContainer)<ButtonProps>`
  max-width: 100%;
  width: fit-content; /* ou width: 100% para ocupar tudo */
`;

export const EventTitle = styled.div<{ isOpen: boolean }>`
  display: inline-block;
  text-align: start;
  font-weight: bold;
  max-width: 100%;
  cursor: pointer;

  ${({ isOpen }) => isOpen && 'margin-bottom: 10px;'}

  font-size: ${({ isOpen }) => (isOpen ? '1.6rem' : '1rem')};

  @media (max-width: 600px) {
    font-size: ${({ isOpen }) => (isOpen ? '1.6rem' : '0.9rem')};
  }

  @media (max-width: 480px) {
    font-size: ${({ isOpen }) => (isOpen ? '1.2rem' : '0.8rem')};
  }

  @media (max-width: 768px) {
    font-size: ${({ isOpen }) => (isOpen ? '1.6rem' : '0.9rem')};
    white-space: normal;
    overflow: visible;
    text-overflow: unset;
  }
`;

export const EventDetails = styled.div`
  font-size: 1rem;
  font-weight: 600;
`;

export const EventSpeakers = styled.div<{ isOpen: boolean }>`
  ${({ isOpen }) => isOpen && 'margin-bottom: 10px;'}
  font-size: 1rem;
  font-weight: 600;
  color: var(--gray-1000);
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 8px;
  gap: 1rem;
`;

export const Icon = styled.img``;

export const TagContainer = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: ${({ isOpen }) => (isOpen ? '0rem' : '-0.5rem')};
  
  ${mq({
    width: ["auto", "auto", "auto", "auto", "auto", "auto", "auto"],
    height: ["auto", "auto", "auto", "auto", "auto", "auto", "auto"],
  })}
`;

export const BoxTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const BoxHead = styled.div``;

export const BoxFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap; /* Permite quebrar linha */
  gap: 0.5rem; /* Espaçamento entre os itens */

  width: 100%; /* Ocupa toda a largura disponível */

  @media (max-width: 480px) {
    flex-direction: column-reverse;
    align-items: flex-start;
    gap: 0.75rem;
    margin-top: 1rem;
  }
`;

export const CloseButton = styled(AiOutlineClose)`
  position: relative;
  left: 100%;
  transform: translateX(-100%);
  margin-left: auto;
  width: 1.1rem;
  height: 1.1rem;
`;


export const ContainerVacancies = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  width: 100%;
  margin-top: 1rem;
  flex-wrap: nowrap;
`;

export const ContainerMainModal = styled.div`
  width: 100%;
  margin-top: 1rem;
`;

export const ContainerMain = styled.div`
  width: 100%;
`;

export const ContainerLogoTag = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;
