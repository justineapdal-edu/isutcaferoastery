import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { place } from "../data";

export const metadata: Metadata = {
  title: "The farm",
  description:
    "The Bugkalot coffee plantation in the Sierra Madre highlands of Nueva Vizcaya, run with the Bugkalot farmers’ cooperative.",
};

// Every figure and line here is from bugkalotcoffee.com.
const figures = [
  { value: "900 to 1,200 m", label: "Above sea level" },
  { value: "50 ha", label: "Of plantation, nearly" },
  { value: "50,000", label: "Coffee trees, about" },
  { value: "300+", label: "Cooperative members" },
];

const commitments = [
  { title: "Empowerment", text: "Training on site, step by step, so the farmers run the work themselves." },
  { title: "Value creation", text: "High-grade arabica and value added in the community, not elsewhere." },
  { title: "Work and ownership", text: "Jobs, small businesses, and a real share of the plantation." },
  { title: "Sustainability", text: "Organic methods, reforestation and protected watersheds." },
];

export default function Farm() {
  return (
    <>
      <section className="stage">
        <div className="container stage__grid">
          <div className="stage__text">
            <h1>The farm in the Sierra Madre</h1>
            <p className="lead">Our coffee grows on the Bugkalot Ancestral Domain in Nueva Vizcaya.</p>
            <div className="actions">
              <Link className="btn btn--primary" href="/our-coffee">How the coffee is made</Link>
            </div>
          </div>
          <figure className="stage__visual">
            <div className="stage__frame" data-slot="veranda" data-alt="The farm in the Sierra Madre">
              <Image src="/photos/veranda.jpg" alt="A bamboo floor on an open veranda looking out at the mountains" fill priority sizes="(min-width: 60rem) 58vw, 100vw" />
            </div>
            <figcaption>Looking out over the highlands from the farm.</figcaption>
          </figure>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 data-reveal>Coffee country</h2>
          <dl className="figures figures--four" data-reveal>
            {figures.map((f) => (
              <div key={f.label}>
                <dt>{f.label}</dt>
                <dd className="figure figure--words">{f.value}</dd>
              </div>
            ))}
          </dl>
          <figure className="wide wide--after" data-reveal>
            <div className="wide__frame wide__frame--pano" data-slot="domain" data-alt="The Bugkalot Ancestral Domain, wide panorama">
              <Image src="/photos/domain-panorama.jpg" alt="Grassland and forested ridges of the Bugkalot Ancestral Domain" fill sizes="(min-width: 90rem) 1312px, 100vw" />
            </div>
            <figcaption>
              Good soil, forest for shade and mountain springs that run through the dry months.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="band-moss">
        <div className="container grid grid--center">
          <figure className="col-head coop" data-reveal>
            <div className="coop__frame" data-slot="cooperative" data-alt="The Bugkalot coffee growers’ cooperative, group photo">
              <Image src="/photos/cooperative.jpg" alt="Members of the Bugkalot coffee growers’ cooperative outside their building" fill sizes="(min-width: 60rem) 34vw, 100vw" />
            </div>
          </figure>
          <div className="col-body stack prose" data-reveal>
            <h2>Run with the cooperative</h2>
            <p>
              In 2014 the Bugkalot farmers organized the Bugkalot Casecnan Coffee Producers Cooperative. It is now
              the Bugkalot Coffee Growers Multi-Purpose Cooperative, with more than 300 members.
            </p>
            <p>
              Most of the community has no steady income. The plantation brings people together around jobs,
              sustainable farming and businesses of their own.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid">
          <div className="col-head" data-reveal>
            <h2>How the partnership works</h2>
            <p className="lead">The commitments of Bugkalot Coffee Company, founded in 2013.</p>
          </div>
          <ul className="rows col-body">
            {commitments.map((c, i) => (
              <li key={c.title} data-reveal style={{ "--i": i } as React.CSSProperties}>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--s">
        <div className="container grid grid--center">
          <div className="col-wide photo-43" data-slot="valley" data-alt="The Sierra Madre highlands" data-reveal>
            <Image src="/photos/valley.jpg" alt="Forested valleys of the Sierra Madre in afternoon light" fill sizes="(min-width: 60rem) 50vw, 100vw" />
          </div>
          <div className="col-narrow stack" data-reveal>
            <h2>Every cup at Isut helps</h2>
            <p className="lead">Each step, from growing to brewing, keeps value with the Bugkalot.</p>
            <div className="actions">
              <a className="btn" href={place.directions}>Get directions</a>
              <a className="btn" href={place.bcc}>Visit bugkalotcoffee.com</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
