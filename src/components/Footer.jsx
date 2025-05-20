
import React from "react";
import { UserCircle, Github, Linkedin, Mail, ArrowUpCircle } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-12 pb-8 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <UserCircle className="h-7 w-7 text-primary" />
              <span className="text-xl font-bold text-white">Abhishek Kumar</span>
            </div>
            <p className="text-slate-400 mb-4 text-sm leading-relaxed">
              React & Next.js Developer passionate about building modern, responsive, and user-friendly web applications.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-slate-400 hover:text-primary transition-colors text-sm">About Me</a></li>
              <li><a href="#experience" className="text-slate-400 hover:text-primary transition-colors text-sm">Experience</a></li>
              <li><a href="#projects" className="text-slate-400 hover:text-primary transition-colors text-sm">Projects</a></li>
              <li><a href="#skills" className="text-slate-400 hover:text-primary transition-colors text-sm">Skills</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-primary transition-colors text-sm">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Connect With Me</h3>
            <div className="flex space-x-4 mb-4">
              <a href="https://github.com/shah-abhishek" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-slate-400 hover:text-primary transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com/in/abhishek-kumar-916308174" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-slate-400 hover:text-primary transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=support.abhishek@developerbuddy.com" aria-label="Email" className="text-slate-400 hover:text-primary transition-colors" rel="noopener noreferrer">
                <Mail className="h-6 w-6" />
              </a>
            </div>
            <p className="text-slate-400 text-sm">
              Feel free to reach out! I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Abhishek Kumar. All rights reserved.
          </p>
          <p className="text-slate-500 text-xs mt-1">
            Designed & Developed with <span className="text-red-500">&hearts;</span> by Abhishek Kumar.
          </p>
        </div>
      </div>
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="fixed bottom-6 right-6 bg-primary hover:bg-primary/90 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-slate-900 z-50"
      >
        <ArrowUpCircle className="h-6 w-6" />
      </button>
    </footer>
  );
}
