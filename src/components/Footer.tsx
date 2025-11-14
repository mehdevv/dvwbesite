import { Linkedin, Instagram, Facebook } from 'lucide-react';

// TikTok Icon Component
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

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
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: TikTokIcon, href: '#', label: 'TikTok' },
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
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                const isTikTok = social.label === 'TikTok';
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="group relative w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center transition-all duration-300 overflow-hidden"
                    aria-label={social.label}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#032c6a] via-[#0a4fb5] to-[#032c6a] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    {isTikTok ? (
                      <IconComponent className="w-5 h-5 text-[#032c6a] group-hover:text-white transition-colors relative z-10" />
                    ) : (
                      <IconComponent className="w-5 h-5 text-[#032c6a] group-hover:text-white transition-colors relative z-10" />
                    )}
                  </a>
                );
              })}
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
          <div className="flex flex-col md:flex-row gap-2 md:gap-6 text-sm text-gray-500">
            <span>Designed and developed by</span>
            <a href="https://www.pluss.dev" target="_blank" rel="noopener noreferrer" className="hover:text-[#032c6a] transition-colors font-semibold">
              Kernou Mehdi
            </a>
            <span className="hidden md:inline">•</span>
            <a href="https://www.pluss.dev" target="_blank" rel="noopener noreferrer" className="hover:text-[#032c6a] transition-colors">
              www.pluss.dev
            </a>
            <span className="hidden md:inline">•</span>
            <a href="https://instagram.com/kernoumehdi" target="_blank" rel="noopener noreferrer" className="hover:text-[#032c6a] transition-colors">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}