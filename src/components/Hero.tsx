'use client';

import React from 'react';
import { motion } from 'framer-motion';
import PhoneMock from './PhoneMock';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-brand-grayLight via-white to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-dark leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Automatiza tu WhatsApp y convierte mensajes en ventas
              </motion.h1>
              <motion.p
                className="text-xl text-brand-grayText leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Wabot365 configura y administra tu chatbot de WhatsApp para responder clientes, tomar pedidos y agendar citas sin complicaciones.
              </motion.p>
            </div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button className="bg-brand-green hover:bg-brand-blue text-white font-semibold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-lg">
                Comenzar gratis
              </button>
              <button className="border-2 border-brand-green text-brand-green hover:bg-brand-green hover:text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 text-lg">
                Ver demo
              </button>
            </motion.div>

            <motion.div
              className="flex items-center space-x-6 text-sm text-brand-grayText"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="flex items-center space-x-2">
                <span className="text-green-500">✓</span>
                <span>Sin instalación compleja</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-500">✓</span>
                <span>Soporte 24/7</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-500">✓</span>
                <span>Configuración en 48h</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Phone Mock */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <PhoneMock />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;