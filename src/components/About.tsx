import React from 'react';
import { User, Target, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-red-400 to-red-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-red-500 mx-auto"></div>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-gradient-to-br from-blue-600 to-red-600 p-1 rounded-2xl mb-8 lg:mb-0">
            <div className="bg-gradient-to-br from-red-600 to-red-700 p-1 rounded-2xl mb-8 lg:mb-0">
              <div className="bg-gray-800 rounded-2xl p-8">
                <User size={64} className="text-red-400 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Cloud & DevOps Passionate</h3>
                <p className="text-gray-300 leading-relaxed">
                  As a fresher in the Cloud and DevOps domain, I am passionate about automating infrastructure, 
                  streamlining deployment processes, and building scalable cloud solutions. My journey began with 
                  a curiosity about how modern applications are deployed and managed at scale.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-red-600 p-3 rounded-lg">
                <Target size={24} />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">My Mission</h4>
                <p className="text-gray-400">
                  To bridge the gap between development and operations by implementing efficient CI/CD pipelines, 
                  Infrastructure as Code, and cloud-native solutions that enhance productivity and reliability.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-red-700 p-3 rounded-lg">
                <Zap size={24} />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">What Drives Me</h4>
                <p className="text-gray-400">
                  I'm constantly learning and exploring new technologies in the cloud ecosystem. From containerization 
                  with Docker and Kubernetes to serverless architectures and infrastructure automation with Terraform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;