export default function AttributionPage() {
  return (
    <div style={{ maxWidth: 720, margin: '0 auto', padding: '48px 24px', lineHeight: 1.7 }}>
      <h1 style={{ fontSize: 32, fontWeight: 'bold', marginBottom: 24 }}>Atribución</h1>
      <p style={{ marginBottom: 16 }}>
        daabase está construido sobre InstantDB, publicado bajo la licencia Apache 2.0.
      </p>
      <p style={{ marginBottom: 16 }}>
        InstantDB es software libre: puedes redistribuirlo y/o modificarlo bajo los términos
        de la Apache License 2.0. El texto completo de la licencia está disponible en{' '}
        <a href="https://www.apache.org/licenses/LICENSE-2.0" style={{ color: '#0ea5e9' }}>
          apache.org/licenses/LICENSE-2.0
        </a>.
      </p>
      <p>
        Copyright 2024 InstantDB. Todos los derechos reservados.
      </p>
    </div>
  );
}