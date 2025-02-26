

// Types
import { ProgrammingProps } from "../../../../types/Programming";


import InfoCard from "./InfoCard";
import DescriptionCard from "./DescriptionCard";

// Styles
import {
  Container,
} from "./styles";



// Componente Card
export default function Card({
  id,
  name,
  image,
  imageDescription,
  bio,
  author,
  date,
  time,
  link,
  vacancies,
  location,
  status,
  classification,
  description,
  programmingIcon
}: ProgrammingProps) {
 

  return (
    <Container key={id}>
      <InfoCard 
        id={id}
        programmingIcon={programmingIcon}
        name={name}
        image={image}
        imageDescription={imageDescription}
        bio={bio}
        author={author}
        date={date}
        time={time}
        link={link}
        vacancies={vacancies}
        location={location}
        status={status}
        classification={classification}
        description={description}
      />
      <DescriptionCard 
        id={id}
        programmingIcon={programmingIcon}
        name={name}
        image={image}
        imageDescription={imageDescription}
        bio={bio}
        author={author}
        date={date}
        time={time}
        link={link}
        vacancies={vacancies}
        location={location}
        status={status}
        classification={classification}
        description={description}
        
      />
      
    </Container>
  );
}