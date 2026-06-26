import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Motion = motion;

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#achievement", label: "Experience" },
  { href: "#project", label: "Project" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);

      let current = "home";
      navItems.forEach((item) => {
        const id = item.href.replace("#", "");
        const element = document.getElementById(id);

        if (element && element.offsetTop - 180 <= window.scrollY) {
          current = id;
        }
      });

      if (current) setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLink = (item) => {
    const id = item.href.replace("#", "");
    const active = activeSection === id;

    return (
      <a
        key={item.href}
        href={item.href}
        className={`nav-link ${active ? "is-active" : ""}`}
        onClick={() => setOpen(false)}
      >
        {item.label}
        {active && <Motion.span layoutId="nav-indicator" className="nav-indicator" />}
      </a>
    );
  };

  return (
    <header className={`site-navbar ${scrolled ? "is-scrolled" : ""}`}>
      <a href="#home" className="brand" aria-label="Back to home">
        <span>EK</span>
        <strong>Edwin Kurniawan</strong>
      </a>

      <nav className="desktop-nav" aria-label="Main navigation">
        {navItems.map(navLink)}
      </nav>

      <a className="nav-cta" href="mailto:edwn.k29@gmail.com">
        Hire Me
      </a>

      <button
        type="button"
        className="menu-button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      <AnimatePresence>
        {open && (
          <Motion.nav
            className="mobile-nav"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.22 }}
            aria-label="Mobile navigation"
          >
            {navItems.map(navLink)}
          </Motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
