import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';

export function Events() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

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
    <section id="events" className="py-32 bg-white" ref={ref}>
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
        <div className="space-y-6 max-w-4xl mx-auto">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative bg-white border border-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 group"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#032c6a]/5 via-transparent to-[#0a4fb5]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="flex flex-col md:flex-row relative z-10">
                {/* Date Column */}
                <div className="md:w-32 relative overflow-hidden">
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
                  <div className="relative p-6 flex flex-col items-center justify-center text-white">
                    <div className="text-3xl font-bold">{event.date}</div>
                    <div className="text-sm opacity-80">{event.year}</div>
                  </div>
                </div>

                {/* Content Column */}
                <div className="flex-1 p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="inline-block bg-gray-100 text-[#032c6a] px-3 py-1 rounded-full text-sm mb-3">
                        {event.type}
                      </span>
                      <h3 className="text-2xl font-bold text-[#032c6a] group-hover:text-[#02234f] transition-colors">
                        {event.title}
                      </h3>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-3 text-gray-600">
                      <Clock className="w-4 h-4 text-[#032c6a]" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <MapPin className="w-4 h-4 text-[#032c6a]" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <Calendar className="w-4 h-4 text-[#032c6a]" />
                      <span>{event.spots}</span>
                    </div>
                  </div>

                  <button className="group/btn inline-flex items-center gap-2 text-[#032c6a] hover:gap-3 transition-all">
                    <span className="font-semibold">Register Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="#events"
            className="inline-flex items-center gap-2 text-[#032c6a] hover:gap-3 transition-all"
          >
            <span className="font-semibold">View All Events</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>

      {/* Bottom divider */}
      <div className="mt-32 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
    </section>
  );
}