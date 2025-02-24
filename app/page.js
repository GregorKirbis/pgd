import React from 'react';
import Image from 'next/image';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Header from './components/Header';
import ScrollTop from './components/ScrollTop';
import SectionTitle from './components/SectionTitle';
import FacebookPosts from './components/FacebookPosts';
import INFO from './components/INFO';
import News from './components/News';
import Header2 from './components/Header2';

export default function Home() {
  return (
    <div className="dark:bg-black min-h-screen flex flex-col">
      <Header2 />
      <main className="flex-grow">
        {/*-- ===== Hero Start ===== */}
        <section className="relative overflow-hidden bg-[url('/images/hero/fire.webp')] bg-cover bg-top pt-35 md:pt-40 xl:pt-52 pb-20 lg:pb-30 xl:pb-59">
          {/* Hero Content */}
          <div className="mx-auto max-w-1390 px-4 md:px-8 2xl:px-0">
            <div className="flex lg:items-center px-2 md:px-8 xl:px-16">
              <div className="animate_left md:w-1/2">
                <h1 className="font-semibold text-3xl lg:text-4xl xl:text-title-xxl text-white dark:text-white mb-6">
                  POGUM
                  <br />
                  PREDANOST
                  <br />
                  ZAŠČITA
                  <br />
                </h1>
                <p className="text-white w-[60%] xl:w-[79%]">Varujemo našo skupnost s predanostjo in odličnostjo.</p>

                <div className="flex flex-col-reverse lg:flex-row gap-7.5 mt-10">
                  <a href="tel:112" className="leading-7 text-sm md:text-xl text-red font-bold bg-white py-2 md:py-3 px-7.5 pr-9  ease-in-out duration-300 inline-flex w-fit hover:shadow-1"
                   style={{  clipPath: 'polygon(0% 0, 100% 0, 90% 100%, 0% 100%)', display: "inline-block"}}>
                    KLIC V SILI <strong>112</strong>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute right-0 -bottom-5 md:bottom-20 py-2 md:py-3 xl:py-4  mb-8 px-8 md:px-13 xl:px-18 bg-white w-[150px] md:w-[250px] xl:w-[320px]" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 15% 100%)' }}>
            <a href="/aktualno" title="aktualno">
            <Image src="/images/logo/100let.svg" alt="100let" width={250} height={100} />
            </a>
          </div>
        </section>
        {/* ===== Hero End ===== */}

       {/* ===== Small Features Section ===== */}
       <section id="features" className="relative z-10 md:h-auto lg:h-20 top-0 lg:-top-20">
  <div className="mx-auto bg-darkgray py-10 max-w-1390 px-1 md:px-20 lg:px-40">
    <div className="flex flex-col md:flex-row justify-center lg:justify-between text-center gap-5 md:gap-10 lg:gap-16">
      
      {/* Feature Item */}
      <div className="animate_top flex flex-col items-center space-y-2 w-full">
        <div className="font-bold text-2xl md:text-3xl lg:text-5xl xl:text-7xl text-red">200+</div>
        <p className="text-xs md:text-sm lg:text-base xl:text-xl font-semibold uppercase">PREDANIH ČLANOV</p>
      </div>

      {/* Feature Item */}
      <div className="animate_top flex flex-col items-center space-y-2 w-full">
        <div className="font-bold text-2xl md:text-3xl lg:text-5xl xl:text-7xl text-red">36+</div>
        <p className="text-xs md:text-sm lg:text-base xl:text-xl font-semibold uppercase">USPOSOBLJENIH OPERATIVCEV</p>
      </div>

      {/* Feature Item */}
      <div className="animate_top flex flex-col items-center space-y-2 w-full">
        <div className="font-bold text-2xl md:text-3xl lg:text-5xl xl:text-7xl text-red">100</div>
        <p className="text-xs md:text-sm lg:text-base xl:text-xl font-semibold uppercase">LET TRADICIJE IN POMOČI</p>
      </div>

    </div>
  </div>
</section>




        {/* ===== About Start ===== */}
        <section className="py-20 lg:py-25 xl:py-30 2xl:py-35 overflow-hidden">
          <div className="mx-auto max-w-1390 px-4 md:px-8 xl:px-9">
            <div className="flex items-center gap-8 xl:gap-30">
              {/* About Images */}
              <div className="animate_left hidden md:flex gap-8 md:w-1/2 relative">
                <div>
                  <Image src="/images/logo/100let.svg" alt="100let" width={120} height={120} className="mb-8 mx-auto" />
                  <Image src="/images/about/onas_1.webp" alt="About" width={250} height={150} className="mb-8" />
                  <Image src="/images/about/onas_2.webp" alt="About" width={250} height={150} />
                </div>
                <div>
                  <Image src="/images/about/onas_3.webp" alt="About" width={250} height={150} className="mb-5" />
                  <Image src="/images/about/onas_4.webp" alt="About" width={250} height={150} className="mt-7.5 mb-5" />
                </div>
              </div>

              {/* About Content */}
              <div className="animate_right md:w-1/2">
                <h4 className="font-medium text-xl text-primary mb-5">O NAS</h4>
                <h2 className="font-semibold text-3xl lg:text-4xl xl:text-title-xl text-black dark:text-white mb-7.5">
                  Prostovoljno gasilsko društvo Spodnja in Zgornja Gorica
                </h2>
                <p className="lg:w-[95%]">
                  Združujemo skupnost s poslanstvom zaščite, varnosti in nudenja podpore. Naše društvo temelji na vrednotah prostovoljstva,
                  pripadnosti in strokovnega usposabljanja. S stoletno tradicijo in aktivnim delovanjem pomembno prispevamo k razvoju kraja ter
                  zagotavljamo varnost njegovih prebivalcev.
                </p>

                <div className="flex flex-col-reverse lg:flex-row gap-7.5 mt-10">
                  <a
                    href="/o-nas"
                    className="leading-7 text-white font-bold  bg-red py-3 px-7.5 ease-in-out duration-300 inline-flex w-fit hover:shadow-1"
                    style={{  clipPath: 'polygon(0% 0, 100% 0, 90% 100%, 0% 100%)', display: "inline-block"}} 
                  >
                    O NAS
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*<News/>*/}
        {/*<FacebookPosts />*/}

        {/* ===== About End ===== */}

        {/*<section id="about" className="py-20">
          <SectionTitle title="About Us" text="We are dedicated to delivering top-notch solutions for businesses." />
        </section>
        <section id="services" className="py-20">
          <SectionTitle title="Our Services" text="We provide a variety of services to help your business grow." />
        </section>
        <section id="contact" className="py-20">
          <SectionTitle title="Contact Us" text="Get in touch with us to learn how we can help you." />
        </section>*/}
        <INFO />
        <CTA />

        <ScrollTop />
        <Footer />
      </main>
    </div>
  );
}
