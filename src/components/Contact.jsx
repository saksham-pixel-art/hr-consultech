import { useState } from "react";

const POPPINS = { fontFamily: 'Poppins, sans-serif' };
const INTER = { fontFamily: 'Inter, sans-serif' };

const inputStyle = {
  width: '100%',
  background: '#0c0e10',
  border: '1px solid #504539',
  borderRadius: '4px',
  padding: '12px 16px',
  color: '#e2e2e5',
  fontSize: '15px',
  fontFamily: 'Inter, sans-serif',
  outline: 'none',
  transition: 'border-color 0.2s',
};

export default function Contact() {
  const [form, setForm] = useState({ name: '', company: '', role: '', interest: 'Hiring Talent', message: '' });
  const [sent, setSent] = useState(false);

  const handle = (e) => setForm(p => ({ ...p, [e.target.id]: e.target.value }));
  const onFocus = (e) => { e.target.style.borderColor = '#f7bb74'; };
  const onBlur  = (e) => { e.target.style.borderColor = '#504539'; };

  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.message) return;
    setSent(true);
  };

  return (
    <section id="contact" className="py-24" style={{ background: '#121416' }}>
      <div className="max-w-[1280px] mx-auto px-4 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left: Info */}
          <div className="space-y-8">
            <div>
              <div className="w-16 h-1 rounded-full mb-5" style={{ background: "linear-gradient(to right, #C6904D, #E5B171)" }} />
              <h2 style={{ ...POPPINS, fontSize: '32px', fontWeight: 600, lineHeight: 1.2, color: '#e2e2e5' }}>
                Start the Conversation
              </h2>
              <p style={{ ...INTER, fontSize: '16px', lineHeight: 1.7, color: '#d4c4b4', marginTop: '14px' }}>
                Whether you're seeking to augment your team with top-tier talent or exploring new career horizons, our advisory team is ready to assist.
              </p>
            </div>

            <div className="rounded-xl border p-8 space-y-6" style={{ background: '#1a1c1e', borderColor: '#504539' }}>
              <h3 style={{ ...POPPINS, fontSize: '20px', fontWeight: 600, color: '#f7bb74', marginBottom: '4px' }}>
                Visit Our Headquarters
              </h3>

              {[
                { icon: 'location_city', title: 'Delhi NCR Office', text: 'Level 12, Corporate Tower B, Cyber City\nGurugram, Haryana 122002' },
                { icon: 'business', title: 'Mumbai Office', text: 'Suite 405, BKC Financial Center, Bandra Kurla Complex\nMumbai, Maharashtra 400051' },
              ].map((loc) => (
                <div key={loc.title} className="flex gap-4">
                  <span className="material-symbols-outlined mt-1 flex-shrink-0" style={{ color: '#f7bb74' }}>{loc.icon}</span>
                  <div>
                    <div style={{ ...INTER, fontSize: '13px', fontWeight: 700, color: '#e2e2e5', letterSpacing: '0.05em', marginBottom: '4px' }}>{loc.title}</div>
                    <div style={{ ...INTER, fontSize: '14px', color: '#d4c4b4', lineHeight: 1.6, whiteSpace: 'pre-line' }}>{loc.text}</div>
                  </div>
                </div>
              ))}

              <div className="flex gap-4 pt-4" style={{ borderTop: '1px solid #504539' }}>
                <span className="material-symbols-outlined mt-1 flex-shrink-0" style={{ color: '#f7bb74' }}>mail</span>
                <div>
                  <div style={{ ...INTER, fontSize: '13px', fontWeight: 700, color: '#e2e2e5', letterSpacing: '0.05em', marginBottom: '4px' }}>General Inquiries</div>
                  <a href="mailto:contact@edgrotech.com" style={{ ...INTER, fontSize: '14px', color: '#f7bb74' }}>contact@edgrotech.com</a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="rounded-xl border p-8" style={{ background: '#1e2022', borderColor: '#504539' }}>
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10 gap-5">
                <span className="material-symbols-outlined" style={{ fontSize: '64px', color: '#f7bb74' }}>check_circle</span>
                <h3 style={{ ...POPPINS, fontSize: '24px', fontWeight: 600, color: '#e2e2e5' }}>Message Sent!</h3>
                <p style={{ ...INTER, fontSize: '15px', color: '#d4c4b4', lineHeight: 1.7, maxWidth: '340px' }}>
                  Thank you, <strong style={{ color: '#f7bb74' }}>{form.name}</strong>. Our team will reach out within 24 hours regarding your interest in <em>{form.interest}</em>.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name:'', company:'', role:'', interest:'Hiring Talent', message:'' }); }}
                  className="mt-2 px-6 py-2 rounded border transition-all hover:bg-[#f7bb74]/10"
                  style={{ borderColor: '#f7bb74', color: '#f7bb74', ...INTER, fontSize: '14px', fontWeight: 600 }}
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {[{ id:'name', label:'Full Name *', ph:'John Doe' }, { id:'company', label:'Company', ph:'Organization Name' }].map(f => (
                    <div key={f.id}>
                      <label style={{ ...INTER, fontSize: '12px', fontWeight: 600, color: '#9d8e80', letterSpacing: '0.05em', display:'block', marginBottom:'8px' }}>{f.label}</label>
                      <input id={f.id} type="text" required={f.id==='name'} placeholder={f.ph} value={form[f.id]} onChange={handle} onFocus={onFocus} onBlur={onBlur} style={inputStyle} />
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label style={{ ...INTER, fontSize: '12px', fontWeight: 600, color: '#9d8e80', letterSpacing: '0.05em', display:'block', marginBottom:'8px' }}>Role / Job Title</label>
                    <input id="role" type="text" placeholder="e.g. HR Director" value={form.role} onChange={handle} onFocus={onFocus} onBlur={onBlur} style={inputStyle} />
                  </div>
                  <div>
                    <label style={{ ...INTER, fontSize: '12px', fontWeight: 600, color: '#9d8e80', letterSpacing: '0.05em', display:'block', marginBottom:'8px' }}>Primary Interest</label>
                    <select id="interest" value={form.interest} onChange={handle} onFocus={onFocus} onBlur={onBlur} style={{ ...inputStyle, cursor: 'pointer' }}>
                      <option>Hiring Talent</option>
                      <option>Looking for Opportunities</option>
                      <option>Partnership Inquiries</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label style={{ ...INTER, fontSize: '12px', fontWeight: 600, color: '#9d8e80', letterSpacing: '0.05em', display:'block', marginBottom:'8px' }}>Message *</label>
                  <textarea id="message" required placeholder="How can we help you?" value={form.message} onChange={handle} onFocus={onFocus} onBlur={onBlur} rows={5} style={{ ...inputStyle, resize:'vertical' }} />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 rounded font-bold text-sm tracking-wide hover:opacity-90 transition-all active:scale-95"
                  style={{ background: 'linear-gradient(to right, #C6904D, #E5B171)', color: '#2b1700', fontFamily: 'Inter, sans-serif', boxShadow: '0 4px 20px rgba(198,144,77,0.3)' }}
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
