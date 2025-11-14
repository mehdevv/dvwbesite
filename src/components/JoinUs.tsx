import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { CheckCircle2 } from 'lucide-react';

export function JoinUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const benefits = [
    'Access to exclusive workshops and events',
    'Mentorship from industry leaders',
    'Networking with top companies',
    'State-of-the-art facilities and resources',
    'Career development opportunities',
    'Startup incubation support',
  ];


  return (
    <section id="join" className="py-16 md:py-24 lg:py-32 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm tracking-[0.3em] text-gray-500 uppercase mb-4 block">
              Become a Member
            </span>
            <h2 className="text-5xl font-bold text-[#032c6a] mb-6">
              Join Digital Valley
            </h2>
            <div className="w-20 h-1 bg-[#032c6a] mb-8" />
            
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Take the first step toward becoming part of an elite community of innovators 
              and entrepreneurs. Apply now to unlock your potential.
            </p>

            <div className="space-y-6 mb-12">
              <div>
                <h3 className="text-xl font-bold text-[#032c6a] mb-4">Member Benefits</h3>
                <ul className="space-y-3">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3 text-gray-600">
                      <CheckCircle2 className="w-5 h-5 text-[#032c6a] flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}