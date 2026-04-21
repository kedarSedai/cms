import { Container } from "@/components/Container";
import { ButtonLink } from "@/components/ButtonLink";

export const metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <main id="main" className="flex-1 py-24">
      <Container className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-[var(--coral)]">
          404
        </p>
        <h1 className="mt-3 font-heading text-4xl font-bold text-[var(--ink)]">
          That page is off the court
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-[var(--ink-soft)]">
          The link may be outdated. Try the homepage or the events calendar to find
          what you need.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <ButtonLink href="/">Back home</ButtonLink>
          <ButtonLink href="/events" variant="secondary">
            View events
          </ButtonLink>
        </div>
      </Container>
    </main>
  );
}
