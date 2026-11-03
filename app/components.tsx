"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useSyncExternalStore } from "react";
import { coffee, hours, manilaNow, menu, peso, place, span, statusAt } from "./data";

const links = [
  { href: "/menu", label: "Menu" },
  { href: "/our-coffee", label: "Our coffee" },
  { href: "/farm", label: "The farm" },
  { href: "/visit", label: "Visit" },
];

export function Nav() {
  const path = usePathname();
  return (
    <header className="nav">
      <div className="container nav__row">
        <Link href="/" className="wordmark" aria-label="Isut Cafe + Roastery, home">
          Isut <span className="wordmark__rest">Cafe + Roastery</span>
        </Link>
        <nav aria-label="Main">
          <ul className="nav__links">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} aria-current={path === l.href ? "page" : undefined}>
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="nav__phone">
              <a href={place.tel}>{place.phone}</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

// The week's hours with today marked and a live open or closed line.
// Without script it is still the full week, just unmarked.
export function Hours() {
  const [now, setNow] = useState<{ day: number; minutes: number } | null>(null);
  useEffect(() => {
    const tick = () => setNow(manilaNow());
    tick();
    const id = setInterval(tick, 60_000);
    return () => clearInterval(id);
  }, []);
  const status = now && statusAt(now.day, now.minutes);
  // Monday first, the way a week reads on a door.
  const week = [1, 2, 3, 4, 5, 6, 0];
  return (
    <div className="hours">
      <p className="hours__status" role="status" data-open={status?.open}>
        {status ? status.text : "Closes at 8:30 PM"}
      </p>
      <table className="hours__table">
        <caption className="visually-hidden">Opening hours</caption>
        <tbody>
          {week.map((i) => (
            <tr key={i} aria-current={now?.day === i ? "date" : undefined}>
              <th scope="row">{hours[i].day}</th>
              <td className="num">{span(hours[i])}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Tabs over the menu. Server HTML shows every panel; once script runs, one at a time.
export function MenuTabs() {
  // false in the server HTML, true once hydrated
  const ready = useSyncExternalStore(() => () => {}, () => true, () => false);
  const [active, setActive] = useState(0);
  const onKey = (e: React.KeyboardEvent) => {
    const d = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!d) return;
    const next = (active + d + menu.length) % menu.length;
    setActive(next);
    document.getElementById(`tab-${menu[next].id}`)?.focus();
  };
  return (
    <div className="tabs">
      {ready && (
        <div className="tabs__list" role="tablist" aria-label="Menu" onKeyDown={onKey}>
          {menu.map((s, i) => (
            <button
              key={s.id}
              id={`tab-${s.id}`}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-controls={`panel-${s.id}`}
              tabIndex={i === active ? 0 : -1}
              onClick={() => setActive(i)}
            >
              {s.label}
            </button>
          ))}
        </div>
      )}
      {menu.map((s, i) => (
        <section
          key={s.id}
          id={`panel-${s.id}`}
          role={ready ? "tabpanel" : undefined}
          aria-labelledby={ready ? `tab-${s.id}` : undefined}
          hidden={ready && i !== active}
          className="tabs__panel"
        >
          {!ready && <h2 className="tabs__fallback">{s.label}</h2>}
          <table className="price-list">
            <caption className="visually-hidden">{s.label}</caption>
            <tbody>
              {s.items.map((it) => (
                <tr key={it.name}>
                  <th scope="row">
                    {it.name}
                    {it.note && <span className="price-list__note">{it.note}</span>}
                  </th>
                  <td className="num">{peso(it.price)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      ))}
    </div>
  );
}

// One reveal per page: blocks below the fold rise in as they arrive.
// Anything already on screen, or any page without script, is simply shown.
export function Reveal() {
  const path = usePathname();
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const els = [...document.querySelectorAll<HTMLElement>("[data-reveal]")].filter(
      (el) => el.getBoundingClientRect().top > innerHeight
    );
    els.forEach((el) => el.classList.add("is-waiting"));
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.classList.remove("is-waiting");
          io.unobserve(e.target);
        }),
      { rootMargin: "0px 0px -10% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [path]);
  return null;
}

// The one coffee's facts, shared by the home page, the menu and Our coffee.
export function CoffeeFacts({ price = false }: { price?: boolean }) {
  return (
    <dl className="facts">
      {coffee.facts.map(([k, v]) => (
        <div key={k}>
          <dt>{k}</dt>
          <dd>{v}</dd>
        </div>
      ))}
      {price && (
        <div>
          <dt>{coffee.bag} bag</dt>
          <dd className="num">{peso(coffee.price)}</dd>
        </div>
      )}
    </dl>
  );
}
