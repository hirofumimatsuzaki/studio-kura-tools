import "./globals.css";

export const metadata = {
  title: "Studio Kura Tools",
  description: "Tools for Studio Kura operations, exhibitions, and artist workflows"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
