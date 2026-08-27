import React from 'react';

const STEPS = [
  {
    number: '1',
    title: 'Nos cuentas tu negocio',
    description: 'Nos explicas qué necesitas —ventas, soporte o reservas— y cómo atiendes hoy a tus clientes.',
  },
  {
    number: '2',
    title: 'Configuramos tu bot',
    description: 'Nuestro equipo arma las plantillas y entrena las respuestas con tu catálogo y tus preguntas frecuentes.',
  },
  {
    number: '3',
    title: 'Lo lanzas y vendes',
    description: 'Activamos tu chatbot y te capacitamos para que ajustes y sigas las conversaciones tú mismo.',
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <span className="text-whatsapp-deep font-semibold tracking-wide uppercase text-sm mb-3 block">
            Cómo funciona
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-ink">
            Tres pasos, 48 horas
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 relative">
          <div className="hidden md:block absolute top-6 left-[16.5%] right-[16.5%] h-px bg-line" />
          {STEPS.map((step) => (
            <div key={step.number} className="relative">
              <div className="w-12 h-12 bg-night text-white font-display font-semibold text-lg flex items-center justify-center bubble-corner mb-6 relative z-10">
                {step.number}
              </div>
              <h3 className="text-xl font-display font-semibold text-ink mb-3">
                {step.title}
              </h3>
              <p className="text-ink-soft leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
