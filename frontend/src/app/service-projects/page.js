import Image from "next/image";
import { serviceProjects } from "@/data/serviceProjects";
import { Container } from "@/components/Container";
import { ButtonLink } from "@/components/ButtonLink";

export const metadata = {
  title: "Service Projects",
  description:
    "Service initiatives led by Rising MVPs youth and volunteers—build days, drives, and storm-ready outreach.",
};

export default function ServiceProjectsPage() {
  return (
    <main id="main" className="py-14 sm:py-20">
      <Container>
        <p className="text-sm font-semibold uppercase tracking-wide text-[var(--coral)]">
          Service projects
        </p>
        <h1 className="mt-2 font-heading text-4xl font-bold text-[var(--ink)] sm:text-5xl">
          Service that students can see, touch, and steer
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-[var(--ink-soft)]">
          Each initiative pairs measurable outcomes with mentorship. Future Strapi
          entries can include galleries, partner logos, and volunteer roles.
        </p>

        <div className="mt-14 grid gap-10">
          {serviceProjects.map((p) => (
            <article
              key={p.id}
              className="grid gap-6 overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] shadow-sm lg:grid-cols-2"
            >
              <div className="relative min-h-[240px]">
                <Image
                  src={p.coverUrl}
                  alt={p.coverAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="flex flex-col justify-center p-8">
                <h2 className="font-heading text-3xl font-bold text-[var(--ink)]">
                  {p.title}
                </h2>
                <p className="mt-4 text-[var(--ink-soft)]">{p.summary}</p>
                <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-[var(--teal)]">
                  {p.impact}
                </p>
                <div className="mt-8">
                  <ButtonLink href="/get-involved" variant="secondary">
                    Join the next project
                  </ButtonLink>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </main>
  );
}
