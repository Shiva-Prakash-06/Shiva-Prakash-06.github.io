import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaDownload } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-midnight-navy">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-royal-gold/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 bg-royal-gold/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-royal-gold text-lg md:text-xl font-medium mb-2">
                Hello, I'm
              </h2>
              <h1 className="text-5xl md:text-7xl font-bold text-warm-white mb-4">
                Shiva Prakash
              </h1>
              <div className="h-1 w-24 bg-royal-gold mb-6"></div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-royal-gold font-semibold"
            >
              Business Analyst in the making | Data Science + Applied Finance | Builder of apps & systems
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-warm-white/80"
            >
              I combine analytics, finance, and full-stack fundamentals to build meaningful projects in business and education.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Link to="/projects">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-royal-gold text-midnight-navy px-8 py-3 rounded-lg font-semibold hover:bg-royal-gold/90 transition-all duration-300 shadow-lg shadow-royal-gold/30"
                >
                  Explore My Work
                </motion.div>
              </Link>
              <Link to="/resume">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-royal-gold text-royal-gold px-8 py-3 rounded-lg font-semibold hover:bg-royal-gold hover:text-midnight-navy transition-all duration-300 flex items-center gap-2"
                >
                  <FaDownload /> Download Resume
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Side - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden md:flex items-center justify-center"
          >
            <motion.div
              className="relative w-96 h-96"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <div className="absolute inset-0 border-4 border-royal-gold/30 rounded-full"></div>
              <div className="absolute inset-8 border-4 border-royal-gold/20 rounded-full"></div>
              <div className="absolute inset-16 border-4 border-royal-gold/10 rounded-full"></div>
            </motion.div>
            
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute w-80 h-80 rounded-full overflow-hidden border-8 border-royal-gold shadow-2xl shadow-royal-gold/50"
            >
              <img 
                src="/profile.jpg" 
                alt="Shiva Prakash" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <motion.div
              className="absolute w-64 h-64 bg-gradient-to-br from-royal-gold/20 to-transparent rounded-full blur-2xl"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
