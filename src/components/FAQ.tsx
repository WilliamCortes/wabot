'use client';

import React, { useState } from 'react';
import { Plus } from 'lucide-react';

const FAQS = [
  {
    question: '¿Qué es un chatbot de WhatsApp y cómo funciona?',
    answer:
      'Es un asistente que responde automáticamente los mensajes que llegan a tu WhatsApp Business: contesta preguntas frecuentes, muestra tu catálogo, toma pedidos y agenda citas. Cuando una conversación necesita a una persona, el chat pasa a tu equipo sin que el cliente pierda el hilo.',
  },
  {
    question: '¿Wabot365 usa la API oficial de WhatsApp Business?',
    answer:
      'Sí. Tu chatbot corre sobre la API oficial de WhatsApp Business de Meta, no sobre un número personal ni herramientas no autorizadas. Esto reduce el riesgo de bloqueos y te permite verificar tu negocio ante los clientes.',
  },
  {
    question: '¿Necesito saber programar para usarlo?',
    answer:
      'No. Nuestro equipo configura y entrena el chatbot con la información de tu negocio. Tú solo revisas las respuestas, apruebas los flujos y, si quieres, ajustas los textos desde un panel sencillo.',
  },
  {
    question: '¿Cuánto cuesta un chatbot de WhatsApp en Wabot365?',
    answer:
      'Los planes van desde $49.000 COP al mes para negocios que reciben hasta 500 conversaciones, hasta $199.000 COP al mes con conversaciones ilimitadas e IA avanzada. Puedes ver el detalle completo en la sección de planes.',
  },
  {
    question: '¿Cuánto tiempo toma poner en marcha mi chatbot?',
    answer:
      'En promedio, 48 horas desde que nos compartes tu catálogo y tus respuestas frecuentes hasta que el bot queda activo y capacitamos a tu equipo para usarlo.',
  },
  {
    question: '¿Puedo cancelar cuando quiera?',
    answer:
      'Sí, los planes son mensuales y puedes cancelar sin penalización desde tu cuenta. No hay contratos de permanencia obligatoria.',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-paper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="text-whatsapp-deep font-semibold tracking-wide uppercase text-sm mb-3 block">
            Preguntas frecuentes
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-ink">
            Resolvemos tus dudas
          </h2>
        </div>

        <div className="divide-y divide-line border-y border-line">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 py-6 text-left"
                >
                  <span className="text-lg font-display font-medium text-ink">
                    {faq.question}
                  </span>
                  <Plus
                    className={`w-5 h-5 text-whatsapp-deep flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="text-ink-soft leading-relaxed pb-6 pr-8">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
