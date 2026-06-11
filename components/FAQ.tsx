const faqs = [
  { q: '¿Puedo self-hostearlo?', a: 'Sí. Usá Docker Compose en tu VPS. Tenés Postgres, MinIO y Caddy listos para usar.' },
  { q: '¿Qué pasa con mis datos?', a: 'Tus datos stays en tu servidor. No hay terceros.' },
  { q: '¿Es gratis?', a: 'El código es open source (Apache 2.0). El servicio hosted tiene planes desde gratuito.' },
  { q: '¿Qué idiomas soporta?', a: 'TypeScript, JavaScript, React, React Native, Solid, Svelte, Vue y más.' },
];

export default function FAQ() {
  return (
    <section style={{ padding: '80px 24px', maxWidth: 720, margin: '0 auto' }}>
      <h2 style={{ fontSize: 32, fontWeight: 'bold', marginBottom: 40 }}>Preguntas frecuentes</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        {faqs.map((f) => (
          <div key={f.q}>
            <h3 style={{ fontSize: 18, fontWeight: '600', marginBottom: 8 }}>{f.q}</h3>
            <p style={{ color: '#666', lineHeight: 1.6 }}>{f.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}