
import {
  Mail,
  ArrowUpRight,
  Send,
} from "lucide-react";

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

function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#FDF4EF] !px-6 !py-12 md:!px-12 lg:!py-3"
    >
      <div className="mx-auto max-w-[1320px]">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#104B52] !p-8 md:!p-14 lg:!p-20">

          {/* Decorative circles */}
          <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-[#C9A8ED]/20 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-28 -left-16 h-72 w-72 rounded-full bg-[#FF8E7B]/20 blur-2xl" />

          <div className="relative z-10 max-w-3xl">
            <span className="inline-flex rounded-full bg-white/10 !px-5 !py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#D9C3F4]">
              GET IN TOUCH
            </span>

            <h2 className="!mt-7 text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
              Let's build
              <span className="block font-serif italic text-[#C9A8ED]">
                something together.
              </span>
            </h2>

            <p className="!mt-6 max-w-xl text-base leading-8 text-white/70 md:text-lg">
              I'm always open to discussing new opportunities,
              interesting projects, collaborations and ideas.
              Feel free to reach out!
            </p>

            {/* Email Button */}
            <a
              href="mailto:berwincr4028@gmail.com"
              className="!mt-9 inline-flex items-center gap-3 rounded-full bg-[#C9A8ED] !px-7 !py-4 text-sm font-bold !text-[#17243B] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg"
            >
              <Mail size={19} />
              Let's Connect
              <ArrowUpRight size={18} />
            </a>

            {/* Social Links */}
            <div className="!mt-12 flex flex-wrap items-center gap-5 border-t border-white/15 !pt-8">
              <span className="text-sm font-medium text-white/60">
                Find me on
              </span>

              <a
                href="https://github.com/berwincr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold !text-white transition-colors hover:text-[#C9A8ED]"
              >
                <GithubIcon size={19} />
                GitHub
                <ArrowUpRight size={15} />
              </a>

              <a
                href="mailto:berwincr4028@gmail.com"
                className="inline-flex items-center gap-2 text-sm font-semibold !text-white transition-colors hover:text-[#C9A8ED]"
              >
                <Send size={18} />
                Email
                <ArrowUpRight size={15} />
              </a>

             <a
  href="https://www.linkedin.com/in/berwin-cr/"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="LinkedIn"
  className="inline-flex items-center gap-2 text-sm font-semibold !text-white transition hover:text-[#C9A8ED]"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="19"
    height="19"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM3.56 9h3.56v11.452H3.56V9zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
  LinkedIn
  <ArrowUpRight size={15} />
</a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="flex flex-col items-center justify-between gap-4 !pt-9 text-center sm:flex-row sm:text-left">
          <p className="text-sm font-semibold text-[#17243B]">
            Berwin C R
          </p>

          <p className="text-xs text-[#9298A5]">
            © {new Date().getFullYear()} Berwin C R. All rights reserved.
          </p>

          <a
            href="#home"
            className="text-sm font-semibold text-[#8054CC] transition-colors hover:text-[#104B52]"
          >
            Back to top ↑
          </a>
        </footer>
      </div>
    </section>
  );
}

export default Contact;
