import React from 'react';
import Image from 'next/image';
import Sidebar from '../components/Sidebar';

export default function ONas() {
  return (
    <section className="pt-25 lg:pt-25 xl:pt-25 pb-20 lg:pb-25 xl:pb-30">
      <div className="mx-auto max-w-1390 px-4 md:px-8 2xl:px-0">
        <div className="flex flex-col lg:flex-row gap-7.5 xl:gap-17.5">
          {/* Contact Content */}
          <div className="lg:w-[70%]">
            <div className="animate_top shadow-solid-13 bg-white dark:bg-blacksection dark:border-strokedark p-7.5 md:p-10">
              {/* Google Map */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2780.789123456789!2d13.970123!3d46.124123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4764d0a1fcd9d9cd%3A0x123456789abcdef!2sSp.%20Gorica%2055a%2C%202327%20Ra%C4%8De!5e0!3m2!1sen!2ssi!4v1682222222222"
                width="100%"
                height="335px"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              {/* Contact & Leadership Section */}
              <h2 className="font-medium text-3xl 2xl:text-title-lg text-black dark:text-white mt-11 mb-5">Kontakt</h2>

              {/* Two-Column Layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Contact Details */}
                <div>
                  <h4 className="text-title-xsm text-black dark:text-white mb-1.5">PGD Sp. in Zg. Gorica</h4>
                  <p>Spodnja Gorica 55a</p>
                  <p>2327 Rače</p>
                  <br />
                  <p>
                    Mail: <strong>pgd.gorica@gmail.com</strong>
                  </p>
                </div>
                <div>
                  <p>
                    <strong>Matična številka:</strong> 5262755000
                  </p>
                  <p>
                    <strong>Davčna številka:</strong> 17319501
                  </p>
                  <p>
                    <strong>TRR:</strong> SI56 0443 0000 0666 019
                    <br />
                    odprt pri OTP banka d.d.
                  </p>
                </div>
              </div>
              <span className="block h-[1px] bg-strokedark dark:bg-stroke mt-5 mb-10"></span>
              <h4 className="text-title-xsm text-black dark:text-white mb-1.5">
                    <strong>Vodstvo</strong>
                  </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Leadership */}
                <div>
    

                  <div className="mt-4">
                    <h4 className="text-title-xsm text-black dark:text-white mb-1.5">Predsednik</h4>
                    <p>Srečko Rojs</p>
                    <p>
                      <a href="mailto:rojs.srecko@gmail.com" className="text-blue-600 hover:underline">
                        rojs.srecko@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
                <div>
                  <div className="mt-4">
                    <h4 className="text-title-xsm text-black dark:text-white mb-1.5">Poveljnik</h4>
                    <p>Andrej Kancler</p>
                    <p>
                      <a href="mailto:a.kancler@gmail.com" className="text-blue-600 hover:underline">
                        a.kancler@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <Sidebar />
        </div>
      </div>
    </section>
  );
}
