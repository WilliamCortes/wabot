import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-brand-green">Wabot365</h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-brand-dark hover:text-brand-green transition-colors duration-300">
              Características
            </a>
            <a href="#pricing" className="text-brand-dark hover:text-brand-green transition-colors duration-300">
              Planes
            </a>
            <a href="#how-it-works" className="text-brand-dark hover:text-brand-green transition-colors duration-300">
              Cómo funciona
            </a>
            <a href="#contact" className="text-brand-dark hover:text-brand-green transition-colors duration-300">
              Contacto
            </a>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center">
            <button className="bg-brand-green hover:bg-brand-blue text-white font-semibold py-3 px-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              Probar gratis
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;