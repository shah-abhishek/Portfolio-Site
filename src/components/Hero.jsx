
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden bg-gradient-to-br from-sky-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-gray-900">
      <div className="blob top-1/4 left-1/4 w-96 h-96 opacity-30"></div>
      <div className="blob bottom-1/4 right-1/4 w-96 h-96 opacity-30 animation-delay-2000"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img className="w-40 h-40 rounded-full shadow-xl border-4 border-primary/50 object-cover" alt="Abhishek Kumar profile picture" src="/AbhishekProfilePic.jpeg" />
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            Hi, I'm <span className="gradient-text">Abhishek Kumar</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            A passionate React & Next.js Developer with 3 years of experience building modern web applications.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            <Button size="lg" asChild className="text-md group">
              <a href="#contact">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-md">
              <a href="/abhishek-kumar-resume.pdf" download>
                Download Resume
                <Download className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>

          <motion.div
            className="mt-12 flex items-center justify-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.7 }}
          >
            <a href="https://github.com/shah-abhishek" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="h-7 w-7" />
            </a>
            <a href="https://linkedin.com/in/abhishek-kumar-916308174" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-7 w-7" />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=support.abhishek@developerbuddy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-7 w-7" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
