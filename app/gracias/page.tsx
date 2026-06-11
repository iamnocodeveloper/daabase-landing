export default function GraciasPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 16 }}>
      <h1 style={{ fontSize: 32, fontWeight: 'bold' }}>¡Gracias!</h1>
      <p style={{ fontSize: 18, color: '#666' }}>Estás en la lista. Te avisamos cuando lancemos.</p>
      <a href="/" style={{ color: '#0ea5e9' }}>Volver al inicio</a>
    </div>
  );
}