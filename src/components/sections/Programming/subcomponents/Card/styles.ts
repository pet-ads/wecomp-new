import styled from "styled-components";
import { mq } from "../../../../../utils/responsive/breakpoints";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start; 
  gap: 0.5rem;



  padding: 1.5rem;

  border-radius: 1rem;

  background-color: var(--white-100);
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);

  
  overflow: hidden; 

  

  ${mq({
      width: [ "34rem"],
      height: [ "22rem"],
    })}

    @media (orientation: landscape) and (max-width: 930px) {
      ${mq({
      width: [ "34rem"],
      height: [ "22rem"],
    })}}
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 1rem;
`;

export const Icon = styled.img``;

export const EventTitle = styled.div`
  max-width: 100%;

  height: auto;

  font-size: 1.25rem;
  font-weight: bold;

  text-align: justify;

   ${mq({
          fontSize: ["0.8rem", "0.8rem", "0.8rem", "0.8rem", "1rem", "1rem", "1.2rem"],
        })}
`;
