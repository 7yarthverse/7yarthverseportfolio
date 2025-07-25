import React, { useState, useEffect } from 'react';
import { Download, Github, Linkedin, ChevronDown } from 'lucide-react';

const Header = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    "DevOps Engineer",
    "Cloud Enthusiast", 
    "AWS + Azure Developer",
    "CI/CD Specialist"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent">
              Hi, I'm Manav Bajpai 👋
            </h1>
            
            <div className="text-xl lg:text-2xl text-gray-300 mb-4">
              <span className="block mb-2">Cloud & DevOps Engineer</span>
              <div className="flex items-center justify-center lg:justify-start gap-2 text-blue-400">
                <span>I'm a </span>
                <span className="font-semibold text-red-400 min-w-[200px] text-left">
                  {roles[currentRole]}
                </span>
              </div>
            </div>

            <p className="text-lg text-gray-400 mb-8 max-w-2xl">
              AWS • Azure • CI/CD • Kubernetes • Terraform • Serverless
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
              <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                <Download size={20} />
                Download Resume
              </button>
              
              <div className="flex gap-4">
                <a
                  href="https://github.com/manav-bajpai"
                  className="bg-gray-800 hover:bg-gray-700 p-3 rounded-lg transition-all duration-300 transform hover:scale-110"
                  aria-label="GitHub"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://linkedin.com/in/manav-bajpai"
                  className="bg-red-600 hover:bg-red-700 p-3 rounded-lg transition-all duration-300 transform hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Hero Illustration */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500 to-red-500 rounded-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
            <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="bg-gray-900 rounded-xl p-6 transform -rotate-3">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-green-500 h-3 rounded-full animate-pulse"></div>
                  <div className="bg-yellow-500 h-3 rounded-full animate-pulse delay-300"></div>
                  <div className="bg-red-500 h-3 rounded-full animate-pulse delay-700"></div>
                </div>
                <div className="space-y-3">
                  <div className="bg-red-400 h-4 rounded w-3/4"></div>
                  <div className="bg-gray-600 h-3 rounded w-full"></div>
                  <div className="bg-gray-600 h-3 rounded w-2/3"></div>
                  <div className="bg-green-400 h-4 rounded w-1/2"></div>
                  <div className="bg-gray-600 h-3 rounded w-full"></div>
                  <div className="bg-gray-600 h-3 rounded w-3/4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('about')}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;