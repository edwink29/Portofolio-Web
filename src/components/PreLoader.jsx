import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Motion = motion;

const PreLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <Motion.div
          className="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(18px)" }}
          transition={{ duration: 0.45 }}
          role="status"
          aria-label="Loading portfolio"
        >
          <Motion.div
            className="loader-mark"
            animate={{ rotate: 360 }}
            transition={{ duration: 1.1, repeat: Infinity, ease: "linear" }}
          />
          <span>Edwin Kurniawan</span>
        </Motion.div>
      )}
    </AnimatePresence>
  );
};

export default PreLoader;
