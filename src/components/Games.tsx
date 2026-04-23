import { motion } from 'motion/react';
import { Game } from '../types';

interface GameCardProps {
  game: Game;
  onClick: (game: Game) => void;
}

export const GameCard = ({ game, onClick }: GameCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onClick(game)}
      className="group relative cursor-pointer overflow-hidden rounded-2xl bg-[#121218] border border-white/5 p-5 transition-all hover:border-cyan-500/40 flex flex-col justify-between"
    >
      <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-20 transition-opacity">
         <div 
          className="w-16 h-16 rounded-full blur-2xl" 
          style={{ backgroundColor: game.color }}
        />
      </div>
      
      <div>
        <div className="w-14 h-14 bg-white/5 rounded-xl mb-4 flex items-center justify-center text-2xl border border-white/5">
          {game.icon}
        </div>
        <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
          {game.name}
        </h3>
        <p className="text-xs text-slate-500 mt-1 uppercase tracking-wider font-semibold">
          {game.category}
        </p>
      </div>

      <div className="flex justify-between items-end mt-8">
        <span className="text-[9px] font-mono text-slate-400 uppercase tracking-[0.2em] font-bold">
          Instant Delivery
        </span>
        <button className="px-4 py-1.5 bg-white/5 hover:bg-cyan-600 text-white text-[10px] font-bold rounded-lg transition-all border border-white/10 group-hover:border-cyan-500/50">
          Top Up
        </button>
      </div>
    </motion.div>
  );
};

export const GameList = ({ games, onSelect }: { games: Game[], onSelect: (game: Game) => void }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {games.map((game) => (
        <GameCard key={game.id} game={game} onClick={onSelect} />
      ))}
    </div>
  );
};
