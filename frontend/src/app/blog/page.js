import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/blogPosts";
import { Container } from "@/components/Container";
import { formatDate } from "@/lib/dates";

export const metadata = {
  title: "Blog",
  description:
    "Stories from Rising MVPs on youth development, music, sports, and community service.",
};

export default function BlogPage() {
  return (
    <main id="main" className="py-14 sm:py-20">
      <Container>
        <p className="text-sm font-semibold uppercase tracking-wide text-[var(--coral)]">
          Blog
        </p>
        <h1 className="mt-2 font-heading text-4xl font-bold text-[var(--ink)] sm:text-5xl">
          Field notes for families, coaches, and partners
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-[var(--ink-soft)]">
          Tags, hero images, and long-form bodies below mirror Strapi article fields.
        </p>

        <div className="mt-12 grid gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="grid overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] shadow-sm md:grid-cols-3"
            >
              <Link
                href={`/blog/${post.slug}`}
                className="relative aspect-[4/3] md:aspect-auto md:min-h-[220px]"
              >
                <Image
                  src={post.coverUrl}
                  alt={post.coverAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </Link>
              <div className="flex flex-col justify-center p-8 md:col-span-2">
                <p className="text-xs font-semibold uppercase text-[var(--teal)]">
                  {formatDate(post.publishedAt)}
                </p>
                <h2 className="mt-2 font-heading text-2xl font-bold text-[var(--ink)]">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-[var(--coral)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--coral)]"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-3 text-[var(--ink-soft)]">{post.excerpt}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag.slug}
                      className="rounded-full bg-[var(--cream)] px-3 py-1 text-xs font-semibold text-[var(--ink)]"
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-6 inline-flex text-sm font-semibold text-[var(--coral)] hover:underline"
                >
                  Continue reading →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </main>
  );
}
