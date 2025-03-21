
import React, { useEffect, useRef } from 'react';

interface SkillCardProps {
  name: string;
  icon: string;
  delay: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ name, icon, delay }) => {
  return (
    <div 
      className="bg-gray-800/50 p-6 rounded-lg text-center opacity-0 transform translate-y-4 hover:bg-gray-700/50 transition-all duration-300"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-16 h-16 mx-auto mb-4">
        <img src={icon} alt={name} className="w-full h-full object-contain" />
      </div>
      <h3 className="text-white uppercase text-sm font-medium">{name}</h3>
    </div>
  );
};

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (skillsRef.current) {
            const skillElements = skillsRef.current.querySelectorAll('.opacity-0');
            skillElements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('opacity-100', 'translate-y-0');
                el.classList.add('animate-fade-in');
              }, index * 100);
            });
          }
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
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

  // Updated skill icons with more reliable sources
  const skills = [
    { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'React JS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Node JS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'JDBC', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'Hibernate', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
    { name: 'Spring', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
    { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-black text-white">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4 text-4xl font-bold">
              My <span className="text-yellow-400">Skills</span>
            </h2>
            <p className="text-gray-300 text-lg">
              Writing code using languages: Java, SQL, HTML, CSS, JavaScript, React, JDBC, Hibernate, Spring, Spring Boot, TypeScript, and Node.js
            </p>
          </div>
          
          <div 
            ref={skillsRef}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
          >
            {skills.map((skill, index) => (
              <SkillCard
                key={skill.name}
                name={skill.name}
                icon={skill.icon}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
