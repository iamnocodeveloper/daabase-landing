export default function Snippet() {
  return (
    <section style={{ padding: '80px 24px', background: '#0f172a', color: '#fff' }}>
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        <h2 style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 8 }}>12 líneas de chat realtime</h2>
        <p style={{ color: '#94a3b8', marginBottom: 24 }}>Así de simple. Sin backend, sin WebSockets, sin Redux.</p>
        <pre style={{ background: '#1e293b', padding: 24, borderRadius: 12, overflow: 'auto', fontSize: 14 }}>
{`import { init, id } from "@instantdb/react";

const db = init({ appId: "tu-app-id" });

function Chat() {
  const { data } = db.useQuery({ messages: {} });
  const addMessage = (msg) => {
    db.transact(db.tx.messages[id()].update(msg));
  };
  return <UI data={data} onAdd={addMessage} />;
}`}
        </pre>
      </div>
    </section>
  );
}