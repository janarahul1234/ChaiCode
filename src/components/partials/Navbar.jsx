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
  {
    name: "Udemy",
    href: "https://www.udemy.com/course/web-dev-master/?couponCode=CHAISUMMER1",
  },
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

  const toggleMenu = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    updateDotPosition(activeLink);
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
          if (sectionName !== activeLink) setActiveLink(sectionName);
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [activeLink]);

  return (
    <header
      className={twMerge(
        "fixed top-0 left-0 w-full z-100 after:transition after:duration-300 after:ease-in-out",
        isScrolled
          ? "after:absolute after:inset-0 after:bg-neutral-950/80 after:backdrop-blur-lg after:-z-1"
          : ""
      )}
    >
      <Container>
        <nav className="relative h-20 flex items-center justify-between">
          <Logo />

          {/* Mobile Menu */}
          <div
            className={twMerge(
              "fixed top-0 w-[80%] sm:w-1/2 h-full px-12 py-28 bg-neutral-950/80 backdrop-blur-lg transition-all duration-200 ease-in-out z-10 min-[974px]:hidden",
              isOpen ? "right-0" : "-right-full"
            )}
          >
            <ul className="flex flex-col gap-12">
              {links.map(({ name, href }, idx) => (
                <li key={idx}>
                  <a
                    href={href}
                    target={name === "Udemy" ? "_blank" : ""}
                    className={twMerge(
                      "text-xl transition duration-300 ease-in-out",
                      activeLink === name
                        ? "text-orange-500"
                        : "text-neutral-400 hover:text-white"
                    )}
                    data-link={name}
                    onClick={handleClick}
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>

            <button
              className="absolute top-6 right-6 text-white cursor-pointer"
              onClick={toggleMenu}
            >
              <i className="ri-close-large-line text-2xl" />
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden min-[974px]:block absolute left-1/2 top-1/2 -translate-1/2">
            <ul ref={listRef} className="relative flex gap-8">
              {links.map(({ name, href }, idx) => (
                <li key={idx}>
                  <a
                    href={href}
                    target={name === "Udemy" ? "_blank" : ""}
                    className={twMerge(
                      "transition duration-300 ease-in-out",
                      activeLink === name
                        ? "text-white"
                        : "text-neutral-400 hover:text-white"
                    )}
                    data-link={name}
                    onClick={handleClick}
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

          <div className="flex items-center gap-6 max-[300px]:gap-4">
            <Button href="https://courses.chaicode.com/learn" size="small">
              Sign in
            </Button>

            <button
              className="text-neutral-400 hover:text-white transition duration-300 ease-in-out cursor-pointer min-[974px]:hidden"
              onClick={toggleMenu}
            >
              <i className="ri-menu-3-line text-2xl" />
            </button>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
