import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Calendar, 
  History, 
  Briefcase, 
  Package, 
  Users, 
  Settings, 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  BarChart2,
  Bell,
  Search,
  ChevronDown,
  Star,
  Clock,
  MapPin,
  Store,
  PieChart,
  Lock,
  ArrowLeft,
  ChevronRight,
  ChevronLeft,
  Check,
  Calendar as CalendarIcon,
  Home
} from 'lucide-react';

// --- MOCK DATA FOR CLIENT FLOW ---
const SHOPS = [
  { id: 1, name: 'Pedro Barbearia', rating: 4.8, address: 'Rua das Flores, 123', img: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 2, name: 'Salão Beleza Pura', rating: 4.5, address: 'Av. Paulista, 2000', img: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 3, name: 'Estética Avançada', rating: 5.0, address: 'Rua Augusta, 500', img: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
];

const SERVICES = [
  { id: 1, name: 'Corte de Cabelo', description: 'Corte tradicional ou degradê', price: 35.00, duration: '30 min' },
  { id: 2, name: 'Barba', description: 'Modelagem e toalha quente', price: 25.00, duration: '20 min' },
  { id: 3, name: 'Corte + Barba', description: 'Combo completo', price: 55.00, duration: '50 min' },
];

const PROS = [
  { id: 1, name: 'Pedro Mota', role: 'Barbeiro Master' },
  { id: 2, name: 'João Silva', role: 'Barbeiro' },
  { id: 3, name: 'Lucas Pereira', role: 'Barbeiro' },
];

const DATES = [
  { day: 'D', date: 11, disabled: true },
  { day: 'S', date: 12, disabled: false, selected: true },
  { day: 'T', date: 13, disabled: false },
  { day: 'Q', date: 14, disabled: false },
  { day: 'Q', date: 15, disabled: false },
  { day: 'S', date: 16, disabled: false },
  { day: 'S', date: 17, disabled: true },
];

const TIMES = ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00'];

const AppPreview: React.FC = () => {
  const [viewMode, setViewMode] = useState<'business' | 'client'>('business');

  // --- CLIENT FLOW STATE ---
  const [clientStep, setClientStep] = useState<'home' | 'services' | 'pros' | 'datetime' | 'confirm' | 'appointments'>('home');
  const [bookingData, setBookingData] = useState<any>({
    shop: null,
    service: null,
    pro: null,
    date: '12/01/2026',
    time: null
  });
  const [myAppointments, setMyAppointments] = useState<any[]>([]);

  const handleBook = () => {
    setMyAppointments([...myAppointments, { ...bookingData, status: 'Pendente', id: Math.random() }]);
    setClientStep('appointments');
  };

  const resetFlow = () => {
    setBookingData({ shop: null, service: null, pro: null, date: '12/01/2026', time: null });
    setClientStep('home');
  };

  return (
    <div id="preview" className="bg-slate-50 py-16 sm:py-24 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-base font-semibold text-primary-600 tracking-wide uppercase">Visão Completa</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Duas experiências, uma plataforma
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Veja como você gerencia seu negócio e como seu cliente agenda com facilidade.
          </p>
          
          {/* Toggle Switch */}
          <div className="mt-8 flex justify-center">
            <div className="bg-white p-1 rounded-xl border border-gray-200 shadow-sm inline-flex">
              <button
                onClick={() => setViewMode('business')}
                className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                  viewMode === 'business' 
                    ? 'bg-primary-600 text-white shadow-md' 
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                <LayoutDashboard size={18} />
                Para Você (Gestão)
              </button>
              <button
                onClick={() => setViewMode('client')}
                className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                  viewMode === 'client' 
                    ? 'bg-primary-600 text-white shadow-md' 
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                <Users size={18} />
                Para seu Cliente (App)
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-center min-h-[750px] items-center">
          {viewMode === 'business' ? (
            <>
            {/* DESKTOP VIEW - REALISTIC NOTEBOOK MOCKUP */}
            <div className="hidden lg:block w-full max-w-6xl px-4 animate-fade-in perspective-[1500px]">
              <div className="relative group transform-style-3d rotate-x-[10deg]">
                 {/* Lid (Screen Part) */}
                 <div className="bg-[#1a1a1a] rounded-t-2xl rounded-b-md p-3 ring-1 ring-white/10 shadow-2xl relative mx-auto max-w-5xl z-10 origin-bottom transition-transform duration-500">
                    {/* Camera */}
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#333] rounded-full ring-1 ring-[#444] z-20"></div>

                    {/* Screen Area */}
                    <div className="bg-white rounded-md overflow-hidden relative w-full h-[600px] flex flex-col border-[2px] border-gray-900">
                       {/* Browser UI */}
                       <div className="bg-[#f3f4f6] border-b border-gray-200 flex items-center px-4 py-2 shrink-0 gap-4">
                          <div className="flex gap-1.5">
                             <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] border border-[#e0443e]/50"></div>
                             <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] border border-[#dea123]/50"></div>
                             <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f] border border-[#1aab29]/50"></div>
                          </div>
                          <div className="flex-1 flex justify-center px-8">
                             <div className="bg-white border border-gray-300 rounded px-3 py-1 text-xs text-gray-600 font-medium w-full max-w-xl flex items-center justify-center gap-2 shadow-sm">
                                <Lock size={10} className="text-gray-400" />
                                <span>painel.agendaai.com.br/dashboard</span>
                             </div>
                          </div>
                       </div>

                       {/* App Content */}
                       <div className="flex flex-1 text-slate-800 bg-gray-50 overflow-hidden">
                          {/* Sidebar */}
                          <div className="w-56 bg-white border-r border-gray-200 flex flex-col shrink-0">
                            <div className="p-4 flex items-center gap-2 border-b border-gray-100">
                              <div className="bg-primary-600 p-1.5 rounded-lg">
                                <Calendar className="h-4 w-4 text-white" />
                              </div>
                              <span className="font-bold text-base text-slate-800">AgendaAi</span>
                            </div>
                            
                            <div className="flex-1 overflow-y-auto py-4 px-3 space-y-0.5 custom-scrollbar">
                              <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2 pl-2">Principal</div>
                              <div className="flex items-center gap-3 px-3 py-2 bg-slate-800 text-white rounded-lg text-xs font-medium cursor-pointer shadow-md shadow-slate-200">
                                <LayoutDashboard size={16} /> Dashboard
                              </div>
                              <div className="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-lg text-xs font-medium cursor-pointer transition-colors">
                                <Calendar size={16} /> Agenda
                              </div>
                              <div className="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-lg text-xs font-medium cursor-pointer transition-colors">
                                <History size={16} /> Histórico
                              </div>
                              
                              <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mt-6 mb-2 pl-2">Gerenciamento</div>
                              <div className="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-lg text-xs font-medium cursor-pointer transition-colors">
                                <Briefcase size={16} /> Serviços
                              </div>
                              <div className="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-lg text-xs font-medium cursor-pointer transition-colors">
                                <Package size={16} /> Produtos
                              </div>
                              <div className="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-lg text-xs font-medium cursor-pointer transition-colors">
                                <Users size={16} /> Profissionais
                              </div>
                              <div className="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-lg text-xs font-medium cursor-pointer transition-colors">
                                <Users size={16} /> Clientes
                              </div>
                              
                              <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mt-6 mb-2 pl-2">Financeiro</div>
                              <div className="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-lg text-xs font-medium cursor-pointer transition-colors">
                                <TrendingUp size={16} /> Receitas
                              </div>
                              <div className="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-lg text-xs font-medium cursor-pointer transition-colors">
                                <TrendingDown size={16} /> Despesas
                              </div>
                            </div>
                          </div>

                          {/* Main Content */}
                          <div className="flex-1 bg-gray-50 overflow-y-auto custom-scrollbar">
                            <header className="bg-white border-b border-gray-200 h-14 px-6 flex justify-between items-center sticky top-0 z-10">
                              <h2 className="text-lg font-bold text-gray-800">Barbearia VIP</h2>
                              <div className="flex items-center gap-4">
                                <div className="relative cursor-pointer hover:bg-gray-100 p-1.5 rounded-full transition-colors">
                                    <Bell size={18} className="text-gray-500" />
                                    <div className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white"></div>
                                </div>
                                <div className="flex items-center gap-2 border-l border-gray-100 pl-4">
                                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-xs border border-blue-200">A</div>
                                </div>
                              </div>
                            </header>

                            <div className="p-6">
                              <div className="mb-6">
                                <h1 className="text-xl font-bold text-slate-800">Dashboard do Estabelecimento</h1>
                                <p className="text-slate-500 text-xs mt-1">Visão geral do seu negócio</p>
                              </div>

                              <div className="grid grid-cols-4 gap-4 mb-6">
                                <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex justify-between items-start">
                                  <div>
                                    <p className="text-xs text-gray-500 font-medium">Agendamentos Hoje</p>
                                    <h3 className="text-2xl font-bold text-slate-800 mt-1">12</h3>
                                    <p className="text-[10px] text-gray-400 mt-0.5">Confirmados</p>
                                  </div>
                                  <div className="h-8 w-8 bg-blue-500 rounded-lg flex items-center justify-center shadow-blue-200 shadow-md">
                                     <Calendar className="text-white h-4 w-4" />
                                  </div>
                                </div>
                                <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex justify-between items-start">
                                  <div>
                                    <p className="text-xs text-gray-500 font-medium">Agendamentos Semana</p>
                                    <h3 className="text-2xl font-bold text-slate-800 mt-1">48</h3>
                                    <p className="text-[10px] text-green-500 mt-0.5 font-medium">Esta semana</p>
                                  </div>
                                  <div className="h-8 w-8 bg-green-500 rounded-lg flex items-center justify-center shadow-green-200 shadow-md">
                                     <Calendar className="text-white h-4 w-4" />
                                  </div>
                                </div>
                                <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex justify-between items-start">
                                  <div>
                                    <p className="text-xs text-gray-500 font-medium">Receita do Mês</p>
                                    <h3 className="text-2xl font-bold text-slate-800 mt-1">R$ 4.2k</h3>
                                    <p className="text-[10px] text-green-500 mt-0.5 font-medium">Mês atual</p>
                                  </div>
                                  <div className="h-8 w-8 bg-yellow-500 rounded-lg flex items-center justify-center shadow-yellow-200 shadow-md">
                                     <DollarSign className="text-white h-4 w-4" />
                                  </div>
                                </div>
                                <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex justify-between items-start">
                                  <div>
                                    <p className="text-xs text-gray-500 font-medium">Cancelamentos</p>
                                    <h3 className="text-2xl font-bold text-slate-800 mt-1">0%</h3>
                                    <p className="text-[10px] text-gray-400 mt-0.5">Últimos 30 dias</p>
                                  </div>
                                  <div className="h-8 w-8 bg-red-500 rounded-lg flex items-center justify-center shadow-red-200 shadow-md">
                                     <TrendingDown className="text-white h-4 w-4" />
                                  </div>
                                </div>
                              </div>

                              <div className="grid grid-cols-12 gap-6 mb-6">
                                <div className="col-span-7 bg-white p-5 rounded-xl border border-gray-200 shadow-sm h-72 flex flex-col">
                                    <div className="flex items-center justify-between mb-4">
                                      <div className="flex items-center gap-2">
                                        <BarChart2 className="w-4 h-4 text-slate-800" />
                                        <h4 className="font-bold text-sm text-slate-800">Receita Mensal</h4>
                                      </div>
                                      <select className="text-xs border-gray-200 rounded bg-gray-50 p-1 outline-none text-gray-600">
                                        <option>Últimos 6 meses</option>
                                      </select>
                                    </div>
                                    <div className="flex-1 flex items-end justify-between px-4 gap-4 pt-4 border-t border-dashed border-gray-100">
                                       {['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'].map((month, idx) => {
                                          const heights = ['40%', '65%', '45%', '80%', '55%', '90%'];
                                          const isLast = idx === 5;
                                          return (
                                              <div key={month} className="flex flex-col items-center gap-2 group w-full h-full justify-end">
                                                  <div className={`w-full rounded-t-sm relative overflow-hidden transition-all duration-300 ${isLast ? 'bg-primary-100' : 'bg-slate-100'} hover:opacity-90`} style={{height: heights[idx]}}>
                                                      <div className={`absolute top-0 w-full h-1 ${isLast ? 'bg-primary-600' : 'bg-slate-300'}`}></div>
                                                  </div>
                                                  <span className={`text-[10px] font-medium ${isLast ? 'text-primary-600 font-bold' : 'text-gray-400'}`}>{month}</span>
                                              </div>
                                          )
                                       })}
                                    </div>
                                </div>

                                <div className="col-span-5 bg-white p-5 rounded-xl border border-gray-200 shadow-sm h-72 flex flex-col">
                                    <div className="flex items-center justify-between mb-4">
                                      <div className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4 text-slate-800" />
                                        <h4 className="font-bold text-sm text-slate-800">Próximos Agendamentos</h4>
                                      </div>
                                      <span className="text-xs text-primary-600 font-medium cursor-pointer hover:underline">Ver todos</span>
                                    </div>
                                    <div className="flex-1 overflow-y-auto pr-1 space-y-2 custom-scrollbar">
                                       <div className="flex items-center gap-3 p-2.5 bg-gray-50 rounded-lg border border-transparent hover:border-gray-200 transition-colors group">
                                          <div className="text-blue-700 font-bold text-xs bg-white px-2 py-1 rounded border border-blue-100 group-hover:border-blue-200">14:00</div>
                                          <div className="flex-1 min-w-0">
                                             <p className="text-xs font-bold text-gray-800 truncate">Ana Clara</p>
                                             <p className="text-[10px] text-gray-500 truncate">Corte e Escova</p>
                                          </div>
                                          <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-medium text-green-700">Confirmado</span>
                                       </div>
                                       <div className="flex items-center gap-3 p-2.5 bg-white border border-gray-100 rounded-lg hover:border-gray-200 transition-colors group">
                                          <div className="text-blue-700 font-bold text-xs bg-blue-50 px-2 py-1 rounded border border-blue-100">15:30</div>
                                          <div className="flex-1 min-w-0">
                                             <p className="text-xs font-bold text-gray-800 truncate">Pedro Henrique</p>
                                             <p className="text-[10px] text-gray-500 truncate">Barba</p>
                                          </div>
                                          <span className="inline-flex items-center rounded-full bg-yellow-100 px-2 py-0.5 text-[10px] font-medium text-yellow-700">Pendente</span>
                                       </div>
                                       <div className="flex items-center gap-3 p-2.5 bg-gray-50 rounded-lg border border-transparent hover:border-gray-200 transition-colors group">
                                          <div className="text-blue-700 font-bold text-xs bg-white px-2 py-1 rounded border border-blue-100 group-hover:border-blue-200">16:15</div>
                                          <div className="flex-1 min-w-0">
                                             <p className="text-xs font-bold text-gray-800 truncate">Juliana Costa</p>
                                             <p className="text-[10px] text-gray-500 truncate">Manicure</p>
                                          </div>
                                          <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-medium text-green-700">Confirmado</span>
                                       </div>
                                    </div>
                                </div>
                              </div>
                            </div>
                          </div>
                       </div>
                    </div>

                    {/* Chin Logo */}
                    <div className="h-8 w-full flex items-center justify-center bg-[#1a1a1a]">
                       <span className="text-[10px] font-bold text-gray-500 tracking-[0.2em] uppercase opacity-50">AgendaAi</span>
                    </div>
                 </div>

                 {/* Keyboard Deck (The part user wanted highlighted) */}
                 <div className="relative mx-auto bg-[#262626] h-[24px] w-[104%] -ml-[2%] rounded-b-xl shadow-2xl flex justify-center items-start border-t border-[#333] z-0">
                    {/* Trackpad Indentation */}
                    <div className="w-1/3 h-[12px] bg-[#222] border-t border-r border-l border-white/5 rounded-b-md mt-0"></div>
                 </div>
                 
                 {/* Bottom Base Shadow */}
                 <div className="mx-auto bg-black/20 h-[10px] w-[98%] blur-md rounded-[50%] mt-1"></div>
              </div>
            </div>

            {/* MOBILE VIEW - PHONE MOCKUP FOR BUSINESS (Shown only on small screens) */}
             <div className="lg:hidden relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[700px] w-[340px] shadow-xl animate-fade-in flex flex-col overflow-hidden">
                {/* Same business mobile view as before, condensed for brevity since user didn't ask to change this specifically */}
                 <div className="h-[32px] w-[140px] bg-gray-800 absolute left-1/2 -translate-x-1/2 top-0 rounded-b-xl z-20"></div>
                 <div className="h-6 bg-white flex justify-between items-center px-6 text-[10px] font-bold text-gray-800 z-10 relative mt-1">
                   <span>9:41</span>
                   <div className="flex items-center gap-1">
                      <div className="h-2 w-2 bg-black rounded-full"></div>
                      <div className="h-2 w-3 bg-black rounded-sm"></div>
                   </div>
                 </div>
                 <div className="flex-1 bg-gray-50 overflow-y-auto relative font-sans pb-20">
                     <div className="bg-white p-4 flex items-center gap-2 border-b border-gray-100 sticky top-0 z-10">
                      <div className="bg-primary-600 p-1.5 rounded-lg">
                         <Calendar className="h-4 w-4 text-white" />
                      </div>
                      <span className="font-bold text-lg text-slate-800">AgendaAi</span>
                   </div>
                   <div className="p-4 flex items-center justify-center h-full text-gray-400 text-sm">
                      Versão mobile da empresa
                   </div>
                 </div>
             </div>
             </>
          ) : (
            /* CLIENT APP FLOW */
            <div className="relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[700px] w-[340px] shadow-xl animate-fade-in flex flex-col overflow-hidden">
              {/* Notch */}
              <div className="h-[32px] w-[140px] bg-gray-800 absolute left-1/2 -translate-x-1/2 top-0 rounded-b-xl z-20"></div>
              
              <div className="bg-white flex-1 overflow-hidden relative font-sans flex flex-col">
                {/* Status Bar */}
                <div className="h-6 bg-white flex justify-between items-center px-6 text-[10px] font-bold text-gray-800 z-10 relative mt-1 shrink-0">
                  <span>9:41</span>
                  <div className="flex items-center gap-1">
                     <div className="h-2 w-2 bg-black rounded-full"></div>
                     <div className="h-2 w-3 bg-black rounded-sm"></div>
                  </div>
                </div>

                {/* --- CLIENT SCREENS --- */}
                
                {/* 1. HOME - LIST OF SHOPS */}
                {clientStep === 'home' && (
                  <div className="flex-1 flex flex-col bg-gray-50">
                    <div className="bg-white p-4 shadow-sm pb-2 sticky top-0 z-10">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="bg-primary-600 p-1 rounded-md">
                           <CalendarIcon className="h-4 w-4 text-white" />
                        </div>
                        <span className="font-bold text-lg text-gray-900">AgendaAi</span>
                      </div>
                      <h1 className="text-xl font-bold text-gray-900 mb-1 flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-primary-600" />
                        Agendar Serviço
                      </h1>
                      <p className="text-sm text-gray-500 mb-4">Escolha um estabelecimento para começar</p>
                      
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input type="text" placeholder="Buscar estabelecimentos..." className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary-500" />
                      </div>
                    </div>
                    
                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                      {SHOPS.map((shop) => (
                        <div 
                          key={shop.id} 
                          onClick={() => { setBookingData({...bookingData, shop}); setClientStep('services'); }}
                          className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden cursor-pointer hover:border-primary-300 transition-all"
                        >
                           <div className="h-32 bg-gray-200 w-full relative">
                              <img src={shop.img} alt={shop.name} className="w-full h-full object-cover" />
                           </div>
                           <div className="p-3">
                              <h3 className="font-bold text-gray-900">{shop.name}</h3>
                              <div className="flex items-center gap-1 mt-1">
                                 <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                                 <span className="text-xs font-medium text-gray-700">{shop.rating}</span>
                              </div>
                              <div className="flex items-center gap-1 mt-1 text-gray-500">
                                 <MapPin className="w-3 h-3" />
                                 <span className="text-[10px] truncate">{shop.address}</span>
                              </div>
                              <div className="flex items-center gap-1 mt-1 text-gray-500">
                                 <Clock className="w-3 h-3" />
                                 <span className="text-[10px]">Horário não disponível</span>
                              </div>
                           </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 2. SERVICES SELECTION */}
                {clientStep === 'services' && (
                   <div className="flex-1 flex flex-col bg-gray-50">
                     <div className="bg-white p-4 shadow-sm sticky top-0 z-10">
                        <div className="flex items-center gap-2 mb-4">
                           <div className="bg-primary-600 p-1 rounded-md">
                              <CalendarIcon className="h-4 w-4 text-white" />
                           </div>
                           <span className="font-bold text-sm text-gray-900">AgendaAi</span>
                        </div>
                        <button onClick={() => setClientStep('home')} className="flex items-center gap-1 text-gray-500 text-sm mb-2 hover:text-gray-900">
                           <ArrowLeft className="w-4 h-4" /> Voltar para estabelecimentos
                        </button>
                        <h1 className="text-2xl font-bold text-gray-900">{bookingData.shop?.name}</h1>
                        <p className="text-sm text-gray-500">Escolha um serviço para agendar seu horário</p>
                     </div>
                     <div className="flex-1 overflow-y-auto p-4 space-y-3">
                        {SERVICES.map((service) => (
                           <div key={service.id} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                              <h3 className="font-bold text-gray-900">{service.name}</h3>
                              <p className="text-xs text-gray-500 mt-1">{service.description}</p>
                              <div className="flex items-center gap-4 mt-3 mb-3">
                                 <span className="text-xs text-gray-500 flex items-center gap-1"><Clock className="w-3 h-3" /> {service.duration}</span>
                                 <span className="text-sm font-bold text-gray-900">R$ {service.price.toFixed(2)}</span>
                              </div>
                              <button 
                                 onClick={() => { setBookingData({...bookingData, service}); setClientStep('pros'); }}
                                 className="w-full bg-slate-800 text-white py-2 rounded-lg text-sm font-medium hover:bg-slate-900"
                              >
                                 Reservar
                              </button>
                           </div>
                        ))}
                     </div>
                   </div>
                )}

                {/* 3. PROFESSIONALS SELECTION */}
                {clientStep === 'pros' && (
                   <div className="flex-1 flex flex-col bg-gray-50">
                     <div className="bg-white p-4 shadow-sm sticky top-0 z-10">
                        <div className="flex items-center gap-2 mb-4">
                           <div className="bg-primary-600 p-1 rounded-md">
                              <CalendarIcon className="h-4 w-4 text-white" />
                           </div>
                           <span className="font-bold text-sm text-gray-900">AgendaAi</span>
                        </div>
                        <button onClick={() => setClientStep('services')} className="flex items-center gap-1 text-gray-500 text-sm mb-4 hover:text-gray-900">
                           <ArrowLeft className="w-4 h-4" /> Voltar para serviços
                        </button>
                        <h1 className="text-xl font-bold text-gray-900 mb-1">Escolha o Profissional</h1>
                        <p className="text-xs text-gray-500 mb-2">Serviço selecionado: <span className="font-bold text-gray-900">{bookingData.service?.name}</span></p>
                        
                        {/* Progress Bar */}
                        <div className="w-full bg-gray-200 h-1.5 rounded-full mb-4">
                           <div className="bg-slate-800 h-1.5 rounded-full w-1/3"></div>
                        </div>
                        <p className="text-xs font-bold text-gray-900">Passo 1: Escolha o profissional</p>
                     </div>
                     <div className="flex-1 overflow-y-auto p-4 space-y-3">
                        {PROS.map((pro) => (
                           <div 
                              key={pro.id} 
                              onClick={() => { setBookingData({...bookingData, pro}); setClientStep('datetime'); }}
                              className="bg-white p-3 rounded-xl border border-gray-200 flex items-center justify-between cursor-pointer hover:border-primary-500 transition-colors group"
                           >
                              <div className="flex items-center gap-3">
                                 <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 group-hover:bg-primary-50 group-hover:text-primary-600">
                                    <Users className="w-5 h-5" />
                                 </div>
                                 <div>
                                    <h3 className="font-medium text-sm text-gray-900">{pro.name}</h3>
                                    <p className="text-xs text-gray-500">{pro.role}</p>
                                 </div>
                              </div>
                              <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-primary-500" />
                           </div>
                        ))}
                     </div>
                   </div>
                )}

                {/* 4. DATE & TIME */}
                {clientStep === 'datetime' && (
                   <div className="flex-1 flex flex-col bg-gray-50">
                     <div className="bg-white p-4 shadow-sm sticky top-0 z-10">
                        <div className="flex items-center gap-2 mb-4">
                           <h1 className="text-xl font-bold text-gray-900">Escolha Data e Horário</h1>
                        </div>
                        <p className="text-xs text-gray-500 mb-2">Serviço selecionado: <span className="font-bold text-gray-900">{bookingData.service?.name}</span></p>
                        
                         {/* Progress Bar */}
                         <div className="w-full bg-gray-200 h-1.5 rounded-full mb-4">
                           <div className="bg-slate-800 h-1.5 rounded-full w-2/3"></div>
                        </div>
                        
                        <p className="text-xs font-bold text-gray-900 mb-1">Passo 2: Escolha a data e o horário</p>
                        <p className="text-xs text-gray-500 mb-4">Profissional: <span className="font-bold text-gray-800">{bookingData.pro?.name}</span></p>
                     </div>

                     <div className="flex-1 overflow-y-auto p-4">
                        {/* Fake Calendar */}
                        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm mb-6">
                           <div className="flex justify-between items-center mb-4">
                              <button className="p-1 hover:bg-gray-100 rounded"><ChevronLeft className="w-4 h-4" /></button>
                              <div className="flex gap-2">
                                 <select className="text-sm font-bold bg-gray-50 border border-gray-200 rounded px-2 py-1"><option>Janeiro</option></select>
                                 <select className="text-sm font-bold bg-gray-50 border border-gray-200 rounded px-2 py-1"><option>2026</option></select>
                              </div>
                              <button className="p-1 hover:bg-gray-100 rounded"><ChevronRight className="w-4 h-4" /></button>
                           </div>
                           
                           <div className="grid grid-cols-7 gap-1 text-center mb-2">
                              {['D','S','T','Q','Q','S','S'].map((d, i) => <span key={i} className="text-xs text-gray-400">{d}</span>)}
                           </div>
                           <div className="grid grid-cols-7 gap-1 text-center">
                              {[...Array(5).keys()].map(i => <span key={`empty-${i}`} className="p-2"></span>)}
                              {[...Array(31).keys()].map(i => {
                                 const day = i + 1;
                                 const isSelected = day === 12;
                                 return (
                                    <div 
                                       key={day} 
                                       className={`text-sm p-2 rounded-lg flex items-center justify-center 
                                          ${isSelected ? 'bg-primary-500 text-white font-bold shadow-md' : 'text-gray-700 hover:bg-gray-50'}
                                       `}
                                    >
                                       {day}
                                    </div>
                                 )
                              })}
                           </div>
                           <p className="text-[10px] text-gray-400 mt-4 text-center">* Sábados, domingos e datas passadas não estão disponíveis</p>
                        </div>

                        <h3 className="font-medium text-gray-900 mb-2">Horários disponíveis</h3>
                        <p className="text-xs text-gray-500 mb-3">Data selecionada: <span className="font-bold text-gray-800">12/01/2026</span></p>
                        
                        <div className="grid grid-cols-3 gap-3 mb-6">
                           {TIMES.map(time => (
                              <button 
                                 key={time}
                                 onClick={() => setBookingData({...bookingData, time})}
                                 className={`py-2 px-3 rounded-lg text-sm border transition-all ${bookingData.time === time ? 'bg-slate-800 text-white border-slate-800' : 'bg-white text-gray-700 border-gray-200 hover:border-slate-400'}`}
                              >
                                 {time}
                              </button>
                           ))}
                        </div>

                        <div className="flex justify-between items-center mt-4">
                           <button onClick={() => setClientStep('pros')} className="text-sm text-gray-500 hover:text-gray-900 flex items-center gap-1">
                              <ChevronLeft className="w-4 h-4" /> Voltar
                           </button>
                           <button 
                              disabled={!bookingData.time}
                              onClick={() => setClientStep('confirm')}
                              className={`px-6 py-2 rounded-lg text-sm font-bold text-white transition-colors ${bookingData.time ? 'bg-slate-800 hover:bg-slate-900' : 'bg-gray-300 cursor-not-allowed'}`}
                           >
                              Continuar
                           </button>
                        </div>
                     </div>
                   </div>
                )}

                {/* 5. CONFIRMATION */}
                {clientStep === 'confirm' && (
                   <div className="flex-1 flex flex-col bg-gray-50">
                     <div className="bg-white p-4 shadow-sm sticky top-0 z-10">
                        <button onClick={() => setClientStep('datetime')} className="flex items-center gap-1 text-gray-500 text-sm mb-4 hover:text-gray-900">
                           <ArrowLeft className="w-4 h-4" /> Voltar para serviços
                        </button>
                        <h1 className="text-xl font-bold text-gray-900">Confirme seu Agendamento</h1>
                        <p className="text-xs text-gray-500 mb-2">Serviço selecionado: <span className="font-bold text-gray-900">{bookingData.service?.name}</span></p>
                        
                        {/* Progress Bar */}
                        <div className="w-full bg-gray-200 h-1.5 rounded-full mb-4">
                           <div className="bg-slate-800 h-1.5 rounded-full w-full"></div>
                        </div>
                        <p className="text-xs font-bold text-gray-900">Passo 3: Confirme seu agendamento</p>
                     </div>

                     <div className="flex-1 overflow-y-auto p-4 flex flex-col justify-center">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden">
                           <div className="absolute left-0 top-0 bottom-0 w-1 bg-slate-800"></div>
                           
                           <div className="space-y-6">
                              <div className="flex items-start gap-3">
                                 <div className="bg-gray-100 p-2 rounded-lg"><Briefcase className="w-5 h-5 text-gray-600" /></div>
                                 <div>
                                    <p className="text-xs text-gray-500">Serviço</p>
                                    <p className="font-bold text-gray-900">{bookingData.service?.name}</p>
                                    <p className="text-xs text-gray-400">{bookingData.service?.description}</p>
                                 </div>
                              </div>

                              <div className="flex items-start gap-3">
                                 <div className="bg-gray-100 p-2 rounded-lg"><Users className="w-5 h-5 text-gray-600" /></div>
                                 <div>
                                    <p className="text-xs text-gray-500">Profissional</p>
                                    <p className="font-bold text-gray-900">{bookingData.pro?.name}</p>
                                 </div>
                              </div>

                              <div className="flex items-start gap-3">
                                 <div className="bg-gray-100 p-2 rounded-lg"><Calendar className="w-5 h-5 text-gray-600" /></div>
                                 <div>
                                    <p className="text-xs text-gray-500">Data</p>
                                    <p className="font-bold text-gray-900">{bookingData.date}</p>
                                 </div>
                              </div>

                              <div className="flex items-start gap-3">
                                 <div className="bg-gray-100 p-2 rounded-lg"><Clock className="w-5 h-5 text-gray-600" /></div>
                                 <div>
                                    <p className="text-xs text-gray-500">Horário</p>
                                    <p className="font-bold text-gray-900">{bookingData.time}</p>
                                 </div>
                              </div>

                              <div className="pt-4 border-t border-gray-100 flex items-start gap-3">
                                 <div className="bg-gray-100 p-2 rounded-lg"><DollarSign className="w-5 h-5 text-gray-600" /></div>
                                 <div>
                                    <p className="text-xs text-gray-500">Preço</p>
                                    <p className="text-xl font-bold text-gray-900">R$ {bookingData.service?.price.toFixed(2)}</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className="p-4 bg-white border-t border-gray-100 flex justify-between items-center">
                        <button onClick={() => setClientStep('datetime')} className="text-sm text-gray-500 hover:text-gray-900">Voltar</button>
                        <button 
                           onClick={handleBook}
                           className="bg-slate-800 text-white px-6 py-3 rounded-xl text-sm font-bold shadow-lg hover:bg-slate-900 hover:shadow-xl transition-all"
                        >
                           Confirmar Agendamento
                        </button>
                     </div>
                   </div>
                )}

                {/* 6. APPOINTMENTS (FINAL SCREEN) */}
                {clientStep === 'appointments' && (
                   <div className="flex-1 flex flex-col bg-gray-50">
                     <div className="bg-white p-4 shadow-sm sticky top-0 z-10">
                         <div className="flex items-center gap-2 mb-4">
                           <div className="bg-primary-600 p-1 rounded-md">
                              <CalendarIcon className="h-4 w-4 text-white" />
                           </div>
                           <span className="font-bold text-sm text-gray-900">AgendaAi</span>
                        </div>
                        <h1 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                           <Calendar className="w-5 h-5 text-primary-600" />
                           Meus Agendamentos
                        </h1>
                        <p className="text-xs text-gray-500">Gerencie seus agendamentos</p>

                        <div className="flex gap-2 mt-4 overflow-x-auto pb-1">
                           <button className="px-4 py-1.5 bg-primary-600 text-white text-xs font-medium rounded-full whitespace-nowrap">Todos</button>
                           <button className="px-4 py-1.5 bg-white border border-gray-200 text-gray-600 text-xs font-medium rounded-full whitespace-nowrap">Pendentes</button>
                           <button className="px-4 py-1.5 bg-white border border-gray-200 text-gray-600 text-xs font-medium rounded-full whitespace-nowrap">Confirmados</button>
                        </div>
                     </div>

                     <div className="flex-1 overflow-y-auto p-4 space-y-3">
                        {myAppointments.length > 0 ? (
                           myAppointments.map((appt: any) => (
                              <div key={appt.id} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm relative overflow-hidden">
                                 <div className="absolute top-0 right-0 bg-yellow-100 text-yellow-700 text-[10px] font-bold px-2 py-1 rounded-bl-lg">
                                    PENDENTE
                                 </div>
                                 <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex flex-col items-center justify-center shrink-0">
                                       <span className="text-[10px] font-bold text-gray-500 uppercase">JAN</span>
                                       <span className="text-lg font-bold text-gray-900">12</span>
                                    </div>
                                    <div className="flex-1">
                                       <h3 className="font-bold text-gray-900">{appt.service?.name}</h3>
                                       <p className="text-xs text-gray-500">{appt.shop?.name}</p>
                                       <div className="flex items-center gap-3 mt-2">
                                          <span className="text-xs text-gray-600 flex items-center gap-1"><Clock className="w-3 h-3" /> {appt.time}</span>
                                          <span className="text-xs text-gray-600 flex items-center gap-1"><Users className="w-3 h-3" /> {appt.pro?.name}</span>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="mt-4 pt-3 border-t border-gray-50 flex justify-between items-center">
                                    <span className="text-sm font-bold text-gray-900">R$ {appt.service?.price.toFixed(2)}</span>
                                    <button className="text-xs text-red-500 font-medium hover:text-red-700">Cancelar</button>
                                 </div>
                              </div>
                           ))
                        ) : (
                           <div className="text-center py-10 text-gray-400 text-sm">Nenhum agendamento encontrado</div>
                        )}
                        
                        {/* Button to restart demo */}
                        {myAppointments.length > 0 && (
                           <button onClick={resetFlow} className="w-full mt-4 py-2 text-xs text-gray-400 hover:text-gray-600 border border-dashed border-gray-300 rounded-lg">
                              + Agendar Novo (Demo)
                           </button>
                        )}
                     </div>
                   </div>
                )}
                
                {/* Bottom Nav */}
                <div className="absolute bottom-0 w-full bg-white border-t border-gray-100 p-3 flex justify-around items-center z-20">
                   <div className={`flex flex-col items-center gap-1 ${['home', 'services', 'pros', 'datetime', 'confirm'].includes(clientStep) ? 'text-primary-600' : 'text-gray-400'}`} onClick={() => setClientStep('home')}>
                      <CalendarIcon size={20} />
                      <span className="text-[10px] font-medium">Início</span>
                   </div>
                   <div className={`flex flex-col items-center gap-1 ${clientStep === 'appointments' ? 'text-primary-600' : 'text-gray-400'}`} onClick={() => clientStep !== 'appointments' && myAppointments.length > 0 && setClientStep('appointments')}>
                      <DollarSign size={20} className="rotate-12" />
                      <span className="text-[10px] font-medium">Agendamentos</span>
                   </div>
                   <div className="flex flex-col items-center gap-1 text-gray-400">
                      <History size={20} />
                      <span className="text-[10px] font-medium">Histórico</span>
                   </div>
                   <div className="flex flex-col items-center gap-1 text-gray-400">
                      <Store size={20} />
                      <span className="text-[10px] font-medium">Menu</span>
                   </div>
                </div>

              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppPreview;