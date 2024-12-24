// Components
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Contact from "../../components/sections/Contact";
import Editions from "../../components/sections/Editions";
import HeroBanner from "../../components/sections/HeroBanner";
import FAQs from "../../components/sections/FAQs";
import Highlights from "../../components/sections/Highlights";
import Locations from "../../components/sections/Locations";
import Programming from "../../components/sections/Programming";
import Prologue from "../../components/sections/Prologue";
import Supporters from "../../components/sections/Supporters";

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
        <Locations />
        <Highlights />
        <Contact />
        <Editions />
        <FAQs/>
      </Main>
      <Footer />
    </>
  );
}
