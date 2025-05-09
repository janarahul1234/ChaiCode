import { useEffect, useState } from "react";
import { motion } from "motion/react";

const useMousePosition = () => {
  const [mousePosition, setmousePosition] = useState({ x: 0, y: 0 });

  const handleMousePosition = (e) =>
    setmousePosition({ x: e.clientX, y: e.clientY });

  useEffect(() => {
    window.addEventListener("mousemove", handleMousePosition);
    return () => window.removeEventListener("mousemove", handleMousePosition);
  }, []);

  return mousePosition;
};

const Cursor = () => {
  const { x, y } = useMousePosition();

  return (
    <motion.div
      animate={{ left: x, top: y }}
      transition={{ type: "tween", ease: "backOut" }}
      className="fixed inset-0 -translate-1/2 bg-orange-500 size-[300px] blur-[75px] rounded-full opacity-20 -z-1 pointer-events-none"
    />
  );
};

export default Cursor;
