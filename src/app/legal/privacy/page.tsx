import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy — HelpingHandsAu & LetsGO",
  description: "How HelpingHandsAu and LetsGO collect, use and protect your personal information under the Privacy Act 1988.",
};

export default function PrivacyPolicy() {
  return (
    <LegalLayout title="Privacy Policy" badge="Legal" lastUpdated="1 January 2025">
      <div className="space-y-8 text-sm text-[#4A4F4A] leading-relaxed">

        <section>
          <h2 className="text-xl font-semibold text-[#111111] mb-3">1. Introduction</h2>
          <p>
            HelpingHandsAu Pty Ltd and LetsGO Technologies Pty Ltd ("we", "our", "us") are committed to
            protecting your personal information and your right to privacy. This Privacy Policy describes
            how we collect, use, disclose, and safeguard your information when you use our platforms,
            websites, and mobile applications.
          </p>
          <p className="mt-3">
            This policy is governed by the <strong>Privacy Act 1988 (Cth)</strong> and the
            <strong> Australian Privacy Principles (APPs)</strong> contained in Schedule 1 of the Act.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#111111] mb-3">2. Information We Collect</h2>
          <h3 className="text-base font-semibold text-[#2A2D2A] mb-2">2.1 Information You Provide</h3>
          <ul className="list-disc pl-5 space-y-1.5 mb-4">
            <li>Name, email address, phone number, and residential address</li>
            <li>Government-issued identity documents for verification purposes</li>
            <li>Payment information (processed securely via Stripe; we do not store card details)</li>
            <li>Profile photographs and biographical information</li>
            <li>Vehicle information (for LetsGO drivers)</li>
            <li>Professional qualifications and licences (for HelpingHandsAu providers)</li>
          </ul>
          <h3 className="text-base font-semibold text-[#2A2D2A] mb-2">2.2 Information Collected Automatically</h3>
          <ul className="list-disc pl-5 space-y-1.5 mb-4">
            <li>Device information (device type, operating system, unique identifiers)</li>
            <li>Usage data (pages visited, features used, time spent)</li>
            <li>Location data (GPS coordinates during active trips or sessions — with your consent)</li>
            <li>IP address and network information</li>
            <li>Cookies and similar tracking technologies (see our Cookie Policy)</li>
          </ul>
          <h3 className="text-base font-semibold text-[#2A2D2A] mb-2">2.3 AI-Assisted Monitoring Disclosure</h3>
          <p>
            We use artificial intelligence and machine learning systems to monitor platform activity
            for the purpose of fraud detection, safety monitoring, and service quality. These systems
            analyse patterns in transactions, messaging, and behaviour to identify potential risks.
            You have the right to request human review of any automated decision that significantly
            affects you.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#111111] mb-3">3. How We Use Your Information</h2>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>To provide, operate, and improve our platforms and services</li>
            <li>To verify your identity and eligibility to use our platforms</li>
            <li>To process payments and prevent fraudulent transactions</li>
            <li>To facilitate realtime communication between users</li>
            <li>To provide customer support and resolve disputes</li>
            <li>To send service-related notifications and updates</li>
            <li>To comply with legal obligations and regulatory requirements</li>
            <li>To conduct safety monitoring and incident investigation</li>
            <li>To improve AI and machine learning models (using anonymised data only)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#111111] mb-3">4. Location Data</h2>
          <p>
            <strong>LetsGO:</strong> We collect precise GPS location data during active trips to enable
            navigation, safety monitoring, and accurate billing. Location collection begins when you
            start a trip and ends when the trip concludes. You will receive clear notification when
            location collection is active.
          </p>
          <p className="mt-3">
            <strong>HelpingHandsAu:</strong> We may collect approximate location data to match customers
            with nearby providers and to verify job completion. Precise tracking is not used for
            service provision outside of active trip contexts.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#111111] mb-3">5. Disclosure of Your Information</h2>
          <p>We may disclose your personal information to:</p>
          <ul className="list-disc pl-5 space-y-1.5 mt-3">
            <li>Other platform users as necessary to facilitate services (e.g., sharing name and rating with matched providers/drivers)</li>
            <li>Stripe Inc. for payment processing (subject to Stripe's Privacy Policy)</li>
            <li>Identity verification service providers</li>
            <li>Law enforcement agencies where required by law or court order</li>
            <li>Regulatory authorities in connection with our legal obligations</li>
            <li>Cloud infrastructure providers (data remains in Australia where possible)</li>
          </ul>
          <p className="mt-3">
            We do not sell your personal information to third parties.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#111111] mb-3">6. Data Security</h2>
          <p>
            We implement industry-standard security measures including AES-256 encryption at rest,
            TLS 1.3 encryption in transit, multi-factor authentication for administrative access,
            regular security audits, and a coordinated vulnerability disclosure program. Despite
            these measures, no method of transmission over the internet is 100% secure.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#111111] mb-3">7. Your Rights Under Australian Privacy Law</h2>
          <p>Under the Privacy Act 1988, you have the right to:</p>
          <ul className="list-disc pl-5 space-y-1.5 mt-3">
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate or out-of-date information</li>
            <li>Request deletion of your data (subject to legal retention requirements)</li>
            <li>Opt out of direct marketing communications</li>
            <li>Complain about a breach of your privacy rights</li>
            <li>Request human review of automated decisions</li>
          </ul>
          <p className="mt-3">
            To exercise these rights, contact our Privacy Officer at{" "}
            <a href="mailto:admin@helpinghandsau.com" className="text-[#4A7C6B] hover:underline">
              admin@helpinghandsau.com
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#111111] mb-3">8. Data Retention</h2>
          <p>
            We retain personal information for as long as necessary to provide services and comply
            with legal obligations. Transaction records are retained for 7 years as required by
            Australian tax law. Identity verification records are retained for 3 years following
            account closure. You may request deletion of other data by contacting us.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#111111] mb-3">9. Complaints</h2>
          <p>
            If you believe we have breached the Australian Privacy Principles, you may lodge a
            complaint with us first at{" "}
            <a href="mailto:admin@helpinghandsau.com" className="text-[#4A7C6B] hover:underline">
              admin@helpinghandsau.com
            </a>
            . If unsatisfied with our response, you may complain to the{" "}
            <strong>Office of the Australian Information Commissioner (OAIC)</strong> at{" "}
            <a href="https://www.oaic.gov.au" className="text-[#4A7C6B] hover:underline" target="_blank" rel="noopener noreferrer">
              www.oaic.gov.au
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#111111] mb-3">10. Contact</h2>
          <p>
            Privacy Officer, HelpingHandsAu Pty Ltd<br />
            Email:{" "}
            <a href="mailto:admin@helpinghandsau.com" className="text-[#4A7C6B] hover:underline">
              admin@helpinghandsau.com
            </a>
            <br />
            Gold Coast, Queensland, Australia
          </p>
        </section>
      </div>
    </LegalLayout>
  );
}
