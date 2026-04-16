"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Platform", href: "/platform" },
    { name: "Features", href: "/platform" },
    { name: "Company", href: "/company" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/85 backdrop-blur-xl border-b border-border py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/">
            <div className="flex items-baseline gap-1.5 cursor-pointer">
              <span className="font-display text-[15px] font-semibold tracking-[-0.5px] text-foreground">
                PROJECT LYRA
              </span>
              <span className="w-1 h-1 rounded-full bg-primary" />
              <span className="text-[10px] text-primary font-medium tracking-wide uppercase">
                VeLYRA Healthcare
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                <span className={`text-sm font-medium transition-colors cursor-pointer ${
                  pathname === link.href ? 'text-primary' : 'text-muted hover:text-foreground'
                }`}>
                  {link.name}
                </span>
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Link href="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground h-8 px-5 rounded-md text-xs font-medium shadow-[0_0_15px_rgba(0,229,195,0.2)]">
                Request Access
              </Button>
            </Link>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              className="text-foreground"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="fixed inset-0 z-[60] bg-background flex flex-col"
          >
            <div className="p-6 flex justify-end">
              <button onClick={() => setMobileMenuOpen(false)} className="text-foreground">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex-1 flex flex-col px-8 py-8 gap-6">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href}>
                  <span 
                    className="text-3xl font-display font-semibold text-foreground"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </span>
                </Link>
              ))}
              <div className="mt-12">
                <Link href="/contact">
                  <Button 
                    className="w-full bg-primary text-primary-foreground h-12 text-lg rounded-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Request Access
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}