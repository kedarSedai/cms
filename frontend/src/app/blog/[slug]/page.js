import Image from "next/image";
import { notFound } from "next/navigation";
import { blogPosts, getBlogBySlug } from "@/data/blogPosts";
import { Container } from "@/components/Container";
import { ButtonLink } from "@/components/ButtonLink";
import { RichDoc } from "@/lib/richDoc";
import { formatDate } from "@/lib/dates";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const post = getBlogBySlug(params.slug);
  if (!post) return { title: "Blog post" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
    },
  };
}

export default function BlogPostPage({ params }) {
  const post = getBlogBySlug(params.slug);
  if (!post) notFound();

  return (
    <main id="main" className="py-14 sm:py-20">
      <article>
        <Container>
          <p className="text-xs font-semibold uppercase tracking-wide text-[var(--teal)]">
            Blog · {formatDate(post.publishedAt)}
          </p>
          <h1 className="mt-2 max-w-4xl font-heading text-4xl font-bold text-[var(--ink)] sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-[var(--ink-soft)]">{post.excerpt}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag.slug}
                className="rounded-full bg-[var(--cream)] px-3 py-1 text-xs font-semibold text-[var(--ink)]"
              >
                #{tag.slug}
              </span>
            ))}
          </div>

          <div className="relative mt-10 aspect-[21/9] overflow-hidden rounded-3xl border border-[var(--border)] shadow-lg">
            <Image
              src={post.coverUrl}
              alt={post.coverAlt}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>

          <div className="mx-auto mt-12 max-w-3xl">
            <RichDoc markdown={post.body} />
            <div className="mt-12 flex flex-wrap gap-3">
              <ButtonLink href="/blog" variant="secondary">
                ← All posts
              </ButtonLink>
              <ButtonLink href="/get-involved">Support the mission</ButtonLink>
            </div>
          </div>
        </Container>
      </article>
    </main>
  );
}
