
import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  githubLink: string;
}

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };
  
  return (
    <motion.div 
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      className="bg-gray-800/70 backdrop-blur-sm rounded-xl overflow-hidden group mb-12 border border-gray-700/50 relative hover:shadow-xl hover:shadow-yellow-400/10 transition-all duration-500"
    >
      <div 
        className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(250, 204, 21, 0.15), transparent 50%)`
        }}
      />
      
      <div className="aspect-video relative overflow-hidden">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
      </div>
      
      <div className="p-6 relative">
        <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-yellow-400 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-gray-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, techIndex) => (
            <span 
              key={techIndex} 
              className="px-3 py-1 text-xs rounded-full bg-gray-700/50 text-gray-300 border border-gray-600/50"
            >
              {tech}
            </span>
          ))}
        </div>
        <a 
          href={project.githubLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-400 hover:text-yellow-400 transition-colors group-hover:translate-x-1 duration-300"
        >
          more info on GitHub <ArrowRight size={16} className="ml-1" />
        </a>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const projects: Project[] = [
    {
      title: "Food Delivery App",
      description: "A comprehensive food delivery application with restaurant listings, ordering system, and real-time tracking.",
      technologies: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
      imageUrl: "/lovable-uploads/b58c946a-2002-43d4-ae4d-cf981d22bbfb.png",
      githubLink: "https://github.com/JalapatiRavikumar/food_delivary/blob/main/Food%20Delivery%20App.tsx"
    },
    {
      title: "YouTube Clone",
      description: "A responsive clone of YouTube featuring video listings, search functionality, and user interface elements.",
      technologies: ["HTML", "CSS", "JavaScript"],
      imageUrl: "https://cdn.jsdelivr.net/gh/github-workflow/GitHub-Dark-Mode@main/Images/Youtube.png",
      githubLink: "https://github.com/JalapatiRavikumar/Main-projects/tree/main/youtube-clone-html-css-main"
    },
    {
      title: "RKShopCart E-commerce",
      description: "A modern e-commerce platform with product browsing, cart functionality, and checkout process.",
      technologies: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
      imageUrl: "/lovable-uploads/15aadfd8-d30d-4f2f-b5ab-accf96b2ea1d.png",
      githubLink: "https://github.com/JalapatiRavikumar/rkshopcart/tree/main"
    }
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-gradient-to-b from-black to-gray-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-600/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      
      <div className="section-container relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            My <span className="text-yellow-400">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg mb-12">
            Here are some of my best projects, the rest of the projects are available on GitHub
          </p>
        </motion.div>
        
        <div 
          ref={projectsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
