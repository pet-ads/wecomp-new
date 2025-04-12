import styled from "styled-components";

export const Container = styled.section<{ background: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;

  min-width: 100vw;
  max-width: 100vw;

  min-height: 100vh;

  padding: 2rem 0;

  background: ${(props) =>
    props.background ? "var(--background-color)" : "var(--primary-color)"};
`;
