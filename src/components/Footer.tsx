import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-brand-green mb-4">Wabot365</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Chatbots de WhatsApp diseñados para microempresas colombianas: prácticos, económicos y con soporte local.
            </p>
            <p className="text-sm text-gray-400">
              Transformando la atención al cliente en Colombia 🇨🇴
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Producto</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#features" className="hover:text-brand-green transition-colors">Características</a></li>
              <li><a href="#pricing" className="hover:text-brand-green transition-colors">Planes</a></li>
              <li><a href="#how-it-works" className="hover:text-brand-green transition-colors">Cómo funciona</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Soporte</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-brand-green transition-colors">Centro de ayuda</a></li>
              <li><a href="#" className="hover:text-brand-green transition-colors">WhatsApp soporte</a></li>
              <li><a href="#" className="hover:text-brand-green transition-colors">Política de privacidad</a></li>
              <li><a href="#" className="hover:text-brand-green transition-colors">Términos de servicio</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Wabot365 — Hecho en Colombia 🇨🇴</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;