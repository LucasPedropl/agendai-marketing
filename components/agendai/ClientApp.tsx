import React, { useState } from 'react';
import { 
  Calendar as CalendarIcon, 
  Search, 
  Star, 
  MapPin, 
  Clock, 
  ArrowLeft, 
  Users, 
  ChevronRight, 
  ChevronLeft, 
  Briefcase, 
  DollarSign, 
  Calendar, 
  History, 
  Store 
} from 'lucide-react';
import { BookingData, Shop, Service, Professional } from './types';

// MOCK DATA
const SHOPS: Shop[] = [
  { id: 1, name: 'Pedro Barbearia', rating: 4.8, address: 'Rua das Flores, 123', img: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 2, name: 'Salão Beleza Pura', rating: 4.5, address: 'Av. Paulista, 2000', img: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 3, name: 'Estética Avançada', rating: 5.0, address: 'Rua Augusta, 500', img: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
];

const SERVICES: Service[] = [
  { id: 1, name: 'Corte de Cabelo', description: 'Corte tradicional ou degradê', price: 35.00, duration: '30 min' },
  { id: 2, name: 'Barba', description: 'Modelagem e toalha quente', price: 25.00, duration: '20 min' },
  { id: 3, name: 'Corte + Barba', description: 'Combo completo', price: 55.00, duration: '50 min' },
];

const PROS: Professional[] = [
  { id: 1, name: 'Pedro Mota', role: 'Barbeiro Master' },
  { id: 2, name: 'João Silva', role: 'Barbeiro' },
  { id: 3, name: 'Lucas Pereira', role: 'Barbeiro' },
];

const TIMES = ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00'];

type ClientStep = 'home' | 'services' | 'pros' | 'datetime' | 'confirm' | 'appointments';

export const ClientApp: React.FC = () => {
  const [clientStep, setClientStep] = useState<ClientStep>('home');
  const [bookingData, setBookingData] = useState<BookingData>({
    shop: null,
    service: null,
    pro: null,
    date: null,
    time: null
  });
  const [myAppointments, setMyAppointments] = useState<any[]>([]);

  // Generate calendar days for January 2026
  const generateDays = () => {
    // Starting Sunday 28th Dec 2025 to fill grid (example logic)
    const days = [];
    // Just filling 35 slots for the grid demo
    for (let i = 1; i <= 31; i++) {
        days.push(i);
    }
    return days;
  };

  const days = generateDays();

  const handleBook = () => {
    setMyAppointments([...myAppointments, { ...bookingData, status: 'Pendente', id: Math.random() }]);
    setClientStep('appointments');
  };

  const resetFlow = () => {
    setBookingData({ shop: null, service: null, pro: null, date: null, time: null });
    setClientStep('home');
  };

  const selectDate = (day: number) => {
      // Simulate formatting
      const dateStr = `${day < 10 ? '0' + day : day}/01/2026`;
      setBookingData({...bookingData, date: dateStr, time: null}); // Reset time when date changes
  };

  return (
    <div className="h-full flex flex-col w-full bg-gray-50">
        {/* APP CONTENT - Takes full height minus nav */}
        <div className="flex-1 overflow-y-auto relative scroll-smooth no-scrollbar">
            
            {/* 1. HOME - LIST OF SHOPS */}
            {clientStep === 'home' && (
                <div className="flex flex-col min-h-full">
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
                
                <div className="p-4 space-y-4 pb-20">
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
                <div className="flex flex-col min-h-full">
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
                    <div className="p-4 space-y-3 pb-20">
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
                <div className="flex flex-col min-h-full">
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
                    <div className="p-4 space-y-3 pb-20">
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
                <div className="flex flex-col min-h-full">
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

                    <div className="p-4 pb-20">
                    {/* Interactive Calendar */}
                    <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm mb-6">
                        <div className="flex justify-between items-center mb-4">
                            <button className="p-1 hover:bg-gray-100 rounded"><ChevronLeft className="w-4 h-4" /></button>
                            <div className="flex gap-2">
                                <span className="text-sm font-bold bg-gray-50 border border-gray-200 rounded px-2 py-1">Janeiro</span>
                                <span className="text-sm font-bold bg-gray-50 border border-gray-200 rounded px-2 py-1">2026</span>
                            </div>
                            <button className="p-1 hover:bg-gray-100 rounded"><ChevronRight className="w-4 h-4" /></button>
                        </div>
                        
                        <div className="grid grid-cols-7 gap-1 text-center mb-2">
                            {['D','S','T','Q','Q','S','S'].map((d, i) => <span key={i} className="text-xs text-gray-400 font-bold">{d}</span>)}
                        </div>
                        <div className="grid grid-cols-7 gap-1 text-center">
                            {[...Array(3).keys()].map(i => <span key={`empty-${i}`} className="p-2"></span>)}
                            {days.map(day => {
                                // Simple mock logic for date selection matching the string format
                                const dayStr = `${day < 10 ? '0' + day : day}/01/2026`;
                                const isSelected = bookingData.date === dayStr;
                                const isPast = day < 10; // Mock past dates disabled
                                
                                return (
                                <button 
                                    key={day} 
                                    disabled={isPast}
                                    onClick={() => selectDate(day)}
                                    className={`text-sm p-2 rounded-lg flex items-center justify-center transition-all
                                        ${isSelected ? 'bg-primary-600 text-white font-bold shadow-md transform scale-105' : 'text-gray-700 hover:bg-gray-100'}
                                        ${isPast ? 'text-gray-300 cursor-not-allowed' : 'cursor-pointer'}
                                    `}
                                >
                                    {day}
                                </button>
                                )
                            })}
                        </div>
                        <p className="text-[10px] text-gray-400 mt-4 text-center">* Sábados, domingos e datas passadas não estão disponíveis</p>
                    </div>

                    {bookingData.date && (
                        <div className="animate-fade-in">
                            <h3 className="font-medium text-gray-900 mb-2">Horários disponíveis</h3>
                            <p className="text-xs text-gray-500 mb-3">Data selecionada: <span className="font-bold text-gray-800">{bookingData.date}</span></p>
                            
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
                        </div>
                    )}

                    <div className="flex justify-between items-center mt-4">
                        <button onClick={() => setClientStep('pros')} className="text-sm text-gray-500 hover:text-gray-900 flex items-center gap-1">
                            <ChevronLeft className="w-4 h-4" /> Voltar
                        </button>
                        <button 
                            disabled={!bookingData.time || !bookingData.date}
                            onClick={() => setClientStep('confirm')}
                            className={`px-6 py-2 rounded-lg text-sm font-bold text-white transition-colors ${bookingData.time && bookingData.date ? 'bg-slate-800 hover:bg-slate-900 cursor-pointer shadow-lg' : 'bg-gray-300 cursor-not-allowed'}`}
                        >
                            Continuar
                        </button>
                    </div>
                    </div>
                </div>
            )}

            {/* 5. CONFIRMATION */}
            {clientStep === 'confirm' && (
                <div className="flex flex-col min-h-full">
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

                    <div className="p-4 flex flex-col justify-center pb-20">
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

                    <div className="p-4 bg-white border-t border-gray-100 flex justify-between items-center mt-auto sticky bottom-0 z-10">
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
                <div className="flex flex-col min-h-full">
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

                    <div className="flex gap-2 mt-4 overflow-x-auto pb-1 no-scrollbar">
                        <button className="px-4 py-1.5 bg-primary-600 text-white text-xs font-medium rounded-full whitespace-nowrap">Todos</button>
                        <button className="px-4 py-1.5 bg-white border border-gray-200 text-gray-600 text-xs font-medium rounded-full whitespace-nowrap">Pendentes</button>
                        <button className="px-4 py-1.5 bg-white border border-gray-200 text-gray-600 text-xs font-medium rounded-full whitespace-nowrap">Confirmados</button>
                    </div>
                    </div>

                    <div className="p-4 space-y-3 pb-20">
                    {myAppointments.length > 0 ? (
                        myAppointments.map((appt: any) => (
                            <div key={appt.id} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm relative overflow-hidden animate-fade-in">
                                <div className="absolute top-0 right-0 bg-yellow-100 text-yellow-700 text-[10px] font-bold px-2 py-1 rounded-bl-lg">
                                PENDENTE
                                </div>
                                <div className="flex gap-4">
                                <div className="w-12 h-12 bg-gray-100 rounded-lg flex flex-col items-center justify-center shrink-0">
                                    <span className="text-[10px] font-bold text-gray-500 uppercase">JAN</span>
                                    <span className="text-lg font-bold text-gray-900">{appt.date ? appt.date.split('/')[0] : '12'}</span>
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
        </div>

        {/* Bottom Nav - Fixed at bottom of the flex container */}
        <div className="bg-white border-t border-gray-100 p-3 flex justify-around items-center z-20 shrink-0">
            <div className={`flex flex-col items-center gap-1 cursor-pointer ${['home', 'services', 'pros', 'datetime', 'confirm'].includes(clientStep) ? 'text-primary-600' : 'text-gray-400'}`} onClick={() => setClientStep('home')}>
                <CalendarIcon size={20} />
                <span className="text-[10px] font-medium">Início</span>
            </div>
            <div className={`flex flex-col items-center gap-1 cursor-pointer ${clientStep === 'appointments' ? 'text-primary-600' : 'text-gray-400'}`} onClick={() => clientStep !== 'appointments' && myAppointments.length > 0 && setClientStep('appointments')}>
                <DollarSign size={20} className="rotate-12" />
                <span className="text-[10px] font-medium">Agendamentos</span>
            </div>
            <div className="flex flex-col items-center gap-1 text-gray-400 cursor-pointer">
                <History size={20} />
                <span className="text-[10px] font-medium">Histórico</span>
            </div>
            <div className="flex flex-col items-center gap-1 text-gray-400 cursor-pointer">
                <Store size={20} />
                <span className="text-[10px] font-medium">Menu</span>
            </div>
        </div>
    </div>
  );
};
