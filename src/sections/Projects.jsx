
import "../App.css";
import mediguideImage from "../assets/mediguide-illustration.png";
import ledgerImage from "../assets/ledger-illustration.png";
import vidhaiImage from "../assets/vidhai-illustration.png";
import showtimeImage from "../assets/showtime-illustration.png";

import { ArrowUpRight, ExternalLink } from "lucide-react";

const projects = [
  {
    number: "01",
    name: "MediGuide AI",
    image: mediguideImage,
    category: "AI / Healthcare",
    description:
      "An AI-powered health education assistant with symptom tracking, medicine information and conversational assistance.",
    technologies: ["React", "FastAPI", "MongoDB", "Gemini"],
    color: "lavender",
    github: "https://github.com/berwincr/MediGuide_AI",
    demo: null,
  },
  {
    number: "02",
    name: "Ledger",
    image: ledgerImage,
    category: "Full Stack Development",
    description:
      "A personal expense tracker with secure authentication, transaction management and interactive financial analytics.",
    technologies: ["React", "Node.js", "MongoDB", "JWT"],
    color: "peach",
    github: "https://github.com/berwincr/ledger",
    demo: "https://expense-tracker-nine-rho-67.vercel.app",
  },
  {
    number: "03",
    name: "Vidhai Seed Bank",
    image: vidhaiImage,
    category: "Web Development",
    description:
      "A seed bank management platform designed to manage seed inventory and contributions.",
    technologies: ["React", "Flask", "MySQL"],
    color: "mint",
    github: "https://github.com/berwincr/vidhai",
    demo: null,
  },
  {
  number: "04",
  name: "ShowTime",
  image: showtimeImage,
  category: "Full Stack Development",
  description:
    "A full-stack movie ticket booking platform featuring movie discovery, theatre showtimes, interactive seat selection, booking management and Razorpay test-mode payments.",
  technologies: [
    "React",
    "Java",
    "Spring Boot",
    "MySQL",
    "Razorpay"
  ],
  color: "lavender",
  preview: "cinema",
  github: "https://github.com/berwincr/ShowTime",
  demo: null,
},
];

function GithubIcon({ size = 19 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.23c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.74.08-.74 1.2.09 1.83 1.23 1.83 1.23 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.13 3.18.77.84 1.23 1.91 1.23 3.22 0 4.62-2.8 5.64-5.48 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 12 .5Z" />
    </svg>
  );
}

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="section-heading">
        <span className="section-tag">✦ MY WORK</span>

        <div className="heading-row">
          <div>
            <h2>
              Featured <span>Projects</span>
            </h2>
            <p>A few things I've built with curiosity and code.</p>
          </div>

          <a
            href="https://github.com/berwincr"
            target="_blank"
            rel="noreferrer"
            className="all-projects"
          >
            View GitHub <ArrowUpRight size={17} />
          </a>
        </div>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article
            className={`project-card ${project.color}`}
            key={project.number}
          >
            <div className="project-top">
              <span>{project.category}</span>
              <span>{project.number}</span>
            </div>

            <div className="project-art">
              <img
                src={project.image}
                alt={`${project.name} illustration`}
                className="project-image"
                loading="lazy"
              />
            </div>

            <h3>{project.name}</h3>
            <p>{project.description}</p>

            <div className="tech-tags">
              {project.technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            <div className="project-links">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                aria-label={`GitHub ${project.name}`}
              >
                <GithubIcon size={19} />
              </a>

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Live demo ${project.name}`}
                >
                  <ExternalLink size={19} />
                </a>
              )}

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="project-arrow-link"
                aria-label={`Explore ${project.name}`}
              >
                <ArrowUpRight className="project-arrow" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
