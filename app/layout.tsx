import type { Metadata } from "next";
import Link from "next/link";
import { Hanken_Grotesk, Vollkorn } from "next/font/google";
import { Nav, Reveal } from "./components";
import { place } from "./data";
import "./globals.css";

const vollkorn = Vollkorn({ variable: "--font-vollkorn", subsets: ["latin"], weight: "600" });
const hanken = Hanken_Grotesk({ variable: "--font-hanken", subsets: ["latin"], weight: ["400", "500"] });

export const metadata: Metadata = {
  title: { default: "Isut Cafe + Roastery, Cainta", template: "%s | Isut Cafe + Roastery" },
  description:
    "Specialty coffee in Cainta, Rizal, roasted from beans grown by Bugkalot farmers in the Sierra Madre of Nueva Vizcaya.",
};

const credits = [
  ["Cooling time for coffee", "Jameswasswa", "https://commons.wikimedia.org/wiki/File:Cooling_time_for_coffee.jpg", "CC BY-SA 4.0"],
  ["Cappuccino latte art", "Wiki Asmah", "https://commons.wikimedia.org/wiki/File:Cappuccino_latte_art_20260712_-_02.jpg", "CC BY-SA 4.0"],
  ["Manual drip coffee", "Kim Sanso", "https://commons.wikimedia.org/wiki/File:Manual_drip_(pour-over)_coffee.jpg", "CC0"],
  ["Filipino ensaymada", "Obsidian Soul", "https://commons.wikimedia.org/wiki/File:Filipino_ensaymada_(ensaimada).jpg", "CC0"],
  ["Barista prepares espresso", "Shixart1985", "https://commons.wikimedia.org/wiki/File:Barista_prepares_espresso_at_coffee_shop.jpg", "CC BY 2.0"],
  ["Iced coffee in glass", "Tony Webster", "https://commons.wikimedia.org/wiki/File:Iced_Coffee_in_Glass_-_Sunshine_Coffee_-_Laramie_Cafe_(53838344552).jpg", "CC BY 2.0"],
];

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${vollkorn.variable} ${hanken.variable}`}>
      <body>
        <a className="skip" href="#main">Skip to content</a>
        <Nav />
        <main id="main">{children}</main>
        <footer className="footer">
          <div className="container">
            <p className="footer__mast">Isut Cafe + Roastery</p>
            <div className="footer__cols">
              <address>
                {place.street}
                <br />
                {place.area}
              </address>
              <p>
                <a href={place.tel}>{place.phone}</a>
                <br />
                <a href={place.directions}>Get directions</a>
              </p>
              <ul className="footer__links">
                <li><Link href="/menu">Menu</Link></li>
                <li><Link href="/our-coffee">Our coffee</Link></li>
                <li><Link href="/farm">The farm</Link></li>
                <li><Link href="/visit">Visit</Link></li>
              </ul>
              <ul className="footer__links">
                <li><a href={place.facebook}>Facebook</a></li>
                <li><a href={place.instagram}>Instagram</a></li>
                <li><a href={place.bcc}>Bugkalot Coffee Company</a></li>
              </ul>
            </div>
            <p className="footer__credits" data-credits>
              Farm, coffee and café photographs: <a href={place.bcc}>Bugkalot Coffee Company</a>. Other photographs:{" "}
              {credits.map(([title, by, href, lic], i) => (
                <span key={href}>
                  <a href={href}>{title}</a> by {by} ({lic}){i < credits.length - 1 ? ", " : "."}
                </span>
              ))}
            </p>
          </div>
        </footer>
        <Reveal />
      </body>
    </html>
  );
}
