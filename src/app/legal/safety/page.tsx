import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Safety Standards — HelpingHandsAu & LetsGO",
};

export default function SafetyStandards() {
  return (
    <LegalLayout title="Safety Standards" badge="Safety" lastUpdated="1 January 2025">
      <div className="space-y-8 text-sm text-[#4A4F4A] leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-[#111111] mb-3">Our Safety Commitment</h2>
          <p>
            Safety is the foundational principle of everything we build. Our multi-layer safety
            architecture protects every user — from the moment they create an account through to
            every job, trip, and transaction.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-[#111111] mb-3">Identity Verification</h2>
          <p>
            All service providers and drivers undergo mandatory identity verification including
            government ID verification, facial recognition matching, and background checks before
            being approved to operate on our platforms.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-[#111111] mb-3">Realtime Safety Monitoring</h2>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>AI-powered trip monitoring detects deviations from expected routes</li>
            <li>In-app emergency button provides one-tap access to emergency services</li>
            <li>Automated post-trip safety check-ins for both riders and drivers</li>
            <li>24/7 safety team available to respond to escalated incidents</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-[#111111] mb-3">Incident Response</h2>
          <p>
            All safety incidents are reviewed by our Trust & Safety team within 24 hours.
            Serious incidents are escalated immediately to law enforcement as required.
            We cooperate fully with all regulatory and law enforcement investigations.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-[#111111] mb-3">Report a Safety Concern</h2>
          <p>
            Email:{" "}
            <a href="mailto:admin@helpinghandsau.com" className="text-[#4A7C6B] hover:underline">
              admin@helpinghandsau.com
            </a>
          </p>
        </section>
      </div>
    </LegalLayout>
  );
}
