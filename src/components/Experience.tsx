import React from 'react';

export default function Experience() {
  const experiences = [
    {
      company: 'Tech Company',
      position: 'Senior Software Engineer',
      period: '2021 - Present',
      description:
        'Leading development of scalable web applications, mentoring junior developers, and implementing best practices.',
      achievements: [
        'Reduced application load time by 40%',
        'Implemented CI/CD pipeline',
        'Led team of 5 developers',
      ],
    },
    {
      company: 'Startup Inc',
      position: 'Software Engineer',
      period: '2019 - 2021',
      description:
        'Developed and maintained multiple client-facing applications using React and Node.js.',
      achievements: [
        'Built real-time analytics dashboard',
        'Improved test coverage to 90%',
        'Optimized database queries',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Work Experience
        </h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="mb-12 last:mb-0 relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-gray-200"
            >
              <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-gray-300 -translate-x-[5px]" />
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {exp.position}
                    </h3>
                    <p className="text-gray-600">{exp.company}</p>
                  </div>
                  <span className="text-sm text-gray-500 mt-2 sm:mt-0">{exp.period}</span>
                </div>
                <p className="text-gray-600 mb-4">{exp.description}</p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}