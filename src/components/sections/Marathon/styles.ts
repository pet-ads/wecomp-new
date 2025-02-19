// External Library
import styled from "styled-components";

// Styles
import {
  SectionContainer,
  SectionContent,
} from "../../../styles/SectionContainer";

export const MarathonContainer = styled(SectionContainer)`
  background: var(--background-color);
`;

export const MarathonContent = styled(SectionContent)`
  background: var(--background-color);
  padding-top: 1rem;
`;

export const MarathonCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch; 
  flex-wrap: wrap;

  gap: 2rem;

  width: 100%;

  min-height: 40%;

  padding: 1rem 0; 

  margin: 1rem 0; 
`;

export const MarathonCard = styled.div`
  background: var(--background-color);
  padding: 1.5rem;

  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  text-align: center;

  max-width: 400px;
  width: 100%; 

  min-height: 300px; 
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
`;

export const CardButton = styled.a`
  display: inline-block;
  margin-top: 1rem;
  padding: 0.5rem 1rem;

  background-color: var(--secundary-text-color);
  color: white;

  border-radius: 4px;

  transition: background 0.3s;

  &:hover {
    background-color: var(--background-color);
  }
`;

export const ScheduleTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;

  td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }

  tr:nth-child(even) {
    background-color: var(--background-color);
  }
`;
