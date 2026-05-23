import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Refund Policy — HelpingHandsAu & LetsGO",
};

export default function RefundPolicy() {
  return (
    <LegalLayout title="Refund Policy" badge="Consumer Rights" lastUpdated="1 January 2025">
      <div className="space-y-8 text-sm text-[#4A4F4A] leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-[#111111] mb-3">Our Refund Commitment</h2>
          <p>
            We are committed to fair outcomes for all parties. Our refund policy complies with the
            Australian Consumer Law and the consumer guarantee provisions of the Competition and
            Consumer Act 2010.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-[#111111] mb-3">HelpingHandsAu Refunds</h2>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Escrow funds are released to providers only after service completion is confirmed</li>
            <li>Customers may raise a dispute within 48 hours of service completion</li>
            <li>Our team will review evidence from both parties and make a determination within 5 business days</li>
            <li>Partial refunds may be issued where services were partially completed</li>
            <li>Full refunds are issued for cancellations made before service commencement</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-[#111111] mb-3">LetsGO Trip Refunds</h2>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Overcharge complaints are reviewed and resolved within 2 business days</li>
            <li>Trips cancelled before driver acceptance are fully refunded</li>
            <li>Safety-related refunds are processed immediately upon verified report</li>
            <li>Route deviation overcharges are automatically credited</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-[#111111] mb-3">How to Request a Refund</h2>
          <p>
            Contact our support team at{" "}
            <a href="mailto:support@helpinghands.com" className="text-[#4A7C6B] hover:underline">
              support@helpinghands.com
            </a>{" "}
            or through the in-app dispute resolution feature.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-[#111111] mb-3">Australian Consumer Law</h2>
          <p>
            Nothing in this policy limits or excludes your rights under the Australian Consumer Law.
            If a refund remedy applies under Australian Consumer Law, we will honour it regardless
            of this policy.
          </p>
        </section>
      </div>
    </LegalLayout>
  );
}
