/**
 * Mock Strapi collection: `api::article.article` (blog)
 * Future: fetch `/api/articles?filters[type][$eq]=blog&populate=*`
 */
export const blogPosts = [
  {
    id: "blog-1",
    slug: "how-music-builds-confidence",
    title: "How music builds confidence in young leaders",
    excerpt:
      "Small daily habits—practice, performance, peer feedback—add up to outsized growth.",
    coverUrl:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=1200&q=80",
    coverAlt: "Student playing guitar in a bright rehearsal room",
    publishedAt: "2026-03-12",
    tags: [{ slug: "music", name: "Music" }, { slug: "youth", name: "Youth" }],
    body: `
## Why rhythm matters

Structured music programs give young people a safe place to take risks, recover from mistakes, and celebrate progress.

### What families notice first

- Clear goals each week
- Coaches who model respect
- A community that shows up

When we pair **music** with mentorship, students practice the same skills they need in school and service: listening, timing, and teamwork.

> “My child finally found a team where effort matters more than perfection.” — Parent volunteer

We will expand this post when the CMS is connected; for now it demonstrates long-form layout, headings, and quotes.`,
  },
  {
    id: "blog-2",
    slug: "spring-service-day-recap",
    title: "Spring service day recap: 120 volunteers, one neighborhood",
    excerpt:
      "From cleanup crews to snack stations, here is how Rising MVPs mobilized in a single Saturday.",
    coverUrl:
      "https://images.unsplash.com/photo-1559027615-cd462890ecf1?w=1200&q=80",
    coverAlt: "Volunteers in matching shirts organizing supplies outdoors",
    publishedAt: "2026-02-02",
    tags: [{ slug: "service", name: "Service" }],
    body: `
## Before sunrise

Teams checked in, grabbed reflective vests, and reviewed safety routes. By 9 a.m., every block had a crew lead.

### Impact snapshot

- 4 city blocks cleared of debris
- 60 care kits assembled for families
- 3 local partners onboarded for summer programs

This content will be editable in Strapi alongside photo galleries and pull quotes.`,
  },
  {
    id: "blog-3",
    slug: "sportsmanship-as-life-skill",
    title: "Sportsmanship as a life skill—not a sideline lesson",
    excerpt:
      "Competition is healthy when respect stays center court. Here is the framework we teach.",
    coverUrl:
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=1200&q=80",
    coverAlt: "Youth basketball team huddle on an indoor court",
    publishedAt: "2026-01-18",
    tags: [{ slug: "sports", name: "Sports" }],
    body: `
## The Rising MVPs standard

We start every season with a simple agreement: **effort, empathy, encouragement**. Wins are celebrated; losses are debriefed without blame.

### Coaches corner

Ask players to name one teammate they appreciated this week. The habit compounds.

Future Strapi fields: related events, embedded video, and downloadable practice plans.`,
  },
];

export function getBlogBySlug(slug) {
  return blogPosts.find((p) => p.slug === slug) ?? null;
}
