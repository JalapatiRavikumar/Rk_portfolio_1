
import React, { useEffect, useRef } from 'react';

interface EducationItemProps {
  institution: string;
  location: string;
  degree: string;
  score: string;
  year: string;
  delay: number;
  position: 'left' | 'right';
}

const EducationItem: React.FC<EducationItemProps> = ({
  institution,
  location,
  degree,
  score,
  year,
  delay,
  position,
}) => {
  return (
    <div className="relative pb-12">
      {/* Timeline dot */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-yellow-400 rounded-full z-10"></div>
      
      {/* Timeline connector */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-700 -z-10"></div>
      
      {/* Content */}
      <div 
        className={`${position === 'left' ? 'pr-8 text-right md:mr-auto md:ml-0' : 'pl-8 text-left md:ml-auto md:mr-0'} 
                   opacity-0 transform translate-y-4 md:w-5/12 w-full`}
        style={{ animationDelay: `${delay}ms` }}
      >
        <div className="mb-1">
          <h3 className="text-xl font-semibold text-white">{institution}</h3>
          <p className="text-sm text-gray-400">{location}</p>
        </div>
        
        <div className={`flex ${position === 'left' ? 'justify-end' : 'justify-start'} mt-3`}>
          <div>
            <p className="font-medium text-white">{degree}</p>
            <p className="text-yellow-400">{score}</p>
            <p className="text-sm text-gray-400">{year}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Education = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (timelineRef.current) {
            const items = timelineRef.current.querySelectorAll('.opacity-0');
            items.forEach((item) => {
              item.classList.add('opacity-100', 'translate-y-0');
              item.classList.add('animate-fade-in');
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
    <section id="education" ref={sectionRef} className="py-20 bg-gray-900 text-white">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="text-left mb-16">
            <h2 className="text-4xl font-bold border-b-2 border-yellow-400 inline-block pb-2">
              My Education
            </h2>
          </div>
          
          <div ref={timelineRef} className="relative">
            <EducationItem
              institution="Santhiram Engineering College"
              location="Nandyal, India"
              degree="Computer Science Engineering"
              score="7.1"
              year="June 2020 - August 2024"
              delay={0}
              position="right"
            />
            <EducationItem
              institution="National Junior College"
              location="Nandyal, India"
              degree="Mathematics"
              score="8.70"
              year="June 2019 - August 2020"
              delay={200}
              position="left"
            />
            <EducationItem
              institution="ZPHS High School"
              location="Nandyal, India"
              degree="General"
              score="8.5"
              year="May 2017 - Dec 2020"
              delay={400}
              position="right"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
