import React from 'react';
import Image from 'next/image';
import Sidebar from '../components/Sidebar';

export default function Aktualno() {
  return (
    <section className="pt-25 lg:pt-25 xl:pt-25 pb-20 lg:pb-25 xl:pb-30">
      <div className="mx-auto max-w-1390 px-4 md:px-8 2xl:px-0">
        <div className="flex flex-col lg:flex-row gap-7.5 xl:gap-17.5">
          {/* Blog Post Content */}
          <div className="lg:w-[70%]">
            <div className="animate_top  shadow-solid-13 bg-white dark:bg-blacksection dark:border-strokedark p-7.5 md:p-10">
              <img src="/images/about/veselica.webp" alt="Upravni Odbor" />
              <h2 className="font-medium text-3xl 2xl:text-title-lg text-black dark:text-white mt-11 mb-5">100 let PGD Sp. in Zg. Gorica</h2>
              
              <p>
              PGD Spodnja in Zgornja Gorica vabi vse člane, podpornike in prijatelje gasilstva na 100. občni zbor, ki bo potekal v soboto, 22. februarja 2025, ob 18:30 v prostorih gasilskega doma.
              </p>
              <p className="mt-7.5">
              Ob tej posebni priložnosti bomo pregledali preteklo delo društva, se zahvalili vsem članom za njihov trud in predstavili načrte za prihodnost. Prav tako bomo podelili priznanja in nagrade zaslužnim članom.
              </p>
              <p className="mt-7.5">
              Udeležba na občnem zboru je za člane obvezna v gasilski uniformi (paradna ali delovna).
              </p>
              <p className="mt-7.5 text-black">
              <strong>Praznovanje 100-letnice društva</strong>
              </p>
              <p className="mt-7.5">
              Ker je leto 2025 za naše društvo izjemnega pomena, bomo ob tej priložnosti pripravili veliko gasilsko veselico, ki bo potekala 20. in 21. junija 2025.
              </p>
              <p className="mt-7.5">
              Na veselici nas bo čakala odlična glasba, bogata gostinska ponudba in nepozabno druženje, zato vabljeni vsi, da skupaj proslavimo stoletnico delovanja društva!
              </p>

              
            </div>
          </div>

          
               {/* Sidebar */}
                <Sidebar/>
        </div>
      </div>
    </section>
  );
}
