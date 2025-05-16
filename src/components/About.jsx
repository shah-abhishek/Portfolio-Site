
import React from "react";
import { motion } from "framer-motion";
import { Award, Briefcase, Calendar, GraduationCap, Mail, MapPin, Phone, UserCheck } from "lucide-react";

export default function About() {
  const personalDetails = [
    { icon: <Mail className="h-5 w-5 text-primary" />, label: "Email", value: "abhikumar0123252@gmail.com" },
    { icon: <GraduationCap className="h-5 w-5 text-primary" />, label: "Graduation", value: "2022 Batch" },
    { icon: <Briefcase className="h-5 w-5 text-primary" />, label: "Experience", value: "3 Years (React & Next.js)" },
    { icon: <Calendar className="h-5 w-5 text-primary" />, label: "Joined Varaisys", value: "Jan 17, 2022" },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <motion.div 
            className="flex-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-primary rounded-xl transform rotate-3 transition-transform duration-500 hover:rotate-0"></div>
              <img  className="rounded-xl shadow-2xl relative z-10 object-cover w-full max-h-[500px]" alt="Abhishek Kumar working on a project" src="https://images.unsplash.com/photo-1699658278185-5a392c0a1aff" />
            </div>
          </motion.div>
          
          <motion.div 
            className="flex-1 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            
            <p className="text-lg mb-6 text-muted-foreground">
              I'm Abhishek Kumar, a dedicated React and Next.js Developer with a strong passion for creating intuitive and high-performance web applications. With 3 years of hands-on experience at Varaisys Pvt Ltd, I've honed my skills in frontend technologies and agile development practices.
            </p>
            
            <p className="text-lg mb-8 text-muted-foreground">
              I graduated in 2022 and quickly transitioned into a professional development role, eager to contribute to impactful projects and continuously learn new technologies. I thrive in collaborative environments and am always looking for opportunities to solve complex problems with elegant solutions.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mb-8">
              {personalDetails.map((detail, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start gap-3 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {detail.icon}
                  <div>
                    <span className="font-medium block text-sm">{detail.label}</span>
                    <span className="text-muted-foreground text-sm">{detail.value}</span>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.a
              href="/abhishek-kumar-resume.pdf"
              download
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download My Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
