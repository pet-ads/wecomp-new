import styled from "styled-components";

export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;

  min-width: 100%;
  max-width: 100%;

  min-height: 100vh;

  padding: 2rem 0;

  background: var(--gray-200);
`;

export const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-width: 80%;
  max-width: 80%;

  height: 100%;

  background: var(--gray-200);

  overflow-wrap: break-word;
  line-height: 1.6;
`;
