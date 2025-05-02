import { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

const MagneticEffect = ({
  children,
  radius = 80,
  motionConfig = {
    stiffness: 100,
    damping: 15,
    rotateStiffness: 100,
    rotateDamping: 10,
  },
}) => {
  const ref = useRef(null);
  const [hover, setHover] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotate = useMotionValue(0);

  const springX = useSpring(x, {
    stiffness: motionConfig.stiffness,
    damping: motionConfig.damping,
  });
  const springY = useSpring(y, {
    stiffness: motionConfig.stiffness,
    damping: motionConfig.damping,
  });
  const springRotate = useSpring(rotate, {
    stiffness: motionConfig.rotateStiffness,
    damping: motionConfig.rotateDamping,
  });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const updateEffect = (clientX, clientY) => {
      const rect = el.getBoundingClientRect();

      const cursor = { x: clientX, y: clientY };
      const elCenter = {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      };

      const dx = cursor.x - elCenter.x;
      const dy = cursor.y - elCenter.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < radius) {
        if (!hover) setHover(true);
        x.set(dx * 0.8);
        y.set(dy * 0.8);
        rotate.set(dx * 0.05);
      } else {
        if (hover) {
          setHover(false);
          x.set(0);
          y.set(0);
          rotate.set(0);
        }
      }
    };

    const handleMouseMove = (e) => updateEffect(e.clientX, e.clientY);
    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        updateEffect(touch.clientX, touch.clientY);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [hover, radius]);

  return (
    <motion.div
      ref={ref}
      style={{
        display: "inline-block",
        x: springX,
        y: springY,
        rotate: springRotate,
        touchAction: "none",
        willChange: "transform",
      }}
    >
      {children}
    </motion.div>
  );
};

export default MagneticEffect;
