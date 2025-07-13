import { motion } from 'framer-motion';
import { Sparkles, Zap } from 'lucide-react';
import { BackgroundBeams } from './ui/background-beams';
import { TypingAnimation } from './magicui/typing-animation';

const Hero = () => {
  const adaptiveWords = [
    "Efficient", 
    "Agentic",
    "Smarter",
    "Adaptive",
    "Autonomous",
    "Streamlined",
    "Responsive",
    "Transparent",
    "Secure",
    "Predictive",
    "Human-Centered",
    "Automated",
    "Intuitive",
    "Data-Driven",
    "Mission-Ready",
    "Agile",
    "Connected",
    "Modern"
  ];

  return (
    <div className="relative pt-20 sm:pt-[150px] pb-16 sm:pb-32 flex items-center justify-center bg-black overflow-hidden">
      {/* Background Beams */}
      <BackgroundBeams className="opacity-40 absolute inset-0" />
      
      {/* Central glow behind the slogan text */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1000px] bg-white opacity-[4%] rounded-full blur-[100px]"></div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10"></div>
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-black to-transparent z-10"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-radial-gradient from-gray-100/5 via-transparent to-transparent"></div>
      </div>

      <div className="relative max-w-7xl xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6 sm:space-y-10 pt-4 sm:pt-8">
          {/* Pill above slogan */}
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="bg-neutral-800/80 backdrop-blur-sm border border-neutral-600 px-4 sm:px-6 py-2 rounded-full">
              <div className="flex items-center space-x-2">
                <Sparkles className="h-4 sm:h-5 w-4 sm:w-5 text-white" />
                <span className="text-white text-sm sm:text-base font-medium">
                  AI Strategy. Secure Implementation. Mission Acceleration.
              </span>
              </div>
            </div>
          </motion.div>

          {/* Main heading with animation */}
          <div className="space-y-12">
            <div className="space-y-8">
              <motion.h1 
                className="text-4xl sm:text-6xl md:text-8xl font-bold text-white leading-tight text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="flex flex-col items-center">
                  <div>Making Government</div>
                  <div className="flex items-center justify-center space-x-4 text-center">
                    <TypingAnimation 
                      words={adaptiveWords}
                      className="text-white"
                    />
                  </div>
                </div>
              </motion.h1>
            </div>
            
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl text-white max-w-5xl mx-auto mt-8 sm:mt-16 px-4 sm:px-0"
              style={{ lineHeight: 1.6 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Beacon empowers state and federal government agencies to deliver smarter, more efficient services with agentic AI and human-centered solutions—improving lives with speed, scale, and trust.
            </motion.p>
          </div>

          {/* CTA button */}
          <motion.div 
            className="flex justify-center mt-12 sm:mt-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a
              href="#contact"
              className="relative bg-gradient-to-b from-yellow-400 to-yellow-500 border border-yellow-500 text-black px-8 sm:px-12 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:from-yellow-300 hover:to-yellow-400 hover:border-yellow-400 hover:shadow-lg hover:shadow-yellow-500/25 transition-all duration-300 flex items-center space-x-2 sm:space-x-3 shadow-md"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Zap className="h-5 w-5" />
              <span>
              Ignite Your Mission
              </span>
            </a>
          </motion.div>

          {/* Impact metrics */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-16 mt-16 sm:mt-32"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="text-center">
              <motion.div 
                className="text-3xl sm:text-4xl font-bold text-white mb-2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2, type: "spring" }}
              >
                20+
              </motion.div>
              <div className="text-white text-sm sm:text-base">Years Executive Experience</div>
            </div>
            <div className="text-center">
              <motion.div 
                className="text-3xl sm:text-4xl font-bold text-white mb-2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 1.4, type: "spring" }}
              >
                12+
              </motion.div>
              <div className="text-white text-sm sm:text-base">Agencies Served</div>
            </div>
            <div className="text-center">
              <motion.div 
                className="text-3xl sm:text-4xl font-bold text-white mb-2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 1.6, type: "spring" }}
              >
                $100M+
              </motion.div>
              <div className="text-white text-sm sm:text-base">In Cost Savings</div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;