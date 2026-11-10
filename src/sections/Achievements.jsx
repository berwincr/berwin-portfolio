
import {
  GraduationCap,
  Award,
  Cloud,
  Code2,
  BrainCircuit,
  Users,
  HeartHandshake,
  ExternalLink,
  ArrowUpRight,
  Trophy,
  BookOpen,
} from "lucide-react";

const certifications = [
  {
    number: "01",
    title: "Google Cloud Engineering",
    issuer: "Google Cloud",
    description: "Cloud engineering and Google Cloud fundamentals.",
    icon: Cloud,
    color: "#DCEBE0",
    accent: "#488E6D",
    link: "https://www.credly.com/earner/earned/badge/7039da1a-eea5-4d98-8625-e891f9e67fa9",
    verified: true,
  },
  {
    number: "02",
    title: "Python for Data Science",
    issuer: "NPTEL",
    description: "Python programming and data science foundations.",
    pdf: `${import.meta.env.BASE_URL}certificates/python-data-science.pdf`,
    icon: BookOpen,
    color: "#E9DDF8",
    accent: "#8054CC",
    verified: false,
    placeholder: true,
  },
  {
    number: "03",
    title: "Python Flask",
    issuer: "GUVI",
    description: "Backend web development using Python and Flask.",
    icon: Code2,
    color: "#FCE0D5",
    accent: "#E9826E",
    link: "https://www.guvi.in/verify-certificate?id=S6756m0b8iFD119550&course=pythonflasktamil",
    verified: true,
  },
  {
    number: "04",
    title: "Google AI Essentials",
    issuer: "Google / Coursera",
    description:
      "Foundations of artificial intelligence and practical AI applications.",
    icon: BrainCircuit,
    color: "#F9EDC9",
    accent: "#C49A3A",
    link: "https://www.coursera.org/account/accomplishments/verify/UJ3MBD1ZY8YZ",
    verified: true,
  },
];

const activities = [
  {
    number: "01",
    title: "Event Coordinator",
    organization: "CEG Tech Forum",
    description:
      "Contributing to event planning, coordination and student engagement.",
    icon: Users,
    color: "#E9DDF8",
    accent: "#8054CC",
  },
  {
    number: "02",
    title: "NSS Volunteer",
    organization: "National Service Scheme",
    description:
      "Participating in community service and volunteering activities.",
    icon: HeartHandshake,
    color: "#DCEBE0",
    accent: "#488E6D",
  },
];

