import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { APP_URL, brand } from "@/lib/products";

export const metadata: Metadata = {
  title: "Purchase complete",
};

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const params = await searchParams;
  const sessionId = params.session_id;

  return (
    <>
      <Header />
      <main className="inner-page lf-wrap" style={{ paddingBottom: 48 }}>
        <h1>Purchase complete</h1>
        <p>
          Instant access: PDFs and the companion app beta exist. Check your email
          for the Stripe receipt. File-delivery email may still be separate —
          there is no download button on this page.
        </p>
        <p>
          Companion app:{" "}
          <a href={APP_URL} rel="noreferrer" target="_blank">
            {APP_URL}
          </a>
        </p>
        <p>
          If files do not arrive, contact {brand.name} with your order details.
        </p>
        {sessionId && (
          <p className="lf-tiny" style={{ color: "var(--soft)" }}>
            Session: {sessionId}
          </p>
        )}
        <p>
          <Link href="/">Back to home</Link>
        </p>
        <Footer />
      </main>
    </>
  );
}
