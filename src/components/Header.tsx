"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();

    // Close mobile menu if open
    setIsMobileMenuOpen(false);

    // If we're on a hash route, go back to home first
    if (window.location.hash && window.location.hash !== targetId) {
      window.location.hash = '';
      setTimeout(() => {
        scrollToSection(targetId);
      }, 100);
    } else {
      scrollToSection(targetId);
    }
  };

  const scrollToSection = (targetId: string) => {
    if (targetId === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(targetId);
      if (element) {
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  const menuItems = [
    { label: "Home", href: "/", targetId: "/" },
    { label: "Services", href: "/services", targetId: "/services" },
    { label: "Portfolio", href: "/#crm", targetId: "#crm" },
    { label: "SaaS Tools", href: "/saas-tools", targetId: "/saas-tools" },
    { label: "Process", href: "/#process", targetId: "#process" },
    { label: "Blog", href: "/#blog", targetId: "#blog" },
    { label: "Contact", href: "/#contact", targetId: "#contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-6 bg-black/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link
            href="/"
            className="text-white hover:opacity-80 transition-opacity"
            onClick={(e) => handleSmoothScroll(e, '/')}
          >
            <div>
              <div className="text-2xl font-bold tracking-tight">1DEV.AI</div>
              <div className="text-xs tracking-widest">SOFTWARE SOLUTIONS</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-white">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="relative hover:text-white transition-colors group"
                onClick={(e) => {
                  // Only use smooth scroll for hash links, not for page routes
                  if (item.targetId.startsWith("#") || item.targetId === "/") {
                    if (item.targetId !== "#crm") {
                      handleSmoothScroll(e, item.targetId);
                    }
                  }
                }}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          <button
            className="text-white md:hidden hover:opacity-80 transition-opacity z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/80 backdrop-blur-md z-40 md:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <nav
          className={`absolute right-0 top-0 bottom-0 w-4/5 max-w-sm bg-[#1a2744] shadow-2xl transform transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col h-full pt-24 px-8">
            <div className="flex flex-col gap-6">
              {menuItems.map((item, index) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-white text-2xl font-semibold hover:text-white/80 transition-all transform hover:translate-x-2 ${
                    isMobileMenuOpen ? 'animate-fade-in-right' : ''
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={(e) => {
                    // Only use smooth scroll for hash links, not for page routes
                    if (item.targetId.startsWith("#") || item.targetId === "/") {
                      if (item.targetId !== "#crm") {
                        handleSmoothScroll(e, item.targetId);
                      } else {
                        setIsMobileMenuOpen(false);
                      }
                    } else {
                      // For page routes, just close the menu
                      setIsMobileMenuOpen(false);
                    }
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="mt-auto pb-12">
              <div className="border-t border-white/20 pt-8">
                <p className="text-white/60 text-sm">
                  &copy; 2024 1Dev Software Solutions
                </p>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
