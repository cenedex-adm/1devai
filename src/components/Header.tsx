"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string, targetId: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    // For page routes (like /services, /saas-tools), just navigate
    if (!targetId.startsWith("#") && targetId !== "/") {
      router.push(href);
      return;
    }

    // For home page
    if (targetId === "/") {
      if (pathname === "/") {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        router.push("/");
      }
      return;
    }

    // For hash links (sections on homepage)
    if (pathname === "/") {
      // We're on homepage, just scroll
      scrollToSection(targetId);
    } else {
      // Navigate to homepage first, then scroll
      router.push("/" + targetId);
    }
  };

  const scrollToSection = (targetId: string) => {
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
  };

  // Handle scroll on initial load if there's a hash in URL
  useEffect(() => {
    if (pathname === "/" && window.location.hash) {
      setTimeout(() => {
        scrollToSection(window.location.hash);
      }, 100);
    }
  }, [pathname]);

  const menuItems = [
    { label: "Home", href: "/", targetId: "/" },
    { label: "Services", href: "/services", targetId: "/services" },
    { label: "SaaS Tools", href: "/saas-tools", targetId: "/saas-tools" },
    { label: "Process", href: "/#process", targetId: "#process" },
    { label: "Contact", href: "/#contact", targetId: "#contact" },
    { label: "FAQ", href: "/faq", targetId: "/faq" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-6 bg-black/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link
            href="/"
            className="text-white hover:opacity-80 transition-opacity"
            onClick={(e) => handleNavigation(e, "/", "/")}
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
                onClick={(e) => handleNavigation(e, item.href, item.targetId)}
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
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-40 md:hidden animate-in fade-in duration-200"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <nav
            className="absolute right-0 top-0 bottom-0 w-4/5 max-w-sm bg-[#1a2744] shadow-2xl animate-in slide-in-from-right duration-300"
            onClick={(e) => e.stopPropagation()}
          >
          <div className="flex flex-col h-full pt-24 px-8">
            <div className="flex flex-col gap-6">
              {menuItems.map((item, index) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-white text-2xl font-semibold hover:text-white/80 transition-all transform hover:translate-x-2 animate-fade-in-right"
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={(e) => handleNavigation(e, item.href, item.targetId)}
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
      )}
    </>
  );
}
