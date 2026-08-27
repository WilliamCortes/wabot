import React from 'react';
import { Check } from 'lucide-react';

const PLANS = [
  {
    name: 'Starter',
    price: '$49.000',
    description: 'Perfecto para comenzar',
    features: [
      'Hasta 500 conversaciones/mes',
      'Respuestas básicas',
      'Soporte por correo',
      'Configuración inicial incluida',
    ],
    popular: false,
  },
  {
    name: 'Negocio',
    price: '$99.000',
    description: 'Para negocios en crecimiento',
    features: [
      'Hasta 2.000 conversaciones/mes',
      'Respuestas inteligentes',
      'Integración con catálogo',
      'Soporte prioritario',
      'Reportes mensuales',
    ],
    popular: true,
  },
  {
    name: 'Escala',
    price: '$199.000',
    description: 'Para operaciones grandes',
    features: [
      'Conversaciones ilimitadas',
      'IA avanzada personalizada',
      'Múltiples números de WhatsApp',
      'API completa',
      'Soporte 24/7',
      'Consultoría mensual',
    ],
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-paper-deep">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <span className="text-whatsapp-deep font-semibold tracking-wide uppercase text-sm mb-3 block">
            Planes
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-ink mb-4">
            Un plan para cada tamaño de negocio
          </h2>
          <p className="text-lg text-ink-soft">
            Elige según cuántas conversaciones maneja tu WhatsApp al mes. Cambia de plan cuando quieras.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white p-8 flex flex-col ${
                plan.popular ? 'bubble-corner ring-2 ring-whatsapp md:-translate-y-3' : 'bubble-corner-alt border border-line'
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3.5 left-8 bg-whatsapp text-white text-xs font-semibold px-3 py-1 bubble-corner">
                  Más popular
                </span>
              )}

              <h3 className="text-xl font-display font-semibold text-ink mb-1">{plan.name}</h3>
              <p className="text-ink-soft text-sm mb-6">{plan.description}</p>

              <div className="mb-6">
                <span className="text-4xl font-display font-semibold text-ink">{plan.price}</span>
                <span className="text-ink-soft ml-1">COP /mes</span>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm">
                    <Check className="w-4 h-4 text-whatsapp-deep mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                    <span className="text-ink-soft">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contacto"
                className={`text-center py-3 px-6 font-semibold transition-all duration-200 ${
                  plan.popular
                    ? 'bg-whatsapp hover:bg-whatsapp-deep text-white bubble-corner'
                    : 'bg-paper-deep hover:bg-ink hover:text-white text-ink bubble-corner-alt'
                }`}
              >
                Elegir {plan.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
