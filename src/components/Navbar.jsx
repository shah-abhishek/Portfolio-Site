
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, User, Briefcase, Code, MessageSquare, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { href: "#about", label: "About", icon: <User className="h-4 w-4 mr-1" /> },
    { href: "#experience", label: "Experience", icon: <Briefcase className="h-4 w-4 mr-1" /> },
    { href: "#projects", label: "Projects", icon: <Code className="h-4 w-4 mr-1" /> },
    { href: "#contact", label: "Contact", icon: <MessageSquare className="h-4 w-4 mr-1" /> },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm dark:bg-gray-900/80"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-2">
              <User className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">Abhishek Kumar</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                {navLinks.map((link) => (
                  <NavigationMenuItem key={link.label}>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()} href={link.href}>
                      {link.icon} {link.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="hidden md:block">
            <Button asChild>
              <a href="/abhishek-kumar-resume.pdf" download className="flex items-center gap-1">
                Resume <Download className="h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-background border-b"
        >
          <div className="container mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center px-3 py-2 rounded-md text-base font-medium hover:bg-accent hover:text-accent-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.icon} {link.label}
              </a>
            ))}
            <div className="pt-2">
              <Button asChild className="w-full">
                <a href="/abhishek-kumar-resume.pdf" download onClick={() => setMobileMenuOpen(false)}>
                  Resume <Download className="h-4 w-4 ml-1" />
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
