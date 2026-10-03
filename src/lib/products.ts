/**
 * H2TYP offer — the ebook, direct from the author.
 * PDF + EPUB. Do not hardcode Stripe Price IDs; wire them via env.
 */

export type ProductId = "book";

export interface Product {
  id: ProductId;
  name: string;
  shortName: string;
  description: string;
  /** Charge price shown on buttons. One price. No strike. */
  priceDisplay: string;
  priceCents: number;
  /** Env var name holding the Stripe Price ID for this offer. */
  stripePriceEnvKey: "STRIPE_PRICE_BOOK";
  /**
   * Optional Stripe Payment Link. Leave empty to use /api/checkout.
   * Prefer API checkout + env Price IDs.
   */
  paymentLinkUrl: string;
  features: string[];
  highlighted?: boolean;
}

export const brand = {
  name: "Invocation Inc",
  legalName: "Invocation Inc",
  shortName: "Invocation",
  role: "Human Performance Engineers",
  tagline: "Invoke a better you.",
  mechanismLine: "Fix yourself first. Communicate so it lands. Run the system.",
  bookTitle: "How to Train Your Partner",
  bookAbbrev: "H2TYP",
  siteUrlFallback: "http://localhost:3000",
  paper: "#f3eadc",
  ink: "#140e0c",
  red: "#d10f28",
} as const;

export const products: Product[] = [
  {
    id: "book",
    name: "How to Train Your Partner — Ebook",
    shortName: "The Ebook",
    description: "The complete book. PDF + EPUB, available instantly.",
    priceDisplay: "$9.99",
    priceCents: 999,
    stripePriceEnvKey: "STRIPE_PRICE_BOOK",
    paymentLinkUrl: "",
    highlighted: true,
    features: ["Book PDF — instant download", "EPUB edition — instant download"],
  },
];

export function getProduct(id: ProductId): Product | undefined {
  return products.find((p) => p.id === id);
}

export function isValidProductId(id: string): id is ProductId {
  return id === "book";
}

export const bookProduct = getProduct("book")!;
