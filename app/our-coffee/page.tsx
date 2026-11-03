import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CoffeeFacts } from "../components";
import { place } from "../data";

export const metadata: Metadata = {
  title: "Our coffee",
  description:
    "Single-origin arabica grown, picked and processed by the Bugkalot in Nueva Vizcaya, roasted by Isut in Cainta.",
};

// Condensed from bugkalotcoffee.com/coffee.
const stages = [
  {
    title: "From seeds",
    text: "Seeds saved from each harvest are sown in the farm’s own nursery, then raised in bags until they are ready to plant.",
    photo: "/photos/nursery.jpg",
    alt: "Rows of coffee seedlings in bags under shade netting",
  },
  {
    title: "To cherries",
    text: "Almost 50 hectares and about 50,000 trees. They fruit once a year, and the harvest runs from October to February.",
    photo: "/photos/slopes.jpg",
    alt: "Green slopes of the plantation below a forested mountain",
  },
  {
    title: "To green beans",
    text: "Only ripe cherries are picked by hand, then pulped, fermented overnight, washed and dried on raised beds.",
    photo: "/photos/green-beans.jpg",
    alt: "Green coffee beans in a wooden bowl",
  },
  {
    title: "And roasted coffee",
    text: "The green beans come to Cainta, where we roast them medium and brew them at the bar.",
    photo: "/photos/roast-cooling.jpg",
    alt: "Roasted beans turning in the cooling tray",
  },
];

export default function OurCoffee() {
  return (
    <>
      <section className="stage">
        <div className="container stage__grid">
          <div className="stage__text">
            <h1>One coffee, seed to cup</h1>
            <p className="lead">Single origin, 100% arabica, grown and processed by the Bugkalot.</p>
            <div className="actions">
              <Link className="btn btn--primary" href="/menu">See the menu</Link>
              <Link className="btn" href="/farm">Meet the farm</Link>
            </div>
          </div>
          <figure className="stage__visual">
            <div className="stage__frame" data-slot="cherries" data-alt="Coffee cherries on the Bugkalot plantation">
              <Image src="/photos/cherries.jpg" alt="A cluster of green coffee cherries on the branch" fill priority sizes="(min-width: 60rem) 58vw, 100vw" />
            </div>
            <figcaption>Cherries ripening on the Bugkalot plantation.</figcaption>
          </figure>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 data-reveal>How it gets to your cup</h2>
          <ol className="stages">
            {stages.map((s, i) => (
              <li key={s.title} data-reveal style={{ "--i": i } as React.CSSProperties}>
                <div className="stages__frame" data-slot={`stage-${i + 1}`} data-alt={s.alt}>
                  <Image src={s.photo} alt={s.alt} fill sizes="(min-width: 60rem) 25vw, 100vw" />
                </div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="band-ink">
        <div className="container grid grid--center">
          <p className="col-head award" data-reveal>
            <span className="award__years num">2020 to 2023</span>
          </p>
          <div className="col-body stack" data-reveal>
            <h2>Specialty Green Grade, four years running</h2>
            <p className="lead">
              Scored to SCA standards at the annual Philippine Coffee Quality Competition.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid grid--center">
          <div className="col-wide photo-43" data-slot="beans" data-alt="Isut’s roasted beans and bag" data-reveal>
            <Image src="/photos/bcc-beans.jpg" alt="Roasted Bugkalot beans in front of a coffee bag" fill sizes="(min-width: 60rem) 50vw, 100vw" />
          </div>
          <div className="col-narrow stack" data-reveal>
            <h2>In the cup</h2>
            <CoffeeFacts />
          </div>
        </div>
      </section>

      <section className="band-moss">
        <div className="container close close--row">
          <h2 data-reveal>Taste it in Cainta</h2>
          <div className="actions" data-reveal>
            <a className="btn" href={place.directions}>Get directions</a>
            <a className="btn" href={place.tel}>Call {place.phone}</a>
          </div>
        </div>
      </section>
    </>
  );
}
