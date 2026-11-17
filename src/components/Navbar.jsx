import React, { useState, useEffect } from 'react';
import { Stethoscope, Calendar, Menu, X } from 'lucide-react';

export default function Navbar({ profile }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'الرئيسية', href: '#home', id: 'home' },
    { name: 'عن الدكتور', href: '#about', id: 'about' },
    { name: 'العيادة والعمليات', href: '#surgeries', id: 'surgeries' },
    { name: 'المشافي', href: '#hospitals', id: 'hospitals' },
    { name: 'الشهادات والأبحاث', href: '#credentials', id: 'credentials' },
    { name: 'الأخبار', href: '#news', id: 'news' },
    { name: 'آراء الزوار', href: '#reviews', id: 'reviews' },
    { name: 'الأسئلة الشائعة', href: '#faq', id: 'faq' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + 180;

      for (let i = navLinks.length - 1; i >= 0; i--) {
        const section = document.getElementById(navLinks[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-3 border-b border-slate-100'
          : 'bg-white/80 backdrop-blur-xs py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {}
          <a
            href="#home"
            onClick={() => setActiveSection('home')}
            className="flex items-center gap-3 group"
          >
            <div className="bg-teal-600 text-white p-2.5 rounded-xl shadow-md group-hover:bg-teal-700 transition">
              <Stethoscope className="w-6 h-6" />
            </div>
            <div>
              <span className="block font-extrabold text-base sm:text-lg text-slate-900 leading-tight">
                {profile.clinicName}
              </span>
              <span className="block text-xs text-teal-700 font-semibold">
                اختصاصي جراحة الأطفال والمسالك البولية
              </span>
            </div>
          </a>

          {}
          <div className="hidden lg:flex items-center gap-1 bg-slate-100/80 p-1.5 rounded-2xl border border-slate-200/60">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setActiveSection(link.id)}
                  className={`px-3 py-2 rounded-xl text-xs font-bold transition-all duration-300 ${
                    isActive
                      ? 'bg-teal-600 text-white shadow-sm'
                      : 'text-slate-600 hover:text-teal-600 hover:bg-white/60'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {}
          <div className="hidden sm:block">
            <a
              href="#booking"
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-teal-600 text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl shadow-sm transition-all duration-300"
            >
              <Calendar className="w-4 h-4" />
              <span>حجز موعد</span>
            </a>
          </div>

          {}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 bg-white rounded-2xl shadow-xl border border-slate-100 p-4 space-y-1.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    setActiveSection(link.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`block py-2.5 px-3 rounded-xl font-bold text-sm transition-colors ${
                    isActive
                      ? 'bg-teal-600 text-white'
                      : 'text-slate-700 hover:bg-teal-50 hover:text-teal-700'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            <a
              href="#booking"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full bg-teal-600 text-white font-bold py-3 rounded-xl mt-2"
            >
              <Calendar className="w-4 h-4" />
              <span>احجز استشارة الآن</span>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}