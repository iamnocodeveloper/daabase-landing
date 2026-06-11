export default function Demo() {
  return (
    <section style={{ padding: '48px 24px', textAlign: 'center', background: '#f8fafc' }}>
      <h2 style={{ fontSize: 32, fontWeight: 'bold', marginBottom: 16 }}>Demo en vivo</h2>
      <p style={{ color: '#666', marginBottom: 24 }}>Ejecuta queries y transacciones en tiempo real. Sin backend propio.</p>
      <div style={{ border: '1px solid #e5e7eb', borderRadius: 12, overflow: 'hidden', maxWidth: 640, margin: '0 auto' }}>
        <iframe
          src="https://api.daabase.click/demo"
          style={{ width: '100%', height: 400, border: 'none' }}
          title="daabase demo"
        />
      </div>
    </section>
  );
}