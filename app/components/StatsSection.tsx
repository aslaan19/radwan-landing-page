import type { Lang } from "../lib/i18n";

const stats = {
  ar: [
    ["10+", "سنوات خبرة"], ["50+", "شركة ومؤسسة"], ["5K+", "قطعة تم تسليمها"], ["4.9", "تقييم عملائنا"],
  ],
  en: [
    ["10+", "Years of expertise"], ["50+", "Organizations served"], ["5K+", "Pieces delivered"], ["4.9", "Customer rating"],
  ],
} as const;

export default function StatsSection({ lang }: { lang: Lang }) {
  return (
    <section className="atelier-stats" aria-label={lang === "ar" ? "إنجازاتنا بالأرقام" : "Our achievements"}>
      <div className="stats-shell">
        <p>{lang === "ar" ? "أرقام من أرض الواقع" : "NUMBERS FROM THE WORKROOM"}</p>
        <div className="stats-grid">
          {stats[lang].map(([value, label], index) => (
            <div key={label} className="stat-item">
              <span>0{index + 1}</span><strong>{value}</strong><small>{label}</small>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
