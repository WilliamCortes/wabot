'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { MessageCircle } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Características', href: '/#features' },
  { label: 'Cómo funciona', href: '/#how-it-works' },
  { label: 'Planes', href: '/#pricing' },
  { label: 'Preguntas', href: '/#faq' },
  { label: 'Blog', href: '/blog' },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 border-b ${
        scrolled ? 'bg-paper/90 backdrop-blur-md border-line shadow-soft' : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/#top" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center bubble-corner bg-whatsapp text-paper">
              <MessageCircle className="w-4 h-4" strokeWidth={2.5} />
            </span>
            <span className="text-xl font-display font-semibold text-ink tracking-tight">
              Wabot365
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-ink-soft hover:text-whatsapp-deep font-medium transition-colors duration-200 text-sm"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/#contacto"
              className="hidden md:block text-ink font-medium hover:text-whatsapp-deep transition-colors text-sm"
            >
              Contacto
            </Link>
            <Link
              href="/#pricing"
              className="bg-whatsapp hover:bg-whatsapp-deep text-white font-semibold py-2.5 px-5 bubble-corner shadow-soft transition-all duration-200 text-sm"
            >
              Crear mi chatbot
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
