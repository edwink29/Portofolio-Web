import { ArrowUpRight, Github, Mail } from "lucide-react";

const links = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#project"],
  ["Contact", "#contact"],
];

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div>
          <a href="#home" className="footer-brand">Edwin Kurniawan</a>
          <p>Frontend developer portfolio designed for clarity, motion, and professional presentation.</p>
        </div>
        <a className="footer-cta" href="#contact">
          Let&apos;s collaborate <ArrowUpRight size={17} />
        </a>
      </div>

      <div className="footer-bottom">
        <nav aria-label="Footer navigation">
          {links.map(([label, href]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </nav>
        <div className="footer-social">
          <a href="https://github.com/edwink29?tab=overview&from=2025-09-01&to=2025-09-30" aria-label="GitHub" target="_blank" rel="noreferrer">
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/in/edwin-kurniawan-617bb534a/" aria-label="LinkedIn" target="_blank" rel="noreferrer">
            <i className="ri-linkedin-fill" />
          </a>
          <a href="https://www.instagram.com/edwk29/" aria-label="Instagram" target="_blank" rel="noreferrer">
            <i className="ri-instagram-line" />
          </a>
          <a href="mailto:edwn.k29@gmail.com" aria-label="Email">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
