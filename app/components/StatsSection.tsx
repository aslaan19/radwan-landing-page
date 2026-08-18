import type { Lang } from "../lib/i18n";
import { t } from "../lib/i18n";

export default function StatsSection({ lang }: { lang: Lang }) {
  const tr = t[lang].hero;
  const stats = [...tr.stats, { num: "4.9", label: tr.ratingLabel }];
  return (
    <section className="atelier-stats" aria-label={tr.qualityBadge}>
      <div className="stats-shell">
        <p>{tr.qualityBadge}</p>
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={stat.label} className="stat-item">
              <span>0{index + 1}</span><strong>{stat.num}</strong><small>{stat.label}</small>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
