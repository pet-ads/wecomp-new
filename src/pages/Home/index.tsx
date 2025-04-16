import {
  Header,
  HeroBanner,
  About,
  Sponsors,
  Organization,
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
        <About />
        <Sponsors />
        <Organization />
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
