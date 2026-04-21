import Link from "next/link";
import { events, sortEventsByDate } from "@/data/events";
import { Container } from "@/components/Container";
import { formatDateTimeRange, isPastEvent } from "@/lib/dates";

export const metadata = {
  title: "Events",
  description:
    "Upcoming clinics, service days, and performances from Rising MVPs—RSVP online.",
};

export default function EventsPage() {
  const sorted = sortEventsByDate(events);
  const upcoming = sorted.filter((e) => !isPastEvent(e.startDate));
  const past = sorted.filter((e) => isPastEvent(e.startDate));

  return (
    <main id="main" className="py-14 sm:py-20">
      <Container>
        <p className="text-sm font-semibold uppercase tracking-wide text-[var(--coral)]">
          Events
        </p>
        <h1 className="mt-2 font-heading text-4xl font-bold text-[var(--ink)] sm:text-5xl">
          Calendar, details, and RSVP-ready pages
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-[var(--ink-soft)]">
          Events sort by date. Past entries remain public so donors and families can
          see momentum. Each detail page includes a mock RSVP form for the front-end
          MVP.
        </p>

        <section className="mt-14" aria-labelledby="upcoming-heading">
          <h2
            id="upcoming-heading"
            className="font-heading text-2xl font-bold text-[var(--ink)]"
          >
            Upcoming
          </h2>
          <ul className="mt-6 space-y-4">
            {upcoming.length ? (
              upcoming.map((e) => (
                <li key={e.id}>
                  <Link
                    href={`/events/${e.slug}`}
                    className="block rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--coral)]"
                  >
                    <p className="text-xs font-semibold uppercase text-[var(--teal)]">
                      {formatDateTimeRange(e.startDate, e.endDate)}
                    </p>
                    <p className="mt-2 font-heading text-xl font-bold text-[var(--ink)]">
                      {e.title}
                    </p>
                    <p className="mt-2 text-sm text-[var(--ink-soft)]">{e.summary}</p>
                    <p className="mt-3 text-sm font-medium text-[var(--coral)]">
                      View details →
                    </p>
                  </Link>
                </li>
              ))
            ) : (
              <li className="text-[var(--ink-soft)]">No upcoming events yet.</li>
            )}
          </ul>
        </section>

        <section className="mt-16" aria-labelledby="past-heading">
          <h2
            id="past-heading"
            className="font-heading text-2xl font-bold text-[var(--ink)]"
          >
            Past highlights
          </h2>
          <ul className="mt-6 space-y-3">
            {past.map((e) => (
              <li key={e.id}>
                <Link
                  className="flex flex-col rounded-xl border border-[var(--border)] bg-[var(--cream)] px-4 py-3 text-sm text-[var(--ink)] hover:border-[var(--sun)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--coral)] sm:flex-row sm:items-center sm:justify-between"
                  href={`/events/${e.slug}`}
                >
                  <span className="font-semibold">{e.title}</span>
                  <span className="text-[var(--ink-muted)]">
                    {formatDateTimeRange(e.startDate, e.endDate)}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </Container>
    </main>
  );
}
