import { motion } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Logo3D } from './Logo3D';
import { AuroraText } from './AuroraText';

export function Hero() {
  return (
    <motion.section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-white pt-4 sm:pt-6 lg:pt-8 overflow-visible"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,transparent_30%,#032c6a_50%,transparent_70%,transparent_100%)] bg-[length:200%_100%] opacity-[0.08]"
        />
        {/* Additional subtle gradient layer for more depth */}
        <motion.div
          animate={{
            backgroundPosition: ['100% 50%', '0% 50%', '100% 50%'],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute inset-0 bg-[linear-gradient(60deg,transparent_0%,#0a4fb5_30%,transparent_60%,transparent_100%)] bg-[length:200%_100%] opacity-[0.05]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8 sm:py-12 lg:py-16 relative z-10 overflow-visible">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block mb-4 sm:mb-6"
            >
              <span className="text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] text-gray-500 uppercase">
                Premium University Club
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="mb-6 sm:mb-8 leading-tight tracking-tight"
            >
              <AuroraText 
                speed={1} 
                colors={["#032c6a", "#0a4fb5", "#2563eb", "#3b82f6", "#60a5fa", "#38bdf8", "#0a4fb5", "#032c6a"]}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold"
              >
                Digital Valley
              </AuroraText>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 sm:mb-12 leading-relaxed max-w-lg mx-auto lg:mx-0"
            >
              Where innovation meets opportunity. Join our exclusive community of tech enthusiasts and entrepreneurs shaping the future.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <a
                href="#join"
                className="group relative bg-[#032c6a] text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-md overflow-hidden inline-flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#032c6a] via-[#0a4fb5] to-[#032c6a] bg-[length:200%_100%]"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
                <span className="relative z-10">Get Started</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
              </a>
              <a
                href="#about"
                className="group relative bg-transparent border border-[#032c6a] text-[#032c6a] px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-md overflow-hidden inline-flex items-center justify-center text-sm sm:text-base"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#032c6a] to-[#0a4fb5] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative z-10 group-hover:text-white transition-colors">Learn More</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right - 3D Model */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative overflow-visible mt-8 lg:mt-0"
          >
            <div className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[1100px] w-full">
              {/* 3D Model */}
              <div className="absolute inset-0 flex items-center justify-center py-8 sm:py-12 md:py-16 lg:py-30">
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="w-full h-full flex items-center justify-center"
                >
                  <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
                    {/* 3D Model Container */}
                    <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                      <Logo3D />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Subtle bottom divider */}
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"
        style={{ transformOrigin: 'left' }}
      />

      {/* Scroll Indicator Arrow */}
      <motion.a
        href="#about"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        style={{
          position: 'absolute',
          bottom: '10px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 20,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#032c6a',
          cursor: 'pointer',
          transition: 'color 0.3s ease'
        }}
        onMouseEnter={(e) => e.currentTarget.style.color = '#0a4fb5'}
        onMouseLeave={(e) => e.currentTarget.style.color = '#032c6a'}
      >
        <motion.div
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <ChevronDown className="w-12 h-12 sm:w-14 sm:h-14" />
        </motion.div>
      </motion.a>
    </motion.section>
  );
}