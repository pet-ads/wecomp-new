// Components
import SubTitle from "../../ui/SubTitle";
import ArrowButton from "../../ui/ArrowButton";

// Hooks
import useSectionRefs from "../../../hooks/useSectionRefs";
import useMarathonData from "../../../hooks/useMarathonData";


// Styles
import {
  MarathonCardContainer,
  MarathonContainer,
  MarathonContent,
  MarathonCard,
  ScheduleTable,
} from "./styles";
import Text from "../../ui/Text";
import RedirectButton from "../../ui/RedirectButton";

export default function Marathon() {
  const { sections } = useSectionRefs();
  const marathonData = useMarathonData();
  const marathon = marathonData[0];

  return (
    <MarathonContainer>
      <MarathonContent ref={sections.Marathon}>
        <SubTitle>{marathon.title}</SubTitle>
        <MarathonCardContainer>
          <MarathonCard>
            <Text children={marathon.definition} />  
            <RedirectButton  link={marathon.link} children="Ver mais" />  
          </MarathonCard>
          
          <MarathonCard>
            <Text children="Cronograma" />
            <ScheduleTable>
              <tbody>
                {marathon.schedule.map((event: { time: string; activity: string }, index: number) => (
                  <tr key={index}>
                    <td>{event.time}</td>
                    <td>{event.activity}</td>
                  </tr>
                ))}
              </tbody>
            </ScheduleTable>
          </MarathonCard>
        </MarathonCardContainer>
        <ArrowButton sectionRef={sections.Highlights} />
      </MarathonContent>
    </MarathonContainer>
  );
}

