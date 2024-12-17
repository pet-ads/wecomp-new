// Components
import Header from "../components/Header";
import HeroBanner from "../components/HeroBanner";
import Prologue from "../components/Prologue";
import Supporters from "../components/Supporters";

// Styles
 import { Sections } from "../styles/Sections";

export default function Home() {
  return (
    <>
      <Header />
      <HeroBanner />
      <Sections>
        <Prologue />
        <Supporters />
      </Sections>
    </>
  );
}
