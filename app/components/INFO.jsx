import React from 'react';
import SectionTitle from './SectionTitle';

export default function INFO() {
  const sectionTitle = "PGD SP. in ZG. Gorica";
  const sectionTitleText =
    "Že vrsto let skrbi za varnost in dobrobit naše skupnosti. Pridružite se nam in ostanite povezani z našimi dejavnostmi.";

  return (
    <section
      id="support"
      className="relative overflow-hidden bg-whiter dark:bg-blacksection py-20 lg:py-25 xl:py-30"
    >
      {/* Section Title */}
      <div>
        <SectionTitle title={sectionTitle} text={sectionTitleText} />
      </div>

      <div className="relative z-10 mx-auto max-w-1280 px-4 md:px-8 xl:px-9 mt-12.5 lg:mt-20">
        <div className="flex flex-wrap md:flex-nowrap flex-col-reverse md:flex-row md:justify-between gap-7.5 xl:gap-10">
          {/* Contact Details */}
          <div className="animate_top w-full md:w-2/5 lg:w-1/3 shadow-3 rounded-lg bg-white dark:bg-black p-7.5 xl:p-12.5 relative overflow-hidden">
            <div className="mb-10">
              <h4 className="text-title-xsm text-black dark:text-white mb-1.5">
                <strong>Kontakt</strong>
              </h4>
            </div>

            <div className="mb-10">
              <h4 className="text-title-xsm text-black dark:text-white mb-1.5">
                PGD Sp. in Zg. Gorica
              </h4>
              <p>Spodnja Gorica 55a</p>
              <p>2327 Rače</p>
              <br />
              <p>Matična številka: 5262755000</p>
              <p>Davčna številka: 17319501</p>
              <p>
                TRR: SI56 0443 0000 0666 019,
                <br /> odprt pri OTP banka d.d.
              </p>
            </div>

            <span className="block h-[1px] bg-strokedark dark:bg-stroke mt-5 mb-10"></span>

            <div className="mb-10">
              <h4 className="text-title-xsm text-black dark:text-white mb-1.5">
                <strong>Vodstvo</strong>
              </h4>
            </div>
            <div className="mb-10">
              <h4 className="text-title-xsm text-black dark:text-white mb-1.5">
                Predsednik
              </h4>
              <p>Srečko Rojs</p>
              <p>
                <a href="mailto:rojs.srecko@gmail.com">rojs.srecko@gmail.com</a>
              </p>
            </div>

            <div className="mb-10">
              <h4 className="text-title-xsm text-black dark:text-white mb-1.5">
                Poveljnik
              </h4>
              <p>Andrej Kancler</p>
              <p>
                <a href="mailto:a.kancler@gmail.com">a.kancler@gmail.com</a>
              </p>
            </div>
          </div>

          {/* Google Map */}
          <div className="animate_top w-full md:w-3/5 lg:w-2/3 shadow-3 rounded-lg bg-white dark:bg-black p-7.5 xl:p-14">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2780.789123456789!2d13.970123!3d46.124123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4764d0a1fcd9d9cd%3A0x123456789abcdef!2sSp.%20Gorica%2055a%2C%202327%20Ra%C4%8De!5e0!3m2!1sen!2ssi!4v1682222222222"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
