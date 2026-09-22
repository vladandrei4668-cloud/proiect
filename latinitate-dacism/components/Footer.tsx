import { BookMarked, ExternalLink } from "lucide-react";

const resources = [
  {
    label: "Institutul de Filologie Română „A. Philippide”",
    href: "https://www.philippide.ro",
  },
  {
    label: "Institutul de Arheologie „Vasile Pârvan”",
    href: "https://www.institutuldearheologie.ro",
  },
  {
    label: "UNESCO: Cetățile dacice din Munții Orăștiei",
    href: "https://whc.unesco.org/en/list/906",
  },
  {
    label: "Muzeul Național de Istorie a României",
    href: "https://mnir.ro",
  },
];

const bibliography = [
  "Alexandru Rosetti, Istoria limbii române, Editura Științifică.",
  "Ion I. Russu, Limba traco-dacilor, Editura Științifică.",
  "Vladimir Georgiev, Studii de limbă tracă și dacă.",
  "Ioan-Aurel Pop, Istoria Românilor (colab.), Editura Academiei Române.",
  "Dio Cassius, Istoria romană (Cartea LXVIII), despre războaiele daco-romane.",
  "Eutropius, Breviarium ab Urbe condita (Cartea VIII), despre colonizarea Daciei.",
  "Iordanes, Getica, sursă antică târzie despre goți și geți.",
];

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-3">
        <div>
          <h3 className="flex items-center gap-2 text-lg font-semibold text-white">
            <BookMarked size={20} /> Daco-Romanii
          </h3>
          <p className="mt-3 text-sm leading-relaxed">
            Proiect educațional despre originea daco-romană a poporului român,
            care încearcă să separe faptele verificate de mituri.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white">Resurse</h3>
          <ul className="mt-3 space-y-2 text-sm">
            {resources.map((r) => (
              <li key={r.href}>
                <a
                  href={r.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-amber-300"
                >
                  {r.label}
                  <ExternalLink size={13} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white">Bibliografie</h3>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm">
            {bibliography.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-stone-800 px-4 py-5 text-center text-xs text-stone-500">
        Surse istorice utilizate: autori antici (Dio Cassius, Eutropius,
        Iordanes), inscripții epigrafice, cercetări arheologice și lucrări de
        lingvistică istorică. Conținut cu scop educațional. Verifică
        întotdeauna sursele primare.
      </div>
    </footer>
  );
}
