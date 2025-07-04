import React from 'react';

export default function Sidebar() {
    return (
     <div className="px-7.5 pt-0 md:pt-10 md:w-1/2 lg:w-[27.7%]">
  

     <div className="animate_top mb-10">
       <ul>
       <li className="last:mb-0 text-2xl mb-3 du-ease-in-out duration-300 text-black hover:text-primary">
           <h5><a href="/o-nas">O nas</a></h5>
         </li>
         <li className="last:mb-0 text-2xl mb-3 du-ease-in-out duration-300 text-black hover:text-primary">
           <h5><a href="/zgodovina">Zgodovina društva</a></h5>
         </li>
         <li className="last:mb-0 text-2xl mb-3 du-ease-in-out duration-300 text-black hover:text-primary">
         <h5><a href="/oprema">Vozila in oprema</a></h5>
         </li>
         <li className="last:mb-0 text-2xl mb-3 du-ease-in-out duration-300 text-black hover:text-primary">
         <h5><a href="/intervencije">Intervencije</a></h5>
         </li>
       </ul>
     </div>
     <div className="animate_top">
       <h4 className="text-2xl text-black dark:text-white mb-12.5"></h4>
       <div>
         <div className="flex items-center gap-4 2xl:gap-6 mb-7.5">
           <img src="/images/about/pgd.webp" alt="Blog" />
           <h5 className="text-title-xsm text-black dark:text-white hover:text-primary dark:hover:text-primary ease-in-out duration-300">
             <a href="/zbornik_PGD_Gorica_100let.pdf" target='_blank'><b>ZBORNIK</b><br/><small>1925-2025</small></a>
           </h5>
         </div>
      
       </div>
     </div>
  

     <div className="animate_top">
       <h4 className="text-2xl text-black dark:text-white mb-7.5">Povezave</h4>
       <div>
         <div className="flex items-center gap-4 2xl:gap-6 mb-7.5">
           <img src="/images/about/gzs.png" alt="Blog" />
           <h5 className="text-title-xsm text-black dark:text-white hover:text-primary dark:hover:text-primary ease-in-out duration-300">
             <a href="https://gasilec.net/">Gasilska Zveza<br/>Slovenije</a>
           </h5>
         </div>
         <div className="flex items-center gap-4 2xl:gap-6 mb-7.5">
           <img src="/images/about/gzm.png" alt="Blog" />
           <h5 className="text-title-xsm text-black dark:text-white hover:text-primary dark:hover:text-primary ease-in-out duration-300">
             <a href="https://gzmb.si/">Gasilska zveza<br/>Maribor</a>
           </h5>
         </div>
         <div className="flex items-center gap-4 2xl:gap-6">
           <img src="/images/about/orf.png" alt="Blog" />
           <h5 className="text-title-xsm text-black dark:text-white hover:text-primary dark:hover:text-primary ease-in-out duration-300">
             <a href="https://www.race-fram.si/">Občina<br/>Rače - Fram</a>
           </h5>
         </div>
       </div>
     </div>

   </div>
      );
}