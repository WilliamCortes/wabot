import React from 'react';
import { MessageCircle, Paperclip } from 'lucide-react';

const PhoneMock = () => {
  return (
    <div className="relative mx-auto w-80 h-[600px] bg-night rounded-[2.5rem] shadow-lift overflow-hidden p-2">
      <div className="h-full bg-white rounded-[2rem] overflow-hidden flex flex-col">
        <div className="bg-paper-deep px-4 py-2 flex justify-between items-center text-xs text-ink-soft font-mono">
          <span>9:41</span>
          <div className="flex gap-1">
            <div className="w-4 h-2 bg-ink-soft/40 rounded-sm"></div>
            <div className="w-4 h-2 bg-ink-soft/40 rounded-sm"></div>
            <div className="w-4 h-2 bg-ink-soft/40 rounded-sm"></div>
          </div>
        </div>

        <div className="bg-whatsapp px-4 py-3 flex items-center gap-3">
          <div className="w-8 h-8 bg-white flex items-center justify-center bubble-corner">
            <MessageCircle className="w-4 h-4 text-whatsapp-deep" strokeWidth={2.5} />
          </div>
          <div>
            <h3 className="text-white font-medium text-sm">Mi Negocio</h3>
            <p className="text-white/80 text-xs">En línea</p>
          </div>
        </div>

        <div className="flex-1 p-4 space-y-3 bg-paper">
          <div className="flex justify-start">
            <div className="bg-paper-deep text-ink px-4 py-2 bubble-corner-alt max-w-[85%] text-sm">
              Hola, ¿tienen envío hoy?
            </div>
          </div>

          <div className="flex justify-end">
            <div className="bg-bubble text-ink px-4 py-2 bubble-corner max-w-[85%] text-sm">
              ¡Hola! 👋 Sí, hacemos envíos en Bogotá. ¿Quieres ver el menú o hacer tu pedido?
            </div>
          </div>

          <div className="flex justify-start">
            <div className="bg-paper-deep text-ink px-4 py-2 bubble-corner-alt max-w-[85%] text-sm">
              Ver menú
            </div>
          </div>

          <div className="flex justify-end">
            <div className="bg-bubble text-ink px-4 py-2 bubble-corner max-w-[85%] text-sm font-mono">
              Combo 1 — $18.000<br />
              Combo 2 — $22.000
            </div>
          </div>
        </div>

        <div className="bg-paper-deep px-4 py-3 flex items-center gap-2">
          <div className="flex-1 bg-white rounded-full px-4 py-2 text-sm text-ink-soft">
            Escribe un mensaje...
          </div>
          <div className="w-8 h-8 bg-whatsapp flex items-center justify-center bubble-corner">
            <Paperclip className="w-4 h-4 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneMock;
