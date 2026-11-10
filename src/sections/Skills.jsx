import {
  Code2,
  Monitor,
  Server,
  Database,
  BrainCircuit,
  Wrench,
} from "lucide-react";

const skillGroups = [
  {
    number: "01",
    title: "Programming Languages",
    description: "The foundations I use to solve problems and build applications.",
    icon: Code2,
    color: "#E9DDF8",
    accent: "#8054CC",
    skills: ["C", "C++", "Python", "Java", "JavaScript"],
  },
  {
    number: "02",
    title: "Frontend Development",
    description: "Creating responsive and engaging user experiences.",
    icon: Monitor,
    color: "#FCE0D5",
    accent: "#E9826E",
    skills: ["HTML", "CSS", "React", "Tailwind CSS", "Vite"],
  },
  {
    number: "03",
    title: "Backend Development",
    description: "Building APIs, application logic and authentication systems.",
    icon: Server,
    color: "#DCEBE0",
    accent: "#488E6D",
    skills: ["Node.js", "Express.js", "FastAPI", "Flask", "REST APIs", "JWT"],
  },
  {
    number: "04",
    title: "Databases",
    description: "Working with relational and NoSQL data stores.",
    icon: Database,
    color: "#F9EDC9",
    accent: "#C49A3A",
    skills: ["MySQL", "MongoDB", "PostgreSQL", "Mongoose"],
  },
  {
    number: "05",
    title: "AI, ML & Data",
    description: "Exploring intelligent systems and data-driven applications.",
    icon: BrainCircuit,
    color: "#E5E2F7",
    accent: "#7566B5",
    skills: [
      "NumPy",
      "Pandas",
      "Scikit-learn",
      "Matplotlib",
      "Generative AI",
      "LLM Integration",
      "Tesseract OCR",
    ],
  },
  {
    number: "06",
    title: "Tools & Concepts",
    description: "Tools and practices that support my development workflow.",
    icon: Wrench,
    color: "#F8DFE5",
    accent: "#C46D83",
    skills: [
      "Git",
      "GitHub",
      "Google Cloud",
      "VS Code",
      "Postman",
      "Vercel",
      "Render",
      "DSA",
    ],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#FDF4EF] !px-6 !py-24 md:!px-12 lg:!py-3"
    >
      <div className="relative z-10 mx-auto w-full max-w-[1320px]">

        {/* Section Heading */}
        <div className="!mb-14 max-w-2xl text-left md:mb-16">
          <span className="inline-flex rounded-full bg-[#E9DDF8] !px-5 !py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#8054CC]">
            WHAT I WORK WITH
          </span>

          <h2 className="!mt-8 text-4xl font-bold tracking-tight text-[#17243B] md:text-5xl lg:text-6xl">
            My technical{" "}
            <span className="font-serif italic text-[#8054CC]">
              toolkit.
            </span>
          </h2>

          <p className="mt-5 !mb-5 max-w-xl text-base leading-8 text-[#667085] md:text-lg">
            A collection of technologies and tools I use to turn ideas into
            functional applications and keep learning along the way.
          </p>
        </div>

        {/* Centered Skills Grid */}
        <div className="skills-grid mx-auto w-full max-w-[1100px]">
          {skillGroups.map((group) => {
            const Icon = group.icon;

            return (
              <article
                key={group.number}
                className="skill-card group relative overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/75 !p-7 shadow-[0_12px_40px_rgba(23,36,59,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(23,36,59,0.09)] md:!p-9"
              >
                {/* Decorative Background */}
                <div
                  className="absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-50 transition-transform duration-500 group-hover:scale-125"
                  style={{ backgroundColor: group.color }}
                />

                <div className="relative z-10">

                  {/* Icon and Number */}
                  <div className="mb-7 flex items-center justify-between">
                    <div
                      className="flex h-14 w-14 items-center justify-center rounded-2xl"
                      style={{
                        backgroundColor: group.color,
                        color: group.accent,
                      }}
                    >
                      <Icon size={26} strokeWidth={1.8} />
                    </div>

                    <span className="text-sm font-semibold tracking-widest text-[#A0A5B1]">
                      {group.number}
                    </span>
                  </div>

                  {/* Title and Description */}
                  <h3 className="text-xl font-bold text-[#17243B] md:text-2xl">
                    {group.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-[#7B8494]">
                    {group.description}
                  </p>

                  {/* Decorative Divider */}
                  <div
                    className="!mb-8 mt-6 h-[2px] w-12 rounded-full"
                    style={{ backgroundColor: group.accent }}
                  />

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-2.5">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-[#E9EAF0] bg-white !px-4 !py-2 text-sm font-medium text-[#465166] transition-colors duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Centered Learning Banner */}
        <div className="skills-banner !mt-18 flex flex-col items-center justify-between gap-5 rounded-[1.75rem] bg-[#104B52] !px-8 !py-8 text-center md:flex-row md:text-left md:!px-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FFB4A5]">
              ALWAYS LEARNING
            </p>

            <p className="mt-3 text-lg font-medium text-white md:text-xl">
              The best tool is a curious mind.
            </p>
          </div>

          <a
            href="#projects"
            className="rounded-full bg-white !px-6 !py-3 text-sm font-bold !text-[#104B52] transition-transform hover:scale-105"
          >
            See these in action ↗
          </a>
        </div>

      </div>
    </section>
  );
}

export default Skills;
