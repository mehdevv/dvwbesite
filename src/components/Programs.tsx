import { motion, useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { Code2, Rocket, BookOpen, Trophy, Briefcase, Cpu, ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './Programs.module.css';

export function Programs() {
  const ref = useRef(null);
  const programsContainerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    if (programsContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = programsContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const container = programsContainerRef.current;
    if (container) {
      checkScrollButtons();
      container.addEventListener('scroll', checkScrollButtons);
      window.addEventListener('resize', checkScrollButtons);
      return () => {
        container.removeEventListener('scroll', checkScrollButtons);
        window.removeEventListener('resize', checkScrollButtons);
      };
    }
  }, []);

  const scrollLeft = () => {
    if (programsContainerRef.current) {
      const cardWidth = 320 + 32; // card width + gap
      programsContainerRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (programsContainerRef.current) {
      const cardWidth = 320 + 32; // card width + gap
      programsContainerRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
    }
  };

  const programs = [
    {
      icon: Code2,
      title: 'Tech Workshops',
      description: 'Master the latest technologies through hands-on workshops led by industry experts.',
      features: ['AI & Machine Learning', 'Web Development', 'Cloud Computing'],
    },
    {
      icon: Rocket,
      title: 'Startup Incubator',
      description: 'Transform your ideas into viable businesses with comprehensive support and resources.',
      features: ['Mentorship', 'Funding Access', 'Business Development'],
    },
    {
      icon: Trophy,
      title: 'Hackathons',
      description: 'Compete in high-stakes coding competitions and solve real-world challenges.',
      features: ['24-Hour Sprints', 'Prize Pool', 'Industry Partners'],
    },
    {
      icon: BookOpen,
      title: 'Learning Tracks',
      description: 'Structured pathways to develop expertise in specific domains and technologies.',
      features: ['Curriculum Design', 'Certification', 'Progress Tracking'],
    },
    {
      icon: Briefcase,
      title: 'Career Development',
      description: 'Prepare for your professional journey with exclusive career resources and networking.',
      features: ['Resume Workshops', 'Mock Interviews', 'Job Placements'],
    },
    {
      icon: Cpu,
      title: 'Innovation Lab',
      description: 'Access state-of-the-art facilities and equipment to build your next big project.',
      features: ['24/7 Access', 'Latest Tech', 'Collaboration Space'],
    },
  ];

  return (
    <section id="programs" className="py-16 md:py-24 lg:py-32 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-sm tracking-[0.3em] text-gray-500 uppercase mb-4 block">
            Our Programs
          </span>
          <h2 className="text-5xl font-bold text-[#032c6a] mb-6">
            What We Offer
          </h2>
          <div className="w-20 h-1 bg-[#032c6a] mx-auto mb-8" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our curated selection of programs designed to accelerate your growth 
            and expand your horizons.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className={styles.programsWrapper}>
          <div ref={programsContainerRef} className={styles.programsContainer}>
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`${styles.programCard} group`}
            >
              {/* Animated gradient overlay on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#032c6a]/5 via-[#0a4fb5]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
              />
              
              <div className="relative z-10">
                <div className="relative inline-flex items-center justify-center w-14 h-14 rounded-lg mb-6 overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[#032c6a] via-[#0a4fb5] to-[#032c6a] bg-[length:200%_200%]"
                    animate={{
                      backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />
                  <program.icon className="w-7 h-7 text-white relative z-10" />
                </div>
              
                <h3 className="text-2xl font-bold text-[#032c6a] mb-4">
                  {program.title}
                </h3>
              
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {program.description}
                </p>

                <ul className="space-y-2">
                  {program.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-gray-500 text-sm">
                      <div className="w-1.5 h-1.5 bg-[#032c6a] rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#join"
                  className="inline-flex items-center gap-2 text-[#032c6a] mt-6 group-hover:gap-3 transition-all"
                >
                  <span>Learn More</span>
                  <span className="text-lg">→</span>
                </a>
              </div>
            </motion.div>
            ))}
          </div>
          <div className={styles.scrollButtonsContainer}>
            <button
              onClick={scrollLeft}
              disabled={!canScrollLeft}
              className={styles.scrollButton}
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={scrollRight}
              disabled={!canScrollRight}
              className={styles.scrollButton}
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="mt-12 md:mt-20 lg:mt-32 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
    </section>
  );
}