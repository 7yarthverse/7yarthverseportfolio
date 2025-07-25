import React from 'react';
import { Heart, Code, Cloud } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Code size={20} className="text-blue-400" />
            <span className="text-gray-400">Made with</span>
            <Heart size={16} className="text-red-500 animate-pulse" />
            <span className="text-gray-400">by</span>
            <span className="font-semibold text-white">Satyarth Mishra</span>
            <Cloud size={20} className="text-blue-400" />
          </div>
          
          <p className="text-gray-500 text-sm">
            © {currentYear} Satyarth Mishra. All rights reserved.
          </p>
          
          <div className="mt-4 text-xs text-gray-600">
            <p>Built with React, TypeScript, and Tailwind CSS</p>
            <p>Deployed with modern DevOps practices</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;