import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Mail, Instagram } from 'lucide-react';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'digitalvalley@esgen.edu.dz',
      link: 'mailto:digitalvalley@esgen.edu.dz',
    },
    {
      icon: Instagram,
      title: 'Instagram',
      content: '@digitalvalley_esgen',
      link: 'https://instagram.com/digitalvalley_esgen',
    },
  ];

  return (
    <section id="contact" className="py-32 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-sm tracking-[0.3em] text-gray-500 uppercase mb-4 block">
            Get in Touch
          </span>
          <h2 className="text-5xl font-bold text-[#032c6a] mb-6">
            Contact Us
          </h2>
          <div className="w-20 h-1 bg-[#032c6a] mx-auto mb-8" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Have questions? We'd love to hear from you. Send us a message and 
            we'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.title}
                href={info.link}
                target={info.link.startsWith('http') ? '_blank' : undefined}
                rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="group relative bg-white p-8 rounded-lg border border-gray-100 flex items-start gap-4 hover:shadow-md transition-shadow overflow-hidden block"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#032c6a]/5 to-[#0a4fb5]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
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
                  <info.icon className="w-6 h-6 text-white relative z-10" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-lg font-bold text-[#032c6a] mb-1">
                    {info.title}
                  </h3>
                  <p className="text-gray-600">{info.content}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Google Maps */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-lg overflow-hidden shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3201.449225079774!2d2.7843314409255937!3d36.63964215630034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fa1c2c290430f%3A0xfdd24b79744bdead!2zw4ljb2xlIFN1cMOpcmlldXJlIGRlIEdlc3Rpb24gZXQgZOKAmcOJY29ub21pZSBOdW3DqXJpcXVl!5e0!3m2!1sen!2sch!4v1763090523928!5m2!1sen!2sch"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full min-h-[450px]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}