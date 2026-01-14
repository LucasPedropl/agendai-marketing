import React from 'react';
import {
  LayoutDashboard,
  Calendar,
  History,
  Briefcase,
  Package,
  Users,
  TrendingUp,
  TrendingDown,
  DollarSign,
  BarChart2,
  Bell,
  Store,
  CalendarX,
  User
} from 'lucide-react';

export const BusinessDashboard: React.FC = () => {
  return (
    <div className="flex flex-1 text-slate-800 bg-gray-50 w-full h-full">
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
                      <div className={`w-full rounded-t-sm relative overflow-hidden transition-all duration-300 ${isLast ? 'bg-primary-100' : 'bg-slate-100'} hover:opacity-90`} style={{ height: heights[idx] }}>
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
  );
};

export const MobileBusinessDashboard: React.FC = () => {
  return (
    <div className="flex flex-col h-full bg-gray-50 w-full text-slate-800 font-sans">
      <div className="flex-1 overflow-y-auto no-scrollbar pb-10">
        
        {/* Header */}
        <div className="bg-white p-4 shadow-sm pb-2 sticky top-0 z-10">
          <div className="flex items-center justify-between mb-4">
             <div className="flex items-center gap-2">
                <div className="bg-primary-600 p-1 rounded-md">
                    <Calendar className="h-4 w-4 text-white" />
                </div>
                <span className="font-bold text-lg text-gray-900">AgendaAi</span>
            </div>
            <div className="relative">
                <Bell size={20} className="text-gray-400" />
                <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border border-white"></div>
            </div>
          </div>
          
          <h1 className="text-xl font-bold text-slate-800">Dashboard do Estabelecimento</h1>
          <p className="text-slate-500 text-xs mt-1">Visão geral do seu negócio</p>
        </div>

        <div className="p-4 space-y-4">
            {/* Stats Cards Vertical */}
            <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex justify-between items-center">
              <div>
                <p className="text-xs text-gray-500 font-medium">Agendamentos Hoje</p>
                <h3 className="text-2xl font-bold text-slate-800 mt-1">0</h3>
                <p className="text-[10px] text-gray-400 mt-0.5">Confirmados</p>
              </div>
              <div className="h-10 w-10 bg-primary-500 rounded-lg flex items-center justify-center shadow-blue-200 shadow-md">
                <Calendar className="text-white h-5 w-5" />
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex justify-between items-center">
              <div>
                <p className="text-xs text-gray-500 font-medium">Agendamentos Semana</p>
                <h3 className="text-2xl font-bold text-slate-800 mt-1">0</h3>
                <p className="text-[10px] text-green-500 mt-0.5 font-medium">Esta semana</p>
              </div>
              <div className="h-10 w-10 bg-green-500 rounded-lg flex items-center justify-center shadow-green-200 shadow-md">
                <Calendar className="text-white h-5 w-5" />
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex justify-between items-center">
              <div>
                <p className="text-xs text-gray-500 font-medium">Receita do Mês</p>
                <h3 className="text-2xl font-bold text-slate-800 mt-1">R$ 0.00</h3>
                <p className="text-[10px] text-green-500 mt-0.5 font-medium">Mês atual</p>
              </div>
              <div className="h-10 w-10 bg-yellow-500 rounded-lg flex items-center justify-center shadow-yellow-200 shadow-md">
                <DollarSign className="text-white h-5 w-5" />
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex justify-between items-center">
              <div>
                <p className="text-xs text-gray-500 font-medium">Taxa Cancelamento</p>
                <h3 className="text-2xl font-bold text-slate-800 mt-1">0.0%</h3>
                <p className="text-[10px] text-gray-400 mt-0.5">Últimos 30 dias</p>
              </div>
              <div className="h-10 w-10 bg-red-500 rounded-lg flex items-center justify-center shadow-red-200 shadow-md">
                <TrendingDown className="text-white h-5 w-5" />
              </div>
            </div>

            {/* Chart Section */}
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
               <div className="flex items-center gap-2 mb-4">
                  <BarChart2 className="w-4 h-4 text-slate-800" />
                  <h4 className="font-bold text-sm text-slate-800">Receita Mensal</h4>
                </div>
                <div className="h-40 flex items-end justify-between px-2 gap-2 pt-4 border-t border-dashed border-gray-100">
                    {['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'].map((month, idx) => {
                    const heights = ['40%', '65%', '45%', '80%', '55%', '90%'];
                    const isLast = idx === 5;
                    return (
                        <div key={month} className="flex flex-col items-center gap-2 group w-full h-full justify-end">
                        <div className={`w-full max-w-[20px] rounded-t-sm relative overflow-hidden transition-all duration-300 ${isLast ? 'bg-primary-100' : 'bg-slate-100'} hover:opacity-90`} style={{ height: heights[idx] }}>
                            <div className={`absolute top-0 w-full h-1 ${isLast ? 'bg-primary-600' : 'bg-slate-300'}`}></div>
                        </div>
                        <span className={`text-[9px] font-medium ${isLast ? 'text-primary-600 font-bold' : 'text-gray-400'}`}>{month}</span>
                        </div>
                    )
                    })}
                </div>
            </div>

            {/* Next Appointments (Empty State) */}
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm min-h-[160px] flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <Calendar className="w-4 h-4 text-slate-800" />
                  <h4 className="font-bold text-sm text-slate-800">Próximos Agendamentos</h4>
                </div>
                <div className="flex-1 flex flex-col items-center justify-center text-gray-300 gap-2">
                    <CalendarX size={32} />
                    <p className="text-xs font-medium">Nenhum agendamento próximo</p>
                </div>
            </div>

            {/* Entity Counts */}
            <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex justify-between items-center">
              <div>
                <p className="text-xs text-gray-500 font-medium">Serviços Ativos</p>
                <h3 className="text-xl font-bold text-slate-800 mt-1">1</h3>
                <p className="text-[10px] text-gray-400">Disponíveis para agendamento</p>
              </div>
              <div className="h-10 w-10 bg-purple-500 rounded-lg flex items-center justify-center shadow-purple-200 shadow-md">
                <Briefcase className="text-white h-5 w-5" />
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex justify-between items-center">
              <div>
                <p className="text-xs text-gray-500 font-medium">Profissionais</p>
                <h3 className="text-xl font-bold text-slate-800 mt-1">1</h3>
                <p className="text-[10px] text-gray-400">Cadastrados</p>
              </div>
              <div className="h-10 w-10 bg-primary-500 rounded-lg flex items-center justify-center shadow-blue-200 shadow-md">
                <Users className="text-white h-5 w-5" />
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex justify-between items-center">
              <div>
                <p className="text-xs text-gray-500 font-medium">Total Clientes</p>
                <h3 className="text-xl font-bold text-slate-800 mt-1">0</h3>
                <p className="text-[10px] text-gray-400">Cadastrados</p>
              </div>
              <div className="h-10 w-10 bg-pink-500 rounded-lg flex items-center justify-center shadow-pink-200 shadow-md">
                <User className="text-white h-5 w-5" />
              </div>
            </div>

        </div>
      </div>

      {/* Bottom Nav */}
        <div className="bg-white border-t border-gray-100 p-3 flex justify-around items-center z-20 shrink-0">
            <div className="flex flex-col items-center gap-1 cursor-pointer text-slate-800">
                <LayoutDashboard size={20} />
                <span className="text-[10px] font-bold">Dashboard</span>
            </div>
            <div className="flex flex-col items-center gap-1 text-gray-400 cursor-pointer hover:text-gray-600">
                <Calendar size={20} />
                <span className="text-[10px] font-medium">Agenda</span>
            </div>
            <div className="flex flex-col items-center gap-1 text-gray-400 cursor-pointer hover:text-gray-600">
                <History size={20} />
                <span className="text-[10px] font-medium">Histórico</span>
            </div>
            <div className="flex flex-col items-center gap-1 text-gray-400 cursor-pointer hover:text-gray-600">
                <Store size={20} />
                <span className="text-[10px] font-medium">Menu</span>
            </div>
        </div>
    </div>
  );
};