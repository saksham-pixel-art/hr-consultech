const POPPINS = { fontFamily: 'Poppins, sans-serif' };
const INTER = { fontFamily: 'Inter, sans-serif' };

const industries = [
  "Information Technology (IT)", "EdTech", "Fintech & Banking (BFSI)",
  "Healthcare & Pharma", "E-commerce & Retail", "Manufacturing & Engineering",
  "Automotive", "Telecommunications", "Real Estate & Construction",
  "Logistics & Supply Chain", "FMCG", "Media & Entertainment",
  "Hospitality & Tourism", "Energy & Utilities", "Consulting & Professional Services",
  "Aerospace & Defense", "Agriculture Tech", "Legal Services", "Non-Profit & NGO",
];

export default function Industries() {
  return (
    <section id="industries" className="py-24" style={{ background: "#0F1113" }}>
      <div className="max-w-[1280px] mx-auto px-4 md:px-16">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-16 h-1 rounded-full mx-auto mb-6" style={{ background: "linear-gradient(to right, #C6904D, #E5B171)" }} />
          <h2 style={{ ...POPPINS, fontSize: '32px', fontWeight: 600, lineHeight: 1.2, color: '#e2e2e5' }}>
            Industries We Serve
          </h2>
          <p style={{ ...INTER, fontSize: '16px', lineHeight: 1.7, color: '#d4c4b4', marginTop: '16px' }}>
            Specialized talent acquisition across 19+ distinct sectors.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-16">
          {industries.map((ind) => (
            <div
              key={ind}
              className="px-5 py-4 rounded-lg border text-center cursor-default transition-all duration-200"
              style={{ background: "#1e2022", borderColor: "#504539" }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "rgba(198,144,77,0.08)";
                e.currentTarget.style.borderColor = "#C6904D";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "#1e2022";
                e.currentTarget.style.borderColor = "#504539";
              }}
            >
              <span style={{ ...INTER, fontSize: '13px', fontWeight: 600, color: '#e2e2e5', letterSpacing: '0.03em' }}>
                {ind}
              </span>
            </div>
          ))}
        </div>

        {/* Market Insights */}
        <div className="flex gap-6 p-7 rounded-r-lg" style={{ background: "#1e2022", borderLeft: "4px solid #C6904D" }}>
          <span className="material-symbols-outlined text-3xl flex-shrink-0 mt-1" style={{ color: "#f7bb74" }}>insights</span>
          <div>
            <h3 style={{ ...POPPINS, fontSize: '20px', fontWeight: 600, color: '#f7bb74', marginBottom: '8px' }}>
              Market Insights
            </h3>
            <p style={{ ...INTER, fontSize: '15px', lineHeight: 1.7, color: '#d4c4b4' }}>
              Our deepest expertise and highest placement volumes reside in the{" "}
              <strong style={{ color: '#e2e2e5' }}>IT</strong>,{" "}
              <strong style={{ color: '#e2e2e5' }}>BFSI</strong>, and{" "}
              <strong style={{ color: '#e2e2e5' }}>Healthcare</strong> sectors. We continuously monitor these rapidly evolving markets to supply talent equipped for digital transformation and regulatory compliance.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
