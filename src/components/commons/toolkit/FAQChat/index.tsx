import { Key, useEffect, useState } from "react";
import faqContent from "../../../../assets/content/faq";
import {
  ChatWrapper,
  ToggleButton,
  ChatBox,
  ChatContainer,
  MessageLeft,
  MessageRight,
  QuestionButtons,
  TypingIndicator,
} from "./styles";
import { FaCommentDots } from "react-icons/fa";
import LucasAvatar from "../../../../assets/icons/chat/lucas.png";

export default function FAQChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [chat, setChat] = useState<{ from: "user" | "lucas"; text: string }[]>([]);
  const [typing, setTyping] = useState(false);
  const [showFaqButtons, setShowFaqButtons] = useState(false);

  const toggleChat = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isOpen && chat.length === 0) {
      const welcomeMessage = {
        from: "lucas" as const,
        text: "Olá! Sou o professor Lucas Oliveira, do IFSP São Carlos. Aqui estão as perguntas frequentes.",
      };
      setChat([welcomeMessage]);
      setShowFaqButtons(true);
    }
  }, [isOpen]);

  const handleClick = (item: { question: string; answer: string }) => {
    setChat((prev) => [...prev, { from: "user", text: item.question }]);
    setTyping(true);
    setShowFaqButtons(false);

    setTimeout(() => {
      setTyping(false);
      setChat((prev) => [
        ...prev,
        { from: "lucas", text: item.answer },
      ]);
      setShowFaqButtons(true);
    }, 3000);
  };

  return (
    <ChatWrapper>
      <ToggleButton onClick={toggleChat}>
        <FaCommentDots size={20} />
      </ToggleButton>

      {isOpen && (
        <ChatBox>
          <ChatContainer>
            {chat.map((msg, index) =>
              msg.from === "lucas" ? (
                <MessageLeft key={index}>
                  <img src={LucasAvatar} alt="Lucas Oliveira" />
                  <span>{msg.text}</span>
                </MessageLeft>
              ) : (
                <MessageRight key={index}>{msg.text}</MessageRight>
              )
            )}

            {typing && <TypingIndicator>Lucas está digitando...</TypingIndicator>}

            {showFaqButtons && (
              <QuestionButtons>
                {faqContent.map((item: { question: any; answer?: string; }, index: Key | null | undefined) => (
                  <button key={index} onClick={() => item.answer !== undefined && handleClick(item as { question: string; answer: string })}>
                    {item.question}
                  </button>
                ))}
              </QuestionButtons>
            )}
          </ChatContainer>
        </ChatBox>
      )}
    </ChatWrapper>
  );
}
