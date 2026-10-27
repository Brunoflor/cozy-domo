/**
 * Cozy Domo — all guest-facing text.
 *
 * How to edit
 * - Each sentence has an `it` (Italian) and an `en` (English) version.
 * - Place names and street addresses are plain strings (they stay the same).
 * - Icons: house, key, pin, parking, wifi, rules, bus, sofa, compass, info,
 *   cup, plate, bag, cross, door, phone, plane, train, ferry.
 * - `type: "notes"` — add sentences to `paragraphs` as `{ it, en }`.
 *   An empty list shows "In arrivo / Coming soon".
 * - `type: "places"` — add cards to `items` like the parking garages
 *   (`name`, `address`, `text: { it, en }`, `mapsUrl`). An empty list
 *   shows "In arrivo / Coming soon".
 * - Only add details you have checked. Do not guess passwords, phone
 *   numbers, prices, or opening hours.
 */
window.COZY_CONTENT = {
  property: {
    addressLines: ["Via Gregorio Mattei 26", "80133 Napoli"],
    addressLine: "Via Gregorio Mattei 26, 80133 Napoli",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Via+Gregorio+Mattei+26%2C+80133+Napoli",
  },

  ui: {
    pageTitle: {
      it: "Cozy Domo — Guida per gli ospiti",
      en: "Cozy Domo — Guest guide",
    },
    metaDescription: {
      it: "Guida digitale per gli ospiti di Cozy Domo, a Napoli.",
      en: "Digital welcome book for guests of Cozy Domo in Naples.",
    },
    tagline: {
      it: "La guida per il tuo soggiorno",
      en: "A guide for your stay",
    },
    hint: {
      it: "Clicca sulle icone",
      en: "Tap the icons",
    },
    languageLabel: {
      it: "Lingua",
      en: "Language",
    },
    languageNow: {
      it: "Italiano",
      en: "English",
    },
    skip: {
      it: "Vai alle sezioni",
      en: "Skip to sections",
    },
    sectionsLabel: {
      it: "Sezioni della guida",
      en: "Guide sections",
    },
    back: {
      it: "Indietro",
      en: "Back",
    },
    openMaps: {
      it: "Apri in Google Maps",
      en: "Open in Google Maps",
    },
    newTab: {
      it: "si apre in una nuova scheda",
      en: "opens in a new tab",
    },
    routeHint: {
      it: "Indicazioni in Google Maps, si apre in una nuova scheda",
      en: "Google Maps directions, opens in a new tab",
    },
    addressLabel: {
      it: "Indirizzo",
      en: "Address",
    },
    routesLabel: {
      it: "Come arrivare",
      en: "How to get here",
    },
    comingSoon: {
      it: "In arrivo",
      en: "Coming soon",
    },
    comingSoonBody: {
      it: "Questa sezione sarà aggiornata a breve.",
      en: "This section will be updated soon.",
    },
  },

  sections: [
    {
      id: "welcome",
      icon: "house",
      title: { it: "Benvenuti", en: "Welcome" },
      type: "notes",
      paragraphs: [],
    },
    {
      id: "checkin",
      icon: "key",
      title: { it: "Check-in", en: "Check-in" },
      type: "notes",
      paragraphs: [],
    },
    {
      id: "location",
      icon: "pin",
      title: { it: "Posizione", en: "Location" },
      type: "directions",
      routes: [
        {
          id: "airport",
          icon: "plane",
          title: { it: "Aeroporto", en: "Airport" },
          text: {
            it: "Alibus fino a Piazza Garibaldi (circa 15 minuti), poi metro Linea 1 una fermata fino a Duomo. In taxi circa 25 minuti, traffico permettendo.",
            en: "Take the Alibus to Piazza Garibaldi (about 15 minutes), then Metro Line 1 one stop to Duomo. By taxi about 25 minutes, depending on traffic.",
          },
          mapsUrl:
            "https://www.google.com/maps/dir/?api=1&origin=Aeroporto+di+Napoli+Capodichino&destination=Via+Gregorio+Mattei+26%2C+80133+Napoli&travelmode=transit",
        },
        {
          id: "station",
          icon: "train",
          title: { it: "Stazione Centrale", en: "Central Station" },
          text: {
            it: "Metro Linea 1 dalla fermata Garibaldi, direzione Piscinola, una fermata fino a Duomo; poi circa 3 minuti a piedi. In alternativa circa 15 minuti a piedi.",
            en: "Take Metro Line 1 from Garibaldi (towards Piscinola) one stop to Duomo, then walk about 3 minutes. Or walk about 15 minutes.",
          },
          mapsUrl:
            "https://www.google.com/maps/dir/?api=1&origin=Stazione+di+Napoli+Centrale&destination=Via+Gregorio+Mattei+26%2C+80133+Napoli&travelmode=transit",
        },
        {
          id: "port",
          icon: "ferry",
          title: { it: "Porto", en: "Port" },
          text: {
            it: "Il sottopasso pedonale porta alla metro Municipio: Linea 1 direzione Centro Direzionale, due fermate fino a Duomo. A piedi circa 20 minuti.",
            en: "From the port, a pedestrian underpass leads to Municipio metro station: Line 1 towards Centro Direzionale, two stops to Duomo. On foot about 20 minutes.",
          },
          mapsUrl:
            "https://www.google.com/maps/dir/?api=1&origin=Molo+Beverello%2C+Napoli&destination=Via+Gregorio+Mattei+26%2C+80133+Napoli&travelmode=transit",
        },
      ],
    },
    {
      id: "parking",
      icon: "parking",
      title: { it: "Parcheggi", en: "Parking" },
      type: "places",
      notice: {
        it: "La casa è fuori dalla ZTL del Centro Antico, ma non entrate in auto nel centro storico a nord di Corso Umberto I: i varchi elettronici multano automaticamente. Sulle strisce blu la sosta si paga di norma dalle 8 alle 24 (parcometro o app).",
        en: "The apartment is outside the 'Centro Antico' ZTL (restricted traffic zone), but do not drive into the old town north of Corso Umberto I: cameras fine you automatically. Blue-line street parking is normally paid 8:00–24:00 (meter or app).",
      },
      items: [
        {
          name: "Parking Rettifilo",
          address: "Vico Campagnari 3",
          text: {
            it: "Garage coperto e custodito a 2 minuti a piedi, aperto 7:00–24:00 (si lasciano le chiavi).",
            en: "Covered, attended garage 2 minutes' walk away, open 7:00–24:00 (you leave your keys).",
          },
          mapsUrl:
            "https://www.google.com/maps/search/?api=1&query=Parking+Rettifilo+Vico+Campagnari+3+Napoli",
        },
        {
          name: "Parking del Conte",
          address: "Vico Orto del Conte 18",
          text: {
            it: "Garage a circa 3 minuti a piedi, aperto dalla mattina fino a mezzanotte circa.",
            en: "Garage about 3 minutes' walk away, open from morning until around midnight.",
          },
          mapsUrl:
            "https://www.google.com/maps/search/?api=1&query=Parking+del+Conte+Vico+Orto+del+Conte+18+Napoli",
        },
        {
          name: "Parcheggio Low Cost Rinaldi",
          address: "Via San Cosmo fuori Porta Nolana 91",
          text: {
            it: "Garage coperto aperto 24 ore, a circa 13 minuti a piedi, vicino alla Stazione Centrale.",
            en: "Covered garage open 24 hours, about 13 minutes' walk away, near the Central Station.",
          },
          mapsUrl:
            "https://www.google.com/maps/search/?api=1&query=Parcheggio+Low+Cost+Rinaldi+Via+San+Cosmo+fuori+Porta+Nolana+91+Napoli",
        },
      ],
    },
    {
      id: "wifi",
      icon: "wifi",
      title: { it: "Wi-Fi", en: "Wi-Fi" },
      type: "notes",
      paragraphs: [],
    },
    {
      id: "rules",
      icon: "rules",
      title: { it: "Regole", en: "House rules" },
      type: "notes",
      paragraphs: [],
    },
    {
      id: "transport",
      icon: "bus",
      title: { it: "Trasporti", en: "Transport" },
      type: "notes",
      paragraphs: [],
    },
    {
      id: "amenities",
      icon: "sofa",
      title: { it: "Servizi", en: "Amenities" },
      type: "notes",
      paragraphs: [],
    },
    {
      id: "activities",
      icon: "compass",
      title: { it: "Attività", en: "Things to do" },
      type: "notes",
      paragraphs: [],
    },
    {
      id: "info",
      icon: "info",
      title: { it: "Info", en: "Info" },
      type: "notes",
      paragraphs: [],
    },
    {
      id: "bars",
      icon: "cup",
      title: { it: "Bar", en: "Bars" },
      type: "places",
      items: [],
    },
    {
      id: "restaurants",
      icon: "plate",
      title: { it: "Ristoranti", en: "Restaurants" },
      type: "places",
      items: [],
    },
    {
      id: "shopping",
      icon: "bag",
      title: { it: "Shopping", en: "Shopping" },
      type: "places",
      items: [],
    },
    {
      id: "emergencies",
      icon: "cross",
      title: { it: "Emergenze", en: "Emergencies" },
      type: "notes",
      paragraphs: [],
    },
    {
      id: "checkout",
      icon: "door",
      title: { it: "Check-out", en: "Check-out" },
      type: "notes",
      paragraphs: [],
    },
    {
      id: "contacts",
      icon: "phone",
      title: { it: "Contatti", en: "Contacts" },
      type: "notes",
      paragraphs: [],
    },
  ],
};
