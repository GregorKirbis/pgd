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
              <img src="/images/about/oprema.webp" alt="Upravni Odbor" />
              <h2 className="font-medium text-3xl 2xl:text-title-lg text-black dark:text-white mt-11 mb-5">Vozila in oprema</h2>
             
              <p>
              V voznem parku imamo 2 vozili, in sicer GVC 16/24 tipa Renault 220 dCI, ki je bila svojemu namenu predana leta 2005. Vozilo je opremljeno z vso dodatno opremo v skladu s tipizacijo.
              </p>
              <p className="mt-7.5">
              Za prevoz moštva uporabljamo GVM Peugeot Boxer, ki smo ga kupili leta 2014. Za intervencije uporabljamo tudi avto prikolico v kateri je motorna brizgalna Rosenbauer ter potrebna gasilska oprema (gasilsko orodje in cevi).
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-11.5 my-11.5">
                <img src="/images/about/GasiliskiDom.webp" alt="Gasilski dom" />
                <img src="/images/about/gasilski_avto.webp" alt="GVC" />
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
