import { motion } from "motion/react";

import Container from "../shared/Container";
import SectionHeader from "../shared/SectionHeader";

const topics = [
  { name: "React", icon: <i className="ri-reactjs-line"></i> },
  { name: "React Native", icon: <i className="ri-reactjs-line"></i> },
  { name: "Docker", icon: <i className="ri-reactjs-line"></i> },
  { name: "REST API", icon: <i className="ri-server-line"></i> },
  { name: "MongoDB", icon: <i className="ri-feedback-line"></i> },
  { name: "NextJs", icon: <i className="ri-nextjs-line"></i> },
  { name: "NodeJs", icon: <i className="ri-nodejs-line"></i> },
  { name: "GraphQL", icon: <i className="ri-reactjs-line"></i> },
  { name: "Tailwind", icon: <i className="ri-tailwind-css-line"></i> },
  { name: "TypeScript", icon: <i className="ri-brackets-line"></i> },
  { name: "JavaScript", icon: <i className="ri-javascript-line"></i> },
  { name: "CI/CD", icon: <i className="ri-terminal-window-line"></i> },
  { name: "OAuth2", icon: <i className="ri-shield-star-line"></i> },
];

const topicsPhone = [
  { name: "React", icon: <i className="ri-reactjs-line"></i> },
  { name: "REST API", icon: <i className="ri-server-line"></i> },
  { name: "NextJs", icon: <i className="ri-nextjs-line"></i> },
  { name: "Tailwind", icon: <i className="ri-tailwind-css-line"></i> },
  { name: "JavaScript", icon: <i className="ri-javascript-line"></i> },
  { name: "CI/CD", icon: <i className="ri-terminal-window-line"></i> },
  { name: "OAuth2", icon: <i className="ri-shield-star-line"></i> },
];

const Topis = ({ name = "", icon }) => {
  return (
    <motion.div initial="initial" whileHover="hovered">
      <motion.div
        variants={{
          initial: { y: 0 },
          hovered: { y: -8 },
        }}
        transition={{ type: "spring" }}
        className="bg-neutral-900/50 text-white text-sm px-5 py-3 flex items-center gap-2.5 ring ring-neutral-800 rounded-2xl relative"
      >
        <div className="text-xl">{icon}</div>
        <h2 className="text-base">{name}</h2>

        <motion.span
          variants={{
            initial: { width: "50%", opacity: 0.4 },
            hovered: { width: "60%", opacity: 1 },
          }}
          className="absolute -bottom-px left-1/2 -translate-x-1/2 h-px bg-gradient-to-r from-orange-500/0 via-orange-500 to-orange-500/0"
        />
        <motion.span
          variants={{
            initial: { opacity: 0.6 },
            hovered: { opacity: 1 },
          }}
          className="absolute inset-0 bg-[radial-gradient(30%_15%_at_50%_100%,rgba(255,115,0,0.15)_0%,transparent_100%)]"
        />
      </motion.div>
    </motion.div>
  );
};

const Topics = () => {
  return (
    <section className="pt-20 pb-8">
      <Container className="pt-2 pb-16">
        <SectionHeader
          badge="Topics"
          title="Master the Topics You Care About"
          subtitle="Videos, courses, and more. Your topic is waiting in our curated tracks"
        />

        <div className="flex flex-wrap justify-center items-center gap-6 gap-y-8 pt-8 sm:hidden">
          {topicsPhone.map((topic, idx) => (
            <Topis key={idx} {...topic} />
          ))}

          <Topis
            name="More Topics"
            icon={<i className="ri-arrow-right-line"></i>}
          />
        </div>

        <div className="sm:flex flex-wrap justify-center items-center gap-6 gap-y-8 pt-8 hidden">
          {topics.map((topic, idx) => (
            <Topis key={idx} {...topic} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Topics;
