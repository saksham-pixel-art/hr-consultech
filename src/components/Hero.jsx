export default function Hero({ onOpenContact }) {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-44 md:pb-36 overflow-hidden"
      style={{ background: "#0F1113" }}
    >
      {/* Ambient glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-10 pointer-events-none blur-3xl" style={{ background: "radial-gradient(circle, #C6904D, transparent)" }} />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full opacity-5 pointer-events-none blur-3xl" style={{ background: "radial-gradient(circle, #f7bb74, transparent)" }} />

      <div className="max-w-[1280px] mx-auto px-4 md:px-16 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#C6904D]/30 bg-[#C6904D]/10">
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#f7bb74" }} />
            <span className="text-xs font-semibold tracking-widest text-[#f7bb74]" style={{ fontFamily: 'Inter, sans-serif' }}>
              PREMIUM TALENT SOLUTIONS
            </span>
          </div>

          {/* Headline */}
          <h1 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.02em', color: '#e2e2e5' }}
            className="text-4xl md:text-6xl"
          >
            We Connect{" "}
            <span className="shimmer-text">Right Talent</span>
            <br />
            <span style={{ color: '#e2e2e5' }}>to Right</span>{" "}
            <span style={{ color: '#f7bb74' }}>Opportunities</span>
          </h1>

          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', lineHeight: 1.6, color: '#d4c4b4' }} className="max-w-xl">
            Exclusive recruitment partners for industry leaders including TCS, Infosys, and many more. Elevating corporate teams with precision placement.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-8 py-4 rounded font-bold text-sm tracking-wide hover:opacity-90 transition-all active:scale-95 shadow-lg"
              style={{
                background: "linear-gradient(to right, #C6904D, #E5B171)",
                color: "#2b1700",
                fontFamily: 'Inter, sans-serif',
                boxShadow: "0 4px 20px rgba(198,144,77,0.4)"
              }}
            >
              Explore Services
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </a>
            <button
              type="button"
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 px-8 py-4 rounded font-bold text-sm tracking-wide hover:bg-[#f7bb74]/10 transition-all active:scale-95 border"
              style={{
                borderColor: "#f7bb74",
                color: "#f7bb74",
                fontFamily: 'Inter, sans-serif'
              }}
            >
              Contact Us
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[#504539]/60">
            {[
              { value: "1000+", label: "Placements" },
              { value: "16+", label: "Industries" },
              { value: "34", label: "Corporate Tie-Ups" },
            ].map((stat) => (
              <div key={stat.label}>
                <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '28px', fontWeight: 700, color: '#f7bb74' }}>
                  {stat.value}
                </div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#d4c4b4', letterSpacing: '0.05em' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative hidden lg:block">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F1113] via-[#0F1113]/20 to-transparent z-10" />
          <div className="absolute -inset-4 opacity-30 blur-2xl rounded-xl" style={{ background: "linear-gradient(to right, #C6904D, transparent)" }} />
          <img
            alt="Corporate recruitment team"
            className="relative w-full h-auto rounded-lg object-cover opacity-90 shadow-2xl border border-[#504539]/30 z-0"
            src="/hero-recruitment-optimized.jpg"
            width="900"
            height="502"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
}
