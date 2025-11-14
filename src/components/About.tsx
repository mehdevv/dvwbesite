import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Target, Lightbulb, Users, Award } from 'lucide-react';
import styles from './About.module.css';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const values = [
    {
      icon: Target,
      title: 'Mission Driven',
      description: 'Focused on fostering innovation and entrepreneurship',
    },
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'Embracing cutting-edge technology and creative solutions',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building a supportive network of like-minded individuals',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to the highest standards in everything we do',
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-sm tracking-[0.3em] text-gray-500 uppercase mb-4 block">
            About Us
          </span>
          <h2 className="text-5xl font-bold text-[#032c6a] mb-6">
            Who We Are
          </h2>
          <div className="w-20 h-1 bg-[#032c6a] mx-auto mb-8" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Digital Valley is an exclusive university club dedicated to cultivating the next generation 
            of innovators, entrepreneurs, and technology leaders.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-12 md:mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-[#032c6a] mb-6">
              Our Story
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Founded on October 3rd, 2023, Digital Valley Club is a scientific community focused on driving 
                innovation in fintech. From our early days, we have grown into a leading student hub where 
                creativity, technology, and entrepreneurial thinking come together.
              </p>
              <p>
                We've organized major initiatives like DigiTrade, bringing together experts and students to 
                explore the future of financial technology, and we invest in talent through our LevelUp program, 
                offering valuable bootcamps that strengthen technical and professional skills.
              </p>
              <p>
                Digital Valley bridges the gap between academic excellence and real-world application, providing 
                members with mentorship, resources, and a collaborative environment to develop impactful ideas. 
                Our members are selected for their passion, dedication, and potential to shape the digital world.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.95 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className={styles.membersImageContainer}>
              <img
                src="/images/members.png"
                alt="Digital Valley Club Members"
                className={styles.membersImage}
                loading="lazy"
              />
              <div className={styles.membersImageOverlay} />
            </div>
          </motion.div>
        </div>

        {/* Values Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-3xl font-bold text-[#032c6a] mb-12 text-center">
            Our Values
          </h3>
          <div className={styles.valuesWrapper}>
            <div className={styles.valuesContainer}>
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className={`${styles.valueCard} group`}
              >
                <div className="relative inline-flex items-center justify-center w-16 h-16 bg-white border border-[#032c6a]/20 rounded-lg mb-6 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#032c6a] via-[#0a4fb5] to-[#032c6a] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <value.icon className="w-8 h-8 text-[#032c6a] group-hover:text-white transition-colors relative z-10" />
                </div>
                <h4 className="text-xl font-semibold text-[#032c6a] mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom divider */}
      <div className="mt-12 md:mt-20 lg:mt-32 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
    </section>
  );
}