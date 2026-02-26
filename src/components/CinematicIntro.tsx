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
              "radial-gradient(circle at center, #E2958F 0%, #9e6a66 60%, #000 100%)",
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
            className="absolute inset-y-0 w-44 blur-3xl"
            style={{ backgroundColor: "rgba(226,149,143,0.25)" }}
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
                className="absolute w-[90px] h-[90px] rounded-full border-2"
                style={{
                  borderColor: "#E2958F",
                  backdropFilter: "blur(8px) brightness(1.2)",
                  boxShadow: "0 0 25px rgba(226,149,143,0.6)",
                }}
              />

              {/* RIGHT LENS */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="absolute w-[90px] h-[90px] rounded-full border-2 translate-x-[120px]"
                style={{
                  borderColor: "#E2958F",
                  backdropFilter: "blur(8px) brightness(1.2)",
                  boxShadow: "0 0 25px rgba(226,149,143,0.6)",
                }}
              />

              {/* BRIDGE */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.1, duration: 0.6 }}
                className="absolute w-[40px] h-[2px]"
                style={{ backgroundColor: "#E2958F" }}
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
              className="text-5xl md:text-7xl font-semibold tracking-[0.3em]"
              style={{
                color: "#E2958F",
                textShadow: "0 0 30px rgba(226,149,143,0.9)",
              }}
            >
              BENNANI OPTIC
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.8 }}
              className="mt-4 text-xs uppercase tracking-[0.6em] text-white/70"
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
            className="absolute inset-0 blur-2xl"
            style={{ backgroundColor: "#E2958F" }}
          />

          {/* SKIP */}
          <motion.button
            onClick={handleSkip}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="absolute bottom-10 right-10 text-xs uppercase tracking-widest
              border px-4 py-2 rounded-full"
            style={{
              color: "rgba(255,255,255,0.7)",
              borderColor: "rgba(226,149,143,0.4)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#E2958F";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "rgba(255,255,255,0.7)";
            }}
          >
            Skip →
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
