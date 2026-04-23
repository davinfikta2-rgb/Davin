import { Gamepad2, Search, User, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface NavbarProps {
  onHome: () => void;
}

export const Navbar = ({ onHome }: NavbarProps) => {
  return (
    <nav className="flex items-center justify-between px-6 md:px-10 py-6 border-b border-white/5 bg-[#0e0e12] sticky top-0 z-50">
      <div className="flex items-center gap-3 cursor-pointer" onClick={onHome}>
        <div className="w-10 h-10 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center font-bold text-white text-xl shadow-lg shadow-cyan-500/20">
          D
        </div>
        <div>
          <h1 className="text-lg font-bold tracking-tight text-white leading-none">Davin 11 TKJ 1</h1>
          <p className="text-[10px] text-cyan-500 uppercase tracking-widest font-semibold mt-1">Elite Game Store</p>
        </div>
      </div>
      
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
        <a href="#" onClick={(e) => { e.preventDefault(); onHome(); }} className="text-white border-b-2 border-cyan-500 pb-1">Home</a>
        <a href="#" className="hover:text-white transition-colors">Our Games</a>
        <a href="#" className="hover:text-white transition-colors">Order Tracker</a>
        <a href="#" className="hover:text-white transition-colors">Promotions</a>
      </div>

      <div className="flex items-center gap-4">
        <button className="hidden sm:block px-6 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-sm font-semibold transition-all text-slate-300">
          Support Center
        </button>
        <button className="p-2 text-slate-400 hover:text-white transition-colors">
          <User className="w-5 h-5" />
        </button>
      </div>
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer className="px-6 md:px-10 py-8 border-t border-white/5 bg-[#0e0e12] flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex flex-col md:flex-row items-center gap-6 w-full md:w-auto">
        <div className="flex items-center gap-4">
          <span className="text-xs text-slate-500 uppercase tracking-widest font-bold">Quick Order Track</span>
          <div className="relative">
            <input 
              type="text" 
              placeholder="Enter Transaction ID..." 
              className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-xs w-full sm:w-64 focus:outline-none focus:border-cyan-500 transition-colors"
            />
            <button className="absolute right-2 top-1.5 text-slate-400 hover:text-white">
              <Search className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex gap-6 items-center">
        <div className="flex flex-col items-end">
          <span className="text-[10px] text-slate-500 uppercase tracking-tighter">Total Completed Orders</span>
          <span className="text-lg font-bold text-white leading-none">12,490+</span>
        </div>
        <div className="w-px h-10 bg-white/10 hidden sm:block"></div>
        <div className="flex flex-col items-end">
          <span className="text-[10px] text-slate-500 uppercase tracking-tighter">Average Delivery</span>
          <span className="text-lg font-bold text-cyan-400 leading-none">45 Sec</span>
        </div>
      </div>
    </footer>
  );
};
