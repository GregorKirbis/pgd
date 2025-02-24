import React from 'react';

export default function CTA() {
    return (
        <section className="relative overflow-hidden bg-primary py-20 text-center text-white">
          <h2 className="font-bold text-3xl lg:text-4xl xl:text-5xl mb-4">
          Postanite del naše ekipe!
          </h2>
          <p className="mb-6 px-3  mx-auto">
          Ne čakajte – stopite v stik z nami in sodelujte pri varovanju naše skupnosti.<br/>Vaša pomoč lahko reši življenja.
          </p>
          <a href="/kontakt" className="inline-block bg-white text-black py-3 px-8 rounded-full shadow-md hover:shadow-lg transition duration-300">
          Kontaktirajte nas
          </a>
        </section>
      );
}