// Real facts come from the Google profile. Anything marked MOCK is sample
// content for the draft: replace it with the café's own before launch.

export const place = {
  name: "Isut Cafe + Roastery",
  street: "Lot 10 Don Celso S. Tuason Ave",
  area: "Valley Golf Subd, Cainta, 1900 Rizal",
  phone: "0924 418 2687",
  tel: "tel:+639244182687",
  directions:
    "https://www.google.com/maps/dir/?api=1&destination=Isut+Cafe+%2B+Roastery%2C+Lot+10+Don+Celso+S.+Tuason+Ave%2C+Valley+Golf+Subd%2C+Cainta%2C+Rizal",
  mapEmbed:
    "https://www.google.com/maps?q=Isut+Cafe+%2B+Roastery,+Lot+10+Don+Celso+S.+Tuason+Ave,+Cainta,+Rizal&output=embed",
  reviews: "https://www.google.com/maps/search/?api=1&query=Isut+Cafe+%2B+Roastery+Cainta",
  // Handles from bugkalotcoffee.com: ISUTCAFEPH on Facebook, @ISUTCAFE on Instagram.
  facebook: "https://www.facebook.com/ISUTCAFEPH",
  messenger: "https://m.me/ISUTCAFEPH",
  instagram: "https://www.instagram.com/isutcafe/",
  bcc: "https://bugkalotcoffee.com/",
};

// MOCK opening times. Closing at 8:30 PM is from Google; the opening hours are not.
// Indexed like Date.getDay(): 0 is Sunday. Times are minutes after midnight.
export const hours = [
  { day: "Sunday", open: 7 * 60, close: 20 * 60 + 30 },
  { day: "Monday", open: 8 * 60, close: 20 * 60 + 30 },
  { day: "Tuesday", open: 8 * 60, close: 20 * 60 + 30 },
  { day: "Wednesday", open: 8 * 60, close: 20 * 60 + 30 },
  { day: "Thursday", open: 8 * 60, close: 20 * 60 + 30 },
  { day: "Friday", open: 8 * 60, close: 20 * 60 + 30 },
  { day: "Saturday", open: 7 * 60, close: 20 * 60 + 30 },
];

export type Item = { name: string; note?: string; price: number };

// MOCK menu and prices.
export const menu: { id: string; label: string; items: Item[] }[] = [
  {
    id: "espresso",
    label: "Espresso bar",
    items: [
      { name: "Espresso", note: "A double shot of the house roast", price: 110 },
      { name: "Americano", note: "Hot or iced", price: 130 },
      { name: "Cappuccino", note: "Dense foam, 6 oz", price: 150 },
      { name: "Café latte", note: "Hot or iced", price: 160 },
      { name: "Spanish latte", note: "Sweetened with condensed milk", price: 170 },
      { name: "Flat white", note: "Two shots, less milk", price: 160 },
    ],
  },
  {
    id: "brew",
    label: "Manual brew",
    items: [
      { name: "Pour-over", note: "Bugkalot medium roast, brewed by hand", price: 180 },
      { name: "French press", note: "For two, the fuller body", price: 220 },
      { name: "Cold brew", note: "Steeped overnight", price: 170 },
    ],
  },
  {
    id: "not-coffee",
    label: "Not coffee",
    items: [
      { name: "Matcha latte", price: 170 },
      { name: "Hot chocolate", note: "Local cacao", price: 150 },
      { name: "Calamansi soda", price: 120 },
    ],
  },
  {
    id: "food",
    label: "To eat",
    items: [
      { name: "Banana bread", note: "By the slice", price: 110 },
      { name: "Ensaymada", price: 95 },
      { name: "Ham and cheese croissant", price: 180 },
    ],
  },
];

// The one coffee, from bugkalotcoffee.com. Only the bag price is MOCK.
export const coffee = {
  name: "Bugkalot Coffee",
  facts: [
    ["Origin", "Bugkalot Ancestral Domain, Nueva Vizcaya"],
    ["Variety", "100% arabica, single origin"],
    ["Elevation", "900 to 1,200 m"],
    ["Process", "Semi-washed"],
    ["Roast", "Medium"],
    ["In the cup", "Medium-heavy body, dark chocolate sweetness, light fruit finish"],
  ],
  bag: "250 g",
  price: 480, // MOCK
};

export const peso = (n: number) => `₱${n}`;

const clock = (m: number) => {
  const h = Math.floor(m / 60), min = m % 60;
  return `${h % 12 || 12}${min ? `:${String(min).padStart(2, "0")}` : ""} ${h < 12 ? "AM" : "PM"}`;
};
export const span = (d: (typeof hours)[number]) => `${clock(d.open)} to ${clock(d.close)}`;

// The live line under the hours: open now or when it next opens.
export function statusAt(day: number, minutes: number) {
  const today = hours[day];
  if (minutes >= today.open && minutes < today.close)
    return { open: true, text: `Open now, closes ${clock(today.close)}` };
  if (minutes < today.open) return { open: false, text: `Closed now, opens ${clock(today.open)} today` };
  const next = hours[(day + 1) % 7];
  return { open: false, text: `Closed now, opens ${clock(next.open)} tomorrow` };
}

// The current day and minute in Cainta, whatever the visitor's timezone.
export function manilaNow(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Manila", weekday: "short", hour: "numeric", minute: "numeric", hourCycle: "h23",
  }).formatToParts(date);
  const get = (t: string) => parts.find((p) => p.type === t)!.value;
  const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(get("weekday"));
  return { day, minutes: Number(get("hour")) * 60 + Number(get("minute")) };
}
