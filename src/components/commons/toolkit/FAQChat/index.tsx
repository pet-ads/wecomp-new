import { Key, useEffect, useState, useRef } from "react";
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

const welcomeMessage = {
  from: "lucas" as const,
  text: "Olá! Sou o professor Lucas Oliveira, do IFSP São Carlos. Aqui estão as perguntas frequentes.",
};

export default function FAQChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [chat, setChat] = useState<{ from: "user" | "lucas"; text: string }[]>(
    []
  );
  const [typing, setTyping] = useState(false);
  const [showFaqButtons, setShowFaqButtons] = useState(false);
  const buttonRef = useRef<HTMLDivElement | null>(null);

  const toggleChat = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      buttonRef.current &&
      !buttonRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  const handleClick = (item: { question: string; answer: string }) => {
    setChat((prev) => [...prev, { from: "user", text: item.question }]);
    setTyping(true);
    setShowFaqButtons(false);

    setTimeout(() => {
      setTyping(false);
      setChat((prev) => [...prev, { from: "lucas", text: item.answer }]);
      setShowFaqButtons(true);
    }, 3000);
  };

  useEffect(() => {
    if (isOpen && chat.length === 0) {
      setChat([welcomeMessage]);
      setShowFaqButtons(true);
    }
  }, [isOpen, chat.length]);

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chat]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <ChatWrapper>
      <ToggleButton onClick={toggleChat}>
        <FaCommentDots size={20} />
      </ToggleButton>

      {isOpen && (
        <ChatBox>
          <ChatContainer>
            {chat.map((msg, index) => {
              const isLast = index === chat.length - 1;
              return msg.from === "lucas" ? (
                <MessageLeft key={index}>
                  <img src={LucasAvatar} alt="Lucas Oliveira" />
                  <span ref={isLast ? buttonRef : null}>{msg.text}</span>
                </MessageLeft>
              ) : (
                <MessageRight key={index} ref={isLast ? buttonRef : null}>
                  {msg.text}
                </MessageRight>
              );
            })}
            {typing && (
              <TypingIndicator>Lucas está digitando...</TypingIndicator>
            )}
            {showFaqButtons && (
              <QuestionButtons>
                {faqContent.map(
                  (
                    item: { question: string; answer?: string },
                    index: Key | null | undefined
                  ) => (
                    <button
                      key={index}
                      onClick={() =>
                        item.answer !== undefined &&
                        handleClick(
                          item as { question: string; answer: string }
                        )
                      }
                    >
                      {item.question}
                    </button>
                  )
                )}
              </QuestionButtons>
            )}
            <div ref={buttonRef} />
          </ChatContainer>
        </ChatBox>
      )}
    </ChatWrapper>
  );
}
