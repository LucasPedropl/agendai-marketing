import React from 'react';
import { Smartphone, Clock, ShieldCheck, PieChart, CalendarCheck, CreditCard, UserCheck, MessageSquare, Zap, Bot, Send, Sparkles, QrCode } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <div id="features" className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Updated */}
        <div className="lg:text-center mb-16">
          <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">Benefícios Reais</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Transforme agendamentos em lucro previsível
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Elimine a desorganização e ofereça uma experiência premium que fideliza clientes e multiplica seu faturamento sem esforço extra.
          </p>
        </div>

        {/* Comparison Section */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 mb-24">
            {/* For Business */}
            <div className="relative p-8 bg-blue-50/30 rounded-2xl border border-blue-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
                <span className="bg-blue-100 text-blue-600 p-2 rounded-lg"><PieChart size={24}/></span>
                Para o Seu Negócio
              </h3>
              <ul className="space-y-8">
                <li className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-blue-600 text-white">
                      <CalendarCheck className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg leading-6 font-bold text-gray-900">Agenda Otimizada</h4>
                    <p className="mt-2 text-base text-gray-600">
                      Maximize seus horários. O sistema preenche lacunas e organiza múltiplos profissionais automaticamente.
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
                    <h4 className="text-lg leading-6 font-bold text-gray-900">Financeiro na Ponta do Lápis</h4>
                    <p className="mt-2 text-base text-gray-600">
                      Visão clara de lucro, despesas e comissões. Tome decisões baseadas em dados reais, não em achismos.
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
                    <h4 className="text-lg leading-6 font-bold text-gray-900">Totalmente Personalizável</h4>
                    <p className="mt-2 text-base text-gray-600">
                      Adapte horários, serviços, preços e regras de cancelamento exatamente como seu negócio precisa.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* For Clients */}
             <div className="relative p-8 bg-green-50/30 rounded-2xl border border-green-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
                <span className="bg-green-100 text-green-600 p-2 rounded-lg"><Smartphone size={24}/></span>
                Para Seus Clientes
              </h3>
              <ul className="space-y-8">
                <li className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-green-500 text-white">
                      <Smartphone className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg leading-6 font-bold text-gray-900">Conveniência 24/7</h4>
                    <p className="mt-2 text-base text-gray-600">
                      Seu cliente agenda no domingo à noite ou no feriado, sem depender de você responder o WhatsApp.
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
                    <h4 className="text-lg leading-6 font-bold text-gray-900">Zero Esquecimento</h4>
                    <p className="mt-2 text-base text-gray-600">
                      Lembretes automáticos garantem que o cliente compareça, reduzindo drásticamente as faltas.
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
                    <h4 className="text-lg leading-6 font-bold text-gray-900">Fidelidade e Avaliação</h4>
                    <p className="mt-2 text-base text-gray-600">
                      Histórico completo de serviços e facilidade para reagendar o que ele mais gosta.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
        </div>

        {/* NEW AI & WHATSAPP SECTION */}
        <div className="relative rounded-3xl overflow-hidden bg-slate-900 text-white mb-24 shadow-2xl">
           <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/50 via-slate-900 to-purple-900/50"></div>
           <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-20"></div>
           <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-20"></div>

           <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center p-8 sm:p-12 lg:p-16">
              <div>
                 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-bold tracking-wide uppercase mb-6 border border-purple-500/30">
                    <Sparkles size={14} /> Inteligência Artificial
                 </div>
                 <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight">
                    Sua secretária virtual que <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">vende e recebe</span> por você no WhatsApp.
                 </h2>
                 <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                    Não espere o cliente vir até você. Nossa IA agenda, cobra via Pix e confirma o pagamento automaticamente, tudo em tempo real.
                 </p>
                 
                 <div className="space-y-4">
                    <div className="flex items-start gap-4">
                       <div className="bg-green-500/20 p-2 rounded-lg text-green-400 mt-1"><Send size={20} /></div>
                       <div>
                          <h4 className="font-bold text-white">Recuperação de Inativos</h4>
                          <p className="text-gray-400 text-sm">Identifica quem não vem há 30 dias e envia uma oferta irresistível para retornar.</p>
                       </div>
                    </div>
                    <div className="flex items-start gap-4">
                       <div className="bg-blue-500/20 p-2 rounded-lg text-blue-400 mt-1"><Bot size={20} /></div>
                       <div>
                          <h4 className="font-bold text-white">Agendamento & Pix</h4>
                          <p className="text-gray-400 text-sm">A IA envia a chave Pix Copia e Cola e só bloqueia o horário após identificar o pagamento.</p>
                       </div>
                    </div>
                    <div className="flex items-start gap-4">
                       <div className="bg-purple-500/20 p-2 rounded-lg text-purple-400 mt-1"><MessageSquare size={20} /></div>
                       <div>
                          <h4 className="font-bold text-white">Atendimento Automático</h4>
                          <p className="text-gray-400 text-sm">Responde dúvidas sobre preços e horários instantaneamente, 24 horas por dia.</p>
                       </div>
                    </div>
                 </div>
              </div>

              <div className="relative">
                 {/* Chat Mockup */}
                 <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-sm mx-auto border border-gray-800 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                    <div className="bg-[#075E54] p-4 flex items-center gap-3">
                       <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white"><Bot size={24}/></div>
                       <div>
                          <p className="text-white font-bold text-sm">Assistente AgendaAi</p>
                          <p className="text-green-100 text-xs">Online agora</p>
                       </div>
                    </div>
                    <div className="bg-[#E5DDD5] p-4 h-96 overflow-y-auto space-y-4 flex flex-col">
                       <div className="self-start bg-white p-3 rounded-lg rounded-tl-none shadow-sm max-w-[85%]">
                          <p className="text-xs text-gray-800">Olá, João! Tenho um horário amanhã às 18h com o Pedro. Vamos agendar?</p>
                          <p className="text-[10px] text-gray-400 text-right mt-1">10:00</p>
                       </div>
                       
                       <div className="self-end bg-[#DCF8C6] p-3 rounded-lg rounded-tr-none shadow-sm max-w-[85%]">
                          <p className="text-xs text-gray-800">Quero sim! Pode marcar.</p>
                          <p className="text-[10px] text-green-800 text-right mt-1">10:05</p>
                       </div>

                        <div className="self-start bg-white p-3 rounded-lg rounded-tl-none shadow-sm max-w-[85%]">
                          <p className="text-xs text-gray-800">Perfeito! Para confirmar, pague via Pix Copia e Cola:</p>
                          <div className="bg-gray-100 p-2 rounded mt-2 border border-dashed border-gray-300 flex items-center gap-2 cursor-pointer hover:bg-gray-200 transition-colors">
                             <QrCode size={16} className="text-teal-600 shrink-0"/>
                             <code className="text-[10px] text-gray-600 truncate font-mono">00020126580014br.gov.bcb.pix0114...</code>
                          </div>
                          <p className="text-[10px] text-gray-400 text-right mt-1">10:05</p>
                       </div>

                       <div className="self-start bg-white p-3 rounded-lg rounded-tl-none shadow-sm max-w-[85%]">
                          <p className="text-xs text-gray-800 font-bold text-green-600 flex items-center gap-1">
                            <span className="w-2 h-2 bg-green-500 rounded-full"></span> 
                            Pagamento Identificado!
                          </p>
                          <p className="text-xs text-gray-800 mt-1">Seu horário está confirmadíssimo para amanhã às 18h. Te espero lá! ✂️</p>
                          <p className="text-[10px] text-gray-400 text-right mt-1">10:06</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* Resources Grid */}
        <div className="lg:text-center mb-16">
          <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">Destaques</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Recursos essenciais
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
           <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-blue-600">
                <CalendarCheck size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Agenda Inteligente</h3>
              <p className="text-gray-500 text-sm">
                Adeus aos buracos na agenda. O sistema organiza horários automaticamente e permite encaixes rápidos.
              </p>
           </div>
           
           <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 text-green-600">
                <CreditCard size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Gestão Financeira</h3>
              <p className="text-gray-500 text-sm">
                Controle de caixa, comissões automáticas e relatórios de desempenho detalhados.
              </p>
           </div>

           <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 text-purple-600">
                <MessageSquare size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Lembretes Auto</h3>
              <p className="text-gray-500 text-sm">
                Reduza o "no-show" em até 80% com lembretes automáticos por WhatsApp e E-mail.
              </p>
           </div>

           {/* PIX HIGHLIGHT */}
           <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4 text-teal-600">
                <QrCode size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Pagamento via Pix</h3>
              <p className="text-gray-500 text-sm">
                Receba pagamentos instantâneos. Gere QR Codes automáticos e facilite a vida do seu cliente.
              </p>
           </div>
        </div>

      </div>
    </div>
  );
};

export default Features;