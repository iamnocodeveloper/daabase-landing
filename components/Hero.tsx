export default function Hero() {
  return (
    <section style={{ padding: '96px 24px', textAlign: 'center', maxWidth: 800, margin: '0 auto' }}>
      <h1 style={{ fontSize: 56, fontWeight: 'bold', lineHeight: 1.1, marginBottom: 24 }}>
        El backend que tu app con IA merece
      </h1>
      <p style={{ fontSize: 20, color: '#666', marginBottom: 32 }}>
        Auth, permisos, storage, presencia y streams. Todo en uno. Escribe consultas relacionales,
        obtiene sincronización realtime gratis. Self-hostable.
      </p>
      <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
        <a href="#waitlist" style={{ padding: '12px 24px', background: '#0ea5e9', color: '#fff', borderRadius: 8, textDecoration: 'none', fontWeight: 600 }}>
          Pedir acceso early
        </a>
        <a href="https://docs.daabase.click" style={{ padding: '12px 24px', border: '1px solid #ccc', borderRadius: 8, textDecoration: 'none', color: '#333' }}>
          Ver docs
        </a>
      </div>
    </section>
  );
}