import {
  Header,
  HeroBanner,
  Prologue,
  Supporters,
  Directors,
  Programming,
  Marathon,
  Highlights,
  Locations,
  Contact,
  Editions,
  FAQs,
  Footer,
} from "../../dto";

import { Main } from "./styles";

export default function Home() {
  return (
    <>
      <Header />
      <HeroBanner />
      <Main>
        <Prologue />
        <Supporters />
        <Directors/>
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
