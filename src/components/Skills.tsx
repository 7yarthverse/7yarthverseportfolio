import React from 'react';
import { 
  Code, 
  Cloud, 
  Settings, 
  Activity, 
  Shield, 
  Wrench 
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code size={24} />,
      skills: ["Python", "JavaScript", "TypeScript", "Bash/Shell", "YAML", "JSON"],
      color: "from-red-500 to-red-600"
    },
    {
      title: "Cloud Platforms",
      icon: <Cloud size={24} />,
      skills: ["AWS", "Microsoft Azure", "AWS Lambda", "Azure Functions", "S3", "EC2"],
      color: "from-green-500 to-green-600"
    },
    {
      title: "DevOps Tools",
      icon: <Settings size={24} />,
      skills: ["Docker", "Kubernetes", "Jenkins", "GitHub Actions", "GitLab CI", "Ansible"],
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Infrastructure & Monitoring",
      icon: <Activity size={24} />,
      skills: ["Terraform", "CloudFormation", "Prometheus", "Grafana", "ELK Stack", "CloudWatch"],
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "Security",
      icon: <Shield size={24} />,
      skills: ["AWS IAM", "Azure AD", "Security Groups", "SSL/TLS", "Vulnerability Scanning"],
      color: "from-red-500 to-red-600"
    },
    {
      title: "Other Tools",
      icon: <Wrench size={24} />,
      skills: ["Git", "Linux", "Nginx", "Apache", "MySQL", "PostgreSQL"],
      color: "from-teal-500 to-teal-600"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-red-400 to-red-500 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-red-500 mx-auto"></div>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-gray-800 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-blue-500"
              className="bg-gray-800 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-red-500"
            >
              <div className={`bg-gradient-to-r ${category.color} p-3 rounded-lg w-fit mb-4`}>
                {category.icon}
              </div>
              
              <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-gray-700 text-sm px-3 py-1 rounded-full hover:bg-blue-600 transition-colors duration-200"
                    className="bg-gray-700 text-sm px-3 py-1 rounded-full hover:bg-red-600 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;