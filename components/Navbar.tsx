import React, { useState } from 'react';
import { Calendar, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="bg-primary-600 p-1.5 rounded-lg">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">AgendaAi</span>
            </div>
            <div className="hidden md:ml-10 md:flex md:space-x-8">
              <a 
                href="#preview" 
                onClick={(e) => handleScroll(e, 'preview')}
                className="text-gray-500 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Demonstração
              </a>
              <a 
                href="#features" 
                onClick={(e) => handleScroll(e, 'features')}
                className="text-gray-500 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Funcionalidades
              </a>
              <a 
                href="#segments" 
                onClick={(e) => handleScroll(e, 'segments')}
                className="text-gray-500 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Segmentos
              </a>
              <a 
                href="#pricing" 
                onClick={(e) => handleScroll(e, 'pricing')}
                className="text-gray-500 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Planos
              </a>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm hover:shadow-md">
              Cadastre-se
            </button>
          </div>
          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
            >
              <span className="sr-only">Abrir menu principal</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="pt-2 pb-3 space-y-1">
            <a 
              href="#preview" 
              onClick={(e) => handleScroll(e, 'preview')} 
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-500 hover:bg-gray-50 hover:border-primary-500 hover:text-primary-700"
            >
              Demonstração
            </a>
            <a 
              href="#features" 
              onClick={(e) => handleScroll(e, 'features')} 
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-500 hover:bg-gray-50 hover:border-primary-500 hover:text-primary-700"
            >
              Funcionalidades
            </a>
            <a 
              href="#segments" 
              onClick={(e) => handleScroll(e, 'segments')} 
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-500 hover:bg-gray-50 hover:border-primary-500 hover:text-primary-700"
            >
              Segmentos
            </a>
            <a 
              href="#pricing" 
              onClick={(e) => handleScroll(e, 'pricing')} 
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-500 hover:bg-gray-50 hover:border-primary-500 hover:text-primary-700"
            >
              Planos
            </a>
          </div>
          <div className="pt-4 pb-4 border-t border-gray-200">
            <div className="px-4">
              <button className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary-600 hover:bg-primary-700">
                Cadastre-se
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;