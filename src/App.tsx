@@ .. @@
import React, { useState } from 'react';
-import { Heart, Star, Sparkles } from 'lucide-react';
+import { Heart, Star, Sparkles, Zap } from 'lucide-react';

function App() {
  const [liked, setLiked] = useState(false);
  const [stars, setStars] = useState(0);
  const [sparkles, setSparkles] = useState(false);
+  const [energy, setEnergy] = useState(0);

  const handleSpark = () => {
    setSparkles(true);
    setTimeout(() => setSparkles(false), 1000);
  };

+  const handleEnergy = () => {
+    setEnergy(e => e + 10);
+  };

  return (
@@ .. @@
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
+
+            <button
+              onClick={handleEnergy}
+              className="p-4 rounded-full bg-green-500 text-white transition-all duration-300 transform hover:scale-110 shadow-lg shadow-green-500/50 hover:animate-pulse"
+            >
+              <Zap size={24} fill="currentColor" />
+            </button>
          </div>

          <div className="space-y-3">
@@ .. @@
            {sparkles && (
              <div className="bg-purple-500/20 rounded-lg p-3 animate-bounce">
                <p className="text-white">✨ Sparkles activées !</p>
              </div>
            )}
+            
+            {energy > 0 && (
+              <div className="bg-green-500/20 rounded-lg p-3">
+                <p className="text-white">
+                  ⚡ Énergie : {energy}%
+                </p>
+              </div>
+            )}
          </div>
@@ .. @@