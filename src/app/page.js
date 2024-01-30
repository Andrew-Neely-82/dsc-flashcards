import "@/app/globals.scss";
import { Card } from "./components/export";
import { Footer } from "./sections/export";

export default function Home() {
  return (
    <main className="main min-h-screen">
      <div className="title-wrapper">
        <hr />
        <h1 className="title">DSC Flashcards</h1>
        <hr />
      </div>
      <div>
        <Card />
      </div>
      <div className="footer-rule">
        <hr />
      </div>
      <Footer />
    </main>
  );
}
