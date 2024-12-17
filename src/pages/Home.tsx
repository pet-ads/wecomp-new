// Components
import { Header } from "../components/Header";
import { HeroBanner } from "../components/HeroBanner";
import Programming from "../components/Programming";
import { Prologue } from "../components/Prologue";
import Supporters from "../components/Supporters";

export default function Home() {
  return (
    <>
      <Header />
      <HeroBanner />
      <Prologue />
      <Supporters />
      <Programming/>
    </>
  );
}
