
import {
  GraduationCap,
  Code2,
  Bot,
  Puzzle,
} from "lucide-react";

const About = () => {
  const highlights = [
    {
      number: "01",
      icon: GraduationCap,
      title: "Education",
      description: "B.Tech in Information Technology",
      color: "bg-[#E9DDF8]",
      accent: "bg-[#8054CC]",
    },
    {
      number: "02",
      icon: Code2,
      title: "Development",
      description: "Building full-stack applications",
      color: "bg-[#FCE0D5]",
      accent: "bg-[#E9826E]",
    },
    {
      number: "03",
      icon: Bot,
      title: "Exploration",
      description: "AI, ML and emerging technologies",
      color: "bg-[#DCEBE0]",
      accent: "bg-[#488E6D]",
    },
    {
      number: "04",
      icon: Puzzle,
      title: "Problem Solving",
      description: "Data Structures and Algorithms",
      color: "bg-[#F9EDC9]",
      accent: "bg-[#C49A3A]",
    },
  ];

  return (
    <section
      id="about"
      className="bg-[#FDF4EF] !px-6 !pt-24 !pb-12 md:!px-12 lg:!pt-32 lg:!pb-12"
    >
      <div className="mx-auto max-w-[1320px]">

        {/* Section heading */}
        <div className="mb-14 flex flex-col gap-4 !ml-6 md:mb-16 md:!ml-10">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[#EDE1F7] !px-4 !py-2 text-xs font-extrabold tracking-[0.18em] text-[#8054CC]">
            <span className="h-2 w-2 rounded-full bg-[#8054CC]" />
            GET TO KNOW ME
          </span>

          <h2 className="max-w-3xl font-serif text-5xl leading-[1.12] tracking-tight text-[#17243B] md:text-7xl">
            More than just
            <span className="text-[#8054CC] italic"> code.</span>
          </h2>

          <p className="max-w-xl text-base leading-8 text-[#716B70] md:text-lg">
            A curious mind, a builder at heart, and always
            looking for the next thing to learn.
          </p>
        </div>

        {/* Main content */}
        <div className="grid items-stretch gap-8 lg:grid-cols-[1fr_1.05fr] lg:gap-12">

          {/* Introduction */}
          <div className="flex flex-col justify-between rounded-[2rem] border border-[#8054CC]/10 bg-white/60 !p-7 md:!p-10">
            <div>
              <span className="text-sm font-bold tracking-widest text-[#8054CC]">
                HELLO, I'M BERWIN
              </span>

              <h3 className="mt-6 max-w-lg font-serif text-3xl leading-snug text-[#17243B] md:text-4xl">
                I turn ideas into
                <span className="text-[#8054CC]"> meaningful </span>
                digital experiences.
              </h3>
              <br/>
              <div className="mt-7 space-y-5 text-[15px] leading-8 text-[#716B70]">
                <p>
                  I'm Berwin C R, an Information Technology student
                  passionate about software engineering and building
                  useful digital products.
                </p>

                <p>
                  I enjoy solving complex problems, exploring modern
                  technologies, and developing applications that
                  create real-world impact.
                </p>

                <p>
                  My interests span full-stack development, artificial
                  intelligence, machine learning, and problem-solving.
                  I'm always curious to learn, experiment, and improve.
                </p>
              </div>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#104B52] !px-7 !py-3 text-sm font-bold !text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#17646D] hover:shadow-lg"
              >
                Let's Connect
                <span>↗</span>
              </a>

              <span className="text-sm text-[#827B82]">
                Always open to new ideas.
              </span>
            </div>
          </div>

          {/* Highlight cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:translate-x-16">
            {highlights.map((item) => (
              <div
                key={item.number}
                className={`${item.color} group relative flex min-h-[220px] flex-col justify-between overflow-hidden rounded-[2rem] border border-white/60 !p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/70 text-[#17243B] shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110">
                    <item.icon size={27} strokeWidth={1.7} />
                  </div>

                  <span className="text-xs font-bold tracking-widest text-[#17243B]/40">
                    {item.number}
                  </span>
                </div>

                <div className="relative z-10 mt-8">
                  <div className={`mb-3 h-1 w-9 rounded-full ${item.accent}`} />

                  <h3 className="font-serif text-2xl text-[#17243B]">
                    {item.title}
                  </h3>

                  <p className="mt-2 max-w-[220px] text-sm leading-6 text-[#625D65]">
                    {item.description}
                  </p>
                </div>

                <div className="pointer-events-none absolute -bottom-12 -right-10 h-32 w-32 rounded-full border-[18px] border-white/20 transition-transform duration-500 group-hover:scale-125" />
              </div>
            ))}
          </div>
        </div>

 
{/* Philosophy banner */}
<div className="mx-auto !mt-20 flex w-full justify-center">

  <div className="relative flex min-h-[190px] w-full max-w-[1100px] flex-col items-center justify-center overflow-hidden rounded-[1.75rem] bg-[#104B52] !px-7 !py-12 text-center md:!px-14 md:!py-16">

    {/* Decorative circles */}
    <div className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full border-[35px] border-white/[0.04]" />

    <div className="pointer-events-none absolute -bottom-28 -left-16 h-64 w-64 rounded-full border-[35px] border-white/[0.04]" />

    {/* Banner content */}
    <div className="relative z-10 flex w-full flex-col items-center">

      <span className="text-xs font-extrabold tracking-[0.2em] text-[#C9A8ED]">
        A LITTLE SOMETHING I BELIEVE IN
      </span>

      <h3 className="mx-auto mt-5 max-w-4xl text-center font-serif text-2xl leading-snug text-white md:text-4xl">
        "Stay curious. Keep building.
        <span className="text-[#FFAA99]">
          {" "}Make an impact.
        </span>"
      </h3>

      <div className="mt-6 h-1 w-12 rounded-full bg-[#FFAA99]" />

    </div>
  </div>
</div>


      </div>
    </section>
  );
};

export default About;
