import styled from "styled-components";

export const Container = styled.section<{ background: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;

  min-width: 100%;
  max-width: 100%;

  min-height: 100vh;

  padding: 2rem 0;

  background: ${(props) =>
    props.background ? "var(--gray-200)" : "var(--green-700)"};
`;
