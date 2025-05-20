
import React from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Eye } from "lucide-react";

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-featured e-commerce website with product listings, cart functionality, user authentication, and an admin panel. Built with Next.js, TailwindCSS, and MongoDB.",
    image: "/projects/github.png",
    tags: ["Next.js", "React", "TailwindCSS", "MongoDB", "Stripe"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management tool with project boards, progress tracking, and real-time updates using React and Firebase.",
    image: "/projects/github.png",
    tags: ["React", "Firebase", "Framer Motion"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio site built using Vite, React, and TailwindCSS to showcase projects and skills.",
    image: "/projects/portfolio.png",
    tags: ["React", "Vite", "TailwindCSS", "Framer Motion"],
    liveLink: "https://abhishekportfolio.developerbudy.com",
    githubLink: "https://github.com/shah-abhishek/portfolio-vitejs",
  },
  {
    title: "Gaming Site",
    description: "A web platform to explore and play simple games. Built with HTML, CSS, and JavaScript.",
    image: "/projects/gaming-site.png",
    tags: ["JavaScript", "HTML", "CSS"],
    liveLink: "https://developerbudy.com/",
    githubLink: "https://github.com/shah-abhishek/Gaming-Site",
  },
  {
    title: "NPM Trend UI",
    description: "A React-based dashboard to visualize trends of npm packages. Includes filtering and charting capabilities.",
    image: "/projects/github.png",
    tags: ["React", "TypeScript", "Chart.js"],
    liveLink: "#",
    githubLink: "https://github.com/shah-abhishek/npm_trend_react_ui",
  },
  {
    title: "NPM Trend API",
    description: "The backend API for npm trend analysis using Node.js and Express, serves data for the UI dashboard.",
    image: "/projects/github.png",
    tags: ["Node.js", "Express", "REST API"],
    liveLink: "#",
    githubLink: "https://github.com/shah-abhishek/my_npm_trend_api",
  },
  {
    title: "Express Passport Auth",
    description: "A starter template demonstrating user authentication with Passport.js in an Express app.",
    image: "/projects/github.png",
    tags: ["Express", "Passport.js", "Authentication"],
    liveLink: "#",
    githubLink: "https://github.com/shah-abhishek/express-passport",
  },
  {
    title: "Download Chart as Image",
    description: "A utility to export charts and graphs as images or PDFs using Vega-Lite.",
    image: "/projects/github.png",
    tags: ["Vega-Lite", "Export", "HTML"],
    liveLink: "#",
    githubLink: "https://github.com/shah-abhishek/download-Chart-Into-Image",
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
                  <img className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" alt={project.title} src={project.image} />
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
