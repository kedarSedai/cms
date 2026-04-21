import { FAQAccordion } from "@/components/FAQAccordion";

export const metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about donations, volunteering, sponsorships, and accessibility at Rising MVPs.",
};

export default function FAQPage() {
  return (
    <main id="main">
      <FAQAccordion />
    </main>
  );
}
