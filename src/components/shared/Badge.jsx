import { twMerge } from "tailwind-merge";
import { motion } from "motion/react";

const Badge = ({ className = "", children }) => {
  const animationProps = {
    animate: {
      width: ["40%", "60%", "40%"],
      opacity: [0.6, 1, 0.6],
    },
    transition: {
      duration: 3,
      ease: "easeInOut",
      repeat: Infinity,
    },
  };

  return (
    <div
      className={twMerge(
        "relative w-fit bg-neutral-900 text-white text-sm px-4 py-2 ring ring-neutral-800 rounded-full rounded-bl-[2px]",
        className
      )}
    >
      <span className="relative flex items-center gap-2 z-1">{children}</span>

      <motion.span
        {...animationProps}
        className="absolute -bottom-px left-1/2 -translate-x-1/2 h-px bg-gradient-to-r from-orange-500/0 via-orange-500 to-orange-500/0"
      />
      <motion.span
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 bg-radial-[30%_40%_at_50%_100%] from-orange-500/25 to-orange-500/0"
      />
    </div>
  );
};

export default Badge;
