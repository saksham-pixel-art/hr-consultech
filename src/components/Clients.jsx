import { useState } from "react";

const POPPINS = { fontFamily: 'Poppins, sans-serif' };
const INTER = { fontFamily: 'Inter, sans-serif' };

const testimonials = [
  {
    quote: "EdGro Tech's precision in matching elite candidates with our specific corporate culture has been unparalleled. They are more than recruiters; they are strategic partners in our growth.",
    author: "VP of Talent Acquisition",
    company: "Leading IT Consulting Firm",
  },
  {
    quote: "We secured key leadership hires through EdGro's executive search division. Their discretion, market intelligence, and speed exceeded our expectations by a wide margin.",
    author: "Chief Human Resources Officer",
    company: "Global FinTech Leader",
  },
  {
    quote: "Their campus recruitment drive brought us some of the brightest minds in engineering. The caliber of candidates presented was exceptionally high and culturally aligned.",
    author: "Director of Engineering",
    company: "Salty",
  },
];

export default function Clients() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1));
  const next = () => setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1));

  return (
    <section id="clients" className="py-24" style={{ background: "#1A1C1E" }}>
      <div className="max-w-[1280px] mx-auto px-4 md:px-16">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-16 h-1 rounded-full mx-auto mb-6" style={{ background: "linear-gradient(to right, #C6904D, #E5B171)" }} />
          <h2 style={{ ...POPPINS, fontSize: '32px', fontWeight: 600, lineHeight: 1.2, color: '#e2e2e5' }}>
            Corporate Partners &amp; Clients
          </h2>
          <p style={{ ...INTER, fontSize: '16px', lineHeight: 1.7, color: '#d4c4b4', marginTop: '16px' }}>
            Trusted by industry giants to source the talent that drives their success.
          </p>
        </div>

        {/* Partner Logos */}
        <div className="flex justify-center mb-16">
          <div
            className="flex items-center justify-center px-6 py-6 md:px-12 md:py-10 rounded-xl border"
            style={{ background: "#1e2022", borderColor: "#504539" }}
          >
            <img
              src="/clients-optimized.jpg"
              alt="TCS, Infosys, and Salty client logos"
              className="w-full max-w-[720px] rounded-lg object-contain"
              width="720"
              height="538"
              loading="lazy"
            />
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div
          className="relative p-10 rounded-xl border overflow-hidden"
          style={{ background: "#1e2022", borderColor: "#504539" }}
        >
          {/* Decorative quote */}
          <div className="absolute top-6 right-8 opacity-10 pointer-events-none">
            <span className="material-symbols-outlined" style={{ fontSize: '80px', color: '#f7bb74' }}>format_quote</span>
          </div>

          <h3 style={{ ...POPPINS, fontSize: '22px', fontWeight: 600, color: '#e2e2e5', textAlign: 'center', marginBottom: '36px' }}>
            What Our Partners Say
          </h3>

          <div className="flex items-center gap-4">
            <button
              onClick={prev}
              className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-200 hover:border-[#C6904D] hover:text-[#f7bb74]"
              style={{ borderColor: "#504539", color: "#9d8e80" }}
              aria-label="Previous"
            >
              <span className="material-symbols-outlined">chevron_left</span>
            </button>

            <div className="flex-1 text-center px-4" style={{ minHeight: '180px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <p style={{ ...INTER, fontSize: '17px', lineHeight: 1.75, color: '#e2e2e5', fontStyle: 'italic', marginBottom: '24px' }}>
                "{testimonials[active].quote}"
              </p>
              <p style={{ ...INTER, fontSize: '14px', fontWeight: 700, color: '#f7bb74', letterSpacing: '0.05em' }}>
                {testimonials[active].author}
              </p>
              <p style={{ ...INTER, fontSize: '12px', color: '#9d8e80', marginTop: '4px' }}>
                {testimonials[active].company}
              </p>
            </div>

            <button
              onClick={next}
              className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-200 hover:border-[#C6904D] hover:text-[#f7bb74]"
              style={{ borderColor: "#504539", color: "#9d8e80" }}
              aria-label="Next"
            >
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Testimonial ${i + 1}`}
                className="rounded-full transition-all duration-300"
                style={{
                  width: active === i ? '28px' : '10px',
                  height: '10px',
                  background: active === i ? '#f7bb74' : '#504539',
                }}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
