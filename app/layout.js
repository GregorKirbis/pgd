import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
});

export const metadata = {
  title: "PGD Spodnja in Zgornja Gorica | Prostovoljno gasilsko društvo",
  description: "Uradna spletna stran PGD Spodnja in Zgornja Gorica. Smo predano prostovoljno gasilsko društvo, ki skrbi za varnost, zaščito in pomoč v občini Rače - Fram.",
  keywords: "PGD Gorica, PGD Spodnja in Zgornja Gorica, gasilci, gasilsko društvo, požarna varnost, prostovoljni gasilci, Rače - Fram",
  authors: [{ name: "PGD Spodnja in Zgornja Gorica" }],
  icons: {
    icon: "/favicon-96x96.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    title: "PGD Spodnja in Zgornja Gorica | Prostovoljno gasilsko društvo",
    description: "Prostovoljno gasilsko društvo Spodnja in Zgornja Gorica skrbi za varnost, zaščito in pomoč prebivalcem občine Rače - Fram.",
    url: "https://pgd-gorica.si/",
    siteName: "PGD Spodnja in Zgornja Gorica",
    images: [
      {
        url: "https://pgd-gorica.si/pgd-preview.jpg",
        width: 1200,
        height: 630,
        alt: "PGD Spodnja in Zgornja Gorica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@PGDSpZG",
    title: "PGD Spodnja in Zgornja Gorica | Prostovoljno gasilsko društvo",
    description: "PGD Spodnja in Zgornja Gorica je predano prostovoljno gasilsko društvo, ki skrbi za varnost in zaščito prebivalcev občine Rače - Fram.",
    images: ["https://pgd-gorica.si/pgd-preview.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="sl">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
