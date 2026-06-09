import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Industries from "./components/Industries";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  return (
    <div className="bg-background text-on-background font-body-md antialiased min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Industries />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
