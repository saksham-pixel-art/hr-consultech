import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Industries from "./components/Industries";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import ContactModal from "./components/ContactModal";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  return (
    <div className="bg-background text-on-background font-body-md antialiased min-h-screen">
      <Navbar onOpenContact={openContact} />
      <main>
        <Hero onOpenContact={openContact} />
        <About />
        <Services />
        <Industries />
        <Clients />
        <Contact onOpenContact={openContact} />
      </main>
      <Footer />
      <ContactModal isOpen={isContactOpen} onClose={closeContact} />
    </div>
  );
}
