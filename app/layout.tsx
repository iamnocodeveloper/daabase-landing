export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>daabase — backend reactivo para apps con IA</title>
        <meta name="description" content="Backend reactivo y self-hostable. Auth, permisos, storage, presencia y streams. En minutos." />
        <meta property="og:title" content="daabase" />
        <meta property="og:description" content="Backend reactivo para apps con IA" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}