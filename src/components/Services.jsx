
import React from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Code, Layers, Database, Server, Smartphone, GitBranch } from "lucide-react";

const skills = [
  {
    icon: <Code className="h-10 w-10 text-primary" />,
    title: "Frontend Development",
    description: "React.js, Next.js, JavaScript (ES6+), HTML5, CSS3, TailwindCSS, Framer Motion.",
  },
  {
    icon: <Server className="h-10 w-10 text-primary" />,
    title: "Backend Development",
    description: "Node.js, Express.js, RESTful APIs. Familiar with serverless functions.",
  },
  {
    icon: <Database className="h-10 w-10 text-primary" />,
    title: "Databases",
    description: "MongoDB, PostgreSQL, Firebase. Experience with ORMs like Mongoose.",
  },
  {
    icon: <Layers className="h-10 w-10 text-primary" />,
    title: "UI/UX Principles",
    description: "Responsive Design, User-Centered Design, Prototyping with Figma.",
  },
  {
    icon: <Smartphone className="h-10 w-10 text-primary" />,
    title: "Mobile-First Approach",
    description: "Developing applications that look and perform great on all devices.",
  },
  {
    icon: <GitBranch className="h-10 w-10 text-primary" />,
    title: "Developer Tools",
    description: "Git, GitHub, VS Code, npm/yarn, Webpack, Vite, Docker (basic).",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-900 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            My <span className="gradient-text">Skills</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A glimpse into my technical toolkit and areas of expertise.
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div 
              key={index} 
              variants={item}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Card className="h-full service-card">
                <CardHeader>
                  <div className="mb-4 flex justify-center md:justify-start">{skill.icon}</div>
                  <CardTitle className="text-xl text-center md:text-left">{skill.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center md:text-left">{skill.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
