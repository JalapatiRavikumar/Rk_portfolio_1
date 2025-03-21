
import React, { useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
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
    <section
      id="home"
      ref={sectionRef}
      className="min-h-screen flex items-center py-20 opacity-0 transition-opacity duration-1000 bg-black text-white"
    >
      <div className="section-container">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="w-full lg:w-3/5 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="text-yellow-400">RK</span><span className="text-red-500">portfolio</span>
            </h1>
            <div className="my-6">
              <h2 className="text-2xl md:text-3xl font-semibold mb-2">
                Hi, I am <span className="text-yellow-400">Jalapati Ravikumar</span>
              </h2>
              <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-red-500">
                A Full Stack Developer
              </h3>
            </div>
            <p className="text-lg text-gray-300 mb-8 max-w-xl">
              Passionate about creating elegant, efficient, and user-friendly
              web applications. Specializing in Java backend development and
              modern frontend technologies.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact">
                <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold">
                  Contact Me
                </Button>
              </a>
              <a href="https://github.com/JalapatiRavikumar/Resume/blob/main/final%20reseumeAll.pdf" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400/10">
                  Resume
                </Button>
              </a>
            </div>
          </div>
          <div className="w-full lg:w-2/5 flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-yellow-400 shadow-xl">
              <img
                src="/lovable-uploads/15aadfd8-d30d-4f2f-b5ab-accf96b2ea1d.png"
                alt="Jalapati Ravikumar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="flex flex-col items-center text-white/70 hover:text-white transition-colors">
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
