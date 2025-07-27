'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    // Set dynamic page title
    document.title = "Vše Pro Stavby - Stavební práce, rekonstrukce a novostavby";

    // Generate dynamic favicon (blue/light blue gradient circle)
    const faviconSvg = `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#3b82f6" /><stop offset="100%" stop-color="#93c5fd" /></linearGradient></defs><circle cx="50" cy="50" r="50" fill="url(#g)" /></svg>`;
    const faviconUrl = `data:image/svg+xml;base64,${btoa(faviconSvg)}`;

    let link = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    link.href = faviconUrl;
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600 flex items-center">
            {/* Textual logo based on company name */}
            <Image
              src="/images/logo-house-outline.png"
              alt="Vše Pro Stavby Logo"
              width={40}
              height={40}
              className="mr-2"
            />
            Vše Pro Stavby
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#sluzby" className="text-gray-600 hover:text-blue-600 transition duration-300">Služby</a>
            <a href="#projekty" className="text-gray-600 hover:text-blue-600 transition duration-300">Projekty</a>
            <a href="#onas" className="text-gray-600 hover:text-blue-600 transition duration-300">O nás</a>
            <a href="#kontakt" className="text-white bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-full transition duration-300">Kontakt</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-600 hover:text-blue-600 focus:outline-none">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg py-4 transition-all duration-300 ease-in-out">
            <nav className="flex flex-col items-center space-y-4">
              <a href="#sluzby" onClick={toggleMenu} className="block text-gray-700 hover:text-blue-600 text-lg font-medium">Služby</a>
              <a href="#projekty" onClick={toggleMenu} className="block text-gray-700 hover:text-blue-600 text-lg font-medium">Projekty</a>
              <a href="#onas" onClick={toggleMenu} className="block text-gray-700 hover:text-blue-600 text-lg font-medium">O nás</a>
              <a href="#kontakt" onClick={toggleMenu} className="block text-white bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full text-lg font-medium">Kontakt</a>
            </nav>
          </div>
        )}
      </header>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white min-h-[500px] flex items-center justify-center p-8 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/project-tanvald-finished-exterior.jpg"
              alt="Nově zrekonstruovaný dům, exteriér"
              layout="fill"
              objectFit="cover"
              quality={80}
              priority
              className="opacity-30"
            />
          </div>
          <div className="relative z-10 text-center max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 animate-fade-in-up">
              Vše Pro Stavby: Vaše Vize, Naše Realita.
            </h1>
            <p className="text-lg md:text-xl mb-8 animate-fade-in-up animation-delay-200">
              Komplexní stavební práce, rekonstrukce, a výstavba rodinných domů na klíč.
            </p>
            <a href="#kontakt" className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition duration-300 animate-fade-in-up animation-delay-400">
              Zažádejte o bezplatnou konzultaci
            </a>
          </div>
        </section>

        {/* Services Section */}
        <section id="sluzby" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-12">Naše Služby</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
                <div className="text-blue-600 mb-4 flex justify-center">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-center text-gray-900 mb-4">Kompletní Stavební Práce</h3>
                <p className="text-gray-700 text-center">Od základů po střechu zajišťujeme veškeré stavební činnosti, s důrazem na kvalitu a efektivitu.</p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
                <div className="text-blue-600 mb-4 flex justify-center">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1v-2zM4 21a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1v-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-center text-gray-900 mb-4">Rekonstrukce</h3>
                <p className="text-gray-700 text-center">Proměňte své staré prostory v moderní domov s našimi zkušenostmi s rekonstrukcemi bytů i domů.</p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
                <div className="text-blue-600 mb-4 flex justify-center">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-center text-gray-900 mb-4">Výstavba Rodinných Domů</h3>
                <p className="text-gray-700 text-center">Realizujeme novostavby rodinných domů na klíč, dle vašich představ a s důrazem na udržitelnost.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projekty" className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-12">Naše Projekty</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
                <div className="relative w-full md:w-1/2 h-64 md:h-auto">
                  <Image
                    src="/images/project-tanvald-finished-exterior.jpg"
                    alt="Dokončená exteriérová rekonstrukce v Tanvaldu"
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6 md:w-1/2">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Rekonstrukce rodinného domu - Tanvald</h3>
                  <p className="text-gray-700 mb-4">Kompletní rekonstrukce exteriéru a interiéru staršího rodinného domu, včetně zateplení a fasády. Projekt transformoval energeticky náročný objekt v moderní a úsporné bydlení.</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Nová fasáda a zateplení</li>
                    <li>Výměna oken a dveří</li>
                    <li>Modernizace vnitřních prostor</li>
                  </ul>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
                <div className="relative w-full md:w-1/2 h-64 md:h-auto">
                  <Image
                    src="/images/project-rdpo-modern-house.jpg"
                    alt="Moderní novostavba rodinného domu"
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6 md:w-1/2">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Novostavba moderního rodinného domu - Pohoří</h3>
                  <p className="text-gray-700 mb-4">Výstavba nízkoenergetického rodinného domu na klíč s důrazem na minimalistický design a moderní technologie. Dům splňuje nejnovější standardy pro energetickou účinnost.</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Nízkoenergetická koncepce</li>
                    <li>Inteligentní domácnost</li>
                    <li>Exkluzivní materiály</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="onas" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-12">O Nás</h2>
            <div className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-700 text-center">
              <p className="mb-6">
                Jsme tým zkušených profesionálů z oboru stavebnictví, kteří se specializují na kompletní stavební práce, rekonstrukce a výstavbu rodinných domů. Naším posláním je přinášet kvalitu, spolehlivost a inovativní řešení do každého projektu.
              </p>
              <p className="mb-6">
                Za léta působení na trhu jsme získali důvěru mnoha spokojených zákazníků díky našemu osobnímu přístupu a preciznosti v každém detailu. Věříme, že poctivá práce a otevřená komunikace jsou klíčem k úspěšné realizaci vašich stavebních snů.
              </p>
              <p>
                Od prvního návrhu až po konečnou realizaci jsme s Vámi. Vaše spokojenost je naší prioritou.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="kontakt" className="py-16 bg-blue-700 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Kontaktujte Nás</h2>
            <div className="max-w-2xl mx-auto grid md:grid-cols-2 gap-8 text-lg">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-semibold mb-4">Digitální kanály</h3>
                <p className="flex items-center justify-center md:justify-start mb-2">
                  <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  info@vseprostavby.cz
                </p>
                <p className="flex items-center justify-center md:justify-start mb-2">
                  <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  +420 777 123 456
                </p>
                <p className="flex items-center justify-center md:justify-start mb-2">
                  <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  Stavební 123, 110 00 Praha 1
                </p>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-semibold mb-4">Provozní doba</h3>
                <p className="mb-2">Pondělí - Pátek: 8:00 - 17:00</p>
                <p>Víkendy a svátky: Zavřeno</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-8 text-center">
        <div className="container mx-auto px-4">
          <p className="mb-4">&copy; {new Date().getFullYear()} Vše Pro Stavby. Všechna práva vyhrazena.</p>
          <p>
            Vytvořeno s láskou od{' '}
            <a
              href="https://digitalfusion.cz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition duration-300"
            >
              DigitalFusion
            </a>
          </p>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes fadeInMoveUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInMoveUp 0.8s ease-out forwards;
          opacity: 0; /* Ensures elements are hidden before animation */
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }
      `}</style>
    </div>
  );
}
