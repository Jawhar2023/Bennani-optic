import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CinematicIntro({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const [show, setShow] = useState(true);
  const [focus, setFocus] = useState(false);

  useEffect(() => {
    // BENNANI OPTIC intro – camera focus effect
    setTimeout(() => setFocus(true), 1800);

    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(onComplete, 700);
    }, 5200);

    return () => clearTimeout(timer);
  }, [onComplete]);

  const handleSkip = () => {
    setShow(false);
    setTimeout(onComplete, 700);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
          style={{
            background:
              "radial-gradient(circle at center, #064e3b 0%, #022c22 60%, #000 100%)",
          }}
        >
          {/* CAMERA BLUR → SHARP */}
          <motion.div
            animate={{
              filter: focus ? "blur(0px)" : "blur(18px)",
              scale: focus ? 1 : 1.08,
            }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            className="absolute inset-0"
          />

          {/* SCAN LIGHT */}
          <motion.div
            initial={{ x: "-120%" }}
            animate={{ x: "220%" }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
            className="absolute inset-y-0 w-44 bg-green-400/20 blur-3xl"
          />

          {/* GLASSES + TEXT – centered in viewport */}
          <div className="relative z-10 flex flex-col items-center justify-center">
            {/* GLASSES WITH REFRACTION */}
            <div className="relative flex items-center justify-center">
              {/* LEFT LENS */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="absolute w-[90px] h-[90px] rounded-full border-2 border-green-400"
                style={{
                  backdropFilter: "blur(8px) brightness(1.2)",
                  boxShadow: "0 0 25px rgba(34,197,94,0.6)",
                }}
              />

              {/* RIGHT LENS */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="absolute w-[90px] h-[90px] rounded-full border-2 border-green-400 translate-x-[120px]"
                style={{
                  backdropFilter: "blur(8px) brightness(1.2)",
                  boxShadow: "0 0 25px rgba(34,197,94,0.6)",
                }}
              />

              {/* BRIDGE */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.1, duration: 0.6 }}
                className="absolute w-[40px] h-[2px] bg-green-400"
              />
            </div>

            {/* BRAND TEXT */}
            <div className="text-center mt-8">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{ delay: 2.2, duration: 0.9 }}
              className="text-5xl md:text-7xl font-semibold text-green-400 tracking-[0.3em]"
              style={{
                textShadow: "0 0 30px rgba(34,197,94,0.9)",
              }}
            >
              BENNANI OPTIC
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.8 }}
              className="mt-4 text-xs uppercase tracking-[0.6em] text-green-200/70"
            >
              Ariana Soghra · Opticien
            </motion.p>
            </div>
          </div>

          {/* FOCUS FLASH */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: focus ? [0, 0.5, 0] : 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 bg-green-400 blur-2xl"
          />

          {/* SKIP */}
          <motion.button
            onClick={handleSkip}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="absolute bottom-10 right-10 text-xs uppercase tracking-widest
              text-green-200/70 hover:text-green-300
              border border-green-400/30 px-4 py-2 rounded-full"
          >
            Skip →
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
