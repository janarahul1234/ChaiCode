import { twMerge } from "tailwind-merge";

const GradientText = ({ className = "", children }) => {
  return (
    <span
      className={twMerge(
        "bg-linear-55 from-40% to-90% from-white to-orange-500 text-transparent bg-clip-text",
        className
      )}
    >
      {children}
    </span>
  );
};

export default GradientText;
