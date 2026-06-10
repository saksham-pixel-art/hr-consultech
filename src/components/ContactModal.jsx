import { useEffect, useState } from "react";

const POPPINS = { fontFamily: 'Poppins, sans-serif' };
const INTER = { fontFamily: 'Inter, sans-serif' };
const CONTACT_API_URL = import.meta.env.VITE_CONTACT_API_URL || "/api/contact";

const emptyForm = {
  name: "",
  email: "",
  phone: "",
  company: "",
  role: "",
  interest: "Hiring Talent",
  message: "",
};

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

export default function ContactModal({ isOpen, onClose }) {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChange = (event) => {
    setForm((current) => ({ ...current, [event.target.id]: event.target.value }));
  };

  const handleFocus = (event) => { event.target.style.borderColor = '#f7bb74'; };
  const handleBlur = (event) => { event.target.style.borderColor = '#504539'; };

  const submit = async (event) => {
    event.preventDefault();
    setError("");

    setStatus("submitting");
    const payload = {
      ...form,
      submittedAt: new Date().toISOString(),
      source: window.location.href,
    };

    try {
      const response = await fetch(CONTACT_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setStatus("sent");
      setForm(emptyForm);
    } catch {
      setStatus("idle");
      setError("Could not submit the form. Please try again.");
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6"
      style={{ background: "rgba(12,14,16,0.82)", backdropFilter: "blur(10px)" }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="w-full max-w-2xl max-h-[92vh] overflow-y-auto rounded-lg border p-6 md:p-8" style={{ background: '#1e2022', borderColor: '#504539' }}>
        <div className="flex items-start justify-between gap-4 mb-6">
          <div>
            <div className="w-12 h-1 rounded-full mb-4" style={{ background: "linear-gradient(to right, #C6904D, #E5B171)" }} />
            <h2 id="contact-modal-title" style={{ ...POPPINS, fontSize: '28px', fontWeight: 600, lineHeight: 1.2, color: '#e2e2e5' }}>
              Get In Touch
            </h2>
            <p style={{ ...INTER, fontSize: '14px', lineHeight: 1.6, color: '#d4c4b4', marginTop: '8px' }}>
              Share your details and we will follow up with the right next step.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-10 h-10 rounded-full flex items-center justify-center border transition-colors hover:border-[#C6904D] hover:text-[#f7bb74]"
            style={{ borderColor: "#504539", color: "#9d8e80" }}
            aria-label="Close contact form"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {status === "sent" ? (
          <div className="text-center py-10">
            <span className="material-symbols-outlined" style={{ fontSize: '64px', color: '#f7bb74' }}>check_circle</span>
            <h3 style={{ ...POPPINS, fontSize: '24px', fontWeight: 600, color: '#e2e2e5', marginTop: '12px' }}>Message Sent</h3>
            <p style={{ ...INTER, fontSize: '15px', color: '#d4c4b4', lineHeight: 1.7, maxWidth: '420px', margin: '12px auto 0' }}>
              Your details have been submitted. Our team will reach out soon.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-6 px-6 py-3 rounded font-bold text-sm tracking-wide hover:opacity-90 transition-opacity"
              style={{ background: 'linear-gradient(to right, #C6904D, #E5B171)', color: '#2b1700', fontFamily: 'Inter, sans-serif' }}
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={submit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Field id="name" label="Full Name *" placeholder="John Doe" value={form.name} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} required />
              <Field id="email" label="Email *" type="email" placeholder="you@company.com" value={form.email} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} required />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Field id="phone" label="Phone" type="tel" placeholder="+91 98765 43210" value={form.phone} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} />
              <Field id="company" label="Company" placeholder="Organization Name" value={form.company} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Field id="role" label="Role / Job Title" placeholder="e.g. HR Director" value={form.role} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} />
              <div>
                <label style={{ ...INTER, fontSize: '12px', fontWeight: 600, color: '#9d8e80', letterSpacing: '0.05em', display:'block', marginBottom:'8px' }}>Primary Interest</label>
                <select id="interest" value={form.interest} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} style={{ ...inputStyle, cursor: 'pointer' }}>
                  <option>Hiring Talent</option>
                  <option>Looking for Opportunities</option>
                  <option>Partnership Inquiries</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <div>
              <label style={{ ...INTER, fontSize: '12px', fontWeight: 600, color: '#9d8e80', letterSpacing: '0.05em', display:'block', marginBottom:'8px' }}>Message *</label>
              <textarea id="message" required placeholder="How can we help you?" value={form.message} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} rows={5} style={{ ...inputStyle, resize:'vertical' }} />
            </div>
            {error && (
              <p style={{ ...INTER, fontSize: '13px', color: '#ffb4ab', lineHeight: 1.5 }}>
                {error}
              </p>
            )}
            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full py-4 rounded font-bold text-sm tracking-wide hover:opacity-90 transition-all active:scale-95 disabled:cursor-not-allowed disabled:opacity-70"
              style={{ background: 'linear-gradient(to right, #C6904D, #E5B171)', color: '#2b1700', fontFamily: 'Inter, sans-serif', boxShadow: '0 4px 20px rgba(198,144,77,0.3)' }}
            >
              {status === "submitting" ? "Submitting..." : "Send Message"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

function Field({ id, label, type = "text", placeholder, value, onChange, onFocus, onBlur, required = false }) {
  return (
    <div>
      <label style={{ ...INTER, fontSize: '12px', fontWeight: 600, color: '#9d8e80', letterSpacing: '0.05em', display:'block', marginBottom:'8px' }}>{label}</label>
      <input id={id} type={type} required={required} placeholder={placeholder} value={value} onChange={onChange} onFocus={onFocus} onBlur={onBlur} style={inputStyle} />
    </div>
  );
}
