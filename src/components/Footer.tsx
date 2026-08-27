import React from 'react';
import Link from 'next/link';
import { MessageCircle, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contacto" className="bg-night text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center bubble-corner bg-whatsapp text-white">
                <MessageCircle className="w-4 h-4" strokeWidth={2.5} />
              </span>
              <span className="text-xl font-display font-semibold tracking-tight">Wabot365</span>
            </div>
            <p className="text-white/70 text-lg max-w-md leading-relaxed">
              Chatbots de WhatsApp diseñados para microempresas colombianas: prácticos, económicos y con soporte local.
            </p>
            <a
              href="mailto:soporte@wabot365.com"
              className="inline-flex items-center gap-2 text-white/90 hover:text-whatsapp-light transition-colors"
            >
              <Mail className="w-4 h-4" />
              soporte@wabot365.com
            </a>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Producto</h4>
            <ul className="space-y-3 text-white/70 text-sm">
              <li><Link href="/#features" className="hover:text-whatsapp-light transition-colors">Características</Link></li>
              <li><Link href="/#how-it-works" className="hover:text-whatsapp-light transition-colors">Cómo funciona</Link></li>
              <li><Link href="/#pricing" className="hover:text-whatsapp-light transition-colors">Planes</Link></li>
              <li><Link href="/#faq" className="hover:text-whatsapp-light transition-colors">Preguntas frecuentes</Link></li>
              <li><Link href="/blog" className="hover:text-whatsapp-light transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Legal</h4>
            <ul className="space-y-3 text-white/70 text-sm">
              <li><Link href="/politica-privacidad" className="hover:text-whatsapp-light transition-colors">Política de privacidad</Link></li>
              <li><a href="mailto:soporte@wabot365.com" className="hover:text-whatsapp-light transition-colors">Contacto</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center md:text-left text-white/50 text-sm">
          <p>&copy; {new Date().getFullYear()} Wabot365 — Hecho en Colombia 🇨🇴</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
