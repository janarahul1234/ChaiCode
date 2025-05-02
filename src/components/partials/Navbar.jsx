import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "motion/react";

import Logo from "../shared/Logo";
import Container from "../shared/Container";
import Button from "../shared/Button";

const links = [
  { name: "Home", href: "#home" },
  { name: "Testimonial", href: "#testimonial" },
  { name: "Cohorts", href: "#cohorts" },
  { name: "Features", href: "#features" },
  { name: "Community", href: "#community" },
];

const Navbar = () => {
  const listRef = useRef(null);
  const ignoreScrollRef = useRef(false);

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [dotX, setDotX] = useState(0);

  const updateDotPosition = (name) => {
    const list = listRef.current?.getBoundingClientRect();
    const items = listRef.current?.querySelectorAll("a[data-link]");
    items?.forEach((item) => {
      if (item.dataset.link === name) {
        const { left, width } = item.getBoundingClientRect();
        setDotX(left - list.left + width / 2);
      }
    });
  };

  const handleClick = (e) => {
    const name = e.target.dataset.link;
    const targetId = e.target.getAttribute("href")?.replace("#", "");
    const targetEl = document.getElementById(targetId);

    if (!targetEl) return;

    const currentY = window.scrollY;
    const targetY = targetEl.offsetTop;

    const distance = Math.abs(currentY - targetY);
    const estimatedTime = Math.min(distance * 0.8, 1000);

    ignoreScrollRef.current = true;
    setActiveLink(name);
    updateDotPosition(name);
    setIsOpen(false);

    setTimeout(() => {
      ignoreScrollRef.current = false;
    }, estimatedTime);
  };

  useEffect(() => {
    updateDotPosition(activeLink);
  }, [activeLink]);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const onScroll = () => {
      setIsScrolled(window.scrollY > 50);
      if (ignoreScrollRef.current) return;

      const scrollY = window.scrollY;

      sections.forEach((section) => {
        const top = section.offsetTop - 60;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");
        if (scrollY >= top && scrollY < top + height) {
          const sectionName = id.charAt(0).toUpperCase() + id.slice(1);
          if (sectionName !== activeLink) {
            setActiveLink(sectionName);
          }
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [activeLink]);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header
      className={twMerge(
        "fixed top-0 left-0 w-full z-50 transition after:transition",
        isScrolled
          ? "after:absolute after:inset-0 after:bg-neutral-950/80 after:backdrop-blur-lg after:-z-1"
          : "bg-transparent"
      )}
    >
      <Container>
        <nav className="h-20 flex items-center justify-between relative">
          <Logo />

          {/* Mobile Menu */}
          <div
            className={twMerge(
              "md:hidden fixed top-0 w-[80%] h-full px-12 py-28 bg-neutral-950/80 backdrop-blur-lg transition-all z-10",
              isOpen ? "right-0" : "-right-full"
            )}
          >
            <ul className="flex flex-col gap-12">
              {links.map(({ name, href }) => (
                <li key={name}>
                  <a
                    href={href}
                    data-link={name}
                    onClick={handleClick}
                    className={twMerge(
                      "text-xl transition",
                      activeLink === name
                        ? "text-orange-500"
                        : "text-neutral-400 hover:text-white"
                    )}
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
            <button
              className="absolute top-6 right-6 text-white text-2xl"
              onClick={toggleMenu}
            >
              <i className="ri-close-large-line" />
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <ul ref={listRef} className="flex gap-8 relative">
              {links.map(({ name, href }) => (
                <li key={name}>
                  <a
                    href={href}
                    data-link={name}
                    onClick={handleClick}
                    className={twMerge(
                      "transition",
                      activeLink === name
                        ? "text-white"
                        : "text-neutral-400 hover:text-white"
                    )}
                  >
                    {name}
                  </a>
                </li>
              ))}
              {/* Dot Indicator */}
              <motion.span
                animate={{ left: dotX }}
                transition={{ type: "tween", ease: "backOut" }}
                className="absolute -bottom-3.5 -translate-x-1/2 size-1.5 bg-orange-500 rounded-full pointer-events-none"
              />
              <motion.span
                animate={{ left: dotX }}
                transition={{ type: "tween", ease: "backOut" }}
                className="absolute -bottom-3.5 -translate-x-1/2 size-1.5 bg-orange-500 rounded-full pointer-events-none animate-ping"
              />
            </ul>
          </div>

          <div className="flex items-center gap-6">
            <Button href="https://courses.chaicode.com/learn" size="small">
              Sign in
            </Button>
            <button
              className="md:hidden text-2xl text-neutral-400 hover:text-white"
              onClick={toggleMenu}
            >
              <i className="ri-menu-3-line" />
            </button>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
