import Image from "next/image";
import { notFound } from "next/navigation";
import { getPressBySlug, pressItems } from "@/data/press";
import { Container } from "@/components/Container";
import { ButtonLink } from "@/components/ButtonLink";
import { RichDoc } from "@/lib/richDoc";
import { formatDate } from "@/lib/dates";

export function generateStaticParams() {
  return pressItems.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const item = getPressBySlug(params.slug);
  if (!item) return { title: "Press" };
  return {
    title: item.title,
    description: item.excerpt,
    openGraph: {
      title: item.title,
      description: item.excerpt,
      type: "article",
    },
  };
}

export default function PressDetailPage({ params }) {
  const item = getPressBySlug(params.slug);
  if (!item) notFound();

  return (
    <main id="main" className="py-14 sm:py-20">
      <article>
        <Container>
          <p className="text-xs font-semibold uppercase tracking-wide text-[var(--teal)]">
            {item.outlet} · {formatDate(item.publishedAt)}
          </p>
          <h1 className="mt-2 max-w-4xl font-heading text-4xl font-bold text-[var(--ink)] sm:text-5xl">
            {item.title}
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-[var(--ink-soft)]">{item.excerpt}</p>

          <div className="relative mt-10 aspect-[21/9] overflow-hidden rounded-3xl border border-[var(--border)] shadow-lg">
            <Image
              src={item.coverUrl}
              alt={item.coverAlt}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>

          <div className="mx-auto mt-12 max-w-3xl">
            <RichDoc markdown={item.body} />
            {item.externalUrl ? (
              <div className="mt-8">
                <ButtonLink href={item.externalUrl} external>
                  Read full piece on publisher site
                </ButtonLink>
              </div>
            ) : null}
            <div className="mt-10 flex flex-wrap gap-3">
              <ButtonLink href="/press" variant="secondary">
                ← All press
              </ButtonLink>
              <ButtonLink href="/contact">Media inquiry</ButtonLink>
            </div>
          </div>
        </Container>
      </article>
    </main>
  );
}
