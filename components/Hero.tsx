import React from 'react';
import { ArrowRight, CheckCircle, TrendingUp } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-primary-700 text-xs font-semibold tracking-wide uppercase mb-4">
                <TrendingUp size={14} />
                Potencialize seu faturamento
              </div>
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Sua agenda cheia,</span>{' '}
                <span className="block text-primary-600 xl:inline">sua gestão simplificada</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Pare de perder tempo no WhatsApp. Ofereça uma experiência de agendamento profissional para seus clientes e tenha controle total do financeiro e da equipe em um único lugar.
              </p>
              
              <div className="mt-6 flex items-center justify-center lg:justify-start gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4 text-green-500" /> Link de agendamento próprio
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4 text-green-500" /> Redução de faltas
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4 text-green-500" /> Gestão financeira
                </div>
              </div>

              <div className="mt-8 sm:flex sm:justify-center lg:justify-start gap-3">
                 <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 md:py-4 md:text-lg md:px-10 shadow-lg hover:shadow-xl transition-all">
                    Começar Agora
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                  <button className="mt-3 sm:mt-0 w-full flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                    Ver Demonstração
                  </button>
              </div>

            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-gray-50 flex items-center justify-center">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full opacity-90"
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
          alt="Dono de negócio feliz usando tablet"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/20 to-transparent lg:via-transparent"></div>
      </div>
    </div>
  );
};

export default Hero;