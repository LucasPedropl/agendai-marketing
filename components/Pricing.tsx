import React from 'react';
import { Check, Star, Zap } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <div id="pricing" className="bg-white py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Planos Flexíveis</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Escolha o plano ideal baseado no tamanho da sua equipe.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-none lg:grid-cols-3">
          
          {/* Inicial Plan */}
          <div className="rounded-3xl p-8 ring-1 ring-gray-200 xl:p-10 bg-white">
            <h3 id="tier-starter" className="text-base font-semibold leading-7 text-gray-900">Inicial</h3>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span className="text-5xl font-bold tracking-tight text-gray-900">R$89,90</span>
              <span className="text-base font-semibold leading-7 text-gray-600">/mês</span>
            </p>
            <p className="mt-6 text-base leading-7 text-gray-600">Ideal para profissionais autônomos que buscam profissionalizar sua agenda.</p>
            <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
              <li className="flex gap-x-3 bg-blue-50 p-2 rounded-lg font-bold"><Check className="h-6 w-5 flex-none text-primary-600" /> 1 Profissional</li>
              <li className="flex gap-x-3"><Check className="h-6 w-5 flex-none text-primary-600" /> Agendamentos Ilimitados</li>
              <li className="flex gap-x-3"><Check className="h-6 w-5 flex-none text-primary-600" /> IA de Vendas WhatsApp</li>
              <li className="flex gap-x-3"><Check className="h-6 w-5 flex-none text-primary-600" /> Pagamentos via Pix</li>
              <li className="flex gap-x-3"><Check className="h-6 w-5 flex-none text-primary-600" /> Link de agendamento online</li>
            </ul>
            <a href="#" className="mt-8 block rounded-md py-2.5 px-3 text-center text-sm font-semibold leading-6 text-primary-600 ring-1 ring-inset ring-primary-200 hover:ring-primary-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600">Começar Agora</a>
          </div>

          {/* Profissional Plan (Highlighted) */}
          <div className="rounded-3xl p-8 ring-2 ring-primary-600 xl:p-10 bg-gray-50 relative shadow-xl scale-105 z-10">
            <div className="absolute top-0 right-0 -mt-4 mr-4 bg-primary-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-md">
              <Star size={12} fill="currentColor" /> Recomendado
            </div>
            <h3 id="tier-pro" className="text-base font-semibold leading-7 text-primary-600">Profissional</h3>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span className="text-5xl font-bold tracking-tight text-gray-900">R$189,90</span>
              <span className="text-base font-semibold leading-7 text-gray-600">/mês</span>
            </p>
            <p className="mt-6 text-base leading-7 text-gray-600">Para clínicas e salões em crescimento que precisam gerenciar equipe.</p>
            <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
              <li className="flex gap-x-3 bg-blue-100 p-2 rounded-lg font-bold text-primary-900"><Check className="h-6 w-5 flex-none text-primary-600" /> Até 5 Profissionais</li>
              <li className="flex gap-x-3"><Check className="h-6 w-5 flex-none text-primary-600" /> Agendamentos Ilimitados</li>
              <li className="flex gap-x-3"><Check className="h-6 w-5 flex-none text-primary-600" /> IA de Vendas WhatsApp</li>
              <li className="flex gap-x-3"><Check className="h-6 w-5 flex-none text-primary-600" /> Pagamentos via Pix</li>
              <li className="flex gap-x-3"><Check className="h-6 w-5 flex-none text-primary-600" /> Gestão de Comissões</li>
            </ul>
            <a href="#" className="mt-8 block rounded-md bg-primary-600 py-2.5 px-3 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600">Assinar Plano Profissional</a>
          </div>

          {/* Enterprise Plan */}
          <div className="rounded-3xl p-8 ring-1 ring-gray-200 xl:p-10 bg-white">
            <h3 id="tier-enterprise" className="text-base font-semibold leading-7 text-gray-900">Enterprise</h3>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span className="text-5xl font-bold tracking-tight text-gray-900">R$289,90</span>
              <span className="text-base font-semibold leading-7 text-gray-600">/mês</span>
            </p>
            <p className="mt-6 text-base leading-7 text-gray-600">Para grandes estabelecimentos e franquias com alta demanda.</p>
            <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
              <li className="flex gap-x-3 bg-blue-50 p-2 rounded-lg font-bold"><Check className="h-6 w-5 flex-none text-primary-600" /> Até 10 Profissionais</li>
              <li className="flex gap-x-3"><Check className="h-6 w-5 flex-none text-primary-600" /> Agendamentos Ilimitados</li>
              <li className="flex gap-x-3"><Check className="h-6 w-5 flex-none text-primary-600" /> IA de Vendas WhatsApp</li>
              <li className="flex gap-x-3"><Check className="h-6 w-5 flex-none text-primary-600" /> Pagamentos via Pix</li>
              <li className="flex gap-x-3"><Check className="h-6 w-5 flex-none text-primary-600" /> API Personalizada</li>
            </ul>
            <a href="#" className="mt-8 block rounded-md py-2.5 px-3 text-center text-sm font-semibold leading-6 text-primary-600 ring-1 ring-inset ring-primary-200 hover:ring-primary-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600">Falar com Consultor</a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Pricing;