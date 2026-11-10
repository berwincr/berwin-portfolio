
import { useState, useEffect } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavigation = (href) => {
    setActiveLink(href);
    setMenuOpen(false);
  };

  // Automatically update active navigation while scrolling
  useEffect(() => {
    const updateActiveLink = () => {
      const sections = navLinks
        .map((link) => document.querySelector(link.href))
        .filter(Boolean);

      let currentSection = sections[0];

      sections.forEach((section) => {
        if (section.getBoundingClientRect().top <= 160) {
          currentSection = section;
        }
      });

      if (currentSection) {
        setActiveLink(`#${currentSection.id}`);
      }
    };

    window.addEventListener("scroll", updateActiveLink, {
      passive: true,
    });

    updateActiveLink();

    return () => {
      window.removeEventListener("scroll", updateActiveLink);
    };
  }, []);

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-[#8054CC]/10 bg-[#FDF4EF]/95 backdrop-blur-lg">
      <div className="mx-auto flex max-w-[1500px] items-center justify-between !px-8 !py-6 sm:!px-12 lg:!px-16">

        {/* BCR Brand */}
        <a
          href="#home"
          onClick={() => handleNavigation("#home")}
          className="group flex shrink-0 items-center gap-3"
        >
          <span className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-[#EDE1F7] font-serif text-lg font-extrabold tracking-tight text-[#8054CC] transition-all duration-300 group-hover:-rotate-6 group-hover:bg-[#8054CC] group-hover:text-white">
            B
          </span>

          <span className="font-serif text-xl font-bold tracking-tight text-[#17243B] sm:text-2xl">
            Berwin C R
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-2 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => handleNavigation(link.href)}
              aria-current={
                activeLink === link.href ? "location" : undefined
              }
             className={`inline-flex min-h-12 items-center justify-center whitespace-nowrap rounded-full !px-7 !py-3 text-sm font-semibold transition-all duration-300 ${
  activeLink === link.href
    ? "bg-[#EDE1F7] text-[#8054CC]"
    : "text-[#17243B] hover:bg-[#EDE1F7] hover:text-[#8054CC]"
}`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Let's Talk */}
        <a
          href="#contact"
          onClick={() => handleNavigation("#contact")}
         className="group hidden min-h-12 min-w-[145px] items-center justify-center gap-3 rounded-full bg-[#FF8E7B] !px-7 !py-3 text-sm font-bold !text-[#17243B] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#F47765] hover:shadow-md lg:inline-flex"
        >
          Let's Connect
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            ↗
          </span>
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EDE1F7] text-xl text-[#8054CC] transition-colors hover:bg-[#8054CC] hover:text-white lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-[#8054CC]/10 bg-[#FDF4EF] px-6 pb-6 pt-3 shadow-lg lg:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleNavigation(link.href)}
                className={`inline-flex min-h-12 w-full items-center justify-center whitespace-nowrap rounded-full !px-6 !py-3 text-sm font-semibold transition-all duration-300 ${
  activeLink === link.href
    ? "bg-[#EDE1F7] text-[#8054CC]"
    : "text-[#17243B] hover:bg-[#EDE1F7] hover:text-[#8054CC]"
}`}
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => handleNavigation("#contact")}
              className="mt-3 rounded-full bg-[#FF8E7B] px-5 py-3 text-center font-bold !text-[#17243B] transition-colors hover:bg-[#F47765]"
            >
              Let's Talk ↗
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
