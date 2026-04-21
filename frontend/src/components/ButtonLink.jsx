import Link from "next/link";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

const variants = {
  primary:
    "bg-[var(--accent)] text-[var(--accent-fg)] hover:bg-[var(--accent-hover)] focus-visible:outline-[var(--accent)]",
  secondary:
    "border-2 border-[var(--accent)] bg-[var(--surface)] text-[var(--accent)] hover:bg-[var(--accent)]/10 focus-visible:outline-[var(--accent)]",
  ghost:
    "text-[var(--ink)] underline-offset-4 hover:underline focus-visible:outline-[var(--accent)]",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external,
  className = "",
  ...rest
}) {
  const cls = `${base} ${variants[variant] ?? variants.primary} ${className}`;
  if (external || href?.startsWith("http")) {
    return (
      <a
        href={href}
        className={cls}
        target="_blank"
        rel="noopener noreferrer"
        {...rest}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} {...rest}>
      {children}
    </Link>
  );
}
