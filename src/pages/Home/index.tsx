// Components
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HeroBanner from "../../components/sections/HeroBanner";
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
        <Locations/>
      </Main>
      <Footer/>
    </>
  );
}
