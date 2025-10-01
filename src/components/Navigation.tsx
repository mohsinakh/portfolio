import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import { Menu, X, Home, User, Briefcase, FileText, Mail } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: "Home", icon: Home, path: "/#home" },
    { label: "About", icon: User, path: "/about" },
    { label: "Projects", icon: Briefcase, path: "/#projects" },
    { label: "Blog", icon: FileText, path: "/blog" },
    { label: "Contact", icon: Mail, path: "/#contact" },
  ];

  const handleNavigate = (path: string) => {
    if (path.startsWith("#")) {
      const element = document.getElementById(path.slice(1));
      if (element) {
        window.scrollTo({ top: element.offsetTop - 60, behavior: "smooth" });
      }
    } else {
      navigate(path);
    }
    setIsOpen(false);
  };

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace("#", "");
      const element = document.getElementById(sectionId);
      if (element) {
        window.scrollTo({ top: element.offsetTop - 60, behavior: "smooth" });
      }
    }
  }, [location]);


    useEffect(() => {
  window.scrollTo({ top: 0, behavior: "smooth" });
}, [location.pathname]);




  

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <span className="text-2xl font-bold text-black dark:text-white">
            MA.
          </span>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map(({ label, icon: Icon, path }, index) => (
              <button
                key={index}
                onClick={() => handleNavigate(path)}
                className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Icon className="w-4 h-4" />
                {label}
              </button>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Overlay Background (Fixes Transparency Issue) */}
      <div
        className={`md:hidden fixed inset-0 bg-black/50 backdrop-blur-md z-40 transition-opacity ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`md:hidden fixed top-0 right-0 h-screen w-64 bg-white dark:bg-gray-900 border-l dark:border-gray-800 shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-4 border-b dark:border-gray-800">
            <span className="text-xl font-bold text-black dark:text-white">
              Menu
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex flex-col p-4 space-y-4">
            {navItems.map(({ label, icon: Icon, path }, index) => (
              <button
                key={index}
                onClick={() => handleNavigate(path)}
                className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2"
              >
                <Icon className="w-5 h-5" />
                {label}
              </button>
            ))}
          </nav>

          {/* Theme Toggle Positioned at Bottom */}
          <div className="mt-auto p-4 border-t dark:border-gray-800">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
