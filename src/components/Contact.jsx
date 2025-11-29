import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For GitHub Pages deployment, this will just log to console
    // In production, you can integrate EmailJS or similar service
    console.log('Form submitted:', formData);
    setFormStatus('Message sent! (Console logged - integrate EmailJS for actual sending)');
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setFormStatus('');
    }, 3000);
  };

  const contactMethods = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'p.shivaraman@gmail.com',
      link: 'mailto:p.shivaraman@gmail.com',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: <FaLinkedin />,
      title: 'LinkedIn',
      value: 'Connect on LinkedIn',
      link: 'https://www.linkedin.com/in/shiva-prakash-9b8b10315',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <FaGithub />,
      title: 'GitHub',
      value: 'View my repositories',
      link: 'https://github.com/Shiva-Prakash-06',
      color: 'from-gray-500 to-slate-600'
    }
  ];

  return (
    <section id="contact" ref={ref} className="py-20 bg-midnight-navy relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-royal-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-royal-gold/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-warm-white mb-4">
            Get In <span className="text-royal-gold">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-royal-gold mx-auto mb-6"></div>
          <p className="text-warm-white/80 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-warm-white mb-8">Contact Information</h3>
            
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.link}
                target={method.link.startsWith('http') ? '_blank' : '_self'}
                rel={method.link.startsWith('http') ? 'noopener noreferrer' : ''}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{ x: 10 }}
                className="block"
              >
                <div className="bg-slate-gray rounded-xl border border-royal-gold/20 hover:border-royal-gold/60 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-royal-gold/30 group">
                  <div className={`bg-gradient-to-r ${method.color} p-1`}>
                    <div className="bg-slate-gray p-6">
                      <div className="flex items-center gap-4">
                        <div className="text-4xl text-royal-gold group-hover:scale-110 transition-transform duration-300">
                          {method.icon}
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-warm-white mb-1">{method.title}</h4>
                          <p className="text-warm-white/70 text-sm">{method.value}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-12 bg-gradient-to-r from-royal-gold/10 to-transparent border border-royal-gold/30 rounded-xl p-6"
            >
              <h4 className="text-xl font-bold text-warm-white mb-3">Location</h4>
              <p className="text-warm-white/80">Bangalore, Karnataka, India</p>
              <p className="text-warm-white/60 text-sm mt-2">Available for remote opportunities</p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-slate-gray rounded-2xl border-2 border-royal-gold/30 p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-warm-white mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-warm-white/90 mb-2 font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-gray-light border border-royal-gold/30 rounded-lg px-4 py-3 text-warm-white focus:outline-none focus:border-royal-gold transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-warm-white/90 mb-2 font-medium">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-gray-light border border-royal-gold/30 rounded-lg px-4 py-3 text-warm-white focus:outline-none focus:border-royal-gold transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-warm-white/90 mb-2 font-medium">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-gray-light border border-royal-gold/30 rounded-lg px-4 py-3 text-warm-white focus:outline-none focus:border-royal-gold transition-colors"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-warm-white/90 mb-2 font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full bg-slate-gray-light border border-royal-gold/30 rounded-lg px-4 py-3 text-warm-white focus:outline-none focus:border-royal-gold transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-royal-gold text-midnight-navy px-8 py-4 rounded-lg font-semibold hover:bg-royal-gold/90 transition-all duration-300 shadow-lg shadow-royal-gold/30 flex items-center justify-center gap-2"
                >
                  <FaPaperPlane /> Send Message
                </motion.button>

                {formStatus && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-royal-gold font-medium"
                  >
                    {formStatus}
                  </motion.p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
