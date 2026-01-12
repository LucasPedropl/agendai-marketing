import React, { useState } from 'react';
import { LayoutDashboard, Users } from 'lucide-react';
import { NotebookFrame, PhoneFrame } from './agendai/DeviceFrames';
import { BusinessDashboard } from './agendai/BusinessDashboard';
import { ClientApp } from './agendai/ClientApp';

const AppPreview: React.FC = () => {
  const [viewMode, setViewMode] = useState<'business' | 'client'>('business');

  return (
    <div id="preview" className="bg-slate-50 py-16 sm:py-24 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-base font-semibold text-primary-600 tracking-wide uppercase">Visão Completa</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Duas experiências, em uma plataforma
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
              {/* DESKTOP VIEW */}
              <NotebookFrame>
                <BusinessDashboard />
              </NotebookFrame>

              {/* MOBILE VIEW MOCKUP FOR BUSINESS */}
              <div className="lg:hidden">
                 <PhoneFrame>
                    <div className="flex items-center justify-center h-full text-gray-400 text-sm p-8 text-center bg-gray-50">
                        A visualização do painel administrativo é melhor em telas maiores (desktop).
                    </div>
                 </PhoneFrame>
              </div>
            </>
          ) : (
            /* CLIENT APP FLOW */
            <PhoneFrame>
               <ClientApp />
            </PhoneFrame>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppPreview;