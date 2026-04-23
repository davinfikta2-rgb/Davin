import { useState } from 'react';
import { motion } from 'motion/react';
import { Game, TopUpItem, PaymentMethod } from '../types';
import { PAYMENT_METHODS } from '../constants';
import { CheckCircle2, ChevronLeft, Info, User, Zap } from 'lucide-react';

interface TopUpFormProps {
  game: Game;
  onBack: () => void;
}

export const TopUpForm = ({ game, onBack }: TopUpFormProps) => {
  const [selectedItem, setSelectedItem] = useState<TopUpItem | null>(null);
  const [selectedPayment, setSelectedPayment] = useState<PaymentMethod | null>(null);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (id: string, value: string) => {
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleOrder = () => {
    if (selectedItem && selectedPayment && Object.keys(formData).length >= game.fields.length) {
      setIsSuccess(true);
    } else {
      alert('Please complete all data, item, and payment method selection.');
    }
  };

  if (isSuccess) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md mx-auto py-24 text-center px-6"
      >
        <div className="bg-cyan-500/10 text-cyan-400 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 border border-cyan-500/20">
          <CheckCircle2 className="w-12 h-12" />
        </div>
        <h2 className="text-3xl font-light text-white mb-4 tracking-tight">Order <span className="font-serif-italic text-cyan-400">Successfully</span> Placed</h2>
        <p className="text-slate-500 mb-10 leading-relaxed font-medium">
          Thank you {formData[game.fields[0].id]}! Your order for {selectedItem?.name} in {game.name} is being processed. 
          Average delivery time: <span className="text-cyan-400">45 seconds</span>.
        </p>
        <button 
          onClick={onBack}
          className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-10 py-4 rounded-full font-bold transition-all"
        >
          Return to Hub
        </button>
      </motion.div>
    );
  }

  return (
    <div className="px-6 md:px-10 py-12 lg:py-16">
      <button 
        onClick={onBack}
        className="flex items-center text-slate-500 hover:text-white mb-10 transition-colors group font-bold text-xs uppercase tracking-widest"
      >
        <ChevronLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
        Back to Hub
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Col: Game Sidebar */}
        <div className="lg:col-span-4 space-y-8">
          <div className="bg-[#121218] border border-white/5 rounded-2xl overflow-hidden shadow-2xl">
            <div className="relative h-40">
              <img src={game.banner} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121218] to-[#121218]/20" />
              <div className="absolute bottom-6 left-6 text-4xl">{game.icon}</div>
            </div>
            <div className="p-8">
              <h1 className="text-3xl font-light text-white mb-2 tracking-tight">
                {game.name} <span className="font-serif-italic text-cyan-400">Refill</span>
              </h1>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">
                {game.description}
              </p>
              
              <div className="space-y-6 pt-6 border-t border-white/5">
                <div className="flex items-center gap-2 text-cyan-500 mb-2 font-bold text-[10px] uppercase tracking-[0.2em]">
                  <User className="w-3 h-3" />
                  Account Identification
                </div>
                {game.fields.map(field => (
                  <div key={field.id} className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block ml-1">
                      {field.label}
                    </label>
                    <input 
                      type={field.type}
                      placeholder={field.placeholder}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/50 transition-colors text-sm"
                      onChange={(e) => handleInputChange(field.id, e.target.value)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="bg-cyan-500/5 border border-cyan-500/10 rounded-xl p-5 flex gap-4">
             <Info className="w-5 h-5 text-cyan-400 shrink-0" />
             <p className="text-xs text-slate-500 leading-relaxed font-medium">
               Ensure your <span className="text-slate-300">Player ID</span> is correct. Digital assets are non-refundable once the transaction is finalized.
             </p>
          </div>
        </div>

        {/* Right Cols: Items & Payment */}
        <div className="lg:col-span-8 space-y-12">
          {/* Item Selection */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <span className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center font-serif-italic text-cyan-400 text-xl italic bg-[#0e0e12]">1</span>
              <h2 className="text-2xl font-light text-white tracking-tight uppercase">Select <span className="font-serif-italic lowercase text-cyan-400 italic">amount</span></h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {game.items.map(item => (
                <div
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  className={`relative cursor-pointer p-6 rounded-2xl border transition-all ${
                    selectedItem?.id === item.id 
                    ? 'bg-cyan-500/10 border-cyan-500 shadow-xl shadow-cyan-500/5' 
                    : 'bg-[#121218] border-white/5 hover:border-white/10'
                  }`}
                >
                  <div className="font-bold text-lg text-white mb-1 tracking-tight">{item.name}</div>
                  <div className="text-xs font-mono text-cyan-500">
                    RP {item.price.toLocaleString()}
                  </div>
                  {item.discount && (
                    <div className="absolute top-4 right-4 bg-red-500/10 text-red-500 text-[8px] font-black px-2 py-0.5 rounded border border-red-500/20 uppercase tracking-widest">
                      {item.discount}
                    </div>
                  )}
                  {selectedItem?.id === item.id && (
                    <CheckCircle2 className="absolute -top-2 -right-2 w-6 h-6 text-cyan-500 bg-[#0a0a0c] rounded-full p-0.5" />
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Payment Selection */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <span className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center font-serif-italic text-cyan-400 text-xl italic bg-[#0e0e12]">2</span>
              <h2 className="text-2xl font-light text-white tracking-tight uppercase">Payment <span className="font-serif-italic lowercase text-cyan-400 italic">gateway</span></h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PAYMENT_METHODS.map(method => (
                <div
                  key={method.id}
                  onClick={() => setSelectedPayment(method)}
                  className={`flex items-center justify-between p-5 rounded-2xl border cursor-pointer transition-all ${
                    selectedPayment?.id === method.id 
                    ? 'bg-cyan-500/10 border-cyan-500' 
                    : 'bg-[#121218] border-white/5 hover:border-white/10'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-8 bg-white/5 border border-white/5 rounded-lg flex items-center justify-center text-[10px] font-black text-slate-400">
                       {method.image}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">{method.name}</div>
                      <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">+ RP {method.fee} Fee</div>
                    </div>
                  </div>
                  {selectedPayment?.id === method.id && <CheckCircle2 className="w-5 h-5 text-cyan-500" />}
                </div>
              ))}
            </div>
          </section>

          {/* Checkout Bar */}
          <div className="bg-[#0e0e12] border border-white/5 rounded-3xl p-8 sticky bottom-8 shadow-2xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-500 font-black uppercase tracking-[0.3em] mb-2 leading-none">Checkout Amount</span>
                <div className="text-4xl font-light text-white tracking-tighter leading-none">
                  RP <span className="font-bold">{((selectedItem?.price || 0) + (selectedPayment?.fee || 0)).toLocaleString()}</span>
                </div>
              </div>
              <button 
                onClick={handleOrder}
                disabled={!selectedItem || !selectedPayment}
                className={`w-full md:w-auto px-16 py-5 rounded-full font-bold text-sm uppercase tracking-[0.2em] transition-all transform active:scale-95 ${
                  selectedItem && selectedPayment 
                  ? 'bg-cyan-600 hover:bg-cyan-500 text-white shadow-xl shadow-cyan-600/20' 
                  : 'bg-white/5 text-slate-600 cursor-not-allowed border border-white/5'
                }`}
              >
                Execute Transaction
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
