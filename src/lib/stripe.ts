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

/** Live H2TYP ebook Price is $9.99: price_1UMYUhPj4KYXkIe0wIBODvIa. Set STRIPE_PRICE_BOOK to that ID. */
export function getStripePriceId(productId: ProductId): string | null {
  const product = getProduct(productId);
  if (!product) return null;
  const priceId = process.env[product.stripePriceEnvKey];
  return priceId || null;
}

export function getSiteUrl(): string {
  return (
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "http://localhost:3000"
  );
}
