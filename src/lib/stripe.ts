import Stripe from "stripe";
import type { ProductId } from "./products";
import { getProduct } from "./products";

export function getStripe(): Stripe | null {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) return null;
  return new Stripe(key);
}

/** True when a secret key exists. Per-product Price IDs are checked separately. */
export function isCheckoutConfigured(productId?: ProductId): boolean {
  if (!process.env.STRIPE_SECRET_KEY) return false;
  if (!productId) {
    return Boolean(
      process.env.STRIPE_PRICE_BOOK || process.env.STRIPE_PRICE_STACK
    );
  }
  return Boolean(getStripePriceId(productId));
}

export function getStripePriceId(productId: ProductId): string | null {
  const product = getProduct(productId);
  if (!product) return null;
  const priceId = process.env[product.stripePriceEnvKey];
  return priceId || null;
}

const BOOK_CURRENCY = "usd";

function isExactBookPrice(price: Stripe.Price, unitAmount: number): boolean {
  return (
    price.active &&
    price.currency === BOOK_CURRENCY &&
    price.type === "one_time" &&
    price.unit_amount === unitAmount
  );
}

function stripeProductIdFromPrice(price: Stripe.Price): string | null {
  const product = price.product;
  if (typeof product === "string") return product;
  if (product && !product.deleted) return product.id;
  return null;
}

/**
 * Checkout charges the catalog amount ($9.99 / 999¢).
 * Uses STRIPE_PRICE_BOOK when that Price is already an active one-time USD
 * price at that amount. Otherwise reuses or creates that Price on the same
 * Stripe product. Never charges a different amount.
 */
export async function resolveCheckoutPriceId(
  stripe: Stripe,
  productId: ProductId,
): Promise<string | null> {
  const product = getProduct(productId);
  const configuredId = getStripePriceId(productId);
  if (!product || !configuredId) return null;

  const configured = await stripe.prices.retrieve(configuredId);
  if (isExactBookPrice(configured, product.priceCents)) return configured.id;

  const stripeProductId = stripeProductIdFromPrice(configured);
  if (!stripeProductId) return null;

  const listed = await stripe.prices.list({
    product: stripeProductId,
    active: true,
    type: "one_time",
    limit: 100,
  });
  const existing = listed.data.find((price) =>
    isExactBookPrice(price, product.priceCents),
  );
  if (existing) return existing.id;

  const created = await stripe.prices.create({
    product: stripeProductId,
    currency: BOOK_CURRENCY,
    unit_amount: product.priceCents,
    nickname: `${product.shortName} ${product.priceDisplay}`,
  });
  return created.id;
}

export function getSiteUrl(): string {
  return (
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "http://localhost:3000"
  );
}
