import React from 'react';
import Image from 'next/image';
import Sidebar from '../components/Sidebar';

export default function ONas() {
  return (
    <section className="pt-25 lg:pt-25 xl:pt-25 pb-20 lg:pb-25 xl:pb-30">
      <div className="mx-auto max-w-1390 px-4 md:px-8 2xl:px-0">
        <div className="flex flex-col lg:flex-row gap-7.5 xl:gap-17.5">
          {/* Blog Post Content */}
          <div className="lg:w-[70%]">
            <div className="animate_top  shadow-solid-13 bg-white dark:bg-blacksection dark:border-strokedark p-7.5 md:p-10">
              <img src="/images/about/upravni_odbor.webp" alt="Upravni Odbor" />
              <h2 className="font-medium text-3xl 2xl:text-title-lg text-black dark:text-white mt-11 mb-5">OSNOVNI PODATKI O DRUŠTVU</h2>
              <ul className="flex flex-wrap gap-5 2xl:gap-15 mb-5">
                <li>
                  <span className="block text-black dark:text-white">POLNO IME: </span>
                  Prostovoljno gasilsko društvo Spodnja in Zgornja Gorica
                </li>
              </ul>
              <ul className="flex flex-wrap gap-5 2xl:gap-15 mb-5">
                <li>
                  <span className="block text-black dark:text-white">NASLOV: </span>
                  Sp. Gorica 55a, 2327 Rače
                </li>
              </ul>
              <ul className="flex flex-wrap gap-5 2xl:gap-15 mb-5">
                <li>
                  <span className="block text-black dark:text-white">MATIČNA ŠTEVILKA: </span>
                  5262755000
                </li>
              </ul>
              <ul className="flex flex-wrap gap-5 2xl:gap-15 mb-5">
                <li>
                  <span className="block text-black dark:text-white">DAVČNA ŠTEVILKA: </span>
                  17319501
                </li>
              </ul>
              <ul className="flex flex-wrap gap-5 2xl:gap-15 mb-5">
                <li>
                  <span className="block text-black dark:text-white">TRR: </span>
                  SI56 0443 0000 0666 019, odprt pri OTP banka d.d.
                </li>
              </ul>
              <p>
                Prostovoljno gasilsko društvo Spodnja in Zgornja Gorica združuje gasilce različnih generacij, od najmlajših pionirjev in mladincev do
                izkušenih operativnih članov ter veteranov. Večina članov prihaja iz vasi Spodnja in Zgornja Gorica, kjer s predanostjo in
                požrtvovalnostjo skrbijo za varnost skupnosti.
              </p>
              <p className="mt-7.5">
                Društvo je eno izmed štirih gasilskih društev v občini Rače – Fram, skupaj s PGD Fram, PGD Podova in PGD Rače, ter je del Gasilske
                zveze Maribor.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-11.5 my-11.5">
                <img src="/images/about/GasiliskiDom.webp" alt="Gasilski dom" />
                <img src="/images/about/gasilski_avto.webp" alt="GVC" />
              </div>
              <h2 className="font-medium text-3xl 2xl:text-title-lg text-black dark:text-white mt-11 mb-7.5">GASILSKI DOM</h2>
              <div>
                <p>
                  Jedro našega društva predstavlja gasilski dom, ki se nahaja v Spodnji Gorici. Temeljni kamen sedanjega gasilskega doma je bil
                  postavljen leta 1983. Po nekaj letih prostovoljnega udarniškega dela naših članov je bil le-ta predan svojemu namenu.{' '}
                </p><br/>

                <p>Sam gasilski dom ima veliko površino, sestavljen je iz:</p><br/>
                <ul>
                  <li>
                    <strong>Velike dvorane</strong> – namenjena je za razne družabne dogodke (veselice, praznovanja itd.).
                  </li>
                  <li>
                    <strong>Garaže</strong> – v njem se nahajata naši vozili in oprema gasilcev.
                  </li>
                  <li>
                    <strong>Kuhinje</strong>
                  </li>
                  <li>
                    <strong>Sanitarij</strong>
                  </li>
                  <li>
                    <strong>Sejne sobe</strong>
                  </li>
                </ul>
              </div>

              <h2 className="font-medium text-3xl 2xl:text-title-lg text-black dark:text-white mt-11 mb-7.5">Možnost najema dvorane</h2>
              <div>
                <p>
                Dvorano našega društva in kuhinjo je možno tudi najeti. Sama dvorana je primerna za razna praznovanja za cca. 150 ljudi. V ta namen se v dvorani nahaja večje število miz, 150 udobnih stolov ter klopi. V dvorani je možno izvajati tudi razne kulturno umetniške dejavnosti. V tem primeru je kapaciteta obiskovalcev lahko tudi večja.
                </p>

              </div>

            </div>
          </div>

     {/* Sidebar */}
      <Sidebar/>

        </div>
      </div>
    </section>
  );
}
