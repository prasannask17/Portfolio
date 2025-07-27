import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Code2, Download } from 'lucide-react';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Full Stack Developer";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Comic Effects */}
      <motion.div
        initial={{ opacity: 0, scale: 0, rotate: -45 }}
        animate={{ 
          opacity: [0, 1, 1, 0.8, 1],
          scale: [0, 1.2, 1, 1.1, 1],
          rotate: [-45, -12, -15, -10, -12],
          y: [0, -5, 0, -3, 0]
        }}
        transition={{ 
          duration: 2,
          times: [0, 0.3, 0.6, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 3,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-10 text-6xl font-bold text-yellow-400 transform z-20 select-none"
        style={{ 
          fontFamily: 'Impact, sans-serif', 
          textShadow: '4px 4px 0px #000, 8px 8px 0px rgba(0,0,0,0.3)',
          filter: 'drop-shadow(0 0 10px rgba(255, 193, 7, 0.5))'
        }}
      >
        <motion.span
          animate={{ 
            textShadow: [
              '4px 4px 0px #000, 8px 8px 0px rgba(0,0,0,0.3)',
              '6px 6px 0px #000, 12px 12px 0px rgba(0,0,0,0.4)',
              '4px 4px 0px #000, 8px 8px 0px rgba(0,0,0,0.3)'
            ]
          }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        >
          BANG!
        </motion.span>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0, rotate: 45 }}
        animate={{ 
          opacity: [0, 1, 1, 0.9, 1],
          scale: [0, 1.3, 1, 1.15, 1],
          rotate: [45, 12, 15, 8, 12],
          y: [0, -8, 0, -5, 0]
        }}
        transition={{ 
          duration: 2.5,
          times: [0, 0.4, 0.7, 0.85, 1],
          repeat: Infinity,
          repeatDelay: 2.5,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute top-32 right-20 text-8xl font-bold text-red-400 transform z-20 select-none"
        style={{ 
          fontFamily: 'Impact, sans-serif', 
          textShadow: '4px 4px 0px #000, 8px 8px 0px rgba(0,0,0,0.3)',
          filter: 'drop-shadow(0 0 15px rgba(239, 68, 68, 0.6))'
        }}
      >
        <motion.span
          animate={{ 
            textShadow: [
              '4px 4px 0px #000, 8px 8px 0px rgba(0,0,0,0.3)',
              '6px 6px 0px #000, 12px 12px 0px rgba(0,0,0,0.4)',
              '4px 4px 0px #000, 8px 8px 0px rgba(0,0,0,0.3)'
            ]
          }}
          transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse" }}
        >
          POW!
        </motion.span>
      </motion.div>

      {/* Additional floating comic elements */}
      <motion.div
        animate={{ 
          y: [0, -10, 0],
          rotate: [0, 5, 0, -5, 0],
          scale: [1, 1.05, 1]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-32 left-32 text-3xl font-bold text-cyan-400 transform z-20 select-none"
        style={{ 
          fontFamily: 'Impact, sans-serif', 
          textShadow: '2px 2px 0px #000',
          filter: 'drop-shadow(0 0 8px rgba(6, 182, 212, 0.4))'
        }}
      >
        ZAP!
      </motion.div>

      <motion.div
        animate={{ 
          y: [0, -15, 0],
          rotate: [0, -8, 0, 8, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute top-64 right-32 text-4xl font-bold text-purple-400 transform z-20 select-none"
        style={{ 
          fontFamily: 'Impact, sans-serif', 
          textShadow: '3px 3px 0px #000',
          filter: 'drop-shadow(0 0 10px rgba(168, 85, 247, 0.5))'
        }}
      >
        BOOM!
      </motion.div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
              {/* Spider-Dev Badge
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="relative"
              >
                <motion.div 
      animate={{ 
        boxShadow: [
          '0 0 20px rgba(239, 68, 68, 0.3)',
          '0 0 30px rgba(239, 68, 68, 0.5)',
          '0 0 20px rgba(239, 68, 68, 0.3)'
        ]
      }}
      transition={{ duration: 2, repeat: Infinity }}
      className="inline-flex items-center space-x-2 bg-red-500/20 backdrop-blur-sm border-2 border-red-500 rounded-full px-6 py-3 relative z-10"
    >
      <span className="text-red-400 font-mono text-sm tracking-wider font-bold">
        🕷️ SPIDER-DEV 🕷️
      </span>
    </motion.div> */}
            {/* <motion.div 
              animate={{ 
                boxShadow: [
                  '0 0 20px rgba(239, 68, 68, 0.3)',
                  '0 0 30px rgba(239, 68, 68, 0.5)',
                  '0 0 20px rgba(239, 68, 68, 0.3)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-flex items-center space-x-2 bg-red-500/20 backdrop-blur-sm border-2 border-red-500 rounded-full px-6 py-3"
            >
              <span className="text-red-400 font-mono text-sm tracking-wider font-bold">
                🕷️ SPIDER-DEV 🕷️
              </span>
            </motion.div> */}
          {/* </motion.div> */}
          
          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold leading-tight"
            style={{ fontFamily: 'Impact, sans-serif' }}
          >
            <span className="text-white">I'm </span>
            <motion.span 
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="bg-gradient-to-r from-red-500 via-blue-500 to-red-500 bg-clip-text text-transparent"
              style={{ backgroundSize: '200% 200%' }}
            >
              PRASANNA
            </motion.span>
          </motion.h1>
          
          {/* Typewriter Effect */}
          <div className="text-3xl md:text-4xl text-cyan-400 h-16 flex items-center justify-center">
            <motion.div className="font-mono font-bold">
              <span className="border-r-2 border-cyan-400 pr-2 animate-pulse">
                {text}
              </span>
            </motion.div>
          </div>
          
          {/* Description */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 1 }}
            className="max-w-3xl mx-auto"
          >
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-black/50 border-2 border-cyan-400 rounded-lg p-6"
            >
              <p className="text-xl md:text-2xl text-white leading-relaxed font-bold">
                Swinging through the <span className="text-red-400">multiverse</span> of code, I craft digital experiences that are{' '}
                <span className="text-cyan-400">spectacular</span>, <span className="text-yellow-400">amazing</span>, and{' '}
                <span className="text-red-400">ultimate</span>!
              </p>
            </motion.div>
          </motion.div>
          
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            {/* <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 25px rgba(239, 68, 68, 0.5)'
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg font-bold text-lg hover:shadow-lg transition-all duration-300 flex items-center space-x-3 border-2 border-red-400"
            >
              <Code2 className="w-5 h-5" />
              <span>WEB MY WORK</span>
            </motion.button> */}
            <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 0 25px rgba(239, 68, 68, 0.5)'
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              document.getElementById('projects')?.scrollIntoView({ 
                behavior: 'smooth' 
              });
            }}
            className="px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg font-bold text-lg hover:shadow-lg transition-all duration-300 flex items-center space-x-3 border-2 border-red-400"
          >
            <Code2 className="w-5 h-5" />
            <span>WEB MY WORK</span>
          </motion.button>
            
            {/* <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 25px rgba(6, 182, 212, 0.5)'
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-bold text-lg hover:bg-cyan-400/10 transition-all duration-300 flex items-center space-x-3"
            >
              <Download className="w-5 h-5" />
              <span>DOWNLOAD CV</span>
            </motion.button> */}
            <motion.button
          whileHover={{ 
            scale: 1.05,
            boxShadow: '0 0 25px rgba(6, 182, 212, 0.5)'
          }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            const link = document.createElement('a');
            link.href = './Res/71762131035_PROFILE.pdf'; // Put your CV file in the public folder
            link.download = '71762131035_Prasanna_CV.pdf'; // Change to your actual name
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }}
          className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-bold text-lg hover:bg-cyan-400/10 transition-all duration-300 flex items-center space-x-3"
        >
          <Download className="w-5 h-5" />
          <span>DOWNLOAD CV</span>
        </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.5, duration: 1 }}
            className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto"
          >
            {[
              { number: "2", label: "YEARS IN THE WEB", icon: "🕷️" },
              { number: "15", label: "PROJECTS SAVED", icon: "🕸️" },
              { number: "∞", label: "POSSIBILITIES", icon: "🚀" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 4 + index * 0.2, type: "spring" }}
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: '0 0 20px rgba(6, 182, 212, 0.4)'
                }}
                className="text-center bg-black/50 border border-cyan-400 rounded-lg p-4 hover:border-red-400 transition-all duration-300"
              >
                <motion.div 
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                  className="text-2xl mb-2"
                >
                  {stat.icon}
                </motion.div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-cyan-400 text-sm uppercase tracking-wider font-bold">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center space-y-2 text-cyan-400">
          <span className="text-sm font-bold uppercase tracking-wider">SWING DOWN</span>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;