import { motion, useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { Calendar, MapPin, Clock, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './Events.module.css';

export function Events() {
  const ref = useRef(null);
  const eventsContainerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    if (eventsContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = eventsContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const container = eventsContainerRef.current;
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
    if (eventsContainerRef.current) {
      const cardWidth = 340 + 24; // card width + gap
      eventsContainerRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (eventsContainerRef.current) {
      const cardWidth = 340 + 24; // card width + gap
      eventsContainerRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
    }
  };

  const events = [
    {
      date: 'NOV 20',
      year: '2025',
      title: 'AI & Machine Learning Summit',
      time: '6:00 PM - 9:00 PM',
      location: 'Main Auditorium',
      type: 'Workshop',
      spots: '45 spots remaining',
    },
    {
      date: 'NOV 25',
      year: '2025',
      title: 'Startup Pitch Competition',
      time: '2:00 PM - 6:00 PM',
      location: 'Innovation Hub',
      type: 'Competition',
      spots: '12 teams accepted',
    },
    {
      date: 'DEC 01',
      year: '2025',
      title: 'Code Sprint Hackathon',
      time: '9:00 AM (48 hours)',
      location: 'Tech Center',
      type: 'Hackathon',
      spots: '30 spots remaining',
    },
    {
      date: 'DEC 10',
      year: '2025',
      title: 'Industry Networking Night',
      time: '7:00 PM - 10:00 PM',
      location: 'Conference Hall',
      type: 'Networking',
      spots: 'Limited availability',
    },
  ];

  return (
    <section id="events" className="py-16 md:py-24 lg:py-32 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-sm tracking-[0.3em] text-gray-500 uppercase mb-4 block">
            Upcoming Events
          </span>
          <h2 className="text-5xl font-bold text-[#032c6a] mb-6">
            Join Our Events
          </h2>
          <div className="w-20 h-1 bg-[#032c6a] mx-auto mb-8" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay engaged with our carefully curated calendar of workshops, competitions, 
            and networking opportunities.
          </p>
        </motion.div>

        {/* Events List */}
        <div className={styles.eventsWrapper}>
          <div ref={eventsContainerRef} className={styles.eventsContainer}>
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`${styles.eventCard} group`}
            >
              {/* Gradient overlay on hover */}
              <div className={styles.eventGradientOverlay} />
              
              <div className={styles.eventCardContent}>
                {/* Date Column */}
                <div className={styles.eventDateColumn}>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[#032c6a] via-[#0a4fb5] to-[#032c6a] bg-[length:200%_200%]"
                    animate={{
                      backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />
                  <div className={styles.eventDateContent}>
                    <div className={styles.eventDateText}>{event.date}</div>
                    <div className={styles.eventYearText}>{event.year}</div>
                  </div>
                </div>

                {/* Content Column */}
                <div className={styles.eventContentColumn}>
                  <div className={styles.eventHeader}>
                    <span className={styles.eventType}>
                      {event.type}
                    </span>
                    <h3 className={styles.eventTitle}>
                      {event.title}
                    </h3>
                  </div>

                  <div className={styles.eventDetails}>
                    <div className={styles.eventDetailItem}>
                      <Clock className={styles.eventDetailIcon} />
                      <span>{event.time}</span>
                    </div>
                    <div className={styles.eventDetailItem}>
                      <MapPin className={styles.eventDetailIcon} />
                      <span>{event.location}</span>
                    </div>
                    <div className={styles.eventDetailItem}>
                      <Calendar className={styles.eventDetailIcon} />
                      <span>{event.spots}</span>
                    </div>
                  </div>

                  <button className={styles.eventButton}>
                    <span>Register Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
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