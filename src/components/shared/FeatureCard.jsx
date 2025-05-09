import { motion } from "motion/react";
import { twMerge } from "tailwind-merge";

const FeatureCard = ({ icon, title = "", subtitle = "", className = "" }) => {
  return (
    <motion.div initial="initial" whileHover="hovered">
      <motion.div
        variants={{
          initial: { y: 0 },
          hovered: { y: -8 },
        }}
        transition={{ type: "spring" }}
        className={twMerge(
          "bg-neutral-900/50 text-sm px-4.5 pt-4 pb-4 ring ring-neutral-800 rounded-2xl relative",
          className
        )}
      >
        <div className="text-orange-500 text-[2rem] mb-3">{icon}</div>
        <h2 className="text-white text-2xl mb-2.5">{title}</h2>
        <p className="text-pretty text-base">{subtitle}</p>

        <motion.span
          variants={{
            initial: { width: "50%", opacity: 0.6 },
            hovered: { width: "60%", opacity: 1 },
          }}
          className="absolute -bottom-px left-1/2 -translate-x-1/2 h-px bg-gradient-to-r from-orange-500/0 via-orange-500 to-orange-500/0"
        />
        <motion.span
          variants={{
            initial: { opacity: 0.6 },
            hovered: { opacity: 1 },
          }}
          className="absolute inset-0 bg-radial-[30%_8%_at_50%_100%] from-orange-500/25 to-orange-500/0"
        />
      </motion.div>
    </motion.div>
  );
};

export default FeatureCard;
