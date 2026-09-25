import "./globals.css";

export const metadata = {
  title: "UGI Ajans | Dijital Çözümler",
  description:
    "Dijital dünyada markanızı öne çıkaracak profesyonel çözümler. Yenilikçi, hızlı ve etkileşimli.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
