"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { words, type WordLayer } from "@/data/words";

type Filter = "Toate" | WordLayer;

const filters: Filter[] = ["Toate", "Strat latin", "Substrat dacic"];

export default function LinguisticTable() {
  const [query, setQuery] = useState("");
  const [layer, setLayer] = useState<Filter>("Toate");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return words.filter((w) => {
      const matchesLayer = layer === "Toate" || w.layer === layer;
      const matchesQuery =
        q === "" ||
        w.romanian.toLowerCase().includes(q) ||
        w.origin.toLowerCase().includes(q) ||
        w.meaning.toLowerCase().includes(q);
      return matchesLayer && matchesQuery;
    });
  }, [query, layer]);

  return (
    <section id="lingvistic" className="bg-white py-20">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-3xl font-bold text-stone-900 sm:text-4xl">
          Tabel lingvistic comparativ
        </h2>
        <p className="mt-3 max-w-3xl text-stone-600">
          Vocabularul fundamental al limbii române este în mare parte de origine
          latină (stratul). Substratul dacic este mult mai restrâns, iar multe
          etimologii propuse sunt încă discutate de specialiști.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-stone-400"
              size={18}
            />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Caută un cuvânt, o origine sau un sens..."
              className="w-full rounded-lg border border-stone-300 bg-white py-2.5 pl-10 pr-3 text-sm outline-none focus:border-red-700 focus:ring-2 focus:ring-red-200"
            />
          </div>

          <div className="flex gap-2">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setLayer(f)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  layer === f
                    ? "bg-red-800 text-white"
                    : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 overflow-x-auto rounded-xl border border-stone-200">
          <table className="w-full text-left text-sm">
            <thead className="bg-stone-100 text-xs uppercase tracking-wide text-stone-600">
              <tr>
                <th className="px-4 py-3">Cuvânt românesc</th>
                <th className="px-4 py-3">Origine</th>
                <th className="px-4 py-3">Strat</th>
                <th className="px-4 py-3">Sens</th>
                <th className="hidden px-4 py-3 md:table-cell">Note</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {filtered.length === 0 ? (
                <tr>
                  <td
                    colSpan={5}
                    className="px-4 py-8 text-center text-stone-500"
                  >
                    Niciun rezultat pentru căutarea ta.
                  </td>
                </tr>
              ) : (
                filtered.map((w) => (
                  <tr key={w.id} className="hover:bg-stone-50">
                    <td className="px-4 py-3 font-semibold text-stone-900">
                      {w.romanian}
                    </td>
                    <td className="px-4 py-3 italic text-stone-700">
                      {w.origin}
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                          w.layer === "Strat latin"
                            ? "bg-red-100 text-red-800"
                            : "bg-amber-100 text-amber-800"
                        }`}
                      >
                        {w.layer}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-stone-700">{w.meaning}</td>
                    <td className="hidden px-4 py-3 text-xs text-stone-500 md:table-cell">
                      {w.note ?? "—"}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <p className="mt-3 text-xs text-stone-500">
          {filtered.length} din {words.length} intrări afișate. Etimologiile
          substratului sunt propuneri de cercetare, nu certitudini.
        </p>
      </div>
    </section>
  );
}
