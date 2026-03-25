/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Droplets, 
  Zap, 
  MapPin, 
  Search, 
  ChevronRight, 
  ChevronLeft, 
  Sparkles, 
  Moon, 
  Sun, 
  History,
  ShoppingCart,
  Menu,
  X
} from 'lucide-react';
import { PRODUCTS, Product } from './types.ts';

// --- Components ---

const Navbar = ({ 
  isZero, 
  setIsZero, 
  isNewstalgia, 
  setIsNewstalgia 
}: { 
  isZero: boolean; 
  setIsZero: (v: boolean) => void; 
  isNewstalgia: boolean; 
  setIsNewstalgia: (v: boolean) => void; 
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isZero ? 'bg-zero-black text-white' : 'bg-maroon text-white'} shadow-xl`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-maroon font-display font-black text-2xl shadow-inner">
              DP
            </div>
            <span className="font-display text-2xl font-black tracking-tighter uppercase">Dr Pepper <span className="text-crimson">2026</span></span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#flavors" className="hover:text-crimson transition-colors font-medium">Flavors</a>
            <a href="#quiz" className="hover:text-crimson transition-colors font-medium">Flavor Finder</a>
            <a href="#locator" className="hover:text-crimson transition-colors font-medium">Where to Buy</a>
            
            <div className="flex items-center gap-4 ml-4 border-l border-white/20 pl-4">
              <button 
                onClick={() => setIsZero(!isZero)}
                className={`flex items-center gap-2 px-3 py-1 rounded-full border transition-all ${isZero ? 'bg-white text-black border-white' : 'border-white/40 hover:border-white'}`}
              >
                {isZero ? <Zap className="w-4 h-4" /> : <Droplets className="w-4 h-4" />}
                <span className="text-xs font-bold uppercase tracking-widest">{isZero ? 'Zero Mode' : 'Sugar Mode'}</span>
              </button>

              <button 
                onClick={() => setIsNewstalgia(!isNewstalgia)}
                className={`p-2 rounded-full border transition-all ${isNewstalgia ? 'bg-yellow-100 text-maroon border-yellow-100' : 'border-white/40 hover:border-white'}`}
                title="Newstalgia Mode"
              >
                <History className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-maroon border-t border-white/10"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              <a href="#flavors" className="block text-lg font-medium">Flavors</a>
              <a href="#quiz" className="block text-lg font-medium">Flavor Finder</a>
              <a href="#locator" className="block text-lg font-medium">Where to Buy</a>
              <div className="flex gap-4 pt-4">
                <button onClick={() => setIsZero(!isZero)} className="flex-1 py-3 border border-white/40 rounded-lg flex items-center justify-center gap-2">
                  {isZero ? <Zap className="w-4 h-4" /> : <Droplets className="w-4 h-4" />}
                  {isZero ? 'Zero Mode' : 'Sugar Mode'}
                </button>
                <button onClick={() => setIsNewstalgia(!isNewstalgia)} className="p-3 border border-white/40 rounded-lg">
                  <History className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ isZero }: { isZero: boolean }) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video Placeholder */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/drpepperhero/1920/1080?blur=2" 
          alt="Hero Background" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className={`absolute inset-0 ${isZero ? 'bg-black/60' : 'bg-maroon/40'} mix-blend-multiply`}></div>
      </div>

      {/* Bubbles */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i} 
            className="bubble" 
            style={{ 
              left: `${Math.random() * 100}%`, 
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 20 + 5}px`,
              height: `${Math.random() * 20 + 5}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 5 + 5}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-20 text-center px-4">
        <motion.h1 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-9xl font-black text-white uppercase tracking-tighter leading-none mb-6"
        >
          Liquid <br /> <span className="text-crimson">Leadership</span>
        </motion.h1>
        <motion.p 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-10 font-medium"
        >
          The 2026 flavor drops are here. Explore the complexity of the original 23, reimagined for a new era.
        </motion.p>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a 
            href="#flavors" 
            className="px-10 py-5 bg-crimson text-white rounded-full font-black uppercase tracking-widest hover:bg-white hover:text-maroon transition-all transform hover:scale-105 shadow-2xl"
          >
            Find Your Flavor
          </a>
          <a 
            href="#quiz" 
            className="px-10 py-5 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full font-black uppercase tracking-widest hover:bg-white/20 transition-all"
          >
            Take the Quiz
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const InnovationCarousel = ({ isZero }: { isZero: boolean }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const filteredProducts = PRODUCTS.filter(p => isZero ? p.isZero : !p.isZero);

  const next = () => setCurrentIndex((prev) => (prev + 1) % filteredProducts.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + filteredProducts.length) % filteredProducts.length);

  return (
    <section id="flavors" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-5xl md:text-7xl font-black text-maroon uppercase tracking-tighter mb-4">
              Innovation <br /> <span className="text-crimson">Carousel</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-xl">
              Discover the limited edition 2026 lineup. Each flavor is a masterpiece of carbonated art.
            </p>
          </div>
          <div className="flex gap-4">
            <button onClick={prev} className="p-4 rounded-full border-2 border-maroon text-maroon hover:bg-maroon hover:text-white transition-all">
              <ChevronLeft />
            </button>
            <button onClick={next} className="p-4 rounded-full border-2 border-maroon text-maroon hover:bg-maroon hover:text-white transition-all">
              <ChevronRight />
            </button>
          </div>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentIndex + (isZero ? 'zero' : 'sugar')}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            >
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl group">
                <img 
                  src={filteredProducts[currentIndex].image} 
                  alt={filteredProducts[currentIndex].name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8">
                  <span className="px-4 py-1 bg-crimson text-white text-xs font-bold uppercase tracking-widest rounded-full mb-2 inline-block">
                    {isZero ? 'Zero Sugar' : 'Classic'}
                  </span>
                  <h3 className="text-4xl font-black text-white uppercase">{filteredProducts[currentIndex].name}</h3>
                </div>
              </div>

              <div className="space-y-8">
                <div className="space-y-4">
                  <h4 className="text-2xl font-black text-maroon uppercase tracking-tight">The Profile</h4>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    {filteredProducts[currentIndex].description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-1">Complexity</span>
                    <span className="text-2xl font-black text-maroon">23 Flavors</span>
                  </div>
                  <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-1">Vibe</span>
                    <span className="text-2xl font-black text-maroon">Newstalgia</span>
                  </div>
                </div>

                <button className="w-full py-5 bg-maroon text-white rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-crimson transition-all shadow-lg group">
                  <ShoppingCart className="w-5 h-5 group-hover:animate-bounce" />
                  Add to Cart
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const Flavors23 = () => {
  const [hoveredFlavor, setHoveredFlavor] = useState<number | null>(null);
  const flavors = [
    "Amaretto", "Almond", "Blackberry", "Black Licorice", "Caramel", "Carrot", "Clove", "Cherry", 
    "Cola", "Ginger", "Juniper", "Lemon", "Molasses", "Nutmeg", "Orange", "Prune", 
    "Plum", "Pepper", "Root Beer", "Rum", "Raspberry", "Tomato", "Vanilla"
  ];

  return (
    <section className="py-24 bg-maroon text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-6">
            The <span className="text-crimson">23</span> Blend
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Hover to explore the secret complexity that makes Dr Pepper unique.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {flavors.map((flavor, i) => (
            <motion.div
              key={flavor}
              onMouseEnter={() => setHoveredFlavor(i)}
              onMouseLeave={() => setHoveredFlavor(null)}
              whileHover={{ scale: 1.1, rotate: Math.random() * 10 - 5 }}
              className={`px-6 py-3 rounded-full border-2 transition-all cursor-default ${
                hoveredFlavor === i ? 'bg-white text-maroon border-white' : 'border-white/20 text-white/60'
              }`}
            >
              <span className="font-display font-bold uppercase text-sm tracking-widest">{flavor}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FlavorFinder = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<Product | null>(null);

  const questions = [
    {
      q: "What's your flavor profile?",
      options: [
        { label: "Sweet & Creamy", val: "sweet" },
        { label: "Tart & Bold", val: "tart" }
      ]
    },
    {
      q: "When do you crave a Pepper?",
      options: [
        { label: "Morning Boost", val: "morning" },
        { label: "Nighttime Chill", val: "night" }
      ]
    },
    {
      q: "What's your aesthetic?",
      options: [
        { label: "Classic Newstalgia", val: "classic" },
        { label: "Modern Edge", val: "modern" }
      ]
    }
  ];

  const handleAnswer = (val: string) => {
    const newAnswers = [...answers, val];
    setAnswers(newAnswers);
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      // Simple logic to pick a product
      const randomProduct = PRODUCTS[Math.floor(Math.random() * PRODUCTS.length)];
      setResult(randomProduct);
    }
  };

  const reset = () => {
    setStep(0);
    setAnswers([]);
    setResult(null);
  };

  return (
    <section id="quiz" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-50 rounded-[3rem] p-12 md:p-20 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-10">
            <Sparkles className="w-32 h-32 text-maroon" />
          </div>

          {!result ? (
            <div className="relative z-10">
              <span className="text-crimson font-black uppercase tracking-widest text-sm mb-4 block">
                Step {step + 1} of {questions.length}
              </span>
              <h2 className="text-4xl md:text-6xl font-black text-maroon uppercase tracking-tighter mb-12">
                {questions[step].q}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {questions[step].options.map((opt) => (
                  <button
                    key={opt.val}
                    onClick={() => handleAnswer(opt.val)}
                    className="p-8 bg-white border-4 border-transparent hover:border-crimson rounded-3xl text-2xl font-black text-maroon uppercase transition-all shadow-lg hover:shadow-xl text-left"
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center relative z-10"
            >
              <h2 className="text-3xl font-black text-gray-400 uppercase tracking-widest mb-4">Your Perfect Match</h2>
              <h3 className="text-6xl md:text-8xl font-black text-maroon uppercase tracking-tighter mb-8 leading-none">
                {result.name}
              </h3>
              <div className="w-64 h-96 mx-auto rounded-3xl overflow-hidden shadow-2xl mb-10">
                <img src={result.image} alt={result.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-10 py-5 bg-maroon text-white rounded-full font-black uppercase tracking-widest hover:bg-crimson transition-all shadow-lg">
                  Buy Now
                </button>
                <button onClick={reset} className="px-10 py-5 border-2 border-maroon text-maroon rounded-full font-black uppercase tracking-widest hover:bg-maroon hover:text-white transition-all">
                  Try Again
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

const Footer = ({ isZero }: { isZero: boolean }) => {
  const [location, setLocation] = useState<string>('Detecting...');

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        () => setLocation('New York, NY (Simulated)'),
        () => setLocation('Location Access Denied')
      );
    }
  }, []);

  return (
    <footer id="locator" className={`py-20 ${isZero ? 'bg-zero-black text-white' : 'bg-maroon text-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-maroon font-display font-black text-xl">
                DP
              </div>
              <span className="font-display text-xl font-black tracking-tighter uppercase">Dr Pepper 2026</span>
            </div>
            <p className="text-white/60 leading-relaxed">
              Leading the flavor revolution since 1885. Reimagined for the carbonated future of 2026.
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="text-xl font-black uppercase tracking-widest">Where to Buy</h4>
            <div className="relative">
              <input 
                type="text" 
                placeholder="Enter Zip Code" 
                className="w-full bg-white/10 border border-white/20 rounded-xl py-4 px-6 focus:outline-none focus:border-crimson transition-all"
              />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white">
                <Search className="w-5 h-5" />
              </button>
            </div>
            <div className="flex items-center gap-2 text-sm text-white/50">
              <MapPin className="w-4 h-4" />
              <span>Nearest: {location}</span>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-xl font-black uppercase tracking-widest">Connect</h4>
            <div className="flex gap-4">
              {['TikTok', 'Instagram', 'X', 'YouTube'].map(social => (
                <a key={social} href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-crimson transition-all">
                  <span className="text-xs font-bold">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-white/40">
          <p>© 2026 Dr Pepper/Seven Up, Inc. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  const [isZero, setIsZero] = useState(false);
  const [isNewstalgia, setIsNewstalgia] = useState(false);

  return (
    <div className={`min-h-screen transition-all duration-700 ${isNewstalgia ? 'newstalgia-mode' : ''} ${isZero ? 'zero-sugar-mode' : ''}`}>
      <Navbar 
        isZero={isZero} 
        setIsZero={setIsZero} 
        isNewstalgia={isNewstalgia} 
        setIsNewstalgia={setIsNewstalgia} 
      />
      
      <main>
        <Hero isZero={isZero} />
        <InnovationCarousel isZero={isZero} />
        <Flavors23 />
        <FlavorFinder />
      </main>

      <Footer isZero={isZero} />
    </div>
  );
}
