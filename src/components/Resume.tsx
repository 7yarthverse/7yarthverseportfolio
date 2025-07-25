import React from 'react';
import { Download, FileText } from 'lucide-react';

const Resume = () => {
  return (
    <section id="resume" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-red-600 p-1 rounded-2xl">
            <div className="bg-gray-900 rounded-2xl p-12">
              <FileText size={64} className="mx-auto mb-6 text-blue-400" />
              
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent">
                Download My Resume
              </h2>
              
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Get a detailed overview of my technical skills, projects, and experience in Cloud & DevOps engineering. 
                My resume showcases my journey in automation, infrastructure, and cloud technologies.
              </p>
              
              <a
                href="https://github.com/satyarth-mishra/resume/raw/main/Satyarth_Mishra_Resume.pdf"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
              >
                <Download size={24} />
                Download Resume (PDF)
              </a>
              
              <div className="mt-6 text-sm text-gray-500">
                <p>Last updated: January 2025 • PDF Format • 2 pages</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;