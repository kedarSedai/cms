export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}) {
  const alignCls =
    align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl";
  return (
    <div className={`mb-10 ${alignCls}`}>
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-wide text-[var(--accent)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-[var(--ink)] sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-lg text-[var(--ink-soft)]">{description}</p>
      ) : null}
    </div>
  );
}
