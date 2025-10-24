'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Clock, CheckCircle } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-brand-green" />,
      title: "Responde al instante",
      description: "Bots listos para ventas y atención. Nunca pierdas una oportunidad de negocio por respuesta tardía."
    },
    {
      icon: <Clock className="w-8 h-8 text-brand-green" />,
      title: "Ahorra tiempo",
      description: "Automatiza preguntas frecuentes y pedidos. Dedica más tiempo a crecer tu negocio."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-brand-green" />,
      title: "Fácil de usar",
      description: "Instalación en 48 horas con soporte local. Diseñado específicamente para microempresarios colombianos."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            ¿Por qué elegir Wabot365?
          </h2>
          <p className="text-xl text-brand-grayText max-w-2xl mx-auto">
            Tecnología avanzada al servicio de tu negocio local
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-brand-grayLight rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-brand-dark mb-4">
                {feature.title}
              </h3>
              <p className="text-brand-grayText leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;