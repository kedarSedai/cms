import Image from "next/image";
import { testimonials } from "@/data/testimonials";
import { Container } from "@/components/Container";
import { ButtonLink } from "@/components/ButtonLink";

export const metadata = {
  title: "Testimonials",
  description:
    "Quotes from parents, volunteers, and sponsors about Rising MVPs programs.",
};

export default function TestimonialsPage() {
  return (
    <main id="main" className="py-14 sm:py-20">
      <Container>
        <p className="text-sm font-semibold uppercase tracking-wide text-[var(--teal)]">
          Testimonials
        </p>
        <h1 className="mt-2 font-heading text-4xl font-bold text-[var(--ink)] sm:text-5xl">
          Voices from the Rising MVPs community
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-[var(--ink-soft)]">
          Strapi can store optional headshots, roles, and approval flags before quotes go
          live.
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {testimonials.map((t) => (
            <figure
              key={t.id}
              className="flex h-full flex-col rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-sm"
            >
              <blockquote className="flex-1 text-xl leading-relaxed text-[var(--ink)]">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4 border-t border-[var(--border)] pt-6">
                {t.imageUrl ? (
                  <Image
                    src={t.imageUrl}
                    alt={t.imageAlt || ""}
                    width={56}
                    height={56}
                    className="rounded-full object-cover"
                  />
                ) : (
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--sun)] text-lg font-bold text-[var(--ink)]">
                    {t.name.charAt(0)}
                  </div>
                )}
                <div>
                  <p className="font-heading text-lg font-bold text-[var(--ink)]">
                    {t.name}
                  </p>
                  <p className="text-sm text-[var(--ink-muted)]">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-[var(--border)] bg-[var(--cream)] p-8 text-center">
          <p className="text-lg font-medium text-[var(--ink)]">
            Want to share your story?
          </p>
          <p className="mt-2 text-[var(--ink-soft)]">
            We review new testimonials quarterly to keep the page fresh.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <ButtonLink href="/contact">Contact us</ButtonLink>
            <ButtonLink href="/get-involved" variant="secondary">
              Volunteer
            </ButtonLink>
          </div>
        </div>
      </Container>
    </main>
  );
}
