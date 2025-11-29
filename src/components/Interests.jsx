import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaBasketballBall, FaChartLine, FaCode, FaCalendarAlt, FaUsers, FaBook, FaPalette, FaTrophy } from 'react-icons/fa';

const Interests = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const interests = [
    {
      name: 'Basketball',
      icon: <FaBasketballBall />,
      description: 'Playing and watching basketball',
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'Business & Analytics',
      icon: <FaChartLine />,
      description: 'Data-driven decision making',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'App Development',
      icon: <FaCode />,
      description: 'Building full-stack applications',
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Event Management',
      icon: <FaCalendarAlt />,
      description: 'Organizing and coordinating events',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Leadership',
      icon: <FaUsers />,
      description: 'Leading teams and initiatives',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      name: 'Reading',
      icon: <FaBook />,
      description: 'Learning through books and articles',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      name: 'UI/UX Design',
      icon: <FaPalette />,
      description: 'Creating beautiful interfaces',
      color: 'from-pink-500 to-rose-500'
    },
    {
      name: 'Tech for Sports',
      icon: <FaTrophy />,
      description: 'Building tech solutions for events',
      color: 'from-teal-500 to-green-500'
    }
  ];

  return (
    <section id="interests" ref={ref} className="py-20 bg-midnight-navy relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-royal-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-royal-gold/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-warm-white mb-4">
            Interests & <span className="text-royal-gold">Hobbies</span>
          </h2>
          <div className="w-24 h-1 bg-royal-gold mx-auto mb-6"></div>
          <p className="text-warm-white/80 text-lg max-w-2xl mx-auto">
            Beyond coding and academics, here's what drives my passion and creativity
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {interests.map((interest, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="group"
            >
              <div className="bg-slate-gray rounded-2xl border border-royal-gold/20 hover:border-royal-gold/60 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-royal-gold/40 h-full hover:-translate-y-2">
                <div className={`bg-gradient-to-br ${interest.color} p-1`}>
                  <div className="bg-slate-gray p-6">
                    <motion.div
                      className="text-5xl mb-4 text-royal-gold"
                      whileHover={{ 
                        scale: 1.2,
                        rotate: [0, -10, 10, -10, 0],
                        transition: { duration: 0.5 }
                      }}
                    >
                      {interest.icon}
                    </motion.div>
                    <h3 className="text-lg font-bold text-warm-white mb-2">{interest.name}</h3>
                    <p className="text-warm-white/70 text-sm">{interest.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-royal-gold/10 to-transparent border border-royal-gold/30 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-warm-white mb-4">
            A <span className="text-royal-gold">Balanced</span> Approach
          </h3>
          <p className="text-warm-white/80 max-w-3xl mx-auto">
            I believe in maintaining a balance between technical growth, business acumen, physical fitness, 
            and creative pursuits. Each interest complements the others, contributing to a well-rounded perspective 
            in problem-solving and innovation.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Interests;
