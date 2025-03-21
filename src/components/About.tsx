
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (contentRef.current) {
            const children = contentRef.current.children;
            Array.from(children).forEach((child, index) => {
              setTimeout(() => {
                child.classList.add('animate-slide-in-left');
              }, index * 200);
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
    <section 
      id="about" 
      ref={sectionRef} 
      className="py-20 relative bg-gradient-to-b from-black to-gray-900 text-white min-h-screen flex items-center"
      onMouseMove={handleMouseMove}
    >
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(250, 204, 21, 0.1), transparent 30%)`
        }}
      />
      
      {/* Animated background elements */}
      <div className="absolute top-20 right-20 w-80 h-80 bg-yellow-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-red-600/5 rounded-full blur-3xl"></div>
      
      <div className="section-container relative z-10">
        <div className="flex flex-col items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-yellow-400">Me</span>
            </h2>
          </motion.div>
          
          <div className="w-full max-w-4xl mx-auto" ref={contentRef}>
            <motion.div 
              className="opacity-0 glass-dark p-8 rounded-2xl border border-gray-800 backdrop-blur-lg hover:border-yellow-500/20 transition-all duration-500"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <p className="text-lg mb-6 text-gray-300">
                I'm Jalapati Ravikumar, a passionate full-stack developer with expertise in Java backend and modern frontend technologies.
                With a strong foundation in creating elegant, efficient, and user-friendly solutions, I strive to 
                deliver high-quality applications that meet business needs.
              </p>
              <p className="text-lg mb-8 text-gray-300">
                My approach combines technical excellence with a deep understanding of user needs, 
                resulting in products that exceed expectations and deliver exceptional value.
                I'm constantly learning and improving my skills to stay up-to-date with the latest technologies.
              </p>
              <div className="flex justify-center">
                <motion.a 
                  href="https://github.com/JalapatiRavikumar/Resume/blob/main/final%20reseumeAll.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-medium hover:from-yellow-500 hover:to-yellow-600 transition-colors shadow-lg shadow-yellow-500/20"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Download Resume
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
