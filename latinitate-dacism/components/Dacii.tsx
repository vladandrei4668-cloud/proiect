"use client";

import { motion } from "framer-motion";
import { Castle, Crown, Mountain } from "lucide-react";

const facts = [
  {
    icon: Crown,
    title: "Burebista și Decebal",
    text: "Burebista (sec. I î.Hr.) a unificat triburile getodace într-un regat puternic. Decebal a condus rezistența împotriva Romei în timpul războaielor cu Traian (101–106 d.Hr.).",
  },
  {
    icon: Mountain,
    title: "Capitala din Munții Orăștiei",
    text: "Sarmizegetusa Regia, cetatea principală, făcea parte dintr-un sistem de fortificații dacice, azi în Patrimoniul UNESCO, împreună cu Costești, Blidaru, Piatra Roșie, Băița de Fier și Căpâlna.",
  },
  {
    icon: Castle,
    title: "O civilizație complexă",
    text: "Dacii cunoșteau prelucrarea fierului, construcțiile din piatră, agricultura, comerțul cu lumea greacă și romană. Ei vorbeau o limbă din ramura tracă a indo-europenei.",
  },
];

export default function Dacii() {
  return (
    <section id="dacii" className="bg-stone-50 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold text-stone-900 sm:text-4xl">
          Dacii
        </h2>
        <p className="mt-3 max-w-2xl text-stone-600">
          Înainte de romani, spațiul carpato-danubian era locuit de geto-daci,
          o civilizație cu o organizare politică și militară dezvoltată.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {facts.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.article
                key={f.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm"
              >
                <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 text-red-800">
                  <Icon size={24} />
                </span>
                <h3 className="text-lg font-semibold text-stone-900">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">
                  {f.text}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
