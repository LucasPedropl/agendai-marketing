import React from 'react';
import { Scissors, Stethoscope, Dumbbell, Dog, Smile, Gavel, Sparkles, MessageCircle } from 'lucide-react';

const segments = [
  { name: 'Salão de Beleza', icon: Scissors, color: 'text-pink-500', bg: 'bg-pink-50', border: 'hover:border-pink-200' },
  { name: 'Psicólogos', icon: Smile, color: 'text-teal-500', bg: 'bg-teal-50', border: 'hover:border-teal-200' },
  { name: 'Dentistas', icon: Stethoscope, color: 'text-blue-500', bg: 'bg-blue-50', border: 'hover:border-blue-200' },
  { name: 'Advogados', icon: Gavel, color: 'text-slate-700', bg: 'bg-slate-100', border: 'hover:border-slate-300' },
  { name: 'Barbearias', icon: Scissors, color: 'text-orange-600', bg: 'bg-orange-50', border: 'hover:border-orange-200' },
  { name: 'Estética', icon: Sparkles, color: 'text-purple-500', bg: 'bg-purple-50', border: 'hover:border-purple-200' },
  { name: 'Personal Trainer', icon: Dumbbell, color: 'text-red-500', bg: 'bg-red-50', border: 'hover:border-red-200' },
  { name: 'Pet Shops', icon: Dog, color: 'text-yellow-600', bg: 'bg-yellow-50', border: 'hover:border-yellow-200' },
];

const Segments: React.FC = () => {
  return (
    <div id="segments" className="bg-gradient-to-b from-gray-50 to-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase mb-2">Versatilidade</h2>
        <h3 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">
          Feito para o seu negócio, <br className="hidden sm:block" />
          <span className="text-primary-600">seja ele qual for.</span>
        </h3>
        <p className="max-w-2xl mx-auto text-xl text-gray-500 mb-16">
           A AgendaAi se adapta às regras do seu nicho, seja você um profissional autônomo ou uma grande clínica.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {segments.map((segment, index) => (
            <div 
                key={index} 
                className={`bg-white p-8 rounded-2xl shadow-sm border border-gray-100 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl ${segment.border} group cursor-default relative overflow-hidden`}
            >
              <div className={`absolute top-0 right-0 w-24 h-24 ${segment.bg} rounded-full -mr-12 -mt-12 opacity-50 group-hover:scale-150 transition-transform duration-500`}></div>
              
              <div className="flex flex-col items-center gap-4 relative z-10">
                <div className={`w-16 h-16 ${segment.bg} rounded-2xl flex items-center justify-center group-hover:rotate-6 transition-transform duration-300`}>
                  <segment.icon className={`w-8 h-8 ${segment.color}`} />
                </div>
                <h4 className="font-bold text-gray-800 text-lg group-hover:text-primary-700 transition-colors">{segment.name}</h4>
              </div>
            </div>
          ))}
        </div>

        {/* "And More" Section */}
        <div className="bg-slate-900 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl mx-auto max-w-5xl">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
                <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary-500 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 right-0 w-80 h-80 bg-purple-600 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-left">
                    <h4 className="text-2xl font-bold text-white mb-3">
                        Não encontrou o seu segmento?
                    </h4>
                    <p className="text-slate-300 max-w-lg text-lg leading-relaxed">
                        Nossa plataforma é flexível. De consultórios médicos a serviços automotivos, se você trabalha com horário marcado, o AgendaAi é a solução ideal.
                    </p>
                </div>
                <div>
                     <a 
                        href="https://api.whatsapp.com/send?l=pt_BR&phone=553193585185&text=Olá, tenho um negócio diferente e gostaria de saber se a plataforma serve para mim."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center bg-white text-slate-900 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl whitespace-nowrap gap-2"
                    >
                        <MessageCircle size={20} className="text-primary-600"/>
                        Falar com um Consultor
                    </a>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Segments;