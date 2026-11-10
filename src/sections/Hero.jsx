
import avatar from "../assets/avatar.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#FDF4EF] py-8"
    >
      {/* Decorative background */}
      <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-[#F9D8C4] opacity-40 blur-3xl" />
      <div className="absolute bottom-10 left-0 h-80 w-80 rounded-full bg-[#C9A8ED] opacity-25 blur-3xl" />

      {/* Main content */}
      <div className="relative mx-auto grid w-full max-w-[1320px] grid-cols-1 items-center gap-8 px-6 sm:px-10 lg:grid-cols-2 lg:gap-14 lg:px-14">

        {/* Left content */}
        <div className="z-10 max-w-[620px] py-8 lg:py-0">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#FFE5CE] px-5 py-2 text-sm font-semibold text-[#A75C32]">
            <span className="h-2 w-2 rounded-full bg-[#FF8E7B]" />
            Software Engineer
          </span>

          <p className="mb-1 font-serif text-2xl text-[#104B52] md:text-3xl">
            Hi, I'm
          </p>

          <h1 className="mb-4 font-serif text-5xl font-bold leading-tight tracking-tight text-[#17243B] sm:text-6xl lg:text-7xl">
            Berwin C R
          </h1>

          <h2 className="mb-5 font-serif text-2xl font-semibold leading-snug text-[#104B52] sm:text-3xl lg:text-[38px]">
            I build scalable solutions and love turning
            <span className="text-[#8054CC]"> ideas </span>
            into
            <span className="text-[#FF8E7B]"> impact.</span>
          </h2>

          <p className="mb-10 max-w-[540px] text-base leading-relaxed text-[#596273] sm:text-lg">
            Full-Stack Developer | AI/ML Enthusiast | Problem Solver.
            <br/>
            Exploring new technologies to build a better digital tomorrow.
          </p>
          
          {/* Action buttons */}
          
<div className="!mt-10 flex flex-wrap items-center gap-6">
  <a
    href="#projects"
    className="inline-flex min-h-14 min-w-[220px] items-center justify-center whitespace-nowrap rounded-full bg-[#104B52] !px-10 !py-4 text-base font-semibold !text-white shadow-lg shadow-[#104B52]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#17646D] hover:shadow-xl"
  >
    View My Projects
    <span className="ml-3">↗</span>
  </a>

  <a
    href={`${import.meta.env.BASE_URL}resume.pdf`}
    download="Berwin_C_R_Resume.pdf"    
    className="inline-flex min-h-14 min-w-[220px] items-center justify-center whitespace-nowrap rounded-full border border-[#C9A8ED] bg-[#EDE1F7] !px-10 !py-4 text-base font-semibold !text-[#514078] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#8054CC] hover:bg-[#C9A8ED] hover:shadow-md"
  >
    Download Resume
    <span className="ml-3">↓</span>
  </a>
</div>

        </div>

        {/* Right content - AI Avatar */}
        <div className="relative flex items-center justify-center lg:justify-end">
          <div className="absolute h-[300px] w-[300px] rounded-full bg-[#F9D8C4] sm:h-[420px] sm:w-[420px] lg:h-[480px] lg:w-[480px]" />

          <div className="absolute right-10 top-8 h-24 w-24 rounded-full bg-[#C9A8ED] opacity-60 blur-2xl" />

          <img
            src={avatar}
            alt="Illustrated avatar of Berwin C R"
            className="relative z-10 w-full max-w-[440px] object-contain drop-shadow-xl sm:max-w-[500px] lg:max-w-[560px]"
          />

          <div className="absolute right-0 top-8 z-20 rotate-6 rounded-2xl bg-white/90 px-4 py-3 font-semibold text-[#8054CC] shadow-lg backdrop-blur-sm sm:right-4 lg:right-0">
            {"</>"} Code & Create
          </div>
        </div>
      </div>

      {/* Bottom decorative wave */}
      {/* Full-width bottom decorative wave */}
<div
  className="absolute bottom-0 left-1/2 z-20 h-8 -translate-x-1/2 bg-[#E5D2F5]"
  style={{
    width: "100vw",
    maxWidth: "none",
    borderRadius: "50% 50% 0 0 / 45% 45% 0 0",
  }}
/>
    </section>
  );
};

export default Hero;
