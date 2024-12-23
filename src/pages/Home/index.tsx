// Components
import Header from "../../components/Header";
import HeroBanner from "../../components/sections/HeroBanner";
import Prologue from "../../components/sections/Prologue";
import Supporters from "../../components/sections/Supporters";
import Programming from "../../components/sections/Programming";
import Locations from "../../components/sections/Locations";
import Highlights from "../../components/sections/Highlights";
import Contact from "../../components/sections/Contact";
import Editions from "../../components/sections/Editions";
import FAQs from "../../components/sections/FAQs";
import Footer from "../../components/Footer";

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
