import { useState, useEffect } from 'react';
import { Navbar, Footer } from './components/Layout';
import { Hero } from './components/Hero';
import { GameList } from './components/Games';
import { TopUpForm } from './components/TopUpForm';
import { GAMES } from './constants';
import { Game } from './types';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);

  // Scroll to top when switching views
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selectedGame]);

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0c] selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar onHome={() => setSelectedGame(null)} />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {!selectedGame ? (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Hero />
              <div className="px-6 md:px-10 pb-24">
                <div className="mb-10">
                  <h2 className="text-3xl font-light text-white mb-2 tracking-tight">
                    Elite <span className="font-serif-italic text-cyan-400 italic">Game Selection</span>
                  </h2>
                  <p className="text-slate-500 text-sm font-medium">Choose your platform to begin the instant refill process.</p>
                </div>
                <GameList games={GAMES} onSelect={setSelectedGame} />
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="topup"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <TopUpForm game={selectedGame} onBack={() => setSelectedGame(null)} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
