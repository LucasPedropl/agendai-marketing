import React from 'react';
import { Smartphone, Clock, ShieldCheck, PieChart, CalendarCheck, CreditCard, UserCheck, MessageSquare, Zap, Layout, Star } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <div id="features" className="py-16 bg-white">
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

        {/* Comparison Section (Restored) */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 mb-24">
            {/* For Business */}
            <div className="relative p-8 bg-blue-50/30 rounded-2xl border border-blue-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
                <span className="bg-blue-100 text-blue-600 p-2 rounded-lg"><PieChart size={24}/></span>
                Para Empresas
              </h3>
              <ul className="space-y-8">
                <li className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-blue-600 text-white">
                      <CalendarCheck className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg leading-6 font-bold text-gray-900">Gestão de Agenda</h4>
                    <p className="mt-2 text-base text-gray-600">
                      Visualize agendamentos por dia, semana ou mês. Evite conflitos de horário e gerencie múltiplos profissionais.
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-blue-600 text-white">
                      <CreditCard className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg leading-6 font-bold text-gray-900">Controle Financeiro</h4>
                    <p className="mt-2 text-base text-gray-600">
                      Acompanhe receitas, despesas e veja relatórios de crescimento do seu negócio em tempo real.
                    </p>
                  </div>
                </li>
                 <li className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-blue-600 text-white">
                      <ShieldCheck className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg leading-6 font-bold text-gray-900">Configuração Personalizada</h4>
                    <p className="mt-2 text-base text-gray-600">
                      Defina horários de funcionamento, feriados, serviços e preços. Tudo adaptável ao seu modelo de negócio.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* For Clients */}
             <div className="relative p-8 bg-green-50/30 rounded-2xl border border-green-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
                <span className="bg-green-100 text-green-600 p-2 rounded-lg"><Smartphone size={24}/></span>
                Para Clientes
              </h3>
              <ul className="space-y-8">
                <li className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-green-500 text-white">
                      <Smartphone className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg leading-6 font-bold text-gray-900">Agendamento Fácil</h4>
                    <p className="mt-2 text-base text-gray-600">
                      Encontre o estabelecimento, escolha o serviço e o horário. Tudo em poucos cliques, sem ligações.
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-green-500 text-white">
                      <Clock className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg leading-6 font-bold text-gray-900">Histórico e Lembretes</h4>
                    <p className="mt-2 text-base text-gray-600">
                      Veja seus agendamentos passados e receba notificações para não esquecer seus próximos compromissos.
                    </p>
                  </div>
                </li>
                 <li className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-green-500 text-white">
                      <ShieldCheck className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg leading-6 font-bold text-gray-900">Avaliação de Serviços</h4>
                    <p className="mt-2 text-base text-gray-600">
                      Avalie os profissionais e estabelecimentos, ajudando a comunidade a encontrar os melhores serviços.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
        </div>

        <div className="lg:text-center mb-16">
          <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">Destaques</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Recursos essenciais
          </p>
        </div>

        {/* Business Benefits Grid (Existing) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
           <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-blue-600">
                <CalendarCheck size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Agenda Inteligente</h3>
              <p className="text-gray-500">
                Adeus aos buracos na agenda. O sistema organiza horários automaticamente, evita conflitos e permite encaixes rápidos.
              </p>
           </div>
           
           <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 text-green-600">
                <CreditCard size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Controle Financeiro</h3>
              <p className="text-gray-500">
                Saiba exatamente quanto entrou no dia. Relatórios de comissão automáticos para sua equipe e previsão de faturamento.
              </p>
           </div>

           <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 text-purple-600">
                <MessageSquare size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Lembretes Automáticos</h3>
              <p className="text-gray-500">
                Reduza o "no-show" em até 80%. O sistema envia lembretes automáticos por WhatsApp e E-mail para seus clientes confirmarem.
              </p>
           </div>
        </div>

        {/* "Why your clients will love it" Section (Existing) */}
        <div className="relative mt-12 bg-primary-900 rounded-3xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0 opacity-10 pattern-dots"></div>
          <div className="relative px-6 py-12 lg:px-12 lg:py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                O que seus clientes ganham?
              </h3>
              <p className="text-blue-100 text-lg mb-8">
                Oferecer conveniência é a melhor forma de fidelizar. Com o AgendaAi, seu cliente tem uma experiência premium.
              </p>
              
              <ul className="space-y-5">
                <li className="flex items-start">
                   <div className="flex-shrink-0 bg-primary-700 p-2 rounded-lg">
                      <Smartphone className="h-6 w-6 text-white" />
                   </div>
                   <div className="ml-4">
                      <h4 className="text-lg font-medium text-white">Autonomia Total</h4>
                      <p className="text-blue-200 text-sm">Eles agendam 24h por dia, domingo a domingo, sem precisar esperar você responder.</p>
                   </div>
                </li>
                <li className="flex items-start">
                   <div className="flex-shrink-0 bg-primary-700 p-2 rounded-lg">
                      <Zap className="h-6 w-6 text-white" />
                   </div>
                   <div className="ml-4">
                      <h4 className="text-lg font-medium text-white">Sem logins complicados</h4>
                      <p className="text-blue-200 text-sm">Interface limpa e direta. O cliente entra, escolhe o serviço, o profissional e pronto.</p>
                   </div>
                </li>
                <li className="flex items-start">
                   <div className="flex-shrink-0 bg-primary-700 p-2 rounded-lg">
                      <UserCheck className="h-6 w-6 text-white" />
                   </div>
                   <div className="ml-4">
                      <h4 className="text-lg font-medium text-white">Histórico e Fidelidade</h4>
                      <p className="text-blue-200 text-sm">Eles podem ver serviços anteriores e remarcar com um clique.</p>
                   </div>
                </li>
              </ul>
            </div>

            <div className="relative mx-auto w-full max-w-sm lg:max-w-none flex justify-center">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                <div className="absolute -bottom-8 -left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
                
                <div className="relative bg-white rounded-xl shadow-xl p-6 w-full max-w-md">
                   <div className="flex items-center gap-3 mb-4 border-b border-gray-100 pb-4">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                         <ShieldCheck size={20} />
                      </div>
                      <div>
                         <p className="font-bold text-gray-900">Credibilidade</p>
                         <p className="text-xs text-gray-500">Passa profissionalismo imediato</p>
                      </div>
                   </div>
                   <div className="space-y-3">
                      <div className="bg-gray-50 p-3 rounded-lg flex gap-3 items-center">
                         <div className="w-2 h-2 rounded-full bg-green-500"></div>
                         <p className="text-sm text-gray-600">"Nossa, muito fácil agendar com vocês!"</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg flex gap-3 items-center">
                         <div className="w-2 h-2 rounded-full bg-green-500"></div>
                         <p className="text-sm text-gray-600">"Adorei o lembrete do horário."</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg flex gap-3 items-center">
                         <div className="w-2 h-2 rounded-full bg-green-500"></div>
                         <p className="text-sm text-gray-600">"Consigo ver os preços antes de ir."</p>
                      </div>
                   </div>
                   <button className="w-full mt-4 bg-primary-600 text-white text-sm font-bold py-2 rounded-lg">
                      Quero isso para minha empresa
                   </button>
                </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;