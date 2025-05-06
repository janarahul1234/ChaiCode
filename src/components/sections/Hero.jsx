import { motion } from "motion/react";

import Container from "../shared/Container";
import Badge from "../shared/Badge";
import Button from "../shared/Button";
import GradientText from "../shared/GradientText";
import MagneticEffect from "../shared/MagneticEffect";

const images = [
  "https://pbs.twimg.com/profile_images/1875305826887593987/8x4ZhIvO_400x400.jpg",
  "https://pbs.twimg.com/profile_images/1898426478339207169/WM_XtHia_400x400.jpg",
  "https://pbs.twimg.com/profile_images/1879075502356586496/V9wQzW7V_400x400.jpg",
];

const itemVariants = {
  initial: { y: 24, opacity: 0 },
  view: { y: 0, opacity: 1 },
};

const duration = 0.5;
const stagger = 0.3;

const Hero = () => {
  return (
    <section className="pt-20 pb-8" id="home">
      <Container className="grid grid-cols-1 sm:grid-cols-[28rem] md:grid-cols-1 sm:justify-center pt-20 pb-12 md:pb-18">
        <MagneticEffect>
          <Badge className="justify-self-center pl-2 py-[7px] mb-5 md:mb-5.5 cursor-pointer">
            <div className="flex flex-none items-center -space-x-2">
              {images.map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  className="bg-neutral-800 size-6 ring-2 ring-neutral-900 rounded-full"
                />
              ))}
            </div>
            Trusted by 1.5 Million Learners
          </Badge>
        </MagneticEffect>

        <h1 className="text-4xl md:text-[5.5rem] mb-7.5 md:mb-10 flex flex-col gap-1.5 md:gap-1">
          <motion.span
            initial="initial"
            animate="view"
            variants={itemVariants}
            transition={{ duration, delay: stagger * 1, ease: "easeInOut" }}
            className="self-center"
          >
            Don’t Learn Alone.
          </motion.span>
          <motion.span
            initial="initial"
            animate="view"
            variants={itemVariants}
            transition={{ duration, delay: stagger * 2, ease: "easeInOut" }}
          >
            <GradientText>Code Together</GradientText> with
          </motion.span>
          <motion.span
            initial="initial"
            animate="view"
            variants={itemVariants}
            transition={{ duration, delay: stagger * 3, ease: "easeInOut" }}
            className="self-end"
          >
            a <GradientText>Real Community.</GradientText>
          </motion.span>
        </h1>

        <motion.p
          initial="initial"
          animate="view"
          variants={itemVariants}
          transition={{ duration, delay: stagger * 4, ease: "easeInOut" }}
          className="max-w-xl justify-self-center md:text-xl text-center text-pretty leading-[1.6] mb-10 md:mb-14"
        >
          Finding content is easy — real growth needs practice, collaboration,
          support, guidance, resilience, and consistency.
        </motion.p>

        <div className="justify-self-center">
          <Button href="#cohorts" size="large">
            Start Learning Today
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