function Achievements() {
  return (
    <section
      id="achievements"
      className="relative overflow-hidden bg-[#FDF4EF] !px-6 !py-24 md:!px-12 lg:!py-4"
    >
      <div className="relative z-10 mx-auto max-w-[1320px]">
        {/* Hero Heading */}
        <div className="!mb-12 max-w-3xl">
          <span className="inline-flex rounded-full bg-[#E9DDF8] !px-5 !py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#8054CC]">
            MILESTONES & RECOGNITION
          </span>

          <h2 className="!mt-6 text-4xl font-bold tracking-tight text-[#17243B] md:text-5xl lg:text-6xl">
            Achievements &
            <span className="font-serif italic text-[#8054CC]">
              {" "}Growth.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-[#667085] md:text-lg">
            Every milestone represents a step forward in my journey of
            learning, building, exploring and making an impact.
          </p>
        </div>

        {/* Academic Achievements */}
        <div className="!mb-20">
          <div className="mb-9">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8054CC]">
              01 / ACADEMICS
            </p>
            <h3 className="mt-3 text-2xl font-bold text-[#17243B] md:text-3xl">
              Academic Excellence
            </h3>
            <p className="!mb-4 mt-2 text-sm text-[#7B8494] md:text-base">
              A strong academic foundation built through consistency and hard work.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            <article className="rounded-[1.75rem] bg-[#E9DDF8] !p-8">
              <GraduationCap size={27} color="#8054CC" />
              <p className="mt-7 text-4xl font-bold text-[#8054CC] md:text-5xl">
                99.1%
              </p>
              <h4 className="mt-3 text-lg font-bold text-[#17243B]">
                Higher Secondary
              </h4>
              <p className="mt-1 text-sm text-[#667085]">HSC Examination</p>
            </article>

            <article className="rounded-[1.75rem] bg-[#FCE0D5] !p-8">
              <Award size={27} color="#E9826E" />
              <p className="mt-7 text-4xl font-bold text-[#E9826E] md:text-5xl">
                97.4%
              </p>
              <h4 className="mt-3 text-lg font-bold text-[#17243B]">
                Secondary School
              </h4>
              <p className="mt-1 text-sm text-[#667085]">SSLC Examination</p>
            </article>

            <article className="rounded-[1.75rem] bg-[#DCEBE0] !p-8">
              <Trophy size={27} color="#488E6D" />
              <p className="mt-7 text-4xl font-bold text-[#488E6D] md:text-5xl">
                4
              </p>
              <h4 className="mt-3 text-lg font-bold text-[#17243B]">
                State Rank
              </h4>
              <p className="mt-1 text-sm text-[#667085]">
                Academic achievement
              </p>
            </article>
          </div>
        </div>

        {/* Certifications */}
        <div className="!mb-20">
          <div className="mb-9">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8054CC]">
              02 / CERTIFICATIONS
            </p>
            <h3 className="!mt-3 text-2xl font-bold text-[#17243B] md:text-3xl">
              Learning Beyond Classrooms
            </h3>
            <p className="!mt-2 !mb-2 text-sm text-[#7B8494] md:text-base">
              Certifications reflecting my interest in software, cloud and AI.
            </p>
          </div>

          <div className="achievements-grid">
            {certifications.map((certificate) => {
              const Icon = certificate.icon;

              return (
                <article
                  key={certificate.number}
                  className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/75 !p-7 shadow-[0_12px_40px_rgba(23,36,59,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(23,36,59,0.09)] md:!p-8"
                >
                  <div
                    className="absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-40 transition-transform duration-500 group-hover:scale-125"
                    style={{ backgroundColor: certificate.color }}
                  />

                  <div className="relative z-10 flex flex-1 flex-col">
                    <div className="flex items-center justify-between">
                      <div
                        className="flex h-14 w-14 items-center justify-center rounded-2xl"
                        style={{
                          backgroundColor: certificate.color,
                          color: certificate.accent,
                        }}
                      >
                        <Icon size={26} strokeWidth={1.8} />
                      </div>

                      <span className="text-sm font-semibold tracking-widest text-[#A0A5B1]">
                        {certificate.number}
                      </span>
                    </div>


                    <p className="!mt-3 text-xs font-bold uppercase tracking-[0.15em] text-[#9298A5]">
                      {certificate.issuer}
                    </p>

                    <h4 className="!mt-2 text-xl font-bold text-[#17243B]">
                      {certificate.title}
                    </h4>

                    <p className="mt-2 flex-1 text-sm leading-7 text-[#7B8494]">
                      {certificate.description}
                    </p>

                    {/* NPTEL: View PDF */}
                    {certificate.pdf && (
                      <a
                        href={certificate.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="!mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-[#8054CC] !px-5 !py-3 text-sm font-bold !text-white transition-all hover:bg-[#6840B0] hover:shadow-md"
                      >
                        View Certificate
                        <ExternalLink size={16} />
                      </a>
                    )}

                     {/* Other certificates: Verification links */}
{certificate.link && (
  <a
    href={certificate.link}
    target="_blank"
    rel="noopener noreferrer"
    className="!mt-7 inline-flex w-fit items-center gap-2 rounded-full !px-5 !py-3 text-sm font-bold !text-white transition-all hover:shadow-md hover:-translate-y-0.5"
    style={{
      backgroundColor: certificate.accent,
      color: "#FFFFFF",
    }}
  >
    Verify Certificate
    <ExternalLink size={16} />
  </a>
)}
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* LeetCode */}
        <div className="!mb-20">
          <div className="mb-9">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8054CC]">
              03 / PROBLEM SOLVING
            </p>
            <h3 className="!mt-3 text-2xl font-bold text-[#17243B] md:text-3xl">
              Consistency Through Code
            </h3>
            <p className="!mt-2 !mb-4 text-sm text-[#7B8494] md:text-base">
              Practising data structures and algorithms, one problem at a time.
            </p>
          </div>

          <div className="overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/80 !p-5 shadow-[0_12px_40px_rgba(23,36,59,0.04)] md:!p-9">
            <div className="mb-7 flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
              <div>
                <h4 className="text-xl font-bold text-[#17243B]">
                  LeetCode Activity
                </h4>
                <p className="mt-1 !mb-4 text-sm text-[#7B8494]">
                  Submission history and problem-solving progress
                </p>
              </div>

              <a
                href="https://leetcode.com/u/Berwin_cr/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 self-start rounded-full bg-[#FCE0D5] !px-5 !py-3 text-sm font-bold !text-[#A85C4D] transition-transform hover:scale-105 sm:self-auto"
              >
                View LeetCode
                <ArrowUpRight size={17} />
              </a>
            </div>

            {/* LeetCode Submission Heatmap */}
<div className="overflow-hidden rounded-2xl border border-[#E9EAF0] bg-[#F8F9FC] !p-3 md:!p-5">
 <div className="w-full overflow-x-auto overflow-y-visible">
    <img
  src="https://leetcard.jacoblin.cool/Berwin_cr?ext=heatmap&theme=dark&width=1000&height=400&border=0&radius=16&cache=60"
  alt="Berwin's LeetCode submission heatmap"
  className="mx-auto h-auto w-full min-w-[600px] max-w-[1000px]"
  loading="lazy"
/>
  </div>
</div>

            <p className="mt-5 text-xs leading-6 text-[#9298A5]">
              Statistics and submission activity are provided by an external
              LeetCode statistics service. Counts may take time to refresh.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://github.com/berwincr/leetcode_solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#E9EAF0] bg-white !px-5 !py-3 text-sm font-semibold text-[#465166] transition-colors hover:border-[#C9A8ED]"
              >
                <Code2 size={17} />
                View DSA Solutions
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </div>

        {/* Leadership */}
        <div>
          <div className="!mb-9">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8054CC]">
              04 / LEADERSHIP & COMMUNITY
            </p>
            <h3 className="!mt-3 text-2xl font-bold text-[#17243B] md:text-3xl">
              Beyond Technology
            </h3>
            <p className="mt-2 text-sm text-[#7B8494] md:text-base">
              Experiences that shape my teamwork, communication and leadership.
            </p>
          </div>

          <div className="achievements-grid">
            {activities.map((activity) => {
              const Icon = activity.icon;

              return (
                <article
                  key={activity.number}
                  className="relative overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/75 !p-7 shadow-[0_12px_40px_rgba(23,36,59,0.04)] transition-all duration-300 hover:-translate-y-1 md:!p-9"
                >
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-2xl"
                    style={{
                      backgroundColor: activity.color,
                      color: activity.accent,
                    }}
                  >
                    <Icon size={26} strokeWidth={1.8} />
                  </div>

                  <p className="!mt-4 text-xs font-bold uppercase tracking-[0.15em] text-[#9298A5]">
                    {activity.organization}
                  </p>

                  <h4 className="!mt-4 text-xl font-bold text-[#17243B]">
                    {activity.title}
                  </h4>

                  <p className="mt-3 text-sm leading-7 text-[#7B8494]">
                    {activity.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Achievements;
