import React from 'react';

const PhoneMock = () => {
  return (
    <div className="relative mx-auto w-80 h-[600px] bg-gray-900 rounded-3xl shadow-2xl overflow-hidden">
      {/* Phone Frame */}
      <div className="absolute inset-2 bg-white rounded-2xl overflow-hidden">
        {/* Status Bar */}
        <div className="bg-gray-100 px-4 py-2 flex justify-between items-center text-xs text-gray-600">
          <span>9:41</span>
          <div className="flex space-x-1">
            <div className="w-4 h-2 bg-gray-400 rounded-sm"></div>
            <div className="w-4 h-2 bg-gray-400 rounded-sm"></div>
            <div className="w-4 h-2 bg-gray-400 rounded-sm"></div>
          </div>
        </div>

        {/* WhatsApp Header */}
        <div className="bg-green-600 px-4 py-3 flex items-center space-x-3">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <span className="text-green-600 font-bold text-sm">W</span>
          </div>
          <div>
            <h3 className="text-white font-medium text-sm">Mi Negocio</h3>
            <p className="text-green-100 text-xs">En línea</p>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 p-4 space-y-3 bg-gray-50">
          {/* Customer Message */}
          <div className="flex justify-start">
            <div className="bg-gray-200 text-gray-800 px-4 py-2 rounded-2xl rounded-tl-md max-w-xs">
              Hola, ¿tienen envío hoy?
            </div>
          </div>

          {/* Bot Response */}
          <div className="flex justify-end">
            <div className="bg-green-500 text-white px-4 py-2 rounded-2xl rounded-tr-md max-w-xs">
              ¡Hola! 👋 Sí, hacemos envíos en Bogotá. ¿Quieres ver el menú o hacer tu pedido?
            </div>
          </div>

          {/* Customer Message */}
          <div className="flex justify-start">
            <div className="bg-gray-200 text-gray-800 px-4 py-2 rounded-2xl rounded-tl-md max-w-xs">
              Ver menú
            </div>
          </div>

          {/* Bot Response */}
          <div className="flex justify-end">
            <div className="bg-green-500 text-white px-4 py-2 rounded-2xl rounded-tr-md max-w-xs">
              Aquí tienes 👇<br/>
              Combo 1 — $18.000<br/>
              Combo 2 — $22.000
            </div>
          </div>
        </div>

        {/* Message Input */}
        <div className="bg-gray-100 px-4 py-3 flex items-center space-x-2">
          <div className="flex-1 bg-white rounded-full px-4 py-2 text-sm text-gray-500">
            Escribe un mensaje...
          </div>
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
            <span className="text-white text-sm">📎</span>
          </div>
        </div>
      </div>

      {/* Home Indicator */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-400 rounded-full"></div>
    </div>
  );
};

export default PhoneMock;