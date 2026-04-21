/**
 * Minimal markdown-like renderer for mock CMS bodies (no extra deps).
 * Replace with Strapi rich text / MDX when wired up.
 */
function parseInline(text) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-[var(--ink)]">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

function ListBlock({ raw }) {
  const items = raw
    .split("\n")
    .filter((l) => l.trim().startsWith("- "))
    .map((l) => l.replace(/^-\s+/, "").trim());
  return (
    <ul className="my-4 list-disc space-y-2 pl-6 text-[var(--ink-soft)]">
      {items.map((item) => (
        <li key={item}>{parseInline(item)}</li>
      ))}
    </ul>
  );
}

export function RichDoc({ markdown }) {
  const blocks = markdown.trim().split(/\n\n+/);
  return (
    <div className="prose-rising space-y-4 text-[var(--ink-soft)]">
      {blocks.map((block, idx) => {
        const b = block.trim();
        if (b.startsWith("## ")) {
          return (
            <h2
              key={idx}
              className="font-heading text-2xl font-bold text-[var(--ink)]"
            >
              {parseInline(b.slice(3))}
            </h2>
          );
        }
        if (b.startsWith("### ")) {
          return (
            <h3
              key={idx}
              className="font-heading text-xl font-semibold text-[var(--ink)]"
            >
              {parseInline(b.slice(4))}
            </h3>
          );
        }
        if (b.startsWith("> ")) {
          const inner = b
            .split("\n")
            .map((l) => l.replace(/^>\s?/, ""))
            .join(" ");
          return (
            <blockquote
              key={idx}
              className="border-l-4 border-[var(--accent)] bg-[var(--surface-2)] py-3 pl-4 pr-2 text-lg italic text-[var(--ink)]"
            >
              {parseInline(inner)}
            </blockquote>
          );
        }
        if (b.split("\n").some((l) => l.trim().startsWith("- "))) {
          return <ListBlock key={idx} raw={b} />;
        }
        return (
          <p key={idx} className="leading-relaxed">
            {parseInline(b)}
          </p>
        );
      })}
    </div>
  );
}
