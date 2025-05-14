
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, MapPin, Send, Linkedin, Github, UserCircle } from "lucide-react";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Basic formspree.io integration (replace with your Formspree endpoint)
    // For a real project, you'd use a more robust solution or a backend.
    // This is a placeholder for demonstration.
    const formSpreeEndpoint = "https://formspree.io/f/YOUR_FORM_ID"; // Replace YOUR_FORM_ID

    if (formSpreeEndpoint.includes("YOUR_FORM_ID")) {
        console.warn("Formspree endpoint not configured. Please replace YOUR_FORM_ID.");
        // Simulate success for demo purposes if not configured
        setTimeout(() => {
            setIsSubmitting(false);
            toast({
                title: "Message Sent (Demo)!",
                description: "This is a demo. Configure Formspree for real submissions.",
                variant: "default",
                duration: 5000,
            });
            setFormData({ name: "", email: "", subject: "", message: "" });
        }, 1500);
        return;
    }
    
    try {
      const response = await fetch(formSpreeEndpoint, {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "Thanks for reaching out, Abhishek will get back to you soon.",
          variant: "default",
          duration: 5000,
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Uh oh! Something went wrong.",
        description: "There was a problem sending your message. Please try again or contact Abhishek directly.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-gradient-to-br from-sky-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Let's <span className="gradient-text">Connect</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Have a project idea, a question, or just want to say hi? Feel free to reach out!
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.div 
            className="lg:col-span-1 space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="p-6 rounded-xl bg-white/70 dark:bg-slate-800/70 backdrop-blur-md shadow-lg border border-primary/10">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Contact Details</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <a href="mailto:abhikumar0123252@gmail.com" className="text-muted-foreground hover:text-primary">abhikumar0123252@gmail.com</a>
                </div>
                {/* Add phone if desired, e.g.,
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <a href="tel:+910000000000" className="text-muted-foreground hover:text-primary">+91 XXXXX XXXXX</a>
                </div> 
                */}
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">Noida, India (Open to remote)</span>
                </div>
              </div>
            </div>
            
            <div className="p-6 rounded-xl bg-white/70 dark:bg-slate-800/70 backdrop-blur-md shadow-lg border border-primary/10">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Find me on</h3>
              <div className="flex space-x-4">
                <a href="https://github.com/shah-abhishek" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors">
                  <Github className="h-6 w-6" />
                </a>
                <a href="https://linkedin.com/in/abhishek-kumar-916308174" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
                {/* Add other social links if desired */}
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:col-span-2 p-8 rounded-xl bg-white/70 dark:bg-slate-800/70 backdrop-blur-md shadow-xl border border-primary/10"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Send me a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-background/80 dark:bg-slate-700/80 border-input"
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background/80 dark:bg-slate-700/80 border-input"
                  />
                </div>
              </div>
              
              <div>
                <Input
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-background/80 dark:bg-slate-700/80 border-input"
                />
              </div>
              
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="min-h-[150px] bg-background/80 dark:bg-slate-700/80 border-input"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full text-md py-3"
                disabled={isSubmitting}
                size="lg"
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center">
                    Send Message <Send className="ml-2 h-4 w-4" />
                  </span>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
