// =============================================================================
//  ▶▶▶  THIS IS THE ONE FILE YOU EDIT.  ◀◀◀
//
//  Fill in your campaign's details below and everything else follows. Nothing
//  here talks to a payment processor directly — the donate widget is hosted by
//  your processor, so card data and PCI scope never touch this site.
//
//  After editing, run `npm run dev` to preview locally, then deploy (see
//  README.md). Every field is documented in ./src/config.ts if you want the
//  full reference.
// =============================================================================

import type { CampaignConfig } from "./src/config";

const config: CampaignConfig = {
  // --- Identity --------------------------------------------------------------
  name: "Winter Shelves 2026",
  tagline: "Keep the Pennywell Street Pantry stocked from Thanksgiving through March.",
  siteUrl: "https://cpitzi.github.io/pennywell-winter-shelves", // no trailing slash
  base: "/pennywell-winter-shelves/", // "/" for a custom domain; "/your-repo-name/" for a project Pages site
  lang: "en",

  // --- The ask ---------------------------------------------------------------
  goal: "$12,000",
  raised: "$3,150", // e.g. "$8,200" — set to show a progress meter, or leave "" to hide it
  deadline: "December 20, 2026",

  // --- Content ---------------------------------------------------------------
  hero: {
    headline: "", // leave empty to use the campaign name
    subhead:
      "Forty volunteers, one church basement, two distributions a week. This winter the shelves need to stay full for twelve more weeks than the pantry has money for. (This page is a timed drill of a template: the pantry and every person named are fictional.)",
    ctaLabel: "Donate",
  },

  story: {
    heading: "Why this matters",
    blocks: [
      {
        heading: "The situation",
        paragraphs: [
          "Demand is up a third since last winter. On Tuesdays the line now reaches the corner by 8:40, and the volunteers who pack bags the night before have started packing lighter ones so the last families in line get something.",
          "Twelve thousand dollars means every family leaves with a full bag, every week, until the spring food-bank allocation lands in March. Short of that, the pantry starts rationing in January.",
        ],
      },
      {
        heading: "Where your money goes",
        paragraphs: [
          "$25 fills one family's bag for a week. $150 covers the walk-in cooler's electric bill for a month. $1,000 buys a pallet of shelf-stable protein at the food-bank rate, which the pantry cannot get without paying up front.",
        ],
      },
    ],
  },

  // --- Donate: a widget HOSTED BY YOUR PROCESSOR -----------------------------
  donate: {
    heading: "Chip in",
    blurb: "Every contribution goes straight to the pantry through its own PayPal account. Give securely below.",
    // OPTION 1 — paste your processor's embed snippet here (wins if set):
    embedHtml: "",
    // OPTION 2 — or link to your processor-hosted donate page:
    buttonUrl: "https://www.paypal.com/donate",
    buttonLabel: "Donate securely",
    processorName: "PayPal",
  },

  // --- Contact / volunteer signup (no backend) -------------------------------
  contact: {
    heading: "Get involved",
    blurb: "Want to pack bags on a Monday night, drive a pickup, or ask a question? Reach out.",
    email: "volunteers@pennywell.example.org",
    emailSubject: "I'd like to help with Winter Shelves",
  },

  // --- Look & footer ---------------------------------------------------------
  theme: {
    accent: "#7a3e1d",
    onAccent: "#ffffff",
  },
  footerNote: "Paid for by the Pennywell Street Pantry, an all-volunteer food pantry. This page is a timed drill of a template; the pantry and every person named are fictional.",
  links: [],
};

export default config;
