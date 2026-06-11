export default function Footer() {
  return (
    <footer style={{ padding: '40px 24px', borderTop: '1px solid #e5e7eb', textAlign: 'center' }}>
      <p style={{ color: '#666', fontSize: 14, marginBottom: 8 }}>
        &copy; 2026 daabase. Todos los derechos reservados.
      </p>
      <div style={{ display: 'flex', gap: 16, justifyContent: 'center', fontSize: 14 }}>
        <a href="/atribucion" style={{ color: '#666' }}>Atribución</a>
        <a href="/privacidad" style={{ color: '#666' }}>Privacidad</a>
        <a href="https://docs.daabase.click" style={{ color: '#666' }}>Docs</a>
      </div>
    </footer>
  );
}