// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { Github, Linkedin, Code, Trophy, Menu, X } from 'lucide-react';

// const Header: React.FC = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const socialLinks = [
//     { icon: Github, href: 'https://github.com/prasannask17', label: 'GitHub' },
//     { icon: Linkedin, href: 'https://linkedin.com/in/prasanna-sa/', label: 'LinkedIn' },
//     { icon: Code, href: 'https://leetcode.com/u/prasannask17/', label: 'LeetCode' },
//     { icon: Trophy, href: 'https://www.codechef.com/users/prasannaa25', label: 'CodeChef' },
//   ];

//   const navItems = ['ABOUT', 'SKILLS', 'PROJECTS', 'CONTACT'];

//   return (
//     <motion.header
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.8, ease: "easeOut" }}
//       className={`fixed top-0 w-full z-50 transition-all duration-300 ${
//         isScrolled 
//           ? 'bg-black/90 backdrop-blur-md border-b-2 border-red-500 shadow-lg shadow-red-500/20' 
//           : 'bg-transparent'
//       }`}
//     >
//       <nav className="container mx-auto px-1">
//         <div className="flex items-center justify-between">
//           {/* Logo */}
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             className="text-2xl font-bold bg-gradient-to-r from-red-500 via-blue-500 to-red-500 bg-clip-text text-transparent"
//             style={{ fontFamily: 'Impact, sans-serif' }}
//           >
//             🕷️ PRASANNA
//           </motion.div>
          
//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-4">
//             {navItems.map((item, index) => (
//               <motion.a
//                 key={item}
//                 href={`#${item.toLowerCase()}`}
//                 initial={{ opacity: 0, y: -20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1, duration: 0.5 }}
//                 whileHover={{ scale: 1.05 }}
//                 className="text-white hover:text-red-400 transition-colors duration-300 font-bold relative group border-2 border-transparent hover:border-red-400 px-3 py-1 rounded"
//                 style={{ fontFamily: 'Impact, sans-serif' }}
//               >
//                 {item}
//               </motion.a>
//             ))}
//           </div>

//           {/* Social Links & Mobile Menu */}
//           <div className="flex items-right">
//             {/* Desktop Social Links */}
//             <div className="hidden sm:flex items-center space-x-3">
//               {socialLinks.map(({ icon: Icon, href, label }, index) => (
//                 <motion.a
//                   key={label}
//                   href={href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   initial={{ opacity: 0, scale: 0 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
//                   whileHover={{ scale: 1.2, rotate: 360 }}
//                   whileTap={{ scale: 0.9 }}
//                   className="text-white hover:text-cyan-400 transition-colors duration-300 p-2 border-2 border-transparent hover:border-cyan-400 rounded"
//                   aria-label={label}
//                 >
//                   <Icon size={20} />
//                 </motion.a>
//               ))}
//             </div>

//             {/* Mobile Menu Button */}
//             <motion.button
//               whileTap={{ scale: 0.9 }}
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               className="md:hidden text-white hover:text-red-400 transition-colors p-2 border-2 border-red-400 rounded"
//             >
//               {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//             </motion.button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         <motion.div
//           initial={false}
//           animate={isMobileMenuOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
//           transition={{ duration: 0.3 }}
//           className="md:hidden overflow-hidden"
//         >
//           <div className="py-6 space-y-6 bg-black/90 rounded-lg mt-4 border-2 border-red-500">
//             {navItems.map((item) => (
//               <a
//                 key={item}
//                 href={`#${item.toLowerCase()}`}
//                 onClick={() => setIsMobileMenuOpen(false)}
//                 className="block text-white hover:text-red-400 transition-colors py-2 px-6 font-bold"
//                 style={{ fontFamily: 'Impact, sans-serif' }}
//               >
//                 {item}
//               </a>
//             ))}
            
//             {/* Mobile Social Links */}
//             <div className="flex items-center justify-center space-x-6 pt-4">
//               {socialLinks.map(({ icon: Icon, href, label }) => (
//                 <a
//                   key={label}
//                   href={href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-white hover:text-cyan-400 transition-colors p-2"
//                   aria-label={label}
//                 >
//                   <Icon size={20} />
//                 </a>
//               ))}
//             </div>
//           </div>
//         </motion.div>
//       </nav>
//     </motion.header>
//   );
// };

// export default Header;
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Code, Trophy, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const socialLinks = [
    { icon: Github, href: 'https://github.com/prasannask17', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/prasanna-sa/', label: 'LinkedIn' },
    { icon: Code, href: 'https://leetcode.com/u/prasannask17/', label: 'LeetCode' },
    { icon: Trophy, href: 'https://www.codechef.com/users/prasannaa25', label: 'CodeChef' },
  ];

  const navItems = ['ABOUT', 'SKILLS', 'PROJECTS', 'CONTACT'];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-md border-b-2 border-red-500 shadow-lg shadow-red-500/20' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Left Side */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold bg-gradient-to-r from-red-500 via-blue-500 to-red-500 bg-clip-text text-transparent"
            style={{ fontFamily: 'Impact, sans-serif' }}
          >
            🕷️ PRASANNA
          </motion.div>
          
          {/* Desktop Navigation - Center */}
          <div className="flex items-center space-x-4">
            {navItems.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="text-white hover:text-red-400 transition-colors duration-300 font-bold relative group border-2 border-transparent hover:border-red-400 px-3 py-1 rounded"
                style={{ fontFamily: 'Impact, sans-serif' }}
              >
                {item}
              </motion.a>
            ))}
          </div>

          {/* Social Links & Mobile Menu - Right Side */}
          {/* <div className="flex items-center space-x-4">
            {/* Desktop Social Links */}
            {/* <div className="hidden sm:flex items-center space-x-3"> */}
              {/* {socialLinks.map(({ icon: Icon, href, label }, index) => ( */}
                {/* <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer" */}
                  {/* initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-white hover:text-cyan-400 transition-colors duration-300 p-2 border-2 border-transparent hover:border-cyan-400 rounded"
                  aria-label={label} */}
                {/* >
                  <Icon size={20} />
                </motion.a>
              ))} */} 
            {/* </div> */}

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white hover:text-red-400 transition-colors p-2 border-2 border-red-400 rounded"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        {/* </div> */}

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={isMobileMenuOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4 bg-black/90 rounded-lg mt-4 border-2 border-red-500">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-white hover:text-red-400 transition-colors py-2 px-6 font-bold"
                style={{ fontFamily: 'Impact, sans-serif' }}
              >
                {item}
              </a>
            ))}
            
            {/* Mobile Social Links */}
            <div className="flex items-center justify-center space-x-6 pt-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-cyan-400 transition-colors p-2"
                  aria-label={label}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </nav>
    </motion.header>
  );
};

export default Header;