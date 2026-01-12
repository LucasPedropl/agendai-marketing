import React from 'react';
import { Calendar, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-primary-600 p-1.5 rounded-lg">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">AgendaAi</span>
            </div>
            <p className="text-gray-400 text-sm">
              Simplificando a conexão entre clientes e serviços de qualidade.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Produto</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Funcionalidades</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Preços</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Para Empresas</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Para Clientes</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Suporte</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Ajuda</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Contato</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Termos de Uso</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Privacidade</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Social</h3>
            <div className="flex space-x-6 mt-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p className="text-base text-gray-400">&copy; 2024 AgendaAi. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;