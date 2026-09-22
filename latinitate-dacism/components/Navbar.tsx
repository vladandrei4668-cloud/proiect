"use client";

import { useState } from "react";
import { BookOpen, Menu, X } from "lucide-react";

const links = [
  { label: "Homepage", href: "#acasa" },
  { label: "Dacii", href: "#dacii" },
  { label: "Romanizarea", href: "#romanizarea" },
  { label: "Debunking Mituri", href: "#mituri" },
  { label: "Limba română", href: "#lingvistic" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#acasa" className="flex items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-red-800 text-white">
            <BookOpen size={20} />
          </span>
          <span className="leading-tight">
            <span className="block text-lg font-bold text-stone-900">
              Daco-Romanii
            </span>
            <span className="block text-xs text-stone-500">
              Latinitate și Dacism
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-stone-700 transition-colors hover:text-red-800"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label="Deschide meniul"
          onClick={() => setOpen((v) => !v)}
          className="rounded-md p-2 text-stone-700 hover:bg-stone-100 md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <ul className="border-t border-stone-200 bg-white px-4 py-2 md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-sm font-medium text-stone-700 hover:text-red-800"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
