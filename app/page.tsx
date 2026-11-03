import Image from "next/image";
import Link from "next/link";
import { CoffeeFacts, Hours } from "./components";
import { menu, peso, place } from "./data";

export default function Home() {
  const bar = menu[0].items.slice(0, 5);
  return (
    <>
      <section className="poster">
        <figure className="poster__photo" data-slot="hero" data-alt="The café’s own roaster or the bar at work, landscape, 2400px wide">
          <Image src="/photos/roast-cooling.jpg" alt="Freshly roasted beans turning in the cooling tray" fill priority sizes="100vw" />
        </figure>
        <div className="container poster__body">
          <h1>Sierra Madre coffee, roasted in Cainta</h1>
          <p className="lead">Single-origin arabica from the Bugkalot farms of Nueva Vizcaya.</p>
          <div className="actions">
            <a className="btn btn--primary" href={place.directions}>Get directions</a>
            <a className="btn btn--on-dark" href={place.tel}>Call {place.phone}</a>
          </div>
        </div>
      </section>

      <section className="section" id="hours">
        <div className="container grid">
          <div className="col-head" data-reveal>
            <h2>Find us in Valley Golf</h2>
            <p className="lead">
              {place.street}, {place.area}.
            </p>
            <ul className="link-row">
              <li><a href={place.directions}>Directions</a></li>
              <li><a href={place.tel}>Call</a></li>
              <li><a href={place.messenger}>Message us</a></li>
            </ul>
          </div>
          <div className="col-body" data-reveal>
            <Hours />
          </div>
        </div>
      </section>

      <section className="section section--l">
        <div className="container">
          <blockquote className="quote" data-reveal>
            <p>
              “From coffee growing, to processing to roasting and brewing, we have integrated every step of the
              coffee supply chain to maximize economic value for the Bugkalot.”
            </p>
            <footer>{place.name}, with Bugkalot Coffee Company and the Bugkalot farmers’ cooperative</footer>
          </blockquote>
          <figure className="wide" data-reveal>
            <div className="wide__frame wide__frame--pano" data-slot="domain" data-alt="The Bugkalot Ancestral Domain, wide panorama">
              <Image src="/photos/domain-panorama.jpg" alt="Grassland and forested ridges of the Bugkalot Ancestral Domain" fill sizes="(min-width: 90rem) 1312px, 100vw" />
            </div>
            <figcaption>
              The Bugkalot Ancestral Domain, Nueva Vizcaya. <Link href="/farm">Meet the farm</Link>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="section section--s">
        <div className="container grid grid--center">
          <div className="col-wide photo-43" data-slot="bag" data-alt="A bag of Isut’s roasted Bugkalot coffee" data-reveal>
            <Image src="/photos/bcc-bag.jpg" alt="A bag of Bugkalot Coffee beside a glass of beans and a cup" fill sizes="(min-width: 60rem) 50vw, 100vw" />
          </div>
          <div className="col-narrow stack" data-reveal>
            <h2>One coffee, roasted here</h2>
            <CoffeeFacts price />
            <Link href="/our-coffee">From seed to cup</Link>
          </div>
        </div>
      </section>

      <section className="band-ink">
        <div className="container grid">
          <div className="col-head" data-reveal>
            <h2>On the bar today</h2>
            <p className="lead">Espresso drinks from the house roast.</p>
            <Link className="btn btn--on-dark" href="/menu">See the full menu</Link>
            <div className="photo-43" data-slot="bar" data-alt="The café’s barista at the machine, landscape">
              <Image src="/photos/barista.jpg" alt="A barista tamping a shot of espresso" fill sizes="(min-width: 60rem) 36vw, 100vw" />
            </div>
          </div>
          <div className="col-body" data-reveal>
            <table className="price-list price-list--dark">
              <caption className="visually-hidden">Espresso drinks</caption>
              <tbody>
                {bar.map((it) => (
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
          </div>
        </div>
      </section>

      <section className="section section--s">
        <div className="container">
          <div className="head-split" data-reveal>
            <h2>Inside the café</h2>
            <p className="lead">
              Big windows, high ceilings, and a seat for a long cup. <Link href="/visit">Plan your visit</Link>
            </p>
          </div>
          <figure className="wide" data-reveal>
            <div className="wide__frame wide__frame--tall" data-slot="interior" data-alt="Inside Isut Cafe + Roastery">
              <Image src="/photos/isut-interior.jpg" alt="The café’s high white walls, tall windows and the Isut Cafe + Roastery sign" fill sizes="(min-width: 90rem) 1312px, 100vw" />
            </div>
          </figure>
        </div>
      </section>
    </>
  );
}
