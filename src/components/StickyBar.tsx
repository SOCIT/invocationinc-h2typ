"use client";

import { BuyButton } from "./BuyButton";
import { Countdown } from "./Countdown";
import { StackPrice } from "./StackPrice";

export function StickyBar() {
  return (
    <div className="lf-sticky">
      <div className="t">
        <StackPrice /> ends in <Countdown id="timerSticky" />
      </div>
      <BuyButton
        productId="stack"
        label={
          <>
            Take the Full System — <StackPrice />
          </>
        }
        className="lf-sticky-buy"
      />
    </div>
  );
}
