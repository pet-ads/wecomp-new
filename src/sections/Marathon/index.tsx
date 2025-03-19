import SubTitle from "../../components/ui/SubTitle";

import useSectionRefs from "../../hooks/references/useSectionRefs";
import useMarathonSectionData from "../../hooks/fetch/useMarathonSectionData";

import {
  MarathonCardContainer,
  MarathonContainer,
  MarathonContent,
  MarathonCard,
  MarathonIcon,
  MarathonCardTitle,
  MarathonCardDef,
  ScheduleTable,
} from "./styles";
import RedirectButton from "../../components/ui/RedirectButton";

export default function Marathon() {
  const { sections } = useSectionRefs();
  const marathonData = useMarathonSectionData();
  const marathon = marathonData[0];

  return (
    <MarathonContainer>
      <MarathonContent ref={sections.Marathon}>
        <SubTitle>{marathon.title}</SubTitle>
        <MarathonCardContainer>
          <MarathonCard>
            <MarathonIcon>
              <img
                src="src/assets/icons/programming/iconMarathon1.svg"
                alt=""
              />
            </MarathonIcon>
            <MarathonCardTitle>
              <h2>O que é InterIF ?</h2>
            </MarathonCardTitle>
            <MarathonCardDef>
              <p>{marathon.definition}</p>
            </MarathonCardDef>
            <RedirectButton link={marathon.link} children="Ver mais" />
          </MarathonCard>

          <MarathonCard>
            <MarathonIcon>
              <img
                src="src/assets/icons/programming/iconMarathon2.svg"
                alt=""
              />
            </MarathonIcon>

            <MarathonCardTitle>
              <h2>Cronograma</h2>
            </MarathonCardTitle>
            <ScheduleTable>
              <tbody>
                {marathon.schedule.map(
                  (
                    event: { time: string; activity: string },
                    index: number
                  ) => (
                    <tr key={index}>
                      <td>{event.time}</td>
                      <td>{event.activity}</td>
                    </tr>
                  )
                )}
              </tbody>
            </ScheduleTable>
            <RedirectButton link={marathon.link} children="Ver mais" />
          </MarathonCard>
        </MarathonCardContainer>
      </MarathonContent>
    </MarathonContainer>
  );
}
