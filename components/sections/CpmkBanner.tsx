"use client";

import { useState } from "react";
import { CheckCircle, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/* ============================================================================
   CPMK CHECKLIST ITEMS
   ============================================================================ */
const checklistItems = [
  "Kendala yang terjadi selama proses penyusunan produk pembelajaran",
  "Teori atau konsep pedagogi yang diadopsi",
  "Faktor keberhasilan penerapan produk pembelajaran",
  "Perubahan komponen untuk situasi kelas yang berbeda",
] as const;

/* ============================================================================
   COMPONENT
   ============================================================================ */
export function CpmkBanner() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mx-auto max-w-4xl px-6">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full flex items-center justify-between p-4 rounded-lg border border-zinc-800/60 bg-zinc-900/30 hover:border-zinc-700/60 transition-colors text-left"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-3">
          <CheckCircle className="w-4 h-4 text-emerald-500/80 shrink-0" />
          <span className="text-sm font-medium text-zinc-300">
            Komponen Analisis E-Portfolio 1 yang Dipenuhi
          </span>
        </div>
        <ChevronDown
          className={`w-4 h-4 text-zinc-500 transition-transform duration-200 shrink-0 ${isOpen ? "rotate-180" : ""
            }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-4 py-3 space-y-2.5 border-x border-b border-zinc-800/60 rounded-b-lg bg-zinc-900/20">
              {checklistItems.map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <CheckCircle className="w-3.5 h-3.5 mt-0.5 text-emerald-500/70 shrink-0" />
                  <span className="text-xs text-zinc-400">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
