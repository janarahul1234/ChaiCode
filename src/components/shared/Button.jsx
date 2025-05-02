import { twMerge } from "tailwind-merge";

const Button = ({
  size = "medium",
  variant = "primary",
  href = "#",
  className = "",
  children,
}) => {
  const styles = {
    base: "block text-center font-semibold rounded-lg transition duration-300 ease-in-out overflow-hidden",
    variants: {
      primary:
        "bg-linear-55 from-orange-500 to-orange-700 text-white relative hover:scale-105 after:absolute after:contain-none after:inset-0 after:bg-linear-to-r after:from-orange-300/0 after:to-orange-300/30 after:-translate-x-full hover:after:translate-x-0 after:transition after:duration-300 after:ease-in-out",
      ghost:
        "inset-ring inset-ring-neutral-800 hover:bg-neutral-900/50 hover:text-white hover:scale-105",
    },
    sizes: {
      large: "px-8 md:px-10 py-3 md:py-4",
      medium: "px-8 py-3",
      small: "px-5 py-2",
    },
  };

  return (
    <a
      href={href}
      className={twMerge(
        styles.base,
        styles.sizes[size],
        styles.variants[variant],
        className
      )}
    >
      <span className="relative z-1">{children}</span>
    </a>
  );
};

export default Button;
