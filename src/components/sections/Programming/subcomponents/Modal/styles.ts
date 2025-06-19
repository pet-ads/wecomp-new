import styled from "styled-components";
import { mq } from "../../../../../utils/responsive/breakpoints";
import { AiFillCloseCircle} from 'react-icons/ai';
import ButtonContainer from "../../../../../styles/ButtonContainer";
import { AiOutlinePlus } from 'react-icons/ai'; 


export const Container = styled.div`
position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: '1rem';
  border-radius: 1rem;
  background-color: var(--white-100);
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);

  max-height: 100%;
  ${mq({
      width: ["21rem", "21rem", "21rem", "21rem", "23rem", "23rem", "26rem"],
      height: ["10.5rem", "10.5rem", "11rem", "11.2rem", "11.5rem", "11.5rem", "14rem"],
      padding: ["1rem", "1rem", "1.2rem", "1.2rem", "1.2rem", "1.2rem", "1.5rem"],
    })}

  @media (orientation: landscape) {
    ${mq({
      width: ["21rem", "21rem", "21rem", "21rem", "21rem", "23rem", "26rem"],
      height: ["10.5rem", "10.5rem", "11rem", "11.2rem", "11.5rem", "11.5rem", "14rem"],
    })}
  }

`;

export const PlusIcon = styled(AiOutlinePlus)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  max-width: 1.5rem;
  min-width: 1.5rem;
  max-height: 1.5rem;
  min-height: 1.5rem;
  cursor: pointer;
  color: var(--primary-color); 
`;

export const ContainerFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  
  
`;

export const ConteinerHead = styled.div`
  
`;

export const ConteinerTitle = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 4px;
  margin-bottom: 0.5rem;
`;


export const ContainerEvent = styled.div``;

export const ContainerEventModal = styled.div`

`;

export const AbertoContainer = styled.div`
  top: 20vh;
  z-index: 100;
  width: auto;
  max-height: 100%;
  min-height: 100%;
  overflow: auto;
  padding: 60px 10%;
  position: relative;
  box-sizing: border-box;
  background-color: var(--white-100);

  @media (max-width: 767px) {
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

export const CloseButton = styled(AiFillCloseCircle)`
  width: 1.5rem;
  height: 1.5rem;
  right: 1rem;
  top: 1rem;
  position: absolute;

`;

export const ContainerMainModal = styled.div`
  display: flex;
  flex-direction:  row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  position: relative;
  overflow: hidden;
  width: 100%;
  `;

export const ContainerMain = styled.div`
  width: 100%;
  text-align: justify;
  ${mq({
     fontSize: ['0.8rem', '01rem', '1.2rem', '1.2rem', '1.2rem', '1.3rem', '1.5rem']    
   })}
`;

export const ContainerImagem = styled.div`
  width: 100%;
  
  display: flex;
  justify-content: center; 
  align-items: center;        
  margin-top: 2rem;
  
`;

export const TextSobre = styled.h3`
  margin-top: 2rem;
   ${mq({
     fontSize: ['0.8rem', '01rem', '1.2rem', '1.2rem', '1.2rem', '1.3rem', '1.5rem']     
   })}
  width: 100%;
`;


export const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
  gap: 0.5rem;
  

  text-align: justify;

  @media (max-width: 768px) {
    width: 100%;

    gap: 0.5rem;
  }
`;

export const EventImage = styled.img`
  width: 30%;
  
  object-fit: cover;
  display: block;
  
  border-radius: 10px;
  
`;

export const ContainerVacancies = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  min-width: 100%;
  max-width: 100%;

  
`;

export const ContainerBottom = styled.div`
  position: fixed;
  bottom: 0; 
  left: 0;
  padding: 1% 10%;
  min-width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: white; 
  z-index: 1000; 
`;

export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  right: 0;

`;

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
export const EventDescriptionButton = styled(ButtonContainer)<ButtonProps>``;

export const EventTitle = styled.div<{isOpen: boolean}>`
  display: inline-block;
  text-align: start;
  
  font-weight: bold;

  max-width: 100%;
  

  cursor: pointer;
  padding-right: 1rem;

  font-size: ${({ isOpen }) => isOpen 
  ? mq({ fontSize: ['0.7rem', '1.2rem', '1.2rem', '1.4rem', '1.7rem', '1.8rem', '2rem'] }) : mq({ fontSize: ['0.8rem', '0.9rem', '1.1rem', '1.1rem', '1.1rem', '1.2rem', '1.4rem'] }) };
  
  @media (max-width: 768px) {
    white-space: normal;
    overflow: visible;
    text-overflow: unset;
  };
`;

export const EventDetails = styled.div<{isOpen: boolean}>`
  font-size: ${({ isOpen }) => isOpen 
  ?  mq({ fontSize: ['0.8rem', '1rem', '1rem', '1.2rem', '1.2rem', '1.2rem', '1.4rem'] }) : mq({ fontSize: ['0.6rem', '0.6rem', '0.8rem', '0.8rem', '0.8rem', '0.8rem', '1rem']  }) };
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
  gap: 0.4rem;
  margin-top:  ${({ isOpen }) => isOpen 
  ? '1rem' : '-0.5rem'};
  ${mq({
      width: ["auto", "auto", "auto", "auto", "auto", "auto", "auto"],
      height: ["auto", "auto", "auto", "auto", "auto", "auto", "auto"],
    })}

`;
