import { motion } from 'motion/react';
import { Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    'Quick Links': [
      { label: 'Home', href: '#home' },
      { label: 'About', href: '#about' },
      { label: 'Programs', href: '#programs' },
      { label: 'Events', href: '#events' },
    ],
    'Resources': [
      { label: 'Team', href: '#team' },
      { label: 'Join Us', href: '#join' },
      { label: 'Contact', href: '#contact' },
      { label: 'FAQ', href: '#faq' },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
  ];

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-[#032c6a] mb-4">
              DIGITAL VALLEY
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6 max-w-md">
              A premier university club fostering technological innovation and 
              entrepreneurial excellence.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="group relative w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center transition-all duration-300 overflow-hidden"
                  aria-label={social.label}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#032c6a] via-[#0a4fb5] to-[#032c6a] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <social.icon className="w-5 h-5 text-[#032c6a] group-hover:text-white transition-colors relative z-10" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-bold text-[#032c6a] mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-[#032c6a] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} Digital Valley. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-[#032c6a] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-[#032c6a] transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}