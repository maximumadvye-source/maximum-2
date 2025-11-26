import "./App.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Why from "./components/Why";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="bg-[#f8f9fc] text-[#1a1b2f] font-sans">
      {/* الهيدر */}
      <header className="sticky top-0 z-50 shadow-md bg-white/90 backdrop-blur-lg">
        <Header />
      </header>

      {/* واجهة فني كهرباء */}
      <section className="min-h-[100vh] flex items-center justify-center bg-gradient-to-br from-yellow-400 via-yellow-600 to-blue-900 text-white p-6">
        <Hero />
      </section>

      {/* لماذا تختارنا */}
      <section className="py-20 container mx-auto px-6">
        <Why />
      </section>

      {/* خدمات كهربائية احترافية */}
      <section className="py-20 bg-white shadow-inner">
        <div className="container mx-auto px-6">
          <Services />
        </div>
      </section>

      {/* نبذة عن الفني */}
      <section className="py-20 container mx-auto px-6 bg-[#f1f2f7] rounded-3xl my-10 shadow-md">
        <About />
      </section>

      {/* معرض الأعمال الكهربائية */}
      <section className="py-20 container mx-auto px-6">
        <Portfolio />
      </section>

      {/* آراء العملاء: تمّت إزالتها */}

      {/* تواصل معنا */}
      <section className="py-20 bg-[#0d1b2a] text-white">
        <div className="container mx-auto px-6">
          <Contact />
        </div>
      </section>

      {/* الفوتر */}
      <footer className="bg-black text-gray-300 text-center py-6 mt-10">
        <p>© 2025 فني كهرباء – جميع الحقوق محفوظة</p>
      </footer>
    </div>
  );
}
