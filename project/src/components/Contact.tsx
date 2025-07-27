// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Send, Mail, MapPin, Phone } from 'lucide-react';

// const Contact: React.FC = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Handle form submission
//     console.log('Form submitted:', formData);
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const contactInfo = [
//     {
//       icon: Mail,
//       title: 'Email',
//       info: 'prasannask17@email.com',
//       link: 'mailto:prasannask17@email.com'
//     },
//     {
//       icon: Phone,
//       title: 'Phone',
//       info: '+91 93427 34534',
//       link: 'tel:+919342734534'
//     },
//     {
//       icon: MapPin,
//       title: 'Location',
//       info: 'India',
//       link: '#'
//     }
//   ];

//   return (
//     <section id="contact" className="py-20 relative">
//       <div className="container mx-auto px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Impact, sans-serif' }}>
//             WEB <span className="bg-gradient-to-r from-red-500 via-blue-500 to-red-500 bg-clip-text text-transparent">WITH ME</span>
//           </h2>
//           <div className="w-32 h-2 bg-gradient-to-r from-red-500 via-blue-500 to-red-500 mx-auto mb-8 rounded-full" />
//           <div className="bg-black/70 border-2 border-cyan-400 rounded-lg p-6 max-w-3xl mx-auto">
//             <p className="text-white text-lg font-bold">
//               🕷️ Ready to swing into action? Let's collaborate and create something <span className="text-red-400">spectacular</span> together! 🕸️
//             </p>
//           </div>
//         </motion.div>

//         <div className="grid lg:grid-cols-2 gap-12">
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="space-y-8"
//           >
//             <div className="bg-black/70 border-2 border-red-400 rounded-xl p-8">
//               <h3 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: 'Impact, sans-serif' }}>
//                 🚀 LET'S CONNECT!
//               </h3>
//               <p className="text-white/80 mb-8 font-medium">
//                 I'm always interested in new opportunities and exciting projects. 
//                 Whether you have a question or just want to say hi, I'll try my best to get back to you!
//               </p>
//             </div>

//             <div className="space-y-6">
//               {contactInfo.map((item, index) => (
//                 <motion.a
//                   key={item.title}
//                   href={item.link}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   viewport={{ once: true }}
//                   whileHover={{ scale: 1.05 }}
//                   className="flex items-center space-x-4 p-6 bg-black/70 backdrop-blur-sm rounded-lg border-2 border-blue-500 hover:border-cyan-400 transition-all duration-300 group"
//                 >
//                   <div className="flex-shrink-0">
//                     <item.icon className="w-6 h-6 text-cyan-400 group-hover:text-red-400 transition-colors duration-300" />
//                   </div>
//                   <div>
//                     <h4 className="text-white font-bold">{item.title}</h4>
//                     <p className="text-white/70 font-medium">{item.info}</p>
//                   </div>
//                 </motion.a>
//               ))}
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             viewport={{ once: true }}
//             className="bg-black/70 border-2 border-cyan-400 rounded-xl p-8"
//           >
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="Your Name"
//                   required
//                   className="w-full px-4 py-3 bg-black/50 border-2 border-blue-500 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-red-500 transition-all duration-300 font-medium"
//                 />
//               </div>
              
//               <div>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="Your Email"
//                   required
//                   className="w-full px-4 py-3 bg-black/50 border-2 border-blue-500 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-red-500 transition-all duration-300 font-medium"
//                 />
//               </div>
              
//               <div>
//                 <textarea
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   placeholder="Your Message"
//                   required
//                   rows={5}
//                   className="w-full px-4 py-3 bg-black/50 border-2 border-blue-500 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-red-500 transition-all duration-300 resize-none font-medium"
//                 />
//               </div>
              
//               <motion.button
//                 type="submit"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="w-full px-8 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg font-bold hover:shadow-2xl hover:shadow-red-500/25 transition-all duration-300 flex items-center justify-center space-x-2 border-2 border-red-400"
//                 style={{ fontFamily: 'Impact, sans-serif' }}
//               >
//                 <Send size={20} />
//                 <span>SEND MESSAGE</span>
//               </motion.button>
//             </form>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_gmdeqnz',      // Your service ID
        'template_6apxnqm',     // Your template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        '9ADwzlgoLeDIu7KP1'     // Your public key
      );
      
      alert('Message sent successfully! 🚀');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send message. Please try again. 😔');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      info: 'prasannask17@email.com',
      link: 'mailto:prasannask17@email.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      info: '+91 93427 34534',
      link: 'tel:+919342734534'
    },
    {
      icon: MapPin,
      title: 'Location',
      info: 'India',
      link: '#'
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Impact, sans-serif' }}>
            WEB <span className="bg-gradient-to-r from-red-500 via-blue-500 to-red-500 bg-clip-text text-transparent">WITH ME</span>
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-red-500 via-blue-500 to-red-500 mx-auto mb-8 rounded-full" />
          <div className="bg-black/70 border-2 border-cyan-400 rounded-lg p-6 max-w-3xl mx-auto">
            <p className="text-white text-lg font-bold">
              🕷️ Ready to swing into action? Let's collaborate and create something <span className="text-red-400">spectacular</span> together! 🕸️
            </p>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-black/70 border-2 border-red-400 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: 'Impact, sans-serif' }}>
                🚀 LET'S CONNECT!
              </h3>
              <p className="text-white/80 mb-8 font-medium">
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.title}
                  href={item.link}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-4 p-6 bg-black/70 backdrop-blur-sm rounded-lg border-2 border-blue-500 hover:border-cyan-400 transition-all duration-300 group"
                >
                  <div className="flex-shrink-0">
                    <item.icon className="w-6 h-6 text-cyan-400 group-hover:text-red-400 transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">{item.title}</h4>
                    <p className="text-white/70 font-medium">{item.info}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-black/70 border-2 border-cyan-400 rounded-xl p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-black/50 border-2 border-blue-500 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-red-500 transition-all duration-300 font-medium disabled:opacity-50"
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-black/50 border-2 border-blue-500 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-red-500 transition-all duration-300 font-medium disabled:opacity-50"
                />
              </div>
              
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  rows={5}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-black/50 border-2 border-blue-500 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-red-500 transition-all duration-300 resize-none font-medium disabled:opacity-50"
                />
              </div>
              
              <motion.button
                type="submit"
                whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                disabled={isSubmitting}
                className="w-full px-8 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg font-bold hover:shadow-2xl hover:shadow-red-500/25 transition-all duration-300 flex items-center justify-center space-x-2 border-2 border-red-400 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ fontFamily: 'Impact, sans-serif' }}
              >
                <Send size={20} />
                <span>{isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;