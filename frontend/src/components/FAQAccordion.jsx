import { faqItems } from "@/data/faq";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";

export function FAQAccordion() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="FAQ"
          title="Answers for families, volunteers, and partners"
          description="Expand a question to read more. Content is mock data today and will map to your Strapi FAQ collection."
          align="center"
        />
        <div className="mx-auto max-w-3xl divide-y divide-[var(--border)] rounded-2xl border border-[var(--border)] bg-[var(--surface)]">
          {faqItems.map((item) => (
            <details
              key={item.id}
              className="group px-4 py-2 open:bg-[var(--surface-2)] sm:px-6"
            >
              <summary className="cursor-pointer list-none py-3 font-semibold text-[var(--ink)] outline-none marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between gap-3">
                  {item.question}
                  <span
                    className="text-[var(--accent)] transition group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </span>
              </summary>
              <p className="pb-4 text-[var(--ink-soft)]">{item.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
