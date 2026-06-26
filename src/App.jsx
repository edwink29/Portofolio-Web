import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  CalendarDays,
  Code2,
  Database,
  ExternalLink,
  Github,
  GraduationCap,
  Layers3,
  Mail,
  MapPin,
  MessageCircle,
  Rocket,
  Server,
  Smartphone,
  Sparkles,
  TerminalSquare,
} from "lucide-react";
import DataImage, {
  listAchievement,
  listEducate,
  listExperience,
  listProyek,
  listTools,
} from "./data";

const Motion = motion;
const githubUrl =
  "https://github.com/edwink29?tab=overview&from=2025-09-01&to=2025-09-30";
const linkedinUrl = "https://www.linkedin.com/in/edwin-kurniawan-617bb534a/";
const instagramUrl = "https://www.instagram.com/edwk29/";
const email = "edwn.k29@gmail.com";
const whatsappUrl =
  "https://api.whatsapp.com/send?text=Halo%20Edwin%2C%20saya%20tertarik%20untuk%20berdiskusi%20tentang%20project.";

const reveal = {
  hidden: { opacity: 0, y: 28, filter: "blur(12px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const SectionHeader = ({ eyebrow, title, description, align = "center" }) => (
  <Motion.div
    className={`section-heading ${align === "left" ? "items-start text-left" : "items-center text-center"}`}
    variants={reveal}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-80px" }}
  >
    <span className="eyebrow">
      <Sparkles size={14} />
      {eyebrow}
    </span>
    <h2>{title}</h2>
    <p>{description}</p>
  </Motion.div>
);

const MagneticButton = ({
  href,
  children,
  variant = "primary",
  className = "",
  ...props
}) => (
  <Motion.a
    href={href}
    className={`btn btn-${variant} ${className}`}
    whileHover={{ y: -3, scale: 1.02 }}
    whileTap={{ scale: 0.97 }}
    {...props}
  >
    {children}
  </Motion.a>
);

const techGroups = [
  {
    title: "Frontend",
    icon: Layers3,
    items: [
      "HTML",
      "CSS",
      "Javascript",
      "React JS",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  { title: "Backend", icon: Server, items: ["Laravel"] },
  { title: "Mobile", icon: Smartphone, items: ["Responsive UI"] },
  { title: "Database", icon: Database, items: ["Data Modeling"] },
  { title: "Cloud", icon: Rocket, items: ["Vercel", "GitHub"] },
  {
    title: "Tools",
    icon: TerminalSquare,
    items: ["Visual Studio Code", "Figma", "Canva", "Arduio IDE"],
  },
];

const toolByName = new Map(
  listTools.map((tool) => [tool.nama.toLowerCase(), tool]),
);

const getTool = (name) => toolByName.get(name.toLowerCase());

const getProjectAction = (project) => {
  if (!project.link) {
    return { live: "#contact", github: githubUrl };
  }

  if (project.link.includes("github.com")) {
    return { live: project.link, github: project.link };
  }

  return { live: project.link, github: githubUrl };
};

const App = () => {
  return (
    <main className="site-shell">
      <Hero />
      <About />
      <Skills />
      <Achievements />
      <Projects />
      <Contact />
    </main>
  );
};

const Hero = () => (
  <section className="hero-section section-pad" id="home" aria-label="Hero">
    <div className="hero-orbit hero-orbit-one" />
    <div className="hero-orbit hero-orbit-two" />
    <Motion.div
      className="hero-grid"
      variants={stagger}
      initial="hidden"
      animate="visible"
    >
      <div className="hero-copy">
        <Motion.div className="status-pill" variants={reveal}>
          <span />
          Available for frontend opportunities
        </Motion.div>
        <Motion.h1 variants={reveal}>
          Edwin Kurniawan
          <span>Frontend Developer crafting polished web experiences.</span>
        </Motion.h1>
        <Motion.p className="hero-subtitle" variants={reveal}>
          I build responsive, user-friendly interfaces with React, Tailwind, and
          modern web fundamentals. My work blends clean engineering, product
          thinking, and a strong eye for detail.
        </Motion.p>
        <Motion.div className="hero-typing" variants={reveal}>
          <Code2 size={18} />
          <span className="typing-prefix">Currently exploring:</span>
          <span
            className="typing-words"
            aria-label="web development, frontend web, and IOT"
          >
            <b>web development</b>
            <b>frontend web</b>
            <b>IOT</b>
          </span>
        </Motion.div>
        <Motion.div className="hero-actions" variants={reveal}>
          <MagneticButton href="#project">
            View Projects <ArrowUpRight size={18} />
          </MagneticButton>
          <MagneticButton href={`mailto:${email}`} variant="secondary">
            Let&apos;s Talk <Mail size={18} />
          </MagneticButton>
        </Motion.div>
        <Motion.div className="social-row" variants={reveal}>
          <a
            href={githubUrl}
            aria-label="Open Edwin GitHub"
            target="_blank"
            rel="noreferrer"
          >
            <Github size={19} />
          </a>
          <a
            href={linkedinUrl}
            aria-label="Open Edwin LinkedIn"
            target="_blank"
            rel="noreferrer"
          >
            <i className="ri-linkedin-fill" />
          </a>
          <a
            href={instagramUrl}
            aria-label="Open Edwin Instagram"
            target="_blank"
            rel="noreferrer"
          >
            <i className="ri-instagram-line" />
          </a>
          <a href={`mailto:${email}`} aria-label="Email Edwin">
            <Mail size={19} />
          </a>
        </Motion.div>
      </div>

      <Motion.div className="hero-visual" variants={reveal}>
        <Motion.div
          className="profile-frame"
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <img
            src={DataImage.HeroImage}
            alt="Edwin Kurniawan profile"
            loading="eager"
          />
          <div className="profile-glow" />
        </Motion.div>
        <Motion.div
          className="floating-card floating-card-top"
          animate={{ y: [0, 12, 0], rotate: [-1, 1, -1] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Sparkles size={18} />
          UI polish, motion, performance
        </Motion.div>
        <Motion.div
          className="floating-card floating-card-bottom"
          animate={{ y: [0, -10, 0], rotate: [1, -1, 1] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Rocket size={18} />
          React + Tailwind + Laravel
        </Motion.div>
      </Motion.div>
    </Motion.div>

    <Motion.div
      className="hero-stats glass-panel"
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {[
        ["5+", "Featured projects"],
        ["12+", "Tools mastered"],
        ["4", "Achievements"],
        ["2026", "Frontend focus"],
      ].map(([value, label]) => (
        <Motion.div key={label} variants={reveal}>
          <strong>{value}</strong>
          <span>{label}</span>
        </Motion.div>
      ))}
    </Motion.div>
  </section>
);

const About = () => (
  <section className="section-pad" id="about">
    <SectionHeader
      eyebrow="About"
      title="A developer shaped by projects, study, and product curiosity."
      description="Education, hands-on practice, and community experience help me design interfaces that feel clear, responsive, and reliable."
    />
    <div className="about-layout">
      <Motion.article
        className="about-card glass-panel"
        variants={reveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <div className="card-icon">
          <GraduationCap size={22} />
        </div>
        <h3>Education Timeline</h3>
        <div className="timeline-list">
          {listEducate.map((edu) => (
            <div className="timeline-item" key={edu.id}>
              <img src={edu.gambar} alt={`${edu.nama} logo`} loading="lazy" />
              <div>
                <h4>{edu.nama}</h4>
                <p>{edu.ket}</p>
              </div>
            </div>
          ))}
        </div>
      </Motion.article>

      <Motion.div
        className="about-side"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <Motion.article className="metric-card" variants={reveal}>
          <span>Current ambition</span>
          <h3>Frontend Developer</h3>
          <p>
            Focused on building polished, accessible, and production-ready web
            interfaces.
          </p>
        </Motion.article>
        <Motion.article className="metric-card highlight" variants={reveal}>
          <span>Design taste</span>
          <h3>Clean systems with premium motion</h3>
          <p>
            Inspired by Linear, Vercel, Apple, Stripe, Framer, and modern bento
            layouts.
          </p>
        </Motion.article>
      </Motion.div>
    </div>
  </section>
);

const Skills = () => (
  <section className="section-pad" id="skills">
    <SectionHeader
      eyebrow="Skills"
      title="A modern toolkit for building practical digital products."
      description="Grouped by category with the tools Edwin already uses across frontend, backend, design, and engineering workflows."
    />
    <Motion.div
      className="skill-grid"
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {techGroups.map((group, index) => {
        const Icon = group.icon;
        return (
          <Motion.article
            className="skill-card glass-panel"
            variants={reveal}
            key={group.title}
          >
            <div className="skill-card-head">
              <span>
                <Icon size={20} />
              </span>
              <div>
                <h3>{group.title}</h3>
                <p>{group.items.length} capabilities</p>
              </div>
            </div>
            <div className="skill-stack">
              {group.items.map((name) => {
                const tool = getTool(name);
                return (
                  <div className="skill-chip" key={name}>
                    {tool?.gambar ? (
                      <img src={tool.gambar} alt="" loading="lazy" />
                    ) : (
                      <Code2 size={18} />
                    )}
                    <span>{name}</span>
                  </div>
                );
              })}
            </div>
            <div className="progress-track" aria-hidden="true">
              <Motion.span
                initial={{ width: 0 }}
                whileInView={{ width: `${72 + index * 4}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
              />
            </div>
          </Motion.article>
        );
      })}
    </Motion.div>
  </section>
);

const Achievements = () => (
  <section className="section-pad" id="achievement">
    <SectionHeader
      eyebrow="Experience"
      title="Proof of growth through work, leadership, and competitions."
      description="Experience and achievements are presented as a modern timeline so recruiters can scan impact quickly."
    />
    <div className="experience-grid">
      <Timeline
        title="Experience"
        icon={BriefcaseBusiness}
        items={listExperience}
      />
      <Timeline title="Achievement" icon={Award} items={listAchievement} />
    </div>
  </section>
);

const Timeline = ({ title, icon: Icon, items }) => {
  const TimelineIcon = Icon;

  return (
    <Motion.article
      className="timeline-panel glass-panel"
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <div className="panel-title">
        <span>
          <TimelineIcon size={20} />
        </span>
        <h3>{title}</h3>
      </div>
      <div className="modern-timeline">
        {items.map((item) => (
          <div className="modern-timeline-item" key={item.id}>
            <img src={item.gambar} alt={item.nama} loading="lazy" />
            <div>
              <h4>{item.nama}</h4>
              <p>
                <CalendarDays size={14} /> {item.ket}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Motion.article>
  );
};

const Projects = () => (
  <section className="section-pad" id="project">
    <SectionHeader
      eyebrow="Projects"
      title="Selected work in a cinematic bento showcase."
      description="Each project keeps Edwin's original portfolio data, now elevated with previews, badges, actions, and motion."
    />
    <Motion.div
      className="project-bento"
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {listProyek.map((project, index) => {
        const actions = getProjectAction(project);
        return (
          <Motion.article
            className={`project-card glass-panel ${index === 0 || index === 1 || index === 2 ? "project-card-wide" : ""}`}
            key={project.id}
            variants={reveal}
            whileHover={{ y: -8, rotateX: 1, rotateY: -1 }}
          >
            <a
              href={actions.live}
              className="project-image"
              target={actions.live.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
            >
              <img
                src={project.gambar}
                alt={`${project.nama} preview`}
                loading="lazy"
              />
              <span>
                <ExternalLink size={16} /> Preview
              </span>
            </a>
            <div className="project-content">
              <h3>{project.nama}</h3>
              <p>{project.desk}</p>
              <div className="badge-row">
                {project.tools.map((tool) => (
                  <span key={tool}>{tool}</span>
                ))}
              </div>
              <div className="project-actions">
                <MagneticButton
                  href={actions.github}
                  variant="ghost"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github size={17} /> GitHub
                </MagneticButton>
                <MagneticButton
                  href={actions.live}
                  variant="secondary"
                  target={
                    actions.live.startsWith("http") ? "_blank" : undefined
                  }
                  rel="noreferrer"
                >
                  <ExternalLink size={17} /> Live Demo
                </MagneticButton>
              </div>
            </div>
          </Motion.article>
        );
      })}
    </Motion.div>
  </section>
);

const Contact = () => (
  <section className="section-pad contact-section" id="contact">
    <SectionHeader
      eyebrow="Contact"
      title="Let's build an interface that feels sharp from the first click."
      description="Open for collaborations, internships, frontend roles, and practical product work."
    />
    <Motion.div
      className="contact-grid"
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <Motion.article className="contact-card glass-panel" variants={reveal}>
        <h3>Start a conversation</h3>
        <p>
          Tell me about your idea, product, or team need. I will respond through
          email as soon as possible.
        </p>
        <div className="contact-links">
          <a href={`mailto:${email}`}>
            <Mail size={18} /> {email}
          </a>
          <a href={whatsappUrl} target="_blank" rel="noreferrer">
            <MessageCircle size={18} /> WhatsApp
          </a>
          <a href={linkedinUrl} target="_blank" rel="noreferrer">
            <i className="ri-linkedin-fill" /> LinkedIn
          </a>
          <a href={githubUrl} target="_blank" rel="noreferrer">
            <Github size={18} /> GitHub
          </a>
          <span>
            <MapPin size={18} /> Jember, Indonesia
          </span>
        </div>
      </Motion.article>

      <Motion.form
        action="https://formsubmit.co/edwn.k29@gmail.com"
        method="POST"
        className="contact-form glass-panel"
        variants={reveal}
        autoComplete="off"
      >
        <label>
          Full Name
          <input type="text" name="name" placeholder="Your name" required />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            required
          />
        </label>
        <label>
          Message
          <textarea
            name="message"
            rows="6"
            placeholder="Tell me what you want to build..."
            required
          />
        </label>
        <Motion.button
          type="submit"
          className="btn btn-primary"
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.97 }}
        >
          Send Message <ArrowUpRight size={18} />
        </Motion.button>
      </Motion.form>
    </Motion.div>
  </section>
);

export default App;
