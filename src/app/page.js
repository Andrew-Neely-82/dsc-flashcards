import { Card, Header } from "./components/export";
import { Footer } from "./sections/export";
import "@/app/styling/globals.scss";

export default function Home() {
  return (
    <main className="main min-h-screen">
      <Header />
      <Card />
      <div className="footer-rule">
        <hr />
      </div>
      <Footer />
    </main>
  );
}
