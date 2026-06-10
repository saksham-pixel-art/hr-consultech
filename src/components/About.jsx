const POPPINS = { fontFamily: 'Poppins, sans-serif' };
const INTER = { fontFamily: 'Inter, sans-serif' };

export default function About() {
  const pillars = [
    {
      icon: "my_location",
      title: "Pan-India Presence",
      desc: "Connecting regional excellence with national and global opportunities across major Indian metropolitan hubs.",
    },
    {
      icon: "psychology",
      title: "Precision Placement",
      desc: "Our proprietary matching algorithm ensures deep cultural and technical alignment, minimizing turnover and maximizing impact.",
    },
    {
      icon: "hub",
      title: "Talent Ecosystems",
      desc: "We don't just fill roles; we build sustainable talent pipelines that adapt to evolving industry demands.",
    },
  ];

  return (
    <section id="about" className="py-24" style={{ background: "#1A1C1E" }}>
      <div className="max-w-[1280px] mx-auto px-4 md:px-16">

        {/* Upper: Image + Text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="relative group">
            <div className="absolute -inset-3 opacity-30 blur-2xl rounded-xl transition-opacity group-hover:opacity-50" style={{ background: "linear-gradient(to right, #C6904D, #E5B171)" }} />
            <img
              alt="Modern Office Interior"
              className="relative w-full h-[480px] object-cover rounded-lg border z-10 transition-transform duration-500 group-hover:scale-[1.01]"
              style={{ borderColor: "#C6904D" }}
              src="/office-interior-optimized.jpg"
              width="900"
              height="604"
              loading="lazy"
            />
          </div>

          <div className="space-y-6">
            <div className="w-16 h-1 rounded-full" style={{ background: "linear-gradient(to right, #C6904D, #E5B171)" }} />
            <h2 style={{ ...POPPINS, fontSize: '32px', fontWeight: 600, lineHeight: 1.2, color: '#e2e2e5' }}>
              Your Strategic Hiring Partner
            </h2>
            <p style={{ ...INTER, fontSize: '16px', lineHeight: 1.7, color: '#d4c4b4' }}>
              At EdGro Tech, we don't just fill vacancies; we architect high-performing teams. With deep roots in executive search and tech recruitment, we provide a sophisticated, discreet approach to matching elite talent with leading global enterprises.
            </p>
            <p style={{ ...INTER, fontSize: '16px', lineHeight: 1.7, color: '#d4c4b4' }}>
              Our methodology blends data-driven insights with nuanced human understanding, ensuring cultural alignment and long-term retention in high-stakes corporate environments.
            </p>
          </div>
        </div>

        {/* Mission strip */}
        <div className="pt-16 border-t border-[#504539]/60 mb-12">
          <h3 style={{ ...POPPINS, fontSize: '24px', fontWeight: 500, color: '#f7bb74', marginBottom: '12px' }}>
            Our Journey &amp; Mission
          </h3>
          <p style={{ ...INTER, fontSize: '16px', lineHeight: 1.7, color: '#d4c4b4', maxWidth: '760px' }}>
            Driven by our philosophy of "Precision Placement," EdGro Tech has rapidly expanded its footprint. We are dedicated to building long-term talent ecosystems that foster mutual growth for both candidates and corporations.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="group p-7 rounded-lg border transition-all duration-300 hover:border-[#C6904D] hover:shadow-lg"
              style={{ borderColor: "#504539", background: "#1e2022", boxShadow: "none" }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = "0 0 20px rgba(198,144,77,0.15)"}
              onMouseLeave={e => e.currentTarget.style.boxShadow = "none"}
            >
              <span className="material-symbols-outlined text-5xl mb-5 block transition-transform duration-300 group-hover:scale-110" style={{ color: "#f7bb74" }}>
                {p.icon}
              </span>
              <h4 style={{ ...POPPINS, fontSize: '20px', fontWeight: 600, color: '#e2e2e5', marginBottom: '10px' }}>
                {p.title}
              </h4>
              <p style={{ ...INTER, fontSize: '15px', lineHeight: 1.65, color: '#d4c4b4' }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
