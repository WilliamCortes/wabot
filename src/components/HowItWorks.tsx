import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Cuentas tu necesidad",
      description: "Nos explicas qué tipo de negocio tienes (ventas, soporte o reservas) y cuáles son tus procesos actuales."
    },
    {
      number: "2",
      title: "Configuramos tu bot",
      description: "Nuestro equipo técnico configura plantillas personalizadas y entrena al bot con tus respuestas frecuentes."
    },
    {
      number: "3",
      title: "Lo lanzas y empiezas a vender",
      description: "Activamos tu chatbot y te capacitamos para que puedas gestionar y optimizar tus automatizaciones."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-brand-grayLight">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            ¿Cómo funciona?
          </h2>
          <p className="text-xl text-brand-grayText max-w-2xl mx-auto">
            Tres pasos simples para automatizar tu WhatsApp
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-8">
                <div className="w-16 h-16 bg-brand-green rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 shadow-lg">
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-brand-green transform -translate-y-1/2" style={{ width: 'calc(100vw / 3 - 4rem)' }}></div>
                )}
              </div>
              <h3 className="text-xl font-semibold text-brand-dark mb-4">
                {step.title}
              </h3>
              <p className="text-brand-grayText leading-relaxed">
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