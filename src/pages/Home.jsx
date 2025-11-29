import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaProjectDiagram, FaFileDownload, FaEnvelope, FaGraduationCap, FaCode, FaBriefcase, FaChevronDown } from 'react-icons/fa';

const Home = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickIntroCards = [
    {
      icon: <FaProjectDiagram />,
      title: 'Featured Projects',
      description: '4 full-stack applications',
      link: '/projects',
      color: 'from-blue-500/20 to-purple-500/20',
      borderColor: 'border-blue-500/40'
    },
    {
      icon: <FaGraduationCap />,
      title: 'Academic Excellence',
      description: 'Dual degree programs',
      link: '/academics',
      color: 'from-green-500/20 to-teal-500/20',
      borderColor: 'border-green-500/40'
    },
    {
      icon: <FaCode />,
      title: 'Technical Skills',
      description: '20+ technologies mastered',
      link: '/skills',
      color: 'from-orange-500/20 to-red-500/20',
      borderColor: 'border-orange-500/40'
    },
    {
      icon: <FaBriefcase />,
      title: 'Experience',
      description: 'Leadership & tech roles',
      link: '/experience',
      color: 'from-purple-500/20 to-pink-500/20',
      borderColor: 'border-purple-500/40'
    },
    {
      icon: <FaFileDownload />,
      title: 'Download Resume',
      description: 'View my complete profile',
      link: '/resume',
      color: 'from-yellow-500/20 to-amber-500/20',
      borderColor: 'border-yellow-500/40'
    },
    {
      icon: <FaEnvelope />,
      title: 'Get in Touch',
      description: 'Let\'s connect',
      link: '/contact',
      color: 'from-cyan-500/20 to-blue-500/20',
      borderColor: 'border-cyan-500/40'
    }
  ];

  return (
    <div className="min-h-screen bg-midnight-navy">
      <Navbar />
      
      {/* Hero Section with darker navy */}
      <div className="relative bg-midnight-navy">
        <Hero />
        {/* Scroll Indicator to Quick Intro */}
        <motion.button
          onClick={() => scrollToSection('quick-intro')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-royal-gold cursor-pointer z-20"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <FaChevronDown className="text-3xl" />
        </motion.button>
      </div>
      
      {/* Quick Intro Cards Section with slate-gray background */}
      <section id="quick-intro" className="py-16 bg-slate-gray relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-royal-gold/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-royal-gold/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-warm-white mb-3">
              Explore My <span className="text-royal-gold">Portfolio</span>
            </h2>
            <p className="text-warm-white/70 text-lg">Quick access to key sections</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickIntroCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={card.link}>
                  <div className={`bg-slate-gray rounded-xl border ${card.borderColor} hover:border-royal-gold/60 transition-all duration-300 p-6 h-full group hover:-translate-y-2 shadow-lg hover:shadow-royal-gold/20`}>
                    <div className={`bg-gradient-to-br ${card.color} p-4 rounded-lg inline-block mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <div className="text-4xl text-royal-gold">{card.icon}</div>
                    </div>
                    <h3 className="text-xl font-bold text-warm-white mb-2 group-hover:text-royal-gold transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-warm-white/70 text-sm">{card.description}</p>
                    <div className="mt-4 text-royal-gold text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                      Explore <span className="text-xs">→</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Scroll Indicator to About */}
        <motion.button
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-royal-gold cursor-pointer z-20"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <FaChevronDown className="text-3xl" />
        </motion.button>
      </section>

      {/* About Section with darker background */}
      <div className="bg-gradient-to-b from-slate-gray to-midnight-navy">
        <About />
      </div>
      
      <Footer />
    </div>
  );
};

export default Home;
