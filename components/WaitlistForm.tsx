'use client';

import { useState } from 'react';

export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('https://api.daabase.click/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (res.ok) setSubmitted(true);
    } catch {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <section id="waitlist" style={{ padding: '64px 24px', textAlign: 'center', background: '#f0f9ff' }}>
        <h2 style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 12 }}>¡Listo!</h2>
        <p style={{ color: '#666' }}>Te avisamos cuando lancemos.</p>
      </section>
    );
  }

  return (
    <section id="waitlist" style={{ padding: '64px 24px', textAlign: 'center', background: '#f8fafc' }}>
      <h2 style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 12 }}>
        Acceso early
      </h2>
      <p style={{ color: '#666', marginBottom: 24 }}>
        Enterate primero cuando lancemos. Sin spam.
      </p>
      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: 8, maxWidth: 400, margin: '0 auto' }}>
        <input
          type="email"
          placeholder="tu@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ flex: 1, padding: '10px 14px', border: '1px solid #ccc', borderRadius: 6, fontSize: 16 }}
        />
        <button
          type="submit"
          style={{ padding: '10px 20px', background: '#0ea5e9', color: '#fff', border: 'none', borderRadius: 6, fontSize: 16, cursor: 'pointer' }}
        >
          Unirme
        </button>
      </form>
    </section>
  );
}