

// Types
import { ProgrammingProps } from "../../../../../types/Programming";

// Styles
import {
    HeaderContainer,
    InfoContainer,
    Title,
    StatusInfoContainer,
    StatusContainer,
    ClassificationContainer,
    Image,
    ImageContainer,

    
  } from "./styles";

  import StrongParagraph from "../../../../ui/StrongParagraph";


export default function InfoCard(props: ProgrammingProps){
    const { name, location, date, time, author, status, classification, image, imageDescription} = props; 

    return(
        <HeaderContainer>
            <InfoContainer>
                <Title>{name}</Title>
                {location} | {date} | {time}
                <StrongParagraph>{author}</StrongParagraph>
                <StatusInfoContainer>
                <StatusContainer>{status}</StatusContainer>
                <ClassificationContainer>{classification}</ClassificationContainer>
                </StatusInfoContainer>
            </InfoContainer>

            <ImageContainer>
                <Image src={image} alt={imageDescription} />
            </ImageContainer>
        </HeaderContainer>

    );

}