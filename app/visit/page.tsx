import type { Metadata } from "next";
import Image from "next/image";
import { Hours } from "../components";
import { place } from "../data";

export const metadata: Metadata = {
  title: "Visit",
  description: "Hours, directions and how to reach Isut Cafe + Roastery on Don Celso S. Tuason Ave, Cainta.",
};

export default function Visit() {
  return (
    <>
      <section className="counter">
        <div className="container counter__grid">
          <div className="counter__text">
            <h1 className="h1--s">Come by for a cup</h1>
            <p className="lead">
              {place.street}, {place.area}.
            </p>
            <div className="actions">
              <a className="btn btn--primary" href={place.directions}>Get directions</a>
              <a className="btn" href={place.tel}>Call {place.phone}</a>
            </div>
            <Hours />
          </div>
          <figure className="counter__photo">
            <div className="counter__frame" data-slot="interior" data-alt="Inside Isut Cafe + Roastery">
              <Image src="/photos/isut-interior.jpg" alt="The café’s high white walls, tall windows and the Isut Cafe + Roastery sign" fill priority sizes="(min-width: 60rem) 58vw, 100vw" style={{ objectPosition: "35% 50%" }} />
            </div>
            <figcaption>Inside Isut, Valley Golf, Cainta.</figcaption>
          </figure>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 data-reveal>What to expect</h2>
          <dl className="figures">
            <div data-reveal>
              <dt>Rating on Google</dt>
              <dd className="figure">5.0</dd>
              <dd><a href={place.reviews}>From 39 reviews</a></dd>
            </div>
            <div data-reveal>
              <dt>A typical stay</dt>
              <dd className="figure figure--words">25 min to 2.5 hr</dd>
            </div>
            <div data-reveal>
              <dt>Spend per person</dt>
              <dd className="figure figure--words">₱1 to ₱500</dd>
            </div>
          </dl>
          <ul className="photo-row">
            <li data-reveal>
              <figure>
                <div className="photo-row__frame" data-slot="bar" data-alt="The bar at Isut, landscape">
                  <Image src="/photos/barista.jpg" alt="A barista tamping a shot of espresso" fill sizes="(min-width: 60rem) 60vw, 100vw" />
                </div>
                <figcaption>Espresso from the house roast.</figcaption>
              </figure>
            </li>
            <li data-reveal style={{ "--i": 1 } as React.CSSProperties}>
              <figure>
                <div className="photo-row__frame" data-slot="drink" data-alt="A drink from the bar, from above">
                  <Image src="/photos/cappuccino.jpg" alt="A cappuccino with a rosetta, from above" fill sizes="(min-width: 60rem) 25vw, 100vw" />
                </div>
                <figcaption>A cappuccino at the counter.</figcaption>
              </figure>
            </li>
            <li data-reveal style={{ "--i": 2 } as React.CSSProperties}>
              <figure>
                <div className="photo-row__frame" data-slot="pastry" data-alt="A pastry from the counter">
                  <Image src="/photos/ensaymada.jpg" alt="Two ensaymada on a plate" fill sizes="(min-width: 60rem) 33vw, 100vw" />
                </div>
                <figcaption>Ensaymada with your coffee.</figcaption>
              </figure>
            </li>
          </ul>
        </div>
      </section>

      <section className="section section--s">
        <div className="container grid">
          <div className="col-wide counter__map" data-reveal>
            <iframe
              title="Map to Isut Cafe + Roastery"
              src={place.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="col-narrow" data-reveal>
            <h2>Ways to reach us</h2>
            <table className="contact">
              <tbody>
                <tr><th scope="row">Call or text</th><td><a href={place.tel}>{place.phone}</a></td></tr>
                <tr><th scope="row">Message</th><td><a href={place.messenger}>Messenger</a></td></tr>
                <tr><th scope="row">Facebook</th><td><a href={place.facebook}>ISUTCAFEPH</a></td></tr>
                <tr><th scope="row">Instagram</th><td><a href={place.instagram}>@isutcafe</a></td></tr>
                <tr><th scope="row">Find us</th><td><a href={place.directions}>Open in Google Maps</a></td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
