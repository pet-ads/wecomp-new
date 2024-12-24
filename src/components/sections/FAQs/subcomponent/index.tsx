// Types
import { Container, Content } from "./styles";

// Styles
import { FAQProps } from "../../../../types/FAQ";

export default function FAQ({question, response}: FAQProps) {
    return (
        <Container>
            {question}
            <Content>
                {response}
            </Content>
        </Container>
    )
}