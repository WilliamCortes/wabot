'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import PhoneMock from './PhoneMock';

const TRUST_ITEMS = ['Sin tarjeta de crédito', 'En línea en 48 horas', 'Soporte en español, en Colombia'];

const Hero = () => {
  return (
    <section id="top" className="relative pt-36 pb-24 overflow-hidden bg-paper paper-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 border border-line bg-white/70 px-4 py-1.5 text-sm font-medium text-ink-soft bubble-corner">
                Chatbots de WhatsApp para microempresas
              </span>

              <h1 className="text-5xl md:text-6xl font-display font-semibold text-ink leading-[1.08] tracking-tight">
                El <em className="not-italic text-whatsapp-deep">chatbot de WhatsApp</em> que atiende a tus clientes 24/7
              </h1>

              <p className="text-xl text-ink-soft leading-relaxed max-w-lg">
                Wabot365 configura tu chatbot en 48 horas para responder pedidos, agendar citas y resolver dudas frecuentes, mientras tú te dedicas a tu negocio.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#pricing"
                className="text-center bg-whatsapp hover:bg-whatsapp-deep text-white font-semibold py-4 px-8 bubble-corner shadow-lift transition-all duration-200 text-lg"
              >
                Crear mi chatbot gratis
              </a>
              <a
                href="#how-it-works"
                className="text-center border border-ink/20 text-ink hover:border-whatsapp-deep hover:text-whatsapp-deep font-semibold py-4 px-8 bubble-corner-alt transition-all duration-200 text-lg"
              >
                Ver cómo funciona
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-ink-soft pt-2">
              {TRUST_ITEMS.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-whatsapp-deep" strokeWidth={3} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="flex justify-center lg:justify-end relative"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="absolute inset-0 chat-glow scale-150" />
            <div className="relative z-10">
              <PhoneMock />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
