import React from 'react';
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
  BarChart,
  Bell,
  Search,
  ChevronDown
} from 'lucide-react';

// This component simulates the app interface inside the landing page to show functionality
const AppPreview: React.FC = () => {
  return (
    <div id="preview" className="bg-gray-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-primary-600 tracking-wide uppercase">Poderoso e Intuitivo</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Sua empresa na palma da mão
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Uma interface limpa e organizada para você focar no que importa: atender bem seus clientes.
          </p>
        </div>

        {/* Browser Window Mockup */}
        <div className="relative rounded-xl shadow-2xl bg-white ring-1 ring-gray-900/5 overflow-hidden">
          {/* Top Bar (Browser style) */}
          <div className="bg-gray-800 flex items-center gap-2 px-4 py-3">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="ml-4 bg-gray-700 rounded-md px-3 py-1 text-xs text-gray-300 font-mono w-64 flex justify-between items-center">
              <span>agendai.com.br/dashboard</span>
            </div>
          </div>

          {/* App Interface Simulation */}
          <div className="flex h-[600px] text-slate-800">
            {/* Sidebar */}
            <div className="w-64 bg-white border-r border-gray-100 hidden md:flex flex-col">
              <div className="p-4 flex items-center gap-2 border-b border-gray-50">
                <div className="bg-primary-600 p-1.5 rounded-lg">
                  <Calendar className="h-5 w-5 text-white" />
                </div>
                <span className="font-bold text-lg text-slate-800">AgendaAi</span>
              </div>
              
              <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
                <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 mb-2">Principal</div>
                <div className="flex items-center gap-3 px-3 py-2 bg-slate-900 text-white rounded-md text-sm font-medium">
                  <LayoutDashboard size={18} /> Dashboard
                </div>
                <div className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-md text-sm font-medium">
                  <Calendar size={18} /> Agenda
                </div>
                <div className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-md text-sm font-medium">
                  <History size={18} /> Histórico
                </div>

                <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 mt-6 mb-2">Gerenciamento</div>
                <div className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-md text-sm font-medium">
                  <Briefcase size={18} /> Serviços
                </div>
                <div className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-md text-sm font-medium">
                  <Package size={18} /> Produtos
                </div>
                <div className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-md text-sm font-medium">
                  <Users size={18} /> Profissionais
                </div>

                <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 mt-6 mb-2">Financeiro</div>
                <div className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-md text-sm font-medium">
                  <TrendingUp size={18} /> Receitas
                </div>
                <div className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-md text-sm font-medium">
                  <TrendingDown size={18} /> Despesas
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 bg-gray-50 overflow-y-auto">
              {/* Header */}
              <header className="bg-white border-b border-gray-100 py-3 px-6 flex justify-between items-center sticky top-0 z-10">
                <h2 className="text-lg font-bold text-gray-800">AgendaAi</h2>
                <div className="flex items-center gap-4">
                  <Bell className="text-gray-400 w-5 h-5 hover:text-gray-600 cursor-pointer" />
                  <div className="flex items-center gap-2 cursor-pointer">
                    <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-bold text-xs">
                      JS
                    </div>
                    <span className="text-sm font-medium text-gray-700">João Silva</span>
                  </div>
                </div>
              </header>

              {/* Dashboard Content */}
              <div className="p-6">
                <div className="mb-6">
                  <h1 className="text-2xl font-bold text-gray-900">Dashboard do Estabelecimento</h1>
                  <p className="text-sm text-gray-500">Visão geral do seu negócio</p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  {/* Card 1 */}
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex justify-between items-center">
                    <div>
                      <p className="text-xs text-gray-500 font-medium">Agendamentos Hoje</p>
                      <h3 className="text-2xl font-bold text-gray-900 mt-1">12</h3>
                      <p className="text-xs text-gray-400 mt-1">Confirmados</p>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <Calendar className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex justify-between items-center">
                    <div>
                      <p className="text-xs text-gray-500 font-medium">Agendamentos Semana</p>
                      <h3 className="text-2xl font-bold text-gray-900 mt-1">48</h3>
                      <p className="text-xs text-green-500 mt-1">Esta semana</p>
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg">
                      <Calendar className="w-6 h-6 text-green-600" />
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex justify-between items-center">
                    <div>
                      <p className="text-xs text-gray-500 font-medium">Receita do Mês</p>
                      <h3 className="text-2xl font-bold text-gray-900 mt-1">R$ 4.250</h3>
                      <p className="text-xs text-green-500 mt-1">Mês atual</p>
                    </div>
                    <div className="p-3 bg-yellow-50 rounded-lg">
                      <DollarSign className="w-6 h-6 text-yellow-600" />
                    </div>
                  </div>

                  {/* Card 4 */}
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex justify-between items-center">
                    <div>
                      <p className="text-xs text-gray-500 font-medium">Taxa Cancelamento</p>
                      <h3 className="text-2xl font-bold text-gray-900 mt-1">2.4%</h3>
                      <p className="text-xs text-gray-400 mt-1">Últimos 30 dias</p>
                    </div>
                    <div className="p-3 bg-red-50 rounded-lg">
                      <TrendingDown className="w-6 h-6 text-red-500" />
                    </div>
                  </div>
                </div>

                {/* Big Charts Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                   <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 h-64 flex flex-col">
                      <div className="flex items-center gap-2 mb-4">
                        <TrendingUp className="w-4 h-4 text-gray-400" />
                        <h4 className="font-semibold text-gray-700">Receita Mensal</h4>
                      </div>
                      <div className="flex-1 flex items-center justify-center flex-col gap-2 bg-gray-50 rounded border border-dashed border-gray-200">
                         <BarChart className="w-10 h-10 text-gray-300" />
                         <span className="text-sm text-gray-400">Gráfico de desempenho financeiro</span>
                      </div>
                   </div>

                   <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 h-64 flex flex-col">
                      <div className="flex items-center gap-2 mb-4">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <h4 className="font-semibold text-gray-700">Próximos Agendamentos</h4>
                      </div>
                      <div className="flex-1 flex items-center justify-center flex-col gap-2 bg-gray-50 rounded border border-dashed border-gray-200">
                         <Calendar className="w-10 h-10 text-gray-300" />
                         <span className="text-sm text-gray-400">Lista de agendamentos futuros</span>
                      </div>
                   </div>
                </div>

                 {/* Bottom Widgets */}
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-lg border border-gray-100 flex items-center justify-between">
                       <div>
                          <p className="text-xs text-gray-500">Serviços Ativos</p>
                          <p className="text-xl font-bold">8</p>
                       </div>
                       <div className="bg-purple-100 p-2 rounded text-purple-600">
                          <Briefcase size={20} />
                       </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-100 flex items-center justify-between">
                       <div>
                          <p className="text-xs text-gray-500">Profissionais</p>
                          <p className="text-xl font-bold">3</p>
                       </div>
                       <div className="bg-indigo-100 p-2 rounded text-indigo-600">
                          <Users size={20} />
                       </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-100 flex items-center justify-between">
                       <div>
                          <p className="text-xs text-gray-500">Total Clientes</p>
                          <p className="text-xl font-bold">142</p>
                       </div>
                       <div className="bg-pink-100 p-2 rounded text-pink-600">
                          <Users size={20} />
                       </div>
                    </div>
                 </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppPreview;