import React from 'react';
import { Github, Linkedin, Code, Trophy, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/prasannask17', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/prasanna-sa/', label: 'LinkedIn' },
    { icon: Code, href: 'https://leetcode.com/u/prasannask17/', label: 'LeetCode' },
    { icon: Trophy, href: 'https://www.codechef.com/users/prasannaa25', label: 'CodeChef' },
  ];

  return (
    <footer className="py-12 border-t-2 border-red-500 relative bg-black/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-red-500 via-blue-500 to-red-500 bg-clip-text text-transparent mb-2" style={{ fontFamily: 'Impact, sans-serif' }}>
              🕷️ PRASANNA
            </h3>
            <p className="text-cyan-400 font-bold">SPIDER-DEV EXTRAORDINAIRE</p>
          </div>

          <div className="flex items-center space-x-6">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-red-400 transition-all duration-300 hover:scale-110 p-2 border-2 border-transparent hover:border-red-400 rounded"
                aria-label={label}
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t-2 border-cyan-400 text-center">
          <p className="text-white flex items-center justify-center space-x-2 font-bold">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-400 fill-current" />
            <span>and</span>
            <span className="text-cyan-400">SPIDER-POWERS</span>
            <span>by Prasanna</span>
          </p>
          <p className="text-white/60 text-sm mt-2 font-medium">
            © 2024 All rights reserved. With great power comes great responsibility! 🕷️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;