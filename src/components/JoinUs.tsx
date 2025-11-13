import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

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

  const requirements = [
    'Currently enrolled university student',
    'Passion for technology and innovation',
    'Commitment to active participation',
    'Collaborative mindset',
  ];

  return (
    <section id="join" className="py-32 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
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

            <button className="group relative bg-[#032c6a] text-white px-10 py-4 rounded-md overflow-hidden inline-flex items-center gap-2">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#032c6a] via-[#0a4fb5] to-[#032c6a] bg-[length:200%_100%]"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
              <span className="relative z-10">Apply Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
            </button>
          </motion.div>

          {/* Right Content - Application Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative bg-gray-50 p-12 rounded-lg border border-gray-100 overflow-hidden"
          >
            {/* Subtle animated gradient background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-[#032c6a]/5 via-transparent to-[#0a4fb5]/5 opacity-50"
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%'],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            />
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-[#032c6a] mb-8">
                Application Requirements
              </h3>

              <ul className="space-y-4 mb-12">
                {requirements.map((requirement, index) => (
                  <motion.li
                    key={requirement}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-3 text-gray-600"
                  >
                    <div className="w-8 h-8 bg-[#032c6a] text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold">
                      {index + 1}
                    </div>
                    <span className="mt-1">{requirement}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h4 className="font-bold text-[#032c6a] mb-2">Application Process</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Submit your application online, attend an interview session, and join us 
                  for an orientation if selected. The entire process takes approximately 2-3 weeks.
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500">
                  Applications are reviewed on a rolling basis. Apply early for the best consideration.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="mt-32 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
    </section>
  );
}