"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";
import type { Myth } from "@/data/myths";

export default function MythCard({ myth }: { myth: Myth }) {
  const [revealed, setRevealed] = useState(false);

  return (
    <motion.div
      layout
      className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm"
    >
      <button
        type="button"
        onClick={() => setRevealed((v) => !v)}
        aria-expanded={revealed}
        className="flex w-full items-start gap-3 p-5 text-left transition hover:bg-stone-50"
      >
        <XCircle className="mt-0.5 shrink-0 text-red-700" size={22} />
        <div className="flex-1">
          <p className="text-xs font-semibold uppercase tracking-wide text-red-700">
            Mit
          </p>
          <p className="mt-1 font-semibold text-stone-900">{myth.myth}</p>
          <p className="mt-2 text-xs text-stone-500">
            {revealed ? "Apasă pentru a ascunde" : "Apasă pentru a vedea adevărul"}
          </p>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {revealed && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="border-t border-emerald-100 bg-emerald-50"
          >
            <div className="flex items-start gap-3 p-5">
              <CheckCircle2
                className="mt-0.5 shrink-0 text-emerald-700"
                size={22}
              />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
                  Adevăr
                </p>
                <p className="mt-1 font-semibold text-stone-900">
                  {myth.truth}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-stone-700">
                  {myth.explanation}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
