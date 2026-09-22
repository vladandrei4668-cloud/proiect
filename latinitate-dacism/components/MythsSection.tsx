import MythCard from "./MythCard";
import { myths } from "@/data/myths";

export default function MythsSection() {
  return (
    <section id="mituri" className="bg-stone-50 py-20">
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="text-3xl font-bold text-stone-900 sm:text-4xl">
          Debunking Mituri: Mit vs. Adevăr
        </h2>
        <p className="mt-3 text-stone-600">
          Apasă pe fiecare card pentru a vedea ce spun cercetarea istorică și
          lingvistica despre afirmațiile frecvent întâlnite.
        </p>

        <div className="mt-10 grid gap-4">
          {myths.map((m) => (
            <MythCard key={m.id} myth={m} />
          ))}
        </div>
      </div>
    </section>
  );
}
