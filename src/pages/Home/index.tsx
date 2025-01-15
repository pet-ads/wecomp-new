// Components
import {
  Header,
  HeroBanner,
  Prologue,
  Supporters,
  Programming,
  Marathon,
  Highlights,
  Locations,
  Contact,
  Editions,
  FAQs,
  Footer,
} from "../../dto";

// Styles
import { Main } from "./styles";

export default function Home() {
  return (
    <>
      <Header />
      <HeroBanner />
      <Main>
        <Prologue />
        <Supporters />
        <Programming />
        <Marathon />
        <Highlights />
        <Locations />
        <Contact />
        <Editions />
        <FAQs />
      </Main>
      <Footer />
    </>
  );
}
