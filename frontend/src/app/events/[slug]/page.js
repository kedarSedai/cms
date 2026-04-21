import Image from "next/image";
import { notFound } from "next/navigation";
import { events, getEventBySlug } from "@/data/events";
import { Container } from "@/components/Container";
import { ButtonLink } from "@/components/ButtonLink";
import { EventRSVP } from "@/components/EventRSVP";
import { RichDoc } from "@/lib/richDoc";
import { formatDateTimeRange, isPastEvent } from "@/lib/dates";

export function generateStaticParams() {
  return events.map((e) => ({ slug: e.slug }));
}

export function generateMetadata({ params }) {
  const event = getEventBySlug(params.slug);
  if (!event) return { title: "Event" };
  return {
    title: event.title,
    description: event.summary,
    openGraph: {
      title: event.title,
      description: event.summary,
      type: "article",
    },
  };
}

export default function EventDetailPage({ params }) {
  const event = getEventBySlug(params.slug);
  if (!event) notFound();
  const past = isPastEvent(event.startDate);

  return (
    <main id="main" className="py-14 sm:py-20">
      <article>
        <Container>
          <p className="text-xs font-semibold uppercase tracking-wide text-[var(--teal)]">
            {past ? "Past event" : "Upcoming event"}
          </p>
          <h1 className="mt-2 font-heading text-4xl font-bold text-[var(--ink)] sm:text-5xl">
            {event.title}
          </h1>
          <p className="mt-4 text-lg text-[var(--ink-soft)]">{event.summary}</p>
          <p className="mt-2 text-sm font-medium text-[var(--ink)]">
            {formatDateTimeRange(event.startDate, event.endDate)}
          </p>
          <p className="mt-1 text-sm text-[var(--ink-muted)]">{event.location}</p>

          <div className="relative mt-10 aspect-[21/9] overflow-hidden rounded-3xl border border-[var(--border)] shadow-lg">
            <Image
              src={event.coverUrl}
              alt={event.coverAlt}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-[2fr,1fr]">
            <div>
              <RichDoc markdown={event.body} />
              <div className="mt-10 flex flex-wrap gap-3">
                <ButtonLink href="/events" variant="secondary">
                  ← All events
                </ButtonLink>
                <ButtonLink href="/get-involved">Volunteer</ButtonLink>
              </div>
            </div>
            <aside className="space-y-6">
              {!past ? (
                <EventRSVP eventTitle={event.title} />
              ) : (
                <div className="rounded-2xl border border-dashed border-[var(--border)] bg-[var(--surface)]/80 p-6 text-sm text-[var(--ink-soft)]">
                  RSVPs are closed for this past event. Explore upcoming dates on the
                  main calendar.
                </div>
              )}
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--cream)] p-6 text-sm text-[var(--ink-soft)]">
                <p className="font-semibold text-[var(--ink)]">Need accommodations?</p>
                <p className="mt-2">
                  Email the team with the event name in the subject line so we can
                  coordinate support.
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </article>
    </main>
  );
}
