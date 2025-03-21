
import React, { useEffect, useRef } from 'react';

const ExperienceItem = ({
  role,
  company,
  period,
  description,
  skills,
  delay,
}: {
  role: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
  delay: number;
}) => {
  return (
    <div
      className="p-6 rounded-xl bg-gray-800/50 opacity-0 border border-gray-700"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3">
        <h3 className="text-xl font-semibold text-white">{role}</h3>
        <span className="text-sm text-yellow-400">{period}</span>
      </div>
      <p className="text-lg font-medium text-blue-400 mb-3">{company}</p>
      <p className="mb-4 text-gray-300">{description}</p>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-gray-700 rounded-full text-xs font-medium text-gray-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const Experience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (itemsRef.current) {
            const items = itemsRef.current.children;
            Array.from(items).forEach((item) => {
              item.classList.add('animate-slide-in-bottom');
            });
          }
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="py-20 bg-gray-900 text-white">
      <div className="section-container">
        <div className="max-w-xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Work <span className="text-yellow-400">Experience</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Professional journey and skills gained along the way
          </p>
        </div>
        <div ref={itemsRef} className="space-y-6 max-w-3xl mx-auto">
          <ExperienceItem
            role="Full Stack Developer Intern"
            company="Hybrid Tech Solutions"
            period="Feb 2024 - Dec 2024"
            description="Developed and maintained full-stack web applications using modern technologies. Collaborated with cross-functional teams to implement features and fix bugs. Participated in code reviews and optimized application performance."
            skills={[
              "Java",
              "SQL",
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "JDBC",
              "Hibernate",
              "Spring",
              "Spring Boot",
              "TypeScript",
              "Node.js",
              "Express.js"
            ]}
            delay={0}
          />
          <div className="bg-gray-800/30 h-0.5 w-full max-w-md mx-auto opacity-0 animate-fade-in" style={{ animationDelay: '300ms' }}></div>
          <div className="text-center opacity-0 animate-fade-in" style={{ animationDelay: '600ms' }}>
            <a href="https://github.com/JalapatiRavikumar/Resume/blob/main/certificate.pdf" target="_blank" rel="noopener noreferrer" className="inline-block">
              <div className="button-effect px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm font-medium text-white">
                View Certificate
                <svg className="inline-block ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
