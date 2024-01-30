import ButtonGroup from "./components/card/buttonGroup/ButtonGroup";
import { Card, Header } from "./components/export";
import { Footer } from "./sections/export";
import "./styling/globals.scss";

export default function Home() {
  return (
    <main className="main min-h-screen">
      <Header />
      <Card />
      <ButtonGroup />
      <Footer />
    </main>
  );
}
