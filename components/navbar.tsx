"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

const leftLinks = [
  { href: "/", label: "Home" },
  { href: "/works", label: "Works" },
]

const rightLinks = [
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
]

const allLinks = [...leftLinks, ...rightLinks]

export function Navbar() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Floating Pill Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ 
          opacity: isVisible ? 1 : 0, 
          y: isVisible ? 0 : -20 
        }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={cn(
          "fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:block",
          !isVisible && "pointer-events-none"
        )}
      >
        <div 
          className="flex items-center gap-1 px-2 py-2 rounded-full backdrop-blur-xl bg-black/60 border border-white/10"
          style={{
            boxShadow: "0 0 30px rgba(59, 130, 246, 0.1), 0 8px 32px rgba(0, 0, 0, 0.4)",
          }}
        >
          {/* Left Links */}
          <div className="flex items-center">
            {leftLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full",
                  pathname === link.href
                    ? "text-white"
                    : "text-white/60 hover:text-white"
                )}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute inset-0 bg-white/10 rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Center Logo */}
          <Link 
            href="/" 
            className="px-5 py-2 mx-2"
          >
            <img src="/logo.png" alt="YUDH AI Logo" className="h-6 w-auto" />
          </Link>

          {/* Right Links */}
          <div className="flex items-center">
            {rightLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full",
                  pathname === link.href
                    ? "text-white"
                    : "text-white/60 hover:text-white"
                )}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute inset-0 bg-white/10 rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Static Top Navbar (visible before scroll) */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: isVisible ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-40 py-6 hidden md:block",
          isVisible && "pointer-events-none"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="YUDH AI Logo" className="h-6 w-auto" />
          </Link>
          <div className="flex items-center gap-8">
            {allLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors duration-300 relative group",
                  pathname === link.href
                    ? "text-white"
                    : "text-white/60 hover:text-white"
                )}
              >
                {link.label}
                <span className={cn(
                  "absolute -bottom-1 left-0 h-px bg-primary transition-all duration-300",
                  pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                )} />
              </Link>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Mobile Navbar */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50">
        <div className="flex items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="YUDH AI Logo" className="h-6 w-auto" />
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-xl border border-white/10"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="mx-4 mt-2 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/10 p-6"
              style={{
                boxShadow: "0 0 30px rgba(59, 130, 246, 0.1), 0 8px 32px rgba(0, 0, 0, 0.4)",
              }}
            >
              <div className="flex flex-col gap-2">
                {allLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "px-4 py-3 rounded-xl text-base font-medium transition-all duration-300",
                      pathname === link.href
                        ? "text-white bg-white/10"
                        : "text-white/60 hover:text-white hover:bg-white/5"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}
