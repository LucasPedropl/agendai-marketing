import React from 'react';
import { Smartphone, Clock, ShieldCheck, PieChart, CalendarCheck, CreditCard } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <div id="features" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="lg:text-center mb-16">
          <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">Para todos</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            A solução completa para o ecossistema
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Seja você um prestador de serviços ou um cliente procurando agilidade, o AgendaAi resolve.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            
            {/* For Business */}
            <div className="relative p-8 bg-slate-50 rounded-2xl border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span className="bg-blue-100 text-blue-600 p-2 rounded-lg"><PieChart size={24}/></span>
                Para Empresas
              </h3>
              <ul className="space-y-6">
                <li className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-primary-500 text-white">
                      <CalendarCheck className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg leading-6 font-medium text-gray-900">Gestão de Agenda</h4>
                    <p className="mt-2 text-base text-gray-500">
                      Visualize agendamentos por dia, semana ou mês. Evite conflitos de horário e gerencie múltiplos profissionais.
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-primary-500 text-white">
                      <CreditCard className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg leading-6 font-medium text-gray-900">Controle Financeiro</h4>
                    <p className="mt-2 text-base text-gray-500">
                      Acompanhe receitas, despesas e veja relatórios de crescimento do seu negócio em tempo real.
                    </p>
                  </div>
                </li>
                 <li className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-primary-500 text-white">
                      <ShieldCheck className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg leading-6 font-medium text-gray-900">Configuração Personalizada</h4>
                    <p className="mt-2 text-base text-gray-500">
                      Defina horários de funcionamento, feriados, serviços e preços. Tudo adaptável ao seu modelo de negócio.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* For Clients */}
             <div className="relative p-8 bg-white rounded-2xl border border-slate-100 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span className="bg-green-100 text-green-600 p-2 rounded-lg"><Smartphone size={24}/></span>
                Para Clientes
              </h3>
              <ul className="space-y-6">
                <li className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-green-500 text-white">
                      <Smartphone className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg leading-6 font-medium text-gray-900">Agendamento Fácil</h4>
                    <p className="mt-2 text-base text-gray-500">
                      Encontre o estabelecimento, escolha o serviço e o horário. Tudo em poucos cliques, sem ligações.
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-green-500 text-white">
                      <Clock className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg leading-6 font-medium text-gray-900">Histórico e Lembretes</h4>
                    <p className="mt-2 text-base text-gray-500">
                      Veja seus agendamentos passados e receba notificações para não esquecer seus próximos compromissos.
                    </p>
                  </div>
                </li>
                 <li className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-green-500 text-white">
                      <ShieldCheck className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg leading-6 font-medium text-gray-900">Avaliação de Serviços</h4>
                    <p className="mt-2 text-base text-gray-500">
                      Avalie os profissionais e estabelecimentos, ajudando a comunidade a encontrar os melhores serviços.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;