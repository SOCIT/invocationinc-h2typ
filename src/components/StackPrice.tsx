import { stackProduct } from "@/lib/products";

/**
 * Struck list price immediately before the Stack charge price.
 * Reuses products.listPriceDisplay / priceDisplay — no new SKUs.
 */
export function StackPrice({ compact = true }: { compact?: boolean }) {
  const list = stackProduct.listPriceDisplay ?? stackProduct.priceDisplay;
  const now = stackProduct.priceDisplay;

  return (
    <span className={compact ? "lf-stack-price lf-stack-price-compact" : "lf-stack-price"}>
      <s className="lf-was">{list}</s>
      <span className="lf-now">{now}</span>
    </span>
  );
}
