const POPPINS = { fontFamily: 'Poppins, sans-serif' };
const INTER = { fontFamily: 'Inter, sans-serif' };

const services = [
  { icon: "work",    title: "Permanent Hiring",   desc: "Sourcing and securing full-time talent committed to your long-term organizational vision and cultural values." },
  { icon: "history", title: "Contract Staffing",  desc: "Agile workforce solutions providing specialized skills for project-based initiatives and fluctuating demands." },
  { icon: "school",  title: "Campus Recruitment", desc: "Identifying top-tier emerging talent from leading academic institutions to fuel future innovation." },
  { icon: "star",    title: "Executive Search",   desc: "Discreet, targeted headhunting for visionary leadership and niche C-level executives." },
];

const steps = [
  { n: 1, label: "Discovery",  desc: "In-depth requirement analysis and cultural mapping", gold: false },
  { n: 2, label: "Sourcing",   desc: "Targeted talent acquisition via proprietary networks",   gold: false },
  { n: 3, label: "Screening",  desc: "Rigorous multi-tier assessment and validation",    gold: false },
  { n: 4, label: "Placement",  desc: "Seamless integration and follow-up support",       gold: true  },
];

export default function Services() {
  return (
    <section id="services" className="py-24" style={{ background: "#121416" }}>
      <div className="max-w-[1280px] mx-auto px-4 md:px-16">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-16 h-1 rounded-full mx-auto mb-6" style={{ background: "linear-gradient(to right, #C6904D, #E5B171)" }} />
          <h2 style={{ ...POPPINS, fontSize: '32px', fontWeight: 600, lineHeight: 1.2, color: '#e2e2e5' }}>
            Comprehensive Recruitment Solutions
          </h2>
          <p style={{ ...INTER, fontSize: '16px', lineHeight: 1.7, color: '#d4c4b4', maxWidth: '600px', margin: '16px auto 0' }}>
            Tailored staffing strategies designed to meet the dynamic needs of modern enterprises, from entry-level to C-suite.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {services.map((s) => (
            <div
              key={s.title}
              className="group p-8 rounded-lg border transition-all duration-300"
              style={{ background: "#0c0e10", borderColor: "#504539" }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "#C6904D";
                e.currentTarget.style.boxShadow = "0 0 24px rgba(198,144,77,0.15)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "#504539";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <span className="material-symbols-outlined text-5xl mb-6 block transition-transform duration-300 group-hover:scale-110" style={{ color: "#f7bb74" }}>
                {s.icon}
              </span>
              <h3 style={{ ...POPPINS, fontSize: '20px', fontWeight: 600, color: '#e2e2e5', marginBottom: '12px' }}>
                {s.title}
              </h3>
              <p style={{ ...INTER, fontSize: '15px', lineHeight: 1.65, color: '#d4c4b4' }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="p-10 rounded-lg border" style={{ background: "#1a1c1e", borderColor: "#504539" }}>
          <h3 style={{ ...POPPINS, fontSize: '24px', fontWeight: 500, color: '#f7bb74', textAlign: 'center', marginBottom: '40px' }}>
            Our Placement Process
          </h3>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center relative gap-8 md:gap-0">
            {/* Connector line */}
            <div className="hidden md:block absolute top-8 left-12 right-12 h-px" style={{ background: "#504539" }} />
            {steps.map((step) => (
              <div key={step.n} className="flex flex-col items-center text-center flex-1 px-2 relative z-10">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-4 text-xl font-bold"
                  style={step.gold
                    ? { background: "linear-gradient(to right, #C6904D, #E5B171)", color: "#2b1700", fontFamily: 'Poppins, sans-serif' }
                    : { background: "#282a2c", border: "2px solid #f7bb74", color: "#f7bb74", fontFamily: 'Poppins, sans-serif' }
                  }
                >
                  {step.n}
                </div>
                <div style={{ ...INTER, fontSize: '13px', fontWeight: 700, color: '#e2e2e5', letterSpacing: '0.05em', marginBottom: '6px', textTransform: 'uppercase' }}>
                  {step.label}
                </div>
                <div style={{ ...INTER, fontSize: '12px', color: '#d4c4b4', lineHeight: 1.5, maxWidth: '160px' }}>
                  {step.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
