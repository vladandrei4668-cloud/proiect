"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="acasa"
      className="relative overflow-hidden bg-gradient-to-b from-stone-900 via-stone-800 to-red-950 text-white"
    >
      <div className="mx-auto max-w-6xl px-4 py-24 sm:py-32">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-sm font-semibold uppercase tracking-widest text-amber-300"
        >
          Istorie · Limbă · Identitate
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-3xl text-4xl font-bold leading-tight sm:text-6xl"
        >
          Originea daco-romană a poporului român
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-6 max-w-2xl text-lg text-stone-200"
        >
          Poporul român s-a format prin întâlnirea dintre populația
          autohtonă a Daciei și coloniștii și administrația romană. Limba
          română este o limbă romanică, iar elementele moștenite din substratul
          dacic sunt puține, dar valoroase. Explorează faptele, separă mitul
          de adevăr și descoperă cum vorbim.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10"
        >
          <a
            href="#dacii"
            className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-7 py-3 font-semibold text-stone-900 shadow-lg transition hover:bg-amber-300"
          >
            Începe explorarea
            <ArrowDown size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
