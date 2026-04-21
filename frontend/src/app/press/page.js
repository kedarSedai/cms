import Image from "next/image";
import Link from "next/link";
import { pressItems } from "@/data/press";
import { Container } from "@/components/Container";
import { formatDate } from "@/lib/dates";

export const metadata = {
  title: "Press",
  description:
    "Media mentions and interviews featuring Rising MVPs and founder Rian Patel.",
};

export default function PressPage() {
  return (
    <main id="main" className="py-14 sm:py-20">
      <Container>
        <p className="text-sm font-semibold uppercase tracking-wide text-[var(--coral)]">
          Press
        </p>
        <h1 className="mt-2 font-heading text-4xl font-bold text-[var(--ink)] sm:text-5xl">
          Credibility in the headlines
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-[var(--ink-soft)]">
          Each entry can link outbound to publishers while storing summaries and quotes
          in Strapi for easy updates.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {pressItems.map((item) => (
            <article
              key={item.id}
              className="flex h-full flex-col overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] shadow-sm"
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={item.coverUrl}
                  alt={item.coverAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-semibold uppercase text-[var(--teal)]">
                  {item.outlet} · {formatDate(item.publishedAt)}
                </p>
                <h2 className="mt-2 font-heading text-xl font-bold text-[var(--ink)]">
                  <Link
                    href={`/press/${item.slug}`}
                    className="hover:text-[var(--coral)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--coral)]"
                  >
                    {item.title}
                  </Link>
                </h2>
                <p className="mt-3 flex-1 text-sm text-[var(--ink-soft)]">
                  {item.excerpt}
                </p>
                <Link
                  href={`/press/${item.slug}`}
                  className="mt-4 inline-flex text-sm font-semibold text-[var(--coral)] hover:underline"
                >
                  Read summary →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </main>
  );
}
