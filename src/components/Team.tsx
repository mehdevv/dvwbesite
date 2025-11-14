import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Linkedin, Mail } from 'lucide-react';
import styles from './Team.module.css';

export function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const team = [
    {
      name: 'Ritadj Massaadia',
      role: 'President',
      image: '/images/ritadj.png',
    },
    {
      name: 'Kernou Mehdi',
      role: 'VP & Web Developer',
      image: '/images/mehdi.png',
    },
    {
      name: 'Assassi Nouha',
      role: 'Marketing Manager',
      image: '/images/nouha.png',
    },
    {
      name: 'Amrouche Dounya',
      role: 'HR Manager & Graphic Designer',
      image: '/images/dounya.png',
    },
    {
      name: 'Khenouf Nour',
      role: 'Respo Relation Extérieur',
      image: '/images/KNour.png',
    },
  ];

  return (
    <section id="team" className="py-16 md:py-24 lg:py-32 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16 lg:mb-20"
        >
          <span className="text-sm tracking-[0.3em] text-gray-500 uppercase mb-4 block">
            Leadership
          </span>
          <h2 className="text-5xl font-bold text-[#032c6a] mb-6">
            Our Team
          </h2>
          <div className="w-20 h-1 bg-[#032c6a] mx-auto mb-8" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Meet the dedicated individuals leading Digital Valley toward excellence 
            and innovation.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className={styles.teamGrid}>
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group ${styles.teamMember}`}
            >
              <div className="relative bg-white border border-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
                {/* Image */}
                <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Overlay on Hover with animated gradient */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[#032c6a] via-[#0a4fb5] to-[#032c6a] opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center gap-4"
                    animate={{
                      backgroundPosition: ['0% 0%', '100% 100%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: 'reverse',
                    }}
                  >
                    <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                      <Linkedin className="w-5 h-5 text-[#032c6a]" />
                    </button>
                    <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                      <Mail className="w-5 h-5 text-[#032c6a]" />
                    </button>
                  </motion.div>
                </div>

                {/* Info */}
                <div className="p-4 md:p-5 text-center">
                  <h3 className="text-lg md:text-xl font-bold text-[#032c6a] mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600">{member.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}