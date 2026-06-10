import { useState, useEffect } from "react";

export default function Navbar({ onOpenContact }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Industries", href: "#industries" },
    { label: "Our Clients", href: "#clients" },
  ];

  const openContact = () => {
    setIsMobileMenuOpen(false);
    onOpenContact();
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-[#504539]/40 ${
        isScrolled ? "bg-[#121416]/95 shadow-lg backdrop-blur-xl" : "bg-[#121416]/80 backdrop-blur-xl"
      }`}
    >
      <div className="flex justify-between items-center h-20 px-4 md:px-16 max-w-[1280px] mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            alt="EdGro Tech Logo"
            className="h-10 w-10 object-contain rounded"
            src="/logo-optimized.png"
            width="40"
            height="40"
          />
          <span className="text-[#f7bb74] font-semibold text-xl" style={{ fontFamily: 'Poppins, sans-serif' }}>EdGro Tech</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#d4c4b4] hover:text-[#f7bb74] transition-colors duration-200 text-sm font-semibold tracking-wider"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <button
          type="button"
          onClick={openContact}
          className="hidden md:inline-flex items-center justify-center px-6 py-3 rounded text-sm font-bold tracking-wide hover:opacity-90 transition-opacity active:scale-95"
          style={{
            background: "linear-gradient(to right, #C6904D, #E5B171)",
            color: "#472a00",
            fontFamily: 'Inter, sans-serif'
          }}
        >
          Get In Touch
        </button>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[#f7bb74]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="material-symbols-outlined text-3xl">
            {isMobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#1e2022] border-b border-[#504539]/50 px-4 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-[#d4c4b4] hover:text-[#f7bb74] text-base font-medium py-2 transition-colors"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            onClick={openContact}
            className="w-full text-center px-6 py-3 rounded text-sm font-bold mt-2 hover:opacity-90 transition-opacity"
            style={{
              background: "linear-gradient(to right, #C6904D, #E5B171)",
              color: "#472a00",
              fontFamily: 'Inter, sans-serif'
            }}
          >
            Get In Touch
          </button>
        </div>
      )}
    </nav>
  );
}
