import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'contact@digitalvalley.edu',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+1 (555) 123-4567',
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'Student Center, Room 301',
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

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-[#032c6a] mb-2 font-semibold">
                  Your Name
                </label>
                <Input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white border-gray-200 focus:border-[#032c6a] focus:ring-[#032c6a]"
                  required
                />
              </div>

              <div>
                <label className="block text-[#032c6a] mb-2 font-semibold">
                  Email Address
                </label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white border-gray-200 focus:border-[#032c6a] focus:ring-[#032c6a]"
                  required
                />
              </div>

              <div>
                <label className="block text-[#032c6a] mb-2 font-semibold">
                  Subject
                </label>
                <Input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-white border-gray-200 focus:border-[#032c6a] focus:ring-[#032c6a]"
                  required
                />
              </div>

              <div>
                <label className="block text-[#032c6a] mb-2 font-semibold">
                  Message
                </label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full min-h-[180px] bg-white border-gray-200 focus:border-[#032c6a] focus:ring-[#032c6a]"
                  required
                />
              </div>

              <button
                type="submit"
                className="group relative w-full bg-[#032c6a] text-white px-8 py-4 rounded-md overflow-hidden inline-flex items-center justify-center gap-2"
              >
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
                <span className="relative z-10">Send Message</span>
                <Send className="w-4 h-4 relative z-10" />
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="group relative bg-white p-8 rounded-lg border border-gray-100 flex items-start gap-4 hover:shadow-md transition-shadow overflow-hidden"
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
              </motion.div>
            ))}

            {/* Office Hours */}
            <div className="relative bg-[#032c6a] p-8 rounded-lg text-white overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#0a4fb5] via-[#032c6a] to-[#032c6a] bg-[length:200%_200%]"
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-4">Office Hours</h3>
                <div className="space-y-2 text-white/90">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}