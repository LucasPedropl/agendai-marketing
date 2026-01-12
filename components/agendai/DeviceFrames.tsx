import React from 'react';
import { Lock } from 'lucide-react';

interface NotebookFrameProps {
  children: React.ReactNode;
}

export const NotebookFrame: React.FC<NotebookFrameProps> = ({ children }) => {
  return (
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

            {/* App Content Container */}
            <div className="flex flex-1 overflow-hidden relative">
                {children}
            </div>
          </div>
        </div>

        {/* Chin Logo */}
        <div className="h-8 w-full flex items-center justify-center bg-[#1a1a1a]">
          <span className="text-[10px] font-bold text-gray-500 tracking-[0.2em] uppercase opacity-50">AgendaAi</span>
        </div>

        {/* Keyboard Deck */}
        <div className="relative mx-auto bg-[#262626] h-[24px] w-[104%] -ml-[2%] rounded-b-xl shadow-2xl flex justify-center items-start border-t border-[#333] z-0">
          <div className="w-1/3 h-[12px] bg-[#222] border-t border-r border-l border-white/5 rounded-b-md mt-0"></div>
        </div>

        {/* Bottom Base Shadow */}
        <div className="mx-auto bg-black/20 h-[10px] w-[98%] blur-md rounded-[50%] mt-1"></div>
      </div>
    </div>
  );
};

interface PhoneFrameProps {
  children: React.ReactNode;
}

export const PhoneFrame: React.FC<PhoneFrameProps> = ({ children }) => {
  return (
    <div className="relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[700px] w-[340px] shadow-xl animate-fade-in flex flex-col overflow-hidden">
      {/* Notch */}
      <div className="h-[32px] w-[140px] bg-gray-800 absolute left-1/2 -translate-x-1/2 top-0 rounded-b-xl z-20"></div>

      <div className="bg-white flex-1 overflow-hidden relative font-sans flex flex-col">
        {/* Status Bar */}
        <div className="h-6 bg-white flex justify-between items-center px-6 text-[10px] font-bold text-gray-800 z-10 relative mt-1 shrink-0 border-b border-gray-50">
          <span>9:41</span>
          <div className="flex items-center gap-1">
            <div className="h-2 w-2 bg-black rounded-full"></div>
            <div className="h-2 w-3 bg-black rounded-sm"></div>
          </div>
        </div>

        {/* Screen Content */}
        <div className="flex-1 flex flex-col overflow-hidden bg-gray-50">
            {children}
        </div>
      </div>
    </div>
  );
};
