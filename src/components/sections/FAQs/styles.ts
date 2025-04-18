import styled from "styled-components";

export const ChatWrapper = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 1000;
`;

export const ToggleButton = styled.button`
  background-color: #4b6cb7;
  border: none;
  color: white;
  padding: 1rem;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
`;

export const ChatBox = styled.div`
  width: 340px;
  max-height: 500px;
  background-color: #ffffff;
  border-radius: 1rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border: 1px solid #e0e0e0;

  @media (max-width: 400px) {
    width: 90vw;
  }
`;

export const ChatContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  padding: 1rem;
`;

export const MessageLeft = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  max-width: 80%;

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
  }

  span {
    background-color: #f1f1f1;
    color: #222;
    padding: 0.6rem 1rem;
    border-radius: 0 1rem 1rem 1rem;
    font-size: 0.9rem;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  }
`;

export const MessageRight = styled.div`
  align-self: flex-end;
  background-color: #dcf8c6;
  color: #222;
  padding: 0.6rem 1rem;
  border-radius: 1rem 0 1rem 1rem;
  font-size: 0.9rem;
  max-width: 80%;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
`;

export const QuestionButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 0.3rem;
  justify-content: flex-start;

  button {
    cursor: pointer;
    background-color: #ffffff;
    border: 1px solid #dcdcdc;
    padding: 0.4rem 0.8rem;
    border-radius: 999px;
    font-size: 0.75rem;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: #f1f1f1;
    }
  }
`;


export const TypingIndicator = styled.div`
  font-size: 0.75rem;
  color: #999;
  margin-left: 2.5rem;
`;
