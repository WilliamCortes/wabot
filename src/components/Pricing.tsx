import React from 'react';
import { Check } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$49.000",
      period: "mes",
      description: "Perfecto para comenzar",
      features: [
        "Hasta 500 conversaciones/mes",
        "Respuestas básicas",
        "Soporte por email",
        "Configuración inicial incluida"
      ],
      popular: false
    },
    {
      name: "Negocio",
      price: "$99.000",
      period: "mes",
      description: "Para negocios en crecimiento",
      features: [
        "Hasta 2.000 conversaciones/mes",
        "Respuestas inteligentes",
        "Integración con catálogo",
        "Soporte prioritario",
        "Reportes mensuales"
      ],
      popular: true
    },
    {
      name: "Escala",
      price: "$199.000",
      period: "mes",
      description: "Para operaciones grandes",
      features: [
        "Conversaciones ilimitadas",
        "IA avanzada personalizada",
        "Múltiples números WhatsApp",
        "API completa",
        "Soporte 24/7",
        "Consultoría mensual"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            Planes diseñados para tu negocio
          </h2>
          <p className="text-xl text-brand-grayText max-w-2xl mx-auto">
            Elige el plan que mejor se adapte a tus necesidades y comienza a automatizar hoy mismo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden ${
                plan.popular ? 'ring-2 ring-brand-green scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-brand-green text-white px-4 py-1 rounded-full text-sm font-medium">
                    Más popular
                  </span>
                </div>
              )}

              <div className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-brand-dark mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-brand-grayText mb-4">
                    {plan.description}
                  </p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-brand-dark">
                      {plan.price}
                    </span>
                    <span className="text-brand-grayText ml-2">
                      /{plan.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-brand-green mr-3 flex-shrink-0" />
                      <span className="text-brand-grayText">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 px-6 rounded-2xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-brand-green hover:bg-brand-blue text-white shadow-lg'
                      : 'bg-brand-grayLight hover:bg-brand-green text-brand-dark hover:text-white'
                  }`}
                >
                  Elegir plan
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;