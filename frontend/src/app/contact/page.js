import { site } from "@/data/site";
import { Container } from "@/components/Container";
import { ContactForm } from "@/components/ContactForm";
import { ButtonLink } from "@/components/ButtonLink";

export const metadata = {
  title: "Contact",
  description: `Contact ${site.name} for programs, press, partnerships, and family support.`,
};

export default function ContactPage() {
  return (
    <main id="main" className="py-14 sm:py-20">
      <Container>
        <p className="text-sm font-semibold uppercase tracking-wide text-[var(--coral)]">
          Contact
        </p>
        <h1 className="mt-2 font-heading text-4xl font-bold text-[var(--ink)] sm:text-5xl">
          We read every message—usually within two business days
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-[var(--ink-soft)]">
          Prefer email? Reach us at{" "}
          <a className="font-semibold text-[var(--teal)]" href={`mailto:${site.email}`}>
            {site.email}
          </a>{" "}
          or call{" "}
          <a className="font-semibold text-[var(--teal)]" href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}>
            {site.phone}
          </a>
          .
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <ContactForm />
          <div className="space-y-6">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm">
              <h2 className="font-heading text-lg font-bold text-[var(--ink)]">
                Visit &amp; mail
              </h2>
              <p className="mt-2 text-sm text-[var(--ink-soft)]">{site.address}</p>
            </div>
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm">
              <h2 className="font-heading text-lg font-bold text-[var(--ink)]">
                Social
              </h2>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <a className="text-[var(--teal)] hover:underline" href={site.social.instagram}>
                    Instagram
                  </a>
                </li>
                <li>
                  <a className="text-[var(--teal)] hover:underline" href={site.social.facebook}>
                    Facebook
                  </a>
                </li>
                <li>
                  <a className="text-[var(--teal)] hover:underline" href={site.social.youtube}>
                    YouTube
                  </a>
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--cream)] p-6">
              <p className="text-sm font-semibold text-[var(--ink)]">Need to donate fast?</p>
              <p className="mt-2 text-sm text-[var(--ink-soft)]">
                Skip the inbox and head straight to the secure donation flow.
              </p>
              <ButtonLink href={site.donateUrl} external className="mt-4">
                Donate now
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
