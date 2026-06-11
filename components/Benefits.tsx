const benefits = [
  { title: 'Realtime', desc: 'Cada query es multiplayer por defecto. Offline-first con sync automático.' },
  { title: 'Self-hostable', desc: 'Tu propio VPS. Tus propios datos. Sin vendor lock-in.' },
  { title: 'Auth incluido', desc: 'Magic codes, OAuth, JWT. Listo en 5 minutos.' },
  { title: 'Storage', desc: 'Archivos y imágenes con S3-compatibilidad. CDN incluido.' },
];

export default function Benefits() {
  return (
    <section style={{ padding: '80px 24px', maxWidth: 900, margin: '0 auto' }}>
      <h2 style={{ fontSize: 32, fontWeight: 'bold', textAlign: 'center', marginBottom: 48 }}>
        Todo lo que necesitás
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 24 }}>
        {benefits.map((b) => (
          <div key={b.title} style={{ padding: 24, border: '1px solid #e5e7eb', borderRadius: 12 }}>
            <h3 style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 8 }}>{b.title}</h3>
            <p style={{ color: '#666', fontSize: 14 }}>{b.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}