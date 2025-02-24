import React from 'react';
import Image from 'next/image';
import Sidebar from '../components/Sidebar';

export default function Zgodovina() {
  return (
    <section className="pt-25 lg:pt-25 xl:pt-25 pb-20 lg:pb-25 xl:pb-30">
      <div className="mx-auto max-w-1390 px-4 md:px-8 2xl:px-0">
        <div className="flex flex-col lg:flex-row gap-7.5 xl:gap-17.5">
          {/* Vsebina prispevka */}
          <div className="lg:w-[70%]">
            <div className="animate_top shadow-solid-13 bg-white dark:bg-blacksection dark:border-strokedark p-7.5 md:p-10">
              <img src="/images/about/zgodovina.webp" alt="Zgodovina" />
              <h2 className="font-medium text-3xl 2xl:text-title-lg text-black dark:text-white mt-11 mb-5">
                ZGODOVINA DRUŠTVA
              </h2>

              <p>
                Zaradi pogostih požarov, ki so v tistem času uničevali lesene, s slamo krite hiše, in ker si posameznik ni mogel veliko pomagati, je bilo treba združiti moči in ustanoviti gasilsko obrambo. Te organizacije so predstavljale zametke današnjih prostovoljnih gasilskih društev.
              </p>

              <p className="mt-7.5">
                Na pobudo Miklošiča Mitje in Voduška Franca so se leta 1925 v takratni vaški gostilni Vodušek na Zgornji Gorici zbrali naslednji Goričani, ki so postali ustanovni člani našega društva: Miklošič Matija, Vodušek Franc, Čelofiga Franc, Napast Ivan starejši, Damjan Ivan, Pernat Ivan, Pernat Simon, Napast Ivan mlajši, Kozoderc Rudolf, Kovačič Franc, Soršak Vinko, Benc Franc, Robar Franc, Fingušt Vinko, Fingušt Janez, Šafar Franc, Valand Jožef in Valand Anton. S tem je začelo delovati gasilsko društvo Gorica.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-11.5 my-11.5">
                <img src="/images/about/zgodovina_1.webp" alt="Gasilski dom" />
                <img src="/images/about/zgodovina_2.webp" alt="GVC" />
              </div>

              <div>
                <p>
                  Društvo je hitro zaživelo in še istega leta nabavilo prvo prevozno sredstvo – prirejeni voz za gasilske potrebe z ročno gasilsko brizgalno. Poleg tega so člani zgradili garažo in sejno sobo, kar je takrat zadostovalo za potrebe društva.
                </p>

                <p className="mt-7.5">
                  Ob deseti obletnici so gasilci Gorice pridobili vprežni voz z motorno brizgalno, kar je bila za tisti čas velika pridobitev.
                </p>

                <p className="mt-7.5">
                  Poseben svečan dogodek je bil leta 1956, ko so razvili prvi prapor gasilskega društva Gorica.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-11.5 my-11.5">
                  <img src="/images/about/zgodovina_3.webp" alt="Gasilski dom" />
                  <img src="/images/about/zgodovina_4.webp" alt="GVC" />
                </div>

                <p className="mt-7.5">
                  Leta 1969 so nabavili stari DKW-kombi, ki je povečal mobilnost gasilcev. Po določenem času se je pojavila potreba po zamenjavi dotrajanega vozila, zato so leta 1974 s skupnimi močmi in pomočjo krajanov kupili nov kombi IMV 1600 in motorno brizgalno Rosenbauer.
                </p>

                <p className="mt-7.5">
                  Zaradi dotrajanosti in pomanjkanja prostora v starem gasilskem domu so člani začeli razmišljati o gradnji novega doma. Leta 1976 so začeli urejati dokumentacijo za gradnjo, ki se je pričela leta 1981. Kljub finančnim težavam je bil novi gasilski dom, s pomočjo OGZ Maribor, vaščanov in številnih prostovoljnih ur, zgrajen in leta 1987 predan v uporabo. V tem obdobju se je dopolnil tudi vozni park – od Zavoda za zaščito in reševanje smo prejeli avtocisterno FAP, ki je kasneje dotrajala, leta 1991 pa še kombinirano vozilo TAM 5500, ki smo ga uporabljali do leta 2000. Takrat smo od PGD Fram pridobili rabljeno avtocisterno TAM 170 T.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-11.5 my-11.5">
                  <img src="/images/about/zgodovina_5.webp" alt="Gasilski dom" />
                  <img src="/images/about/zgodovina_6.webp" alt="GVC" />
                </div>

                <p className="mt-7.5">
                  Z leti se je staral tudi naš kombi IMV 1600, zato smo ga morali zamenjati. Leta 1997 nam je s pomočjo občine in krajanov uspelo nabaviti novo vozilo za prevoz moštva – Peugeot Boxer. Leto kasneje smo v lastni režiji izdelali prikolico za prevoz opreme, ki je še danes v uporabi.
                </p>

                <p className="mt-7.5">
                  Ker se je potreba po požarni varnosti povečala, smo leta 2005 zamenjali kombinirano vozilo TAM 170 T z novim vozilom GVC 16/24.
                </p>

                <p className="mt-7.5">
                  Leta 2008 smo začeli graditi prizidek na južni strani gasilskega doma, kjer smo uredili kuhinjo, umivalnico in kurilnico. Leta 2009 smo zamenjali kritino na dvorani gasilskega doma, leto kasneje pa še nad garažami. Danes se lahko pohvalimo z enim lepših gasilskih domov v GZ Maribor. Večino del na gasilskem domu opravimo s prostovoljnim delom naših članov, članov KUD Spodnja in Zgornja Gorica ter drugih krajanov.
                </p>
              </div>
            </div>
          </div>

          {/* Stranska vrstica */}
          <Sidebar />
        </div>
      </div>
    </section>
  );
}
