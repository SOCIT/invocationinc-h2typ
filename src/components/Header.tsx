import Link from "next/link";
import { StackPrice } from "./StackPrice";

export function Header() {
  return (
    <header className="lf-site-header">
      <div>Invocation Inc · Human Performance Engineers</div>
      <Link href="/#offer">
        Take the Full System — <StackPrice />
      </Link>
    </header>
  );
}
