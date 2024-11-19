import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const AnimatedGridItem = ({ children }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });
  
    return (
      <motion.div
        ref={ref}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        style={{ originY: 1 }} // Esto hace que la animación comience desde abajo
      >
        {children}
      </motion.div>
    );
  };