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
              <img src="/images/about/intervencije.png" alt="Upravni Odbor" />
              <h2 className="font-medium text-3xl 2xl:text-title-lg text-black dark:text-white mt-11 mb-5">Intervencije</h2>
              
              <p>
              Naše društvo ima številne operativne gasilce, ki lahko sodelujejo pri opravljanju nalog zaščite in reševanja. Kot gasilsko društvo II. kategorije se zavedamo, da lahko svoje naloge uspešno in kakovostno opravljamo le z ustreznim izobraževanjem in opravljenimi specializiranimi izpiti. Zato se redno dodatno izobražujemo.
              </p>
              <p className="mt-7.5">
              Naši gasilci večinoma posredujejo na intervencijah v občini Rače – Fram, ob aktivaciji pa priskočimo na pomoč tudi v drugih območjih.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-11.5 my-11.5">
                <img src="/images/about/intervencije_1.png" alt="Gasilski dom" />
                <img src="/images/about/intervencije_2.png" alt="GVC" />
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
