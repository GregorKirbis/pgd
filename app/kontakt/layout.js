import ScrollTop from '../components/ScrollTop';
import Footer from '../components/Footer';
import Header2 from '../components/Header2';
import CTA from '../components/CTA';

export default function RootLayout({ children }) {
  return (
    <div className="dark:bg-black min-h-screen flex flex-col">
      <Header2 />
      <main className="flex-grow">
        {children}
        <ScrollTop />
        <CTA />
        <Footer />
      </main>
    </div>
  );
}
