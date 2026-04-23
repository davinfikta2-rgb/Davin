import { motion } from 'motion/react';
import { Target, Zap, ShieldCheck, ZapIcon } from 'lucide-react';

export const Hero = () => {
  return (
    <div className="relative overflow-hidden px-6 md:px-10 pt-16 pb-12 lg:pt-20 lg:pb-16 bg-[#0a0a0c]">
      <div className="max-w-4xl">
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           animate={{ opacity: 1, x: 0 }}
           className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6"
        >
          <Zap className="w-3 h-3 text-cyan-400 focus:fill-cyan-400" />
          <span className="text-[10px] font-black text-cyan-400 uppercase tracking-[0.2em]">Verified Partner</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-6 tracking-tight leading-[1.1]"
        >
          All Game <span className="font-serif-italic text-cyan-400">Top-Up</span> Hub <br />
          for the Elite Player.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base md:text-lg text-slate-500 max-w-xl mb-10 leading-relaxed font-medium"
        >
          Reliable, instant delivery for your favorite digital currencies and game items. 
          Secure transactions guaranteed with multi-layered protection.
        </motion.p>

        <div className="flex flex-wrap gap-4">
           {[
             { title: '12k+', desc: 'Happy Users' },
             { title: '45s', desc: 'Avg Delivery', color: 'text-cyan-400' },
             { title: '24/7', desc: 'Active Support' }
           ].map((item, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ delay: 0.4 + (i * 0.1) }}
               className="flex flex-col items-start pr-8 border-r border-white/5 last:border-0"
             >
               <span className={`text-2xl font-bold ${item.color || 'text-white'}`}>{item.title}</span>
               <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">{item.desc}</span>
             </motion.div>
           ))}
        </div>
      </div>
      
      {/* Background Graphic Element */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[50%] h-[80%] opacity-20 pointer-events-none hidden lg:block">
        <div className="absolute top-0 right-0 w-full h-full bg-cyan-500/10 rounded-full blur-[120px]" />
      </div>
    </div>
  );
};
