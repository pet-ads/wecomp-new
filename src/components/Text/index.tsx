// Types
import { TextContainerProps } from "../../types/TextContainerProps.ts"

// Styles
import { TextContainer } from "./styles.ts"

export default function Text({children}: TextContainerProps){
  return (
      <TextContainer>{children}</TextContainer>
  )
}

