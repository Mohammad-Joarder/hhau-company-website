import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Community Guidelines — HelpingHandsAu & LetsGO",
};

export default function CommunityGuidelines() {
  return (
    <LegalLayout title="Community Guidelines" badge="Community" lastUpdated="1 January 2025">
      <div className="space-y-8 text-sm text-[#4A4F4A] leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-[#111111] mb-3">Our Community Standards</h2>
          <p>
            HelpingHandsAu and LetsGO are built on trust. Every interaction on our platforms —
            between customers and providers, riders and drivers — should be respectful, safe, and fair.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-[#111111] mb-3">Respect and Inclusion</h2>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Treat all users with dignity and respect regardless of background, identity, or belief</li>
            <li>Zero tolerance for discrimination, harassment, or threatening behaviour</li>
            <li>Maintain professional conduct in all platform communications</li>
            <li>Respect the privacy of other users</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-[#111111] mb-3">Honesty and Integrity</h2>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Provide accurate information about services, qualifications, and identity</li>
            <li>Leave genuine, honest reviews</li>
            <li>Report suspected fraud, abuse, or safety concerns to our team</li>
            <li>Do not engage in off-platform transactions to avoid fees</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-[#111111] mb-3">Safety First</h2>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Prioritise safety in every interaction</li>
            <li>Use the in-app emergency features if you feel unsafe</li>
            <li>Do not use platforms while impaired</li>
            <li>Follow all applicable laws and regulations</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-[#111111] mb-3">Enforcement</h2>
          <p>
            Violations of these guidelines may result in warnings, temporary suspension, or permanent
            removal from our platforms. AI-assisted monitoring may flag potential violations for human
            review. You have the right to appeal any moderation decision.
          </p>
        </section>
      </div>
    </LegalLayout>
  );
}
