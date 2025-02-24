import Image from 'next/image';

export default function Header() {
    return (
        <header className="fixed w-full py-4 px-6 flex justify-between items-center z-50">
          <a href="/">
            <Image src="/images/logo/logo-light_pgd.svg" alt="Logo Light" width={120} height={40} />
          </a>
          <nav className='text-black'>
            <a href="/" className="mx-4 hover:text-red">Domov</a>
            <a href="/o-nas" className="mx-4 hover:text-red">O Nas</a>
            <a href="/dogotki" className="mx-4 hover:text-red">Dogotki</a>
            <a href="/novice" className="mx-4 hover:text-red">Novice</a>
            <a href="/kontakt" className="mx-4 hover:text-red">Kontakt</a>
          </nav>
        </header>
      );
  }