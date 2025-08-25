import React, { useState } from 'react';
import { Heart, Star, Sparkles } from 'lucide-react';

function App() {
  const [liked, setLiked] = useState(false);
  const [stars, setStars] = useState(0);
  const [sparkles, setSparkles] = useState(false);

  const handleSpark = () => {
    setSparkles(true);
    setTimeout(() => setSparkles(false), 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-800 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20 max-w-md w-full">
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-bold text-white mb-2">
            Test Rapide ✨
          </h1>
          
          <p className="text-white/80 text-lg">
            Une petite démo interactive
          </p>

          <div className="flex justify-center space-x-4">
            <button
              onClick={() => setLiked(!liked)}
              className={`p-4 rounded-full transition-all duration-300 transform hover:scale-110 ${
                liked 
                  ? 'bg-red-500 text-white shadow-lg shadow-red-500/50' 
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              <Heart 
                size={24} 
                fill={liked ? 'currentColor' : 'none'} 
                className="transition-all duration-300"
              />
            </button>

            <button
              onClick={() => setStars(s => s + 1)}
              className="p-4 rounded-full bg-yellow-500 text-white transition-all duration-300 transform hover:scale-110 shadow-lg shadow-yellow-500/50"
            >
              <Star size={24} fill="currentColor" />
            </button>

            <button
              onClick={handleSpark}
              className={`p-4 rounded-full bg-purple-500 text-white transition-all duration-300 transform hover:scale-110 shadow-lg shadow-purple-500/50 ${
                sparkles ? 'animate-spin' : ''
              }`}
            >
              <Sparkles size={24} fill="currentColor" />
            </button>
          </div>

          <div className="space-y-3">
            {liked && (
              <div className="bg-red-500/20 rounded-lg p-3 animate-pulse">
                <p className="text-white">💖 Merci pour le like !</p>
              </div>
            )}
            
            {stars > 0 && (
              <div className="bg-yellow-500/20 rounded-lg p-3">
                <p className="text-white">
                  ⭐ {stars} étoile{stars > 1 ? 's' : ''} !
                </p>
              </div>
            )}
            
            {sparkles && (
              <div className="bg-purple-500/20 rounded-lg p-3 animate-bounce">
                <p className="text-white">✨ Sparkles activées !</p>
              </div>
            )}
          </div>

          <div className="pt-4 border-t border-white/20">
            <p className="text-white/60 text-sm">
              Test réalisé avec React + Tailwind + Lucide
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;