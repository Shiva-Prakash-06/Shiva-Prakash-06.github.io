import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGraduationCap, FaChartLine, FaCode, FaTrophy } from 'react-icons/fa';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const timeline = [
    {
      year: '2024',
      title: 'Started Dual Degree Journey',
      description: 'Began B.Com Applied Finance & Analytics at Christ University and B.Sc Data Science at IIT Madras',
      icon: <FaGraduationCap />
    },
    {
      year: '2024-25',
      title: 'Foundational Excellence',
      description: 'Completed foundational level at IIT Madras with strong focus on Python, Statistics, and Computational Thinking',
      icon: <FaChartLine />
    },
    {
      year: '2025',
      title: 'Building & Creating',
      description: 'Developed multiple full-stack applications including event management systems and hospital management platforms',
      icon: <FaCode />
    },
    {
      year: 'Present',
      title: 'Advancing Forward',
      description: 'Currently pursuing Diploma in Programming while building analytical and technical skills',
      icon: <FaTrophy />
    }
  ];

  return (
    <section id="about" ref={ref} className="py-20 bg-transparent relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-gray/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-warm-white mb-4">
            About <span className="text-royal-gold">Me</span>
          </h2>
          <div className="w-24 h-1 bg-royal-gold mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-20">
          {/* Left - Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-slate-gray p-8 rounded-2xl border border-royal-gold/20 hover:border-royal-gold/40 transition-all duration-300 shadow-lg hover:shadow-royal-gold/20">
              <h3 className="text-2xl font-bold text-royal-gold mb-4">Who I Am</h3>
              <p className="text-warm-white/90 leading-relaxed mb-4">
                I'm a student pursuing <span className="text-royal-gold font-semibold">B.Com Applied Finance & Analytics (2024–27)</span> at Christ University, Bangalore, alongside the <span className="text-royal-gold font-semibold">B.Sc in Data Science (2024–28)</span> from IIT Madras Online BS Program.
              </p>
              <p className="text-warm-white/90 leading-relaxed mb-4">
                My interests span <span className="text-royal-gold">analytics, business systems, app development, event-tech, leadership, and sports</span>. I'm passionate about building practical solutions that merge technology with business intelligence.
              </p>
              <p className="text-warm-white/90 leading-relaxed">
                As a <span className="text-royal-gold">structured thinker and problem solver</span>, I enjoy creating clean systems and tools for events, teams, and operations. I believe in learning by building and continuously improving my craft.
              </p>
            </div>
          </motion.div>

          {/* Right - Quick Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4 md:gap-6"
          >
            {[
              { number: '2', label: 'Degree Programs', icon: '🎓' },
              { number: '3+', label: 'Major Projects', icon: '🚀' },
              { number: '10+', label: 'Technical Skills', icon: '💻' },
              { number: '100%', label: 'Dedication', icon: '⚡' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                className="flex flex-col items-center justify-center bg-gradient-to-br from-royal-gold/10 to-transparent border border-royal-gold/30 rounded-xl p-4 md:p-6 hover:border-royal-gold/60 transition-all duration-300"
              >
                <span className="text-3xl sm:text-4xl md:text-5xl mb-2">{stat.icon}</span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-royal-gold mb-1">{stat.number}</h3>
                <p className="text-warm-white/70 text-xs sm:text-sm text-center">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Journey Timeline Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-warm-white text-center mb-12">
            My <span className="text-royal-gold">Journey</span>
          </h3>
          
          {/* Desktop Timeline */}
          <div className="hidden md:block relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-royal-gold/30"></div>
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1 + index * 0.2 }}
                className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pl-12 text-left' : 'pr-12 text-right'}`}>
                  <div className="bg-slate-gray p-6 rounded-2xl border border-royal-gold/20 hover:border-royal-gold/40 transition-all duration-300 shadow-lg hover:shadow-royal-gold/20">
                    <div className="text-royal-gold font-bold text-xl mb-2 font-jetbrains">{item.year}</div>
                    <h4 className="text-xl font-bold text-warm-white mb-2">{item.title}</h4>
                    <p className="text-warm-white/80">{item.description}</p>
                  </div>
                </div>
                <div className="w-12 h-12 bg-royal-gold rounded-full flex items-center justify-center text-midnight-navy text-xl z-10 shadow-lg shadow-royal-gold/50">
                  {item.icon}
                </div>
                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 1 + index * 0.2 }}
                className="flex gap-4"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-royal-gold rounded-full flex items-center justify-center text-midnight-navy text-xl shadow-lg shadow-royal-gold/50 flex-shrink-0">
                    {item.icon}
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="w-1 flex-grow bg-royal-gold/30 mt-2"></div>
                  )}
                </div>
                <div className="bg-slate-gray p-6 rounded-2xl border border-royal-gold/20 flex-grow shadow-lg">
                  <div className="text-royal-gold font-bold text-lg mb-2 font-jetbrains">{item.year}</div>
                  <h4 className="text-lg font-bold text-warm-white mb-2">{item.title}</h4>
                  <p className="text-warm-white/80 text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
