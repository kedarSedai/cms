/**
 * Mock Strapi collection: `api::event.event`
 * Future: `/api/events?populate=*&sort=startDate:asc`
 */
export const events = [
  {
    id: "evt-1",
    slug: "summer-music-clinic-2026",
    title: "Summer Music Clinic 2026",
    summary: "Week-long clinic with sectional coaching, ensemble play, and a community concert.",
    location: "Riverside Community Center",
    startDate: "2026-07-14T09:00:00.000Z",
    endDate: "2026-07-18T16:00:00.000Z",
    coverUrl:
      "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=1200&q=80",
    coverAlt: "Sheet music and violin on a wooden table",
    rsvpUrl: null,
    past: false,
    body: `
## Who should attend

Rising 6th–10th graders who want structured practice time and performance coaching.

### Daily flow

- Morning warm-ups and ear training
- Afternoon small ensembles
- Friday showcase for families

**RSVP** helps us plan sheet music and snacks. This demo site simulates RSVP confirmation on submit.`,
  },
  {
    id: "evt-2",
    slug: "neighborhood-cleanup-may",
    title: "Neighborhood cleanup & supply drive",
    summary: "All ages welcome. Gloves and bags provided; bring a friend.",
    location: "Eastside Park · Lot B",
    startDate: "2026-05-03T08:30:00.000Z",
    endDate: "2026-05-03T12:30:00.000Z",
    coverUrl:
      "https://images.unsplash.com/photo-1593113598338-c2881a893f3e?w=1200&q=80",
    coverAlt: "Volunteers picking up litter in a green park",
    rsvpUrl: null,
    past: false,
    body: `
## What to wear

Closed-toe shoes, sunscreen, and a water bottle. We will have extra water on site.

### Impact goals

- Beautify two trail loops
- Collect non-perishable donations for the pantry partner

Thank you for helping us keep service **accessible** and **organized**.`,
  },
  {
    id: "evt-3",
    slug: "holiday-benefit-concert",
    title: "Holiday benefit concert (recap)",
    summary: "Thank you to everyone who attended—proceeds funded winter kits for families.",
    location: "City Auditorium",
    startDate: "2025-12-15T18:00:00.000Z",
    endDate: "2025-12-15T21:00:00.000Z",
    coverUrl:
      "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=1200&q=80",
    coverAlt: "Concert crowd with warm stage lighting",
    rsvpUrl: null,
    past: true,
    body: `
## Highlights

- 18 student performers
- 240 attendees
- $18,500 raised for emergency assistance

Past events remain on the calendar so donors and families can see our track record.`,
  },
];

export function getEventBySlug(slug) {
  return events.find((e) => e.slug === slug) ?? null;
}

export function sortEventsByDate(list) {
  return [...list].sort(
    (a, b) => new Date(a.startDate) - new Date(b.startDate),
  );
}
