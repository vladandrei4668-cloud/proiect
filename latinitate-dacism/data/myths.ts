export interface Myth {
  id: number;
  myth: string;
  truth: string;
  explanation: string;
}

export const myths: Myth[] = [
  {
    id: 1,
    myth: "Limba latină provine din limba dacică.",
    truth:
      "Fals. Latina este o limbă italică, atestată în Latium cu sute de ani înainte de orice contact cu dacii.",
    explanation:
      "Cele mai vechi inscripții latine (ex. Fibula Praenestina, sec. VII î.Hr.) sunt cu mult anterioare formării regatului dac condus de Burebista (sec. I î.Hr.). Latina face parte din familia indo-europeană, ramura italică. Româna este cea care descinde din latina vorbită, cu un mic număr de elemente de substrat dacic.",
  },
  {
    id: 2,
    myth: "Dacii au fost exterminați complet de romani.",
    truth:
      "Fals. Populația dacică nu a fost eliminată; o mare parte a rămas și s-a integrat în noua provincie.",
    explanation:
      "Războaiele din 101–102 și 105–106 d.Hr. au provocat pierderi mari și captivi, iar Eutropius menționează colonizarea cu locuitori din întregul Imperiu. Totuși, arheologia arată așezări dacice care continuă, iar numeroase nume dacice apar în inscripțiile din provincie. Dacii liberi din afara provinciei au rămas, de asemenea, în vecinătate.",
  },
  {
    id: 3,
    myth: "Românii vorbesc de fapt „dacă” cu vocabular latinizat.",
    truth:
      "Fals. Româna este o limbă romanică; baza ei (gramatică și vocabular fundamental) este latină.",
    explanation:
      "Circa 20% din lexicul de bază provine direct din latină, iar structura morfologică (declinare, conjugare, articol enclitic) se explică din latina populară și din evoluții balcanice. Elementele care pot fi puse pe seama substratului dacic sunt puține (în jur de 100–150 de cuvinte propuse), iar unele etimologii sunt disputate.",
  },
  {
    id: 4,
    myth: "Dacii vorbeau latina înainte de venirea romanilor.",
    truth:
      "Fals. Dacii vorbeau o limbă tracică (sau aparținând ramurii traco-dace), nu latina.",
    explanation:
      "Limba dacă nu s-a păstrat în texte extinse; o cunoaștem din nume proprii (Decebalus, Burebista), toponime, nume de plante din Dioscoride și puține glose. Nu există dovezi că latina ar fi fost vorbită în Dacia înainte de cucerirea romană din 106 d.Hr.",
  },
  {
    id: 5,
    myth: "Romanizarea a durat prea puțin (165 de ani) pentru a schimba limba unui popor.",
    truth:
      "Nuanțat. Romanizarea nu s-a încheiat cu retragerea aureliană din 271–275 d.Hr.; a continuat în epoca romano-bizantină.",
    explanation:
      "Latina s-a răspândit prin armată, administrație, colonizare, comerț și, mai târziu, prin creștinismul în formă latină. Vestigii creștine în latină (ex. terminologia religioasă de bază: biserică, cruce, înger, Paști) arată continuarea contactelor cu lumea romanică și în secolele IV–VI, în zona nord-dunăreană.",
  },
  {
    id: 6,
    myth: "Nu există nicio dovadă a continuității populației romanizate la nord de Dunăre.",
    truth:
      "Disputat, dar există argumente serioase. Lingvistica și arheologia indică prezența unei populații romanizate după 275.",
    explanation:
      "Argumente frecvent invocate: continuitatea unor toponime și hidronime preromane (ex. Mureș, Olt, Argeș), cuvintele latine păstrate din sfera agrară și religioasă, monede și obiecte de tip roman târziu, inscripția de la Biertan (sec. IV–V), obiectele creștine. Există și teoria migraționistă (Roesler), dar majoritatea istoricilor români și mulți specialiști străini susțin o continuitate, cu discuții asupra intensității și localizării ei.",
  },
];
