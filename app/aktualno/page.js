import React from 'react';
import Image from 'next/image';
import Sidebar from '../components/Sidebar';

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
                100 let PGD Spodnja in Zgornja Gorica
              </h2>

              <p>
                PGD Spodnja in Zgornja Gorica praznuje 100 let! Ob tej izjemni obletnici vas vabimo na dvodnevni praznični dogodek, ki bo potekal v <strong>petek, 20. junija</strong> in <strong>soboto, 21. junija 2025</strong> na <strong>športnem igrišču KRČ v Spodnji Gorici</strong>.
              </p>

              <div className="mt-7.5">
                <h3 className="text-xl font-semibold text-black dark:text-white mb-2">📅 Program dogodka:</h3>
                <p><strong>Petek, 20. 6. 2025 ob 20:00</strong> – Vstop z vstopnico (10 €)</p>
                <ul className="list-disc list-inside ml-4 mt-2">
                  <li>Kvatropirci</li>
                  <li>Klapa Kampanel</li>
                </ul>
              </div>

              <div className="mt-7.5">
                <p><strong>Sobota, 21. 6. 2025 ob 18:00</strong> – VSTOP PROST</p>
                <ul className="list-disc list-inside ml-4 mt-2">
                  <li>Modrijani</li>
                  <li>Žrebci</li>
                  <li>Nuša Rojs</li>
                </ul>
              </div>

              <div className="mt-7.5">
                <h3 className="text-xl font-semibold text-black dark:text-white mb-2">🎟️ Nakup vstopnic za petek:</h3>
                <p>Vstopnice po ceni 10 € so na voljo na naslednjih prodajnih mestih:</p>
                <ul className="list-disc list-inside ml-4 mt-2">
                  <li>Gostilna Karla – Rače</li>
                  <li>Gostilna Kurež – Šikole</li>
                  <li>Pizzeria Klara – Jablane</li>
                  <li>Center Caffe Bar – Pragersko</li>
                  <li>Šport Cafe – Rače</li>
                  <li>Bar Jurček – Brunšvik</li>
                  <li>Naš lokal – Polskava</li>
                </ul>
                <p className="mt-2">
                  👉 Ali preko spleta: <a href="https://www.entrio.si/event/100-let-pgd-sp-in-zg-gorica-kvatropirci-klapa-kampanel-25132?fbclid=IwY2xjawKrp81leHRuA2FlbQIxMABicmlkETAwbTJhem5EbjBFbHZmS01SAR7WFoHdcqOCBGi6EZuU39YtuNsNCR2ZGaSKwVBmyTMl8uBfn-4lDojdh82Dfg_aem_e0dzfstjnIKJTrvzTuMvbg" target="_blank" rel="noopener noreferrer" className="text-primary underline">Entrio.si</a>
                </p>
              </div>

              <div className="mt-7.5">
                <h3 className="text-xl font-semibold text-black dark:text-white mb-2">🎉 Dodatne informacije:</h3>
                <ul className="list-disc list-inside ml-4">
                  <li>Zabava pod velikim šotorom</li>
                  <li>Bogata kulinarična in gostinska ponudba</li>
                  <li>Dogodek za vse generacije – vabljeni vsi!</li>
                </ul>
              </div>

              <p className="mt-7.5 font-medium text-black dark:text-white">
                Vidimo se na Gorici – skupaj praznujmo 100 let PGD Sp. in Zg. Gorica!
              </p>
        
              {/*<img src="/images/veselica.webp" className='mt-7' alt="Veselica" />*/}
           
            </div>

        
        
          </div>
  

          {/* Sidebar */}
          <Sidebar />
        </div>
      </div>
    </section>
  );
}
