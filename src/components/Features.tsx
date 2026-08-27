import React from 'react';
import { Zap, Clock, CheckCircle, Users, BarChart3, ShieldCheck } from 'lucide-react';

const FEATURES = [
  {
    icon: Zap,
    title: 'Responde al instante',
    description: 'Tu bot contesta en segundos, a cualquier hora. Ningún cliente espera y ninguna venta se pierde por demora.',
  },
  {
    icon: Clock,
    title: 'Ahorra tiempo real',
    description: 'Las preguntas frecuentes y los pedidos se resuelven solos, para que dediques tus horas a atender lo que sí necesita a una persona.',
  },
  {
    icon: CheckCircle,
    title: 'Listo en 48 horas',
    description: 'Nuestro equipo configura y entrena tu chatbot con tus productos y respuestas. Sin instalar nada, sin escribir código.',
  },
  {
    icon: Users,
    title: 'Todo tu equipo, un número',
    description: 'Varios agentes atienden desde la misma línea de WhatsApp, con los chats organizados y asignados sin cruces.',
  },
  {
    icon: BarChart3,
    title: 'Métricas de verdad',
    description: 'Cuántos chats se resolvieron solos, cuántos pasaron a un humano y cuánto tardó cada respuesta.',
  },
  {
    icon: ShieldCheck,
    title: 'API oficial de WhatsApp',
    description: 'Tu chatbot corre sobre la API de WhatsApp Business de Meta, no sobre un número prestado que puede bloquearse.',
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-paper-deep">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <span className="text-whatsapp-deep font-semibold tracking-wide uppercase text-sm mb-3 block">
            Características
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-ink">
            Todo lo que necesita tu WhatsApp para vender más
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            const accent = index % 2 === 0 ? 'bg-whatsapp' : 'bg-clay';
            const shape = index % 2 === 0 ? 'bubble-corner' : 'bubble-corner-alt';
            return (
              <div
                key={feature.title}
                className={`bg-white p-8 border border-line transition-transform duration-200 hover:-translate-y-1 ${shape}`}
              >
                <div className={`w-12 h-12 ${accent} ${shape} flex items-center justify-center mb-6`}>
                  <Icon className="w-5 h-5 text-white" strokeWidth={2.2} />
                </div>
                <h3 className="text-lg font-display font-semibold text-ink mb-2">
                  {feature.title}
                </h3>
                <p className="text-ink-soft leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
