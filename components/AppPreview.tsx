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
  FileText,
  PieChart,
  Menu,
  MoreVertical,
  CheckCircle,
  XCircle
} from 'lucide-react';

const AppPreview: React.FC = () => {
  const [viewMode, setViewMode] = useState<'business' | 'client'>('business');

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

        <div className="flex justify-center min-h-[650px] items-center">
          {viewMode === 'business' ? (
            <>
            {/* DESKTOP VIEW - NOTEBOOK FRAME (Hidden on mobile) */}
            <div className="hidden lg:block w-full max-w-[1024px] mx-auto animate-fade-in">
              {/* Laptop Top Bezel (Screen Frame) */}
              <div className="relative bg-gray-900 rounded-t-[2rem] p-4 pb-0 shadow-2xl ring-1 ring-white/10">
                {/* Camera */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-1 bg-gray-800 rounded-full flex items-center justify-center">
                   <div className="w-1.5 h-1.5 bg-gray-600 rounded-full"></div>
                </div>

                {/* Screen Content */}
                <div className="bg-white rounded-t-lg overflow-hidden relative w-full h-[650px] flex flex-col">
                  {/* Browser Toolbar (inside screen) */}
                  <div className="bg-gray-100 border-b border-gray-200 flex items-center gap-2 px-4 py-2">
                    <div className="flex gap-1.5 mr-4">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-md px-3 py-1 text-[10px] text-gray-500 font-medium w-full max-w-lg flex justify-between items-center shadow-sm">
                      <span>https://painel.agendaai.com.br/dashboard</span>
                    </div>
                  </div>

                  {/* Dashboard App */}
                  <div className="flex flex-1 text-slate-800 bg-gray-50 overflow-hidden">
                    {/* Sidebar */}
                    <div className="w-60 bg-white border-r border-gray-200 flex flex-col shrink-0">
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
                        <div className="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-lg text-xs font-medium cursor-pointer transition-colors">
                          <Store size={16} /> Config. Estabelecimento
                        </div>

                        <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mt-6 mb-2 pl-2">Financeiro</div>
                        <div className="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-lg text-xs font-medium cursor-pointer transition-colors">
                          <TrendingUp size={16} /> Receitas
                        </div>
                        <div className="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-lg text-xs font-medium cursor-pointer transition-colors">
                          <TrendingDown size={16} /> Despesas
                        </div>
                        <div className="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-lg text-xs font-medium cursor-pointer transition-colors">
                          <PieChart size={16} /> Receita vs Despesa
                        </div>
                        <div className="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-lg text-xs font-medium cursor-pointer transition-colors">
                          <BarChart2 size={16} /> Relatórios
                        </div>

                        <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mt-6 mb-2 pl-2">Outros</div>
                        <div className="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-lg text-xs font-medium cursor-pointer transition-colors">
                          <Settings size={16} /> Configurações
                        </div>
                      </div>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1 bg-gray-50 overflow-y-auto custom-scrollbar">
                      {/* Header */}
                      <header className="bg-white border-b border-gray-200 h-14 px-6 flex justify-between items-center sticky top-0 z-10">
                        <h2 className="text-lg font-bold text-gray-800">Barbearia VIP</h2>
                        <div className="flex items-center gap-4">
                           <div className="relative">
                              <Bell size={18} className="text-gray-400" />
                              <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></div>
                           </div>
                          <div className="flex items-center gap-2 border-l border-gray-100 pl-4">
                            <div className="text-xs text-right hidden sm:block">
                               <p className="font-medium text-gray-700">Admin</p>
                               <p className="text-gray-400 text-[10px]">Gestor</p>
                            </div>
                            <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold text-xs border border-primary-200">
                              A
                            </div>
                          </div>
                        </div>
                      </header>

                      {/* Dashboard Content */}
                      <div className="p-6">
                        <div className="mb-6">
                          <h1 className="text-xl font-bold text-slate-800">Dashboard do Estabelecimento</h1>
                          <p className="text-slate-500 text-xs mt-1">Visão geral do seu negócio</p>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-4 gap-4 mb-6">
                          {/* Card 1 */}
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

                          {/* Card 2 */}
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

                          {/* Card 3 */}
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

                          {/* Card 4 */}
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

                        {/* Charts Section */}
                        <div className="grid grid-cols-2 gap-6 mb-6">
                          {/* Receita Mensal Chart */}
                          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm h-72 flex flex-col">
                              <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-2">
                                  <BarChart2 className="w-4 h-4 text-slate-800" />
                                  <h4 className="font-bold text-sm text-slate-800">Receita Mensal</h4>
                                </div>
                                <select className="text-xs border-gray-200 rounded bg-gray-50 p-1">
                                  <option>Últimos 6 meses</option>
                                </select>
                              </div>
                              
                              <div className="flex-1 flex items-end justify-between px-2 gap-3 pt-4 border-t border-dashed border-gray-100">
                                 {/* Bars */}
                                 <div className="flex flex-col items-center gap-2 group w-full h-full justify-end">
                                    <div className="w-full bg-blue-100 rounded-t-sm relative overflow-hidden group-hover:opacity-80 transition-opacity" style={{height: '40%'}}>
                                      <div className="absolute top-0 w-full bg-blue-500 h-1"></div>
                                    </div>
                                    <span className="text-[10px] text-gray-500 font-medium">Jan</span>
                                 </div>
                                 <div className="flex flex-col items-center gap-2 group w-full h-full justify-end">
                                    <div className="w-full bg-blue-100 rounded-t-sm relative overflow-hidden group-hover:opacity-80 transition-opacity" style={{height: '65%'}}>
                                       <div className="absolute top-0 w-full bg-blue-500 h-1"></div>
                                    </div>
                                    <span className="text-[10px] text-gray-500 font-medium">Fev</span>
                                 </div>
                                 <div className="flex flex-col items-center gap-2 group w-full h-full justify-end">
                                    <div className="w-full bg-blue-100 rounded-t-sm relative overflow-hidden group-hover:opacity-80 transition-opacity" style={{height: '45%'}}>
                                       <div className="absolute top-0 w-full bg-blue-500 h-1"></div>
                                    </div>
                                    <span className="text-[10px] text-gray-500 font-medium">Mar</span>
                                 </div>
                                 <div className="flex flex-col items-center gap-2 group w-full h-full justify-end">
                                    <div className="w-full bg-blue-100 rounded-t-sm relative overflow-hidden group-hover:opacity-80 transition-opacity" style={{height: '80%'}}>
                                       <div className="absolute top-0 w-full bg-blue-500 h-1"></div>
                                    </div>
                                    <span className="text-[10px] text-gray-500 font-medium">Abr</span>
                                 </div>
                                 <div className="flex flex-col items-center gap-2 group w-full h-full justify-end">
                                    <div className="w-full bg-blue-100 rounded-t-sm relative overflow-hidden group-hover:opacity-80 transition-opacity" style={{height: '55%'}}>
                                       <div className="absolute top-0 w-full bg-blue-500 h-1"></div>
                                    </div>
                                    <span className="text-[10px] text-gray-500 font-medium">Mai</span>
                                 </div>
                                 <div className="flex flex-col items-center gap-2 group w-full h-full justify-end">
                                    <div className="w-full bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-sm relative overflow-hidden shadow-lg shadow-blue-200" style={{height: '90%'}}>
                                    </div>
                                    <span className="text-[10px] text-blue-600 font-bold">Jun</span>
                                 </div>
                              </div>
                          </div>

                          {/* Próximos Agendamentos (Populated) */}
                          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm h-72 flex flex-col">
                              <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-2">
                                  <Calendar className="w-4 h-4 text-slate-800" />
                                  <h4 className="font-bold text-sm text-slate-800">Próximos Agendamentos</h4>
                                </div>
                                <span className="text-xs text-primary-600 font-medium cursor-pointer">Ver todos</span>
                              </div>
                              
                              <div className="flex-1 overflow-y-auto pr-1 space-y-3 custom-scrollbar">
                                 {/* Item 1 */}
                                 <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors border border-transparent hover:border-gray-100">
                                    <div className="bg-blue-50 text-blue-700 font-bold rounded-lg w-10 h-10 flex items-center justify-center text-xs">
                                       14:00
                                    </div>
                                    <div className="flex-1 min-w-0">
                                       <p className="text-sm font-medium text-gray-900 truncate">Ana Clara</p>
                                       <p className="text-xs text-gray-500 truncate">Corte e Escova</p>
                                    </div>
                                    <div className="text-right">
                                       <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-0.5 text-[10px] font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Confirmado</span>
                                    </div>
                                 </div>

                                 {/* Item 2 */}
                                 <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors border border-transparent hover:border-gray-100">
                                    <div className="bg-blue-50 text-blue-700 font-bold rounded-lg w-10 h-10 flex items-center justify-center text-xs">
                                       15:30
                                    </div>
                                    <div className="flex-1 min-w-0">
                                       <p className="text-sm font-medium text-gray-900 truncate">Pedro Henrique</p>
                                       <p className="text-xs text-gray-500 truncate">Barba</p>
                                    </div>
                                    <div className="text-right">
                                       <span className="inline-flex items-center rounded-full bg-yellow-50 px-2 py-0.5 text-[10px] font-medium text-yellow-700 ring-1 ring-inset ring-yellow-600/20">Pendente</span>
                                    </div>
                                 </div>

                                 {/* Item 3 */}
                                 <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors border border-transparent hover:border-gray-100">
                                    <div className="bg-blue-50 text-blue-700 font-bold rounded-lg w-10 h-10 flex items-center justify-center text-xs">
                                       16:15
                                    </div>
                                    <div className="flex-1 min-w-0">
                                       <p className="text-sm font-medium text-gray-900 truncate">Juliana Costa</p>
                                       <p className="text-xs text-gray-500 truncate">Manicure</p>
                                    </div>
                                    <div className="text-right">
                                       <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-0.5 text-[10px] font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Confirmado</span>
                                    </div>
                                 </div>

                                 {/* Item 4 */}
                                 <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors border border-transparent hover:border-gray-100">
                                    <div className="bg-blue-50 text-blue-700 font-bold rounded-lg w-10 h-10 flex items-center justify-center text-xs">
                                       17:00
                                    </div>
                                    <div className="flex-1 min-w-0">
                                       <p className="text-sm font-medium text-gray-900 truncate">Lucas Santos</p>
                                       <p className="text-xs text-gray-500 truncate">Corte Masculino</p>
                                    </div>
                                    <div className="text-right">
                                       <span className="inline-flex items-center rounded-full bg-gray-50 px-2 py-0.5 text-[10px] font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">Finalizado</span>
                                    </div>
                                 </div>
                              </div>
                          </div>
                        </div>
                        
                        {/* Bottom widgets */}
                        <div className="grid grid-cols-3 gap-4">
                           <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex justify-between items-center">
                              <div>
                                <p className="text-xs text-gray-500 mb-0.5">Serviços Ativos</p>
                                <h3 className="text-xl font-bold text-slate-800">1</h3>
                              </div>
                              <div className="h-8 w-8 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center">
                                <Briefcase size={16} />
                              </div>
                           </div>
                           <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex justify-between items-center">
                              <div>
                                <p className="text-xs text-gray-500 mb-0.5">Profissionais</p>
                                <h3 className="text-xl font-bold text-slate-800">3</h3>
                              </div>
                              <div className="h-8 w-8 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center">
                                <Users size={16} />
                              </div>
                           </div>
                           <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex justify-between items-center">
                              <div>
                                <p className="text-xs text-gray-500 mb-0.5">Total Clientes</p>
                                <h3 className="text-xl font-bold text-slate-800">156</h3>
                              </div>
                              <div className="h-8 w-8 bg-pink-100 text-pink-600 rounded-lg flex items-center justify-center">
                                <Users size={16} />
                              </div>
                           </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Laptop Bottom (Base) */}
              <div className="relative mx-auto bg-gray-800 rounded-b-xl h-[20px] max-w-[1024px] shadow-xl">
                 <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[120px] h-[6px] bg-gray-700"></div>
              </div>
            </div>

            {/* MOBILE VIEW - PHONE MOCKUP FOR BUSINESS (Shown only on small screens) */}
             <div className="lg:hidden relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[700px] w-[340px] shadow-xl animate-fade-in flex flex-col overflow-hidden">
                {/* Notch & Status Bar */}
                <div className="h-[32px] w-[140px] bg-gray-800 absolute left-1/2 -translate-x-1/2 top-0 rounded-b-xl z-20"></div>
                <div className="h-6 bg-white flex justify-between items-center px-6 text-[10px] font-bold text-gray-800 z-10 relative mt-1">
                   <span>9:41</span>
                   <div className="flex items-center gap-1">
                      <div className="h-2 w-2 bg-black rounded-full"></div>
                      <div className="h-2 w-3 bg-black rounded-sm"></div>
                   </div>
                </div>

                {/* Mobile App Content (Business Dashboard) */}
                <div className="flex-1 bg-gray-50 overflow-y-auto relative font-sans pb-20">
                   {/* Header */}
                   <div className="bg-white p-4 flex items-center gap-2 border-b border-gray-100 sticky top-0 z-10">
                      <div className="bg-primary-600 p-1.5 rounded-lg">
                         <Calendar className="h-4 w-4 text-white" />
                      </div>
                      <span className="font-bold text-lg text-slate-800">AgendaAi</span>
                   </div>

                   <div className="p-4">
                      <div className="mb-4">
                         <h2 className="text-lg font-bold text-slate-800 leading-tight">Dashboard do Estabelecimento</h2>
                         <p className="text-xs text-gray-500">Visão geral do seu negócio</p>
                      </div>

                      {/* Cards Stack */}
                      <div className="space-y-3">
                         {/* Card 1 */}
                         <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex justify-between items-center">
                            <div>
                               <p className="text-xs text-gray-500 font-medium">Agendamentos Hoje</p>
                               <h3 className="text-xl font-bold text-slate-800 mt-1">12</h3>
                               <p className="text-[10px] text-gray-400">Confirmados</p>
                            </div>
                            <div className="h-10 w-10 bg-blue-500 rounded-lg flex items-center justify-center">
                               <Calendar className="text-white h-5 w-5" />
                            </div>
                         </div>
                         {/* Card 2 */}
                         <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex justify-between items-center">
                            <div>
                               <p className="text-xs text-gray-500 font-medium">Agendamentos Semana</p>
                               <h3 className="text-xl font-bold text-slate-800 mt-1">48</h3>
                               <p className="text-[10px] text-green-500">Esta semana</p>
                            </div>
                            <div className="h-10 w-10 bg-green-500 rounded-lg flex items-center justify-center">
                               <Calendar className="text-white h-5 w-5" />
                            </div>
                         </div>
                         {/* Card 3 */}
                         <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex justify-between items-center">
                            <div>
                               <p className="text-xs text-gray-500 font-medium">Receita do Mês</p>
                               <h3 className="text-xl font-bold text-slate-800 mt-1">R$ 4.2k</h3>
                               <p className="text-[10px] text-green-500">Mês atual</p>
                            </div>
                            <div className="h-10 w-10 bg-yellow-500 rounded-lg flex items-center justify-center">
                               <DollarSign className="text-white h-5 w-5" />
                            </div>
                         </div>
                         {/* Card 4 */}
                         <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex justify-between items-center">
                            <div>
                               <p className="text-xs text-gray-500 font-medium">Taxa Cancelamento</p>
                               <h3 className="text-xl font-bold text-slate-800 mt-1">0.0%</h3>
                               <p className="text-[10px] text-gray-400">Últimos 30 dias</p>
                            </div>
                            <div className="h-10 w-10 bg-red-500 rounded-lg flex items-center justify-center">
                               <TrendingDown className="text-white h-5 w-5" />
                            </div>
                         </div>
                         
                         {/* Chart Mobile */}
                         <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm mt-4">
                            <div className="flex items-center gap-2 mb-3">
                               <BarChart2 className="w-4 h-4 text-slate-800" />
                               <h4 className="font-bold text-sm text-slate-800">Receita Mensal</h4>
                            </div>
                            <div className="h-40 flex items-end justify-between px-1 gap-2 border-b border-gray-100 pb-1">
                                {[30, 50, 40, 70, 45, 80].map((h, i) => (
                                   <div key={i} className="w-full bg-primary-100 rounded-t-sm relative group h-full">
                                      <div style={{height: `${h}%`}} className="absolute bottom-0 w-full bg-primary-500 rounded-t-sm"></div>
                                   </div>
                                ))}
                            </div>
                         </div>
                      </div>
                   </div>
                </div>

                {/* Bottom Nav for Business Mobile */}
                <div className="absolute bottom-0 w-full bg-white border-t border-gray-100 p-3 flex justify-around items-center z-20">
                   <div className="flex flex-col items-center gap-1 text-primary-900">
                      <LayoutDashboard size={20} />
                      <span className="text-[10px] font-medium">Dashboard</span>
                   </div>
                   <div className="flex flex-col items-center gap-1 text-gray-400">
                      <Calendar size={20} />
                      <span className="text-[10px] font-medium">Agenda</span>
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
             </>
          ) : (
            /* CLIENT APP VIEW (Mobile only mockup) */
            <div className="relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[700px] w-[340px] shadow-xl animate-fade-in flex flex-col overflow-hidden">
              {/* Notch */}
              <div className="h-[32px] w-[140px] bg-gray-800 absolute left-1/2 -translate-x-1/2 top-0 rounded-b-xl z-20"></div>
              
              <div className="bg-white flex-1 overflow-hidden relative font-sans">
                {/* Status Bar */}
                <div className="h-6 bg-white flex justify-between items-center px-6 text-[10px] font-bold text-gray-800 z-10 relative mt-1">
                  <span>9:41</span>
                  <div className="flex items-center gap-1">
                     <div className="h-2 w-2 bg-black rounded-full"></div>
                     <div className="h-2 w-3 bg-black rounded-sm"></div>
                  </div>
                </div>

                {/* Cover Image */}
                <div className="h-32 bg-gray-200 relative">
                  <img src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover" alt="Cover" />
                  <div className="absolute top-2 left-2 bg-white/90 p-1 rounded-full cursor-pointer">
                    <ChevronDown size={20} className="rotate-90 text-gray-800" />
                  </div>
                </div>

                {/* Profile Info */}
                <div className="px-4 -mt-10 relative z-10">
                   <div className="bg-white rounded-xl shadow-md p-4 border border-gray-100">
                      <div className="flex justify-between items-start">
                         <div>
                            <h2 className="font-bold text-lg text-gray-900">Barbearia VIP</h2>
                            <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                              <MapPin size={12} /> Centro, São Paulo
                            </p>
                         </div>
                         <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-lg">
                            <Star size={12} className="text-yellow-500 fill-yellow-500" />
                            <span className="text-xs font-bold text-yellow-700">4.9</span>
                         </div>
                      </div>
                      <div className="mt-3 flex gap-2">
                         <span className="text-[10px] px-2 py-1 bg-green-50 text-green-700 rounded-md border border-green-100">Aberto Agora</span>
                         <span className="text-[10px] px-2 py-1 bg-gray-50 text-gray-600 rounded-md border border-gray-100">Estacionamento</span>
                      </div>
                   </div>
                </div>

                {/* Services List */}
                <div className="px-4 py-4 overflow-y-auto h-[400px] pb-20">
                   <h3 className="font-bold text-gray-900 mb-3 text-sm">Serviços Populares</h3>
                   
                   <div className="space-y-3">
                      {/* Service Item 1 */}
                      <div className="flex justify-between items-center p-3 rounded-xl border border-gray-100 hover:border-primary-200 transition-colors">
                         <div>
                            <p className="font-medium text-sm text-gray-900">Corte Masculino</p>
                            <p className="text-xs text-gray-500 mt-0.5 flex items-center gap-1">
                               <Clock size={10} /> 45 min
                            </p>
                            <p className="text-sm font-bold text-primary-600 mt-1">R$ 50,00</p>
                         </div>
                         <button className="bg-primary-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg">
                            Agendar
                         </button>
                      </div>

                      {/* Service Item 2 */}
                      <div className="flex justify-between items-center p-3 rounded-xl border border-gray-100 hover:border-primary-200 transition-colors">
                         <div>
                            <p className="font-medium text-sm text-gray-900">Barba Completa</p>
                            <p className="text-xs text-gray-500 mt-0.5 flex items-center gap-1">
                               <Clock size={10} /> 30 min
                            </p>
                            <p className="text-sm font-bold text-primary-600 mt-1">R$ 35,00</p>
                         </div>
                         <button className="bg-primary-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg">
                            Agendar
                         </button>
                      </div>

                       {/* Service Item 3 */}
                       <div className="flex justify-between items-center p-3 rounded-xl border border-gray-100 hover:border-primary-200 transition-colors">
                         <div>
                            <p className="font-medium text-sm text-gray-900">Combo (Corte + Barba)</p>
                            <p className="text-xs text-gray-500 mt-0.5 flex items-center gap-1">
                               <Clock size={10} /> 1h 15 min
                            </p>
                            <p className="text-sm font-bold text-primary-600 mt-1">R$ 75,00</p>
                         </div>
                         <button className="bg-primary-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg">
                            Agendar
                         </button>
                      </div>
                   </div>
                </div>
                
                {/* Bottom Nav */}
                <div className="absolute bottom-0 w-full bg-white border-t border-gray-100 p-3 flex justify-around items-center z-20">
                   <div className="flex flex-col items-center gap-1 text-primary-600">
                      <LayoutDashboard size={20} />
                      <span className="text-[10px] font-medium">Início</span>
                   </div>
                   <div className="flex flex-col items-center gap-1 text-gray-400">
                      <Search size={20} />
                      <span className="text-[10px] font-medium">Buscar</span>
                   </div>
                   <div className="flex flex-col items-center gap-1 text-gray-400">
                      <Calendar size={20} />
                      <span className="text-[10px] font-medium">Agenda</span>
                   </div>
                   <div className="flex flex-col items-center gap-1 text-gray-400">
                      <Users size={20} />
                      <span className="text-[10px] font-medium">Perfil</span>
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