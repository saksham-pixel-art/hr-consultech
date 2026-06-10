const POPPINS = { fontFamily: 'Poppins, sans-serif' };
const INTER = { fontFamily: 'Inter, sans-serif' };

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: '#0c0e10', borderTop: '1px solid #504539' }}>
      <div className="max-w-[1280px] mx-auto px-4 md:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <img
                src="/logo-optimized.png"
                alt="EdGro Tech Logo"
                className="h-10 w-10 rounded object-contain"
                width="40"
                height="40"
                loading="lazy"
              />
              <span style={{ ...POPPINS, fontSize: '20px', fontWeight: 600, color: '#f7bb74' }}>EdGro Tech</span>
            </div>
            <p style={{ ...INTER, fontSize: '13px', lineHeight: 1.7, color: '#9d8e80', maxWidth: '340px' }}>
              Connecting elite talent with exceptional opportunities across the globe. Discerning advisory for corporate staffing excellence.
            </p>
            {/* Gold divider */}
            <div className="w-12 h-0.5 rounded" style={{ background: 'linear-gradient(to right, #C6904D, transparent)', marginTop: '12px' }} />
          </div>

          {/* Legal */}
          <div>
            <h4 style={{ ...INTER, fontSize: '12px', fontWeight: 700, color: '#e2e2e5', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>Legal</h4>
            <div className="space-y-3">
              {['Privacy Policy', 'Terms of Service'].map(link => (
                <a
                  key={link}
                  href="#"
                  className="block transition-colors duration-200 hover:text-[#f7bb74]"
                  style={{ ...INTER, fontSize: '14px', color: '#9d8e80' }}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Expertise */}
          <div>
            <h4 style={{ ...INTER, fontSize: '12px', fontWeight: 700, color: '#e2e2e5', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>Expertise</h4>
            <div className="space-y-3">
              {[
                { label: 'Executive Search', href: '#services' },
                { label: 'Board Advisory', href: '#services' },
                { label: 'Global Offices', href: '#contact' },
              ].map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block transition-colors duration-200 hover:text-[#f7bb74]"
                  style={{ ...INTER, fontSize: '14px', color: '#9d8e80' }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-16 pt-8" style={{ borderTop: '1px solid #504539' }}>
          <p style={{ ...INTER, fontSize: '12px', color: '#9d8e80' }}>
            © {year} EdGro Tech Advisory. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span style={{ ...INTER, fontSize: '12px', color: '#504539' }}>Built with</span>
            <span style={{ color: '#f7bb74', fontSize: '14px' }}>♦</span>
            <span style={{ ...INTER, fontSize: '12px', color: '#504539' }}>for excellence</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
