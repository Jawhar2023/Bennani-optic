import { useState } from "react";
import { MessageCircle, Facebook, Instagram } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const SOCIAL_LINKS = [
  {
    name: "WhatsApp",
    href: "https://wa.me/21652832242",
    icon: MessageCircle,
    color: "bg-[#25D366] hover:bg-[#20BD5A]",
    label: "Nous contacter sur WhatsApp",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100083160220995&locale=fr_FR",
    icon: Facebook,
    color: "bg-[#1877F2] hover:bg-[#166FE5]",
    label: "Suivez-nous sur Facebook",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/bennanioptic/",
    icon: Instagram,
    color: "bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF] hover:opacity-90",
    label: "Suivez-nous sur Instagram",
  },
] as const;

export function WhatsAppButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open &&
          [...SOCIAL_LINKS].reverse().map((social, index) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              transition={{ delay: index * 0.05, type: "spring", stiffness: 400, damping: 25 }}
              className={`flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lg transition-all ${social.color}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <social.icon className="h-6 w-6" />
            </motion.a>
          ))}
      </AnimatePresence>

      {/* Main button – opens menu */}
      <motion.button
        type="button"
        aria-label={open ? "Fermer le menu" : "Contact et réseaux sociaux"}
        onClick={() => setOpen((o) => !o)}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-black/25 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366]"
        initial={{ scale: 0, opacity: 0, rotate: -30 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.span
          className="absolute inset-0 rounded-full border-2 border-[#25D366]"
          animate={{
            scale: open ? 0 : [1, 1.4, 1.4],
            opacity: open ? 0 : [0.6, 0, 0],
          }}
          transition={
            open
              ? { duration: 0.2 }
              : { duration: 1.8, repeat: Infinity, repeatDelay: 0.5 }
          }
        />
        <motion.div
          className="relative z-10"
          animate={{
            rotate: open ? 90 : 0,
            scale: open ? 0.9 : [1, 1.15, 1],
          }}
          transition={{
            rotate: { duration: 0.2 },
            scale: open ? { duration: 0.2 } : { duration: 1.5, repeat: Infinity, repeatDelay: 1 },
          }}
        >
          <MessageCircle className="h-7 w-7" />
        </motion.div>
      </motion.button>
    </div>
  );
}
