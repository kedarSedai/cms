/**
 * Mock Strapi collection: `api::press-mention.press-mention` or articles with type=press
 */
export const pressItems = [
  {
    id: "press-1",
    slug: "city-times-feature-rian",
    title: "City Times: “A teenager building benches—and bridges”",
    outlet: "City Times",
    publishedAt: "2026-02-20",
    excerpt:
      "A profile on how Rising MVPs pairs neighborhood projects with youth mentorship.",
    coverUrl:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&q=80",
    coverAlt: "Newspapers stacked on a desk",
    externalUrl: "https://example.com/press/city-times",
    body: `
The full article will link out to the publisher when available. For the MVP front end, this page hosts a summary, pull quote, and outbound link.

> “Service is not a side project—it is how we practice leadership.” — Rian Patel

### Coverage requests

Media can reach **hello@risingmvps.org** with the subject line “Press inquiry.”`,
  },
  {
    id: "press-2",
    slug: "local-radio-spotlight",
    title: "Local Radio: Weekend spotlight on youth programs",
    outlet: "River FM 92.4",
    publishedAt: "2026-01-05",
    excerpt:
      "A 12-minute segment on music access, volunteer shifts, and upcoming clinics.",
    coverUrl:
      "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=1200&q=80",
    coverAlt: "Microphone in a radio studio",
    externalUrl: null,
    body: `
Audio embeds can be added when Strapi stores a media field. This placeholder demonstrates structured press entries with date, outlet, and summary.`,
  },
];

export function getPressBySlug(slug) {
  return pressItems.find((p) => p.slug === slug) ?? null;
}
