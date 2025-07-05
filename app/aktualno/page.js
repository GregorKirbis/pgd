import React from 'react';
import Sidebar from '../components/Sidebar';

export const metadata = {
  title: "Aktualno – 100 let PGD Spodnja in Zgornja Gorica",
  description: "Zahvala ob 100-letnici PGD Gorica in povezava do zbornika, ki zajema zgodovino in delovanje društva.",
  keywords: [
    "PGD Gorica", "100 let", "zbornik", "gasilci", "Spodnja Gorica", "Zgornja Gorica", "veselica", "proslava"
  ],
  openGraph: {
    type: "article",
    title: "Zbornik - 100 let PGD Spodnja in Zgornja Gorica",
    description: "Oglejte si zbornik 100-letnice gasilskega društva PGD Sp. in Zg. Gorica.",
    url: "https://pgd-gorica.si/aktualno",
    siteName: "PGD Spodnja in Zgornja Gorica",
    images: [
      {
        url: "https://pgd-gorica.si/pgd-zbornik.jpg",
        width: 1200,
        height: 630,
        alt: "100 let PGD Gorica",
        type: "image/webp"
      }
    ],
    locale: "sl_SI",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zbornik ob 100-letnici PGD Gorica",
    description: "Prenesite zbornik in poglejte, kako smo praznovali stoletnico društva PGD Spodnja in Zgornja Gorica.",
    images: ["https://pgd-gorica.si/pgd-zbornik.jpg"],
  },
};

export default function Aktualno() {
  return (
    <section className="pt-25 lg:pt-25 xl:pt-25 pb-20 lg:pb-25 xl:pb-30">
      <div className="mx-auto max-w-1390 px-4 md:px-8 2xl:px-0">
        <div className="flex flex-col lg:flex-row gap-7.5 xl:gap-17.5">
          
          {/* Glavna vsebina */}
          <div className="lg:w-[70%]">
            <div className="animate_top shadow-solid-13 bg-white dark:bg-blacksection dark:border-strokedark p-7.5 md:p-10">

              <img src="/images/about/veselica.webp" alt="100 let PGD Gorica" />

              <h2 className="font-medium text-3xl 2xl:text-title-lg text-black dark:text-white mt-11 mb-5">
                Zahvala ob 100-letnici<br></br>PGD Spodnja in Zgornja Gorica
              </h2>

              <p>
                PGD Spodnja in Zgornja Gorica se iz srca zahvaljuje vsem, ki ste bili z nami ob praznovanju 100-letnice našega društva!
              </p>

              <p className="mt-5">
                Iskrena hvala vsem obiskovalcem, nastopajočim, članom društva, prostovoljcem, donatorjem in sponzorjem, ki ste pripomogli k izjemno uspešni in nepozabni dvodnevni veselici, ki je potekala 20. in 21. junija 2025 na športnem igrišču KRČ v Spodnji Gorici.
              </p>

              <p className="mt-5">
                Z vašo pomočjo smo dokazali, da ima gasilska tradicija v naši skupnosti trdne temelje, močno podporo in svetlo prihodnost.
              </p>

              <div className="mt-7.5">
                <h3 className="text-xl font-semibold text-black dark:text-white mb-2">Zbornik ob 100-letnici</h3>
                <p>
                  Ob tej pomembni obletnici smo pripravili tudi <strong>zbornik</strong>, ki zajema bogato zgodovino, razvoj društva, fotografije, pomembne mejnike in spomine naših članov in krajanov.
                </p>
                <p className="mt-2">
                  <a href="/zbornik_PGD_Gorica_100let.pdf" target="_blank" rel="noopener noreferrer" className="text-primary underline">Kliknite tukaj za ogled in prenos zbornika (PDF)</a>
                </p>
              </div>

              <p className="mt-7.5 font-medium text-black dark:text-white">
                Še enkrat hvala vsem – vidimo se na prihodnjih dogodkih!<br />
                Vaš PGD Spodnja in Zgornja Gorica 🔥🚒
              </p>

            </div>
          </div>

          {/* Sidebar */}
          <Sidebar />
        </div>
      </div>
    </section>
  );
}
