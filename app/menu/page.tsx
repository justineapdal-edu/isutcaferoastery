import type { Metadata } from "next";
import Image from "next/image";
import { CoffeeFacts, MenuTabs } from "../components";
import { peso, place } from "../data";

export const metadata: Metadata = {
  title: "Menu",
  description: "Espresso, manual brew, drinks without coffee and pastries at Isut Cafe + Roastery in Cainta.",
};

export default function Menu() {
  return (
    <>
      <section className="section section--top">
        <div className="container grid">
          <div className="col-head">
            <h1>What’s on the bar</h1>
            <p className="lead">Espresso, manual brew and a few things to eat. Prices in pesos.</p>
            <div className="photo-43" data-slot="drink" data-alt="A drink from the bar, from above">
              <Image src="/photos/cappuccino.jpg" alt="A cappuccino with a rosetta, from above" fill priority sizes="(min-width: 60rem) 40vw, 100vw" />
            </div>
          </div>
          <div className="col-body">
            <MenuTabs />
          </div>
        </div>
      </section>

      <section className="section section--s">
        <div className="container">
          <ul className="photo-row">
            <li data-reveal style={{ "--i": 0 } as React.CSSProperties}>
              <figure>
                <div className="photo-row__frame" data-slot="iced" data-alt="An iced drink from the bar">
                  <Image src="/photos/iced.jpg" alt="An iced coffee in a tall glass" fill sizes="(min-width: 60rem) 25vw, 100vw" />
                </div>
                <figcaption>Iced latte, {peso(160)}</figcaption>
              </figure>
            </li>
            <li data-reveal style={{ "--i": 1 } as React.CSSProperties}>
              <figure>
                <div className="photo-row__frame" data-slot="pastry" data-alt="A pastry from the counter">
                  <Image src="/photos/ensaymada.jpg" alt="Two ensaymada on a plate" fill sizes="(min-width: 60rem) 25vw, 100vw" />
                </div>
                <figcaption>Ensaymada, {peso(95)}</figcaption>
              </figure>
            </li>
            <li data-reveal style={{ "--i": 2 } as React.CSSProperties}>
              <figure>
                <div className="photo-row__frame" data-slot="brew" data-alt="A pour-over at the café’s brew bar">
                  <Image src="/photos/pour-over.jpg" alt="Water poured over coffee in a dripper" fill sizes="(min-width: 60rem) 25vw, 100vw" />
                </div>
                <figcaption>Pour-over, {peso(180)}</figcaption>
              </figure>
            </li>
          </ul>
        </div>
      </section>

      <section className="section" id="beans">
        <div className="container grid grid--center">
          <div className="col-head stack" data-reveal>
            <h2>Beans by the bag</h2>
            <p className="lead">Ask at the counter and we will grind them for your brewer.</p>
          </div>
          <div className="col-body" data-reveal>
            <CoffeeFacts price />
          </div>
        </div>
      </section>

      <section className="band-moss">
        <div className="container close close--row">
          <h2 data-reveal>Ordering for a group?</h2>
          <div className="actions" data-reveal>
            <a className="btn btn--primary" href={place.tel}>Call {place.phone}</a>
            <a className="btn" href={place.messenger}>Message us on Messenger</a>
          </div>
        </div>
      </section>
    </>
  );
}
