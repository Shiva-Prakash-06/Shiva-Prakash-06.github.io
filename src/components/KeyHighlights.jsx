import { motion } from 'framer-motion';
import { profileData } from '../data/profileData';

const KeyHighlights = () => {
  return (
    <section id="highlights" className="py-16 bg-slate-gray relative overflow-hidden">
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
            Key <span className="text-royal-gold">Highlights</span>
          </h2>
          <p className="text-warm-white/70 text-lg">Impact snapshots from recent work and leadership</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {profileData.highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className="bg-slate-gray rounded-xl border border-royal-gold/30 hover:border-royal-gold/60 transition-all duration-300 p-6 h-full group hover:-translate-y-2 shadow-lg hover:shadow-royal-gold/20">
                <div className="text-royal-gold text-xl mb-3">★</div>
                <p className="text-warm-white/80 text-sm leading-relaxed">{highlight}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyHighlights;
