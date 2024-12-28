import React from 'react';
import { Code, Cpu, Globe } from 'lucide-react';

export default function About() {
  const skills = [
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'Building responsive and intuitive user interfaces with modern frameworks.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    },
    {
      icon: Cpu,
      title: 'Backend Development',
      description: 'Designing scalable server-side applications and APIs.',
      technologies: ['Node.js', 'Python', 'PostgreSQL'],
    },
    {
      icon: Globe,
      title: 'DevOps & Cloud',
      description: 'Managing cloud infrastructure and deployment pipelines.',
      technologies: ['AWS', 'Docker', 'CI/CD'],
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-lg text-gray-600">
            I'm a passionate software engineer with a focus on creating efficient and scalable
            solutions. With years of experience in both frontend and backend development,
            I bring a comprehensive approach to every project.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.title}
                className="p-6 rounded-lg border border-gray-100 hover:border-gray-200 transition-colors"
              >
                <Icon className="w-8 h-8 text-gray-700 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {skill.title}
                </h3>
                <p className="text-gray-600 mb-4">{skill.description}</p>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}