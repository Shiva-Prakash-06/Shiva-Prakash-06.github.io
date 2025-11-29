import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHeart, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Skills', href: '/skills' },
    { name: 'Contact', href: '/contact' }
  ];

  const socialLinks = [
    { icon: <FaGithub />, href: 'https://github.com/Shiva-Prakash-06', label: 'GitHub' },
    { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/shiva-prakash-9b8b10315', label: 'LinkedIn' },
    { icon: <FaEnvelope />, href: 'mailto:p.shivaraman@gmail.com', label: 'Email' }
  ];

  return (
    <footer className="bg-slate-gray border-t-2 border-royal-gold/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-royal-gold via-transparent to-royal-gold"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* Brand Section */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <h3 className="text-3xl font-bold font-poppins">
                <span className="text-warm-white">Shiva</span>
                <span className="text-royal-gold">.</span>
              </h3>
            </motion.div>
            <p className="text-warm-white/70 mb-6">
              Building the future through analytics, technology, and business intelligence.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : '_self'}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  aria-label={social.label}
                  whileHover={{ scale: 1.2, y: -3 }}
                  className="w-10 h-10 bg-royal-gold/10 border border-royal-gold/30 rounded-lg flex items-center justify-center text-royal-gold hover:bg-royal-gold hover:text-midnight-navy transition-all duration-300"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold text-warm-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.href}
                    className="text-warm-white/70 hover:text-royal-gold transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="text-royal-gold">▸</span> {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold text-warm-white mb-4">Get In Touch</h4>
            <ul className="space-y-3 text-warm-white/70">
              <li className="flex items-start gap-2">
                <FaEnvelope className="text-royal-gold mt-1 flex-shrink-0" />
                <a href="mailto:p.shivaraman@gmail.com" className="hover:text-royal-gold transition-colors">
                  p.shivaraman@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-royal-gold mt-1 flex-shrink-0">📍</span>
                <span>Bangalore, Karnataka, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-royal-gold/20 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-warm-white/70 text-sm text-center md:text-left"
          >
            © {currentYear} Shiva Prakash — Built with <FaHeart className="inline text-royal-gold mx-1" /> using React + Tailwind CSS
          </motion.p>
        </div>

        {/* Additional Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <p className="text-warm-white/50 text-xs">
            Designed and developed with attention to detail and a passion for clean, modern UI
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
