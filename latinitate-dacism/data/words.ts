export type WordLayer = "Substrat dacic" | "Strat latin";

export interface WordEntry {
  id: number;
  romanian: string;
  origin: string;
  layer: WordLayer;
  meaning: string;
  note?: string;
}

export const words: WordEntry[] = [
  // ---------- Strat latin ----------
  { id: 1, romanian: "apă", origin: "lat. aqua", layer: "Strat latin", meaning: "water" },
  {
    id: 2,
    romanian: "pământ",
    origin: "lat. pavimentum",
    layer: "Strat latin",
    meaning: "earth, ground",
    note: "Schimbare de sens: 'pardoseală' → 'pământ'.",
  },
  { id: 3, romanian: "pâine", origin: "lat. panis", layer: "Strat latin", meaning: "bread" },
  { id: 4, romanian: "om", origin: "lat. homo", layer: "Strat latin", meaning: "man, human" },
  { id: 5, romanian: "casă", origin: "lat. casa", layer: "Strat latin", meaning: "house" },
  { id: 6, romanian: "frate", origin: "lat. frater", layer: "Strat latin", meaning: "brother" },
  { id: 7, romanian: "soare", origin: "lat. sol, solis", layer: "Strat latin", meaning: "sun" },
  { id: 8, romanian: "lună", origin: "lat. luna", layer: "Strat latin", meaning: "moon, month" },
  { id: 9, romanian: "vin", origin: "lat. vinum", layer: "Strat latin", meaning: "wine" },
  { id: 10, romanian: "cer", origin: "lat. caelum", layer: "Strat latin", meaning: "sky" },
  {
    id: 11,
    romanian: "biserică",
    origin: "lat. basilica",
    layer: "Strat latin",
    meaning: "church",
    note: "Terminologie creștină de bază, transmisă în latină.",
  },
  { id: 12, romanian: "cruce", origin: "lat. crux, crucis", layer: "Strat latin", meaning: "cross" },

  // ---------- Substrat dacic (propuse; multe etimologii sunt disputate) ----------
  {
    id: 13,
    romanian: "mal",
    origin: "probabil substrat traco-dac",
    layer: "Substrat dacic",
    meaning: "shore, bank",
    note: "Cuvânt frecvent citat ca având origine autohtonă; etimologia rămâne discutată.",
  },
  {
    id: 14,
    romanian: "brânză",
    origin: "probabil substrat traco-dac",
    layer: "Substrat dacic",
    meaning: "cheese",
    note: "Apropiere de alb. gjizë; discutat în literatura de specialitate.",
  },
  {
    id: 15,
    romanian: "vatră",
    origin: "probabil substrat, comparabil cu alb. vatër",
    layer: "Substrat dacic",
    meaning: "hearth",
    note: "Paralelă cu albaneza; unii lingviști vorbesc despre o origine comună autohtonă.",
  },
  {
    id: 16,
    romanian: "viezure",
    origin: "probabil substrat traco-dac",
    layer: "Substrat dacic",
    meaning: "badger",
  },
  {
    id: 17,
    romanian: "copil",
    origin: "probabil substrat, comparat cu alb. kopil",
    layer: "Substrat dacic",
    meaning: "child",
    note: "Etimologie disputată; unii cercetători propun o origine latină (copula) sau slavă.",
  },
  {
    id: 18,
    romanian: "moș",
    origin: "probabil substrat",
    layer: "Substrat dacic",
    meaning: "old man, grandfather",
    note: "Comparat cu alb. moshë; etimologie incertă.",
  },
  {
    id: 19,
    romanian: "balaur",
    origin: "probabil substrat (nu este exclusă o origine slavă)",
    layer: "Substrat dacic",
    meaning: "dragon",
    note: "Dispută: unele surse îl consideră slav.",
  },
  {
    id: 20,
    romanian: "stână",
    origin: "probabil substrat",
    layer: "Substrat dacic",
    meaning: "sheepfold",
    note: "Cuvânt din sfera păstoritului.",
  },
  {
    id: 21,
    romanian: "strungă",
    origin: "probabil substrat",
    layer: "Substrat dacic",
    meaning: "pen for milking sheep",
    note: "Sfera păstoritului; etimologie discutată.",
  },
  {
    id: 22,
    romanian: "a zări",
    origin: "probabil substrat",
    layer: "Substrat dacic",
    meaning: "to glimpse",
  },
];
