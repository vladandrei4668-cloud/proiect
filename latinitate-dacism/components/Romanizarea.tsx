"use client";

import { motion } from "framer-motion";

const timeline = [
  {
    year: "101–102 d.Hr.",
    title: "Primul război daco-roman",
    text: "Împăratul Traian învinge armata lui Decebal, iar regele dac acceptă condiții de pace.",
  },
  {
    year: "105–106 d.Hr.",
    title: "Al doilea război și cucerirea",
    text: "După capitularea Sarmizegetusei, o parte a Daciei devine provincie romană.",
  },
  {
    year: "106–271 d.Hr.",
    title: "Provincia Dacia",
    text: "Se întemeiază orașe (Ulpia Traiana Sarmizegetusa, Apulum, Napoca, Potaissa), se construiesc drumuri, castre și așezări rurale. Latina devine limba administrației.",
  },
  {
    year: "271–275 d.Hr.",
    title: "Retragerea aureliană",
    text: "Administrația și armata se retrag la sud de Dunăre. Contactele cu lumea romană continuă, însă, prin comerț și religie.",
  },
  {
    year: "Sec. IV–VI",
    title: "Romanitatea populară",
    text: "Creștinismul în formă latină și contactele cu Imperiul Roman târziu și bizantin mențin viu elementul romanic la nord de Dunăre.",
  },
];

export default function Romanizarea() {
  return (
    <section id="romanizarea" className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="text-3xl font-bold text-stone-900 sm:text-4xl">
          Romanizarea
        </h2>
        <p className="mt-3 text-stone-600">
          Romanizarea a fost un proces lung, care a implicat limbă, drept,
          religie, urbanism și obiceiuri, nu doar o cucerire militară.
        </p>

        <ol className="relative mt-12 border-l-2 border-red-200 pl-8">
          {timeline.map((t, i) => (
            <motion.li
              key={t.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="mb-10 last:mb-0"
            >
              <span className="absolute -left-[9px] mt-1.5 h-4 w-4 rounded-full border-2 border-white bg-red-700" />
              <p className="text-sm font-semibold uppercase tracking-wide text-red-800">
                {t.year}
              </p>
              <h3 className="mt-1 text-xl font-semibold text-stone-900">
                {t.title}
              </h3>
              <p className="mt-1 text-stone-600">{t.text}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
