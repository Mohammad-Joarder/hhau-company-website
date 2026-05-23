import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Accessibility Statement — HelpingHandsAu & LetsGO",
};

export default function AccessibilityStatement() {
  return (
    <LegalLayout title="Accessibility Statement" badge="Accessibility" lastUpdated="1 January 2025">
      <div className="space-y-8 text-sm text-[#4A4F4A] leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-[#111111] mb-3">Our Commitment</h2>
          <p>
            HelpingHandsAu and LetsGO are committed to ensuring digital accessibility for people
            with disabilities. We continually improve the user experience and apply relevant
            accessibility standards to all our platforms.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-[#111111] mb-3">Conformance Status</h2>
          <p>
            We aim to conform to the <strong>Web Content Accessibility Guidelines (WCAG) 2.1 Level AA</strong>.
            These guidelines define how to make web content more accessible to people with disabilities.
          </p>
          <p className="mt-3">Current conformance measures include:</p>
          <ul className="list-disc pl-5 space-y-1.5 mt-3">
            <li>All images include descriptive alt text</li>
            <li>Colour contrast ratios meet or exceed 4.5:1 for normal text</li>
            <li>All interactive elements are keyboard navigable</li>
            <li>Focus states are visually distinct and consistent</li>
            <li>Screen reader support via ARIA labels and landmarks</li>
            <li>No content relies on colour alone to convey information</li>
            <li>Skip-to-main-content link on all pages</li>
            <li>Form inputs are labelled with visible, associated labels</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-[#111111] mb-3">Known Limitations</h2>
          <p>
            Some older PDF documents and third-party embedded content may not fully conform.
            We are actively working to remediate these. If you encounter a barrier, please contact us.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-[#111111] mb-3">Feedback and Contact</h2>
          <p>
            If you experience accessibility barriers, or need content provided in an alternative
            format, please contact:{" "}
            <a href="mailto:admin@helpinghandsau.com" className="text-[#4A7C6B] hover:underline">
              admin@helpinghandsau.com
            </a>
          </p>
          <p className="mt-3">
            We aim to respond to accessibility requests within 5 business days.
          </p>
        </section>
      </div>
    </LegalLayout>
  );
}
