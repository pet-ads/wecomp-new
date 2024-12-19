import styled from "styled-components";

export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


  min-width: 100%;
  max-width: 100%;

  height: fit-content;
  min-height: 100vh;

  padding: 2rem 0;

  background-color: blue;
`;

export const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  min-width: 80%;
  max-width: 80%;

  height: fit-content;

  padding: 2rem 0;

  background-color: orange;

  overflow-wrap: break-word;
  line-height: 1.6;
`;
