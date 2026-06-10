const POPPINS = { fontFamily: 'Poppins, sans-serif' };
const INTER = { fontFamily: 'Inter, sans-serif' };

export default function Contact({ onOpenContact }) {
  return (
    <section id="contact" className="py-24" style={{ background: '#121416' }}>
      <div className="max-w-[1280px] mx-auto px-4 md:px-16">
        <div className="text-center max-w-3xl mx-auto">
          <div className="w-16 h-1 rounded-full mx-auto mb-6" style={{ background: "linear-gradient(to right, #C6904D, #E5B171)" }} />
          <h2 style={{ ...POPPINS, fontSize: '32px', fontWeight: 600, lineHeight: 1.2, color: '#e2e2e5' }}>
            Start the Conversation
          </h2>
          <p style={{ ...INTER, fontSize: '16px', lineHeight: 1.7, color: '#d4c4b4', margin: '14px auto 28px', maxWidth: '640px' }}>
            Tell us what kind of talent or opportunity you are looking for, and our advisory team will get back to you.
          </p>
          <button
            type="button"
            onClick={onOpenContact}
            className="inline-flex items-center justify-center px-8 py-4 rounded font-bold text-sm tracking-wide hover:opacity-90 transition-all active:scale-95"
            style={{ background: 'linear-gradient(to right, #C6904D, #E5B171)', color: '#2b1700', fontFamily: 'Inter, sans-serif', boxShadow: '0 4px 20px rgba(198,144,77,0.3)' }}
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
}
