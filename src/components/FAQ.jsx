
import React from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Eye } from "lucide-react";

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-featured e-commerce website with product listings, cart functionality, user authentication, and an admin panel for managing products and orders. Built with Next.js, TailwindCSS, and MongoDB.",
    image: "e-commerce-project",
    tags: ["Next.js", "React", "TailwindCSS", "MongoDB", "Stripe"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application allowing users to create projects, assign tasks, track progress, and communicate with team members. Developed using React, Firebase, and Framer Motion.",
    image: "task-management-app",
    tags: ["React", "Firebase", "Framer Motion", "Realtime DB"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Personal Portfolio Website",
    description: "This very portfolio website, designed to showcase my skills and projects. Built with React, Vite, TailwindCSS, and Framer Motion for smooth animations.",
    image: "portfolio-website",
    tags: ["React", "Vite", "TailwindCSS", "Framer Motion"],
    liveLink: "#",
    githubLink: "#",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-900 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            My <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A selection of projects I've worked on, showcasing my skills and passion for development.
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              variants={item}
              className="h-full"
            >
              <Card className="flex flex-col h-full overflow-hidden shadow-lg card-hover service-card">
                <div className="aspect-video overflow-hidden">
                  <img  class="w-full h-full object-cover transition-transform duration-300 hover:scale-105" alt={project.title} src="https://images.unsplash.com/photo-1697256200022-f61abccad430" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">{tag}</span>
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription>{project.description}</CardDescription>
                </CardContent>
                <CardFooter className="flex justify-end gap-2 p-4 border-t">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <Eye className="h-4 w-4 mr-1" /> Live
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-1" /> Code
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
