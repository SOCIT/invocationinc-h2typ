/**
 * EW2H offers — book | stack only.
 * Do not add workbook-only or combo SKUs.
 * Do not hardcode Stripe Price IDs; wire them via env.
 */

export type ProductId = "book" | "stack";

export interface Product {
  id: ProductId;
  name: string;
  shortName: string;
  description: string;
  /** Charge price shown on buttons. */
  priceDisplay: string;
  priceCents: number;
  /** List / strike price when different from charge price. */
  listPriceDisplay?: string;
  listPriceCents?: number;
  /** Env var name holding the Stripe Price ID for this offer. */
  stripePriceEnvKey: "STRIPE_PRICE_BOOK" | "STRIPE_PRICE_STACK";
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

/** Companion app (client-only beta). */
export const APP_URL = "https://invocationinc-ew2h-app.vercel.app";

/** localStorage key for the 24h STACK deadline. Set once; refresh must not reset. */
export const STACK_DEADLINE_KEY = "ew2h_stack_deadline";

export const STACK_WINDOW_MS = 24 * 60 * 60 * 1000;

export const products: Product[] = [
  {
    id: "stack",
    name: "Eight Weeks to Happy — STACK",
    shortName: "STACK",
    description: "Book PDF + Workbook PDF + Companion App access.",
    priceDisplay: "$47",
    priceCents: 4700,
    listPriceDisplay: "$97",
    listPriceCents: 9700,
    stripePriceEnvKey: "STRIPE_PRICE_STACK",
    paymentLinkUrl: "",
    highlighted: true,
    features: [
      "Book PDF",
      "Workbook PDF",
      "Companion App access",
    ],
  },
  {
    id: "book",
    name: "Eight Weeks to Happy — Book (PDF)",
    shortName: "WHY",
    description: "Book PDF only.",
    priceDisplay: "$9.99",
    priceCents: 999,
    stripePriceEnvKey: "STRIPE_PRICE_BOOK",
    paymentLinkUrl: "",
    features: ["Book PDF only"],
  },
];

export function getProduct(id: ProductId): Product | undefined {
  return products.find((p) => p.id === id);
}

export function isValidProductId(id: string): id is ProductId {
  return id === "book" || id === "stack";
}

export const stackProduct = getProduct("stack")!;
export const bookProduct = getProduct("book")!;
