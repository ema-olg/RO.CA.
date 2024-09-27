export const metadata = {
  title: "RO.CA.",
  description: "security.srl",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
