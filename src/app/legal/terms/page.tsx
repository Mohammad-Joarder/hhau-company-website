import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Terms of Service — HelpingHandsAu & LetsGO",
  description: "Terms and conditions governing your use of the HelpingHandsAu and LetsGO platforms.",
};

export default function TermsOfService() {
  return (
    <LegalLayout title="Terms of Service" badge="Legal" lastUpdated="1 January 2025">
      <div className="space-y-8 text-sm text-[#4A4F4A] leading-relaxed">

        <section>
          <h2 className="text-xl font-semibold text-[#111111] mb-3">1. Acceptance of Terms</h2>
          <p>
            By accessing or using HelpingHandsAu or LetsGO platforms (including websites and mobile
            applications), you agree to be bound by these Terms of Service and all applicable
            Australian laws and regulations. If you do not agree, please do not use our platforms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#111111] mb-3">2. Platform Description</h2>
          <p>
            <strong>HelpingHandsAu</strong> is a marketplace platform that connects customers seeking
            local services with verified service providers. We facilitate transactions through an escrow
            payment system but are not a party to the service agreements between customers and providers.
          </p>
          <p className="mt-3">
            <strong>LetsGO</strong> is a rideshare and mobility platform that connects riders with drivers.
            We provide technology infrastructure and payment processing but drivers are independent
            operators, not employees of LetsGO Technologies Pty Ltd.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#111111] mb-3">3. User Eligibility</h2>
          <p>You must be at least 18 years of age to use our platforms. By creating an account, you represent that:</p>
          <ul className="list-disc pl-5 space-y-1.5 mt-3">
            <li>You are 18 years or older</li>
            <li>You have the legal capacity to enter into binding contracts</li>
            <li>The information you provide is accurate and complete</li>
            <li>You will maintain the security of your account credentials</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#111111] mb-3">4. Payments and Escrow</h2>
          <p>
            All payments are processed through Stripe, a PCI-DSS Level 1 certified payment processor.
            For HelpingHandsAu, funds are held in escrow until service completion is confirmed.
            For LetsGO, driver earnings are paid out via Stripe Connect according to the driver payout schedule.
          </p>
          <p className="mt-3">
            Platform service fees are disclosed at the point of transaction. We comply with the
            Australian Consumer Law regarding pricing transparency and refund rights.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#111111] mb-3">5. Prohibited Conduct</h2>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Providing false information during registration or verification</li>
            <li>Using the platform for illegal purposes</li>
            <li>Harassing, threatening, or discriminating against other users</li>
            <li>Circumventing platform payment systems for off-platform transactions</li>
            <li>Creating multiple accounts to evade bans or restrictions</li>
            <li>Attempting to reverse-engineer or compromise platform security</li>
            <li>Engaging in fraudulent activity, including fake reviews</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#111111] mb-3">6. AI-Assisted Monitoring</h2>
          <p>
            You acknowledge that our platforms use AI and automated systems to monitor activity for
            safety, fraud prevention, and compliance. Automated decisions may affect your account
            access. You have the right to request human review of any automated decision by contacting{" "}
            <a href="mailto:admin@helpinghandsau.com" className="text-[#4A7C6B] hover:underline">
              admin@helpinghandsau.com
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#111111] mb-3">7. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by Australian law, HelpingHandsAu Pty Ltd and LetsGO
            Technologies Pty Ltd shall not be liable for indirect, incidental, or consequential damages
            arising from your use of our platforms. Our liability for direct damages shall not exceed
            the amount paid by you in the 12 months preceding the claim.
          </p>
          <p className="mt-3">
            Nothing in these terms excludes rights under the Australian Consumer Law that cannot
            be lawfully excluded, including consumer guarantees.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#111111] mb-3">8. Governing Law</h2>
          <p>
            These Terms of Service are governed by the laws of Queensland, Australia. Any disputes
            shall be subject to the exclusive jurisdiction of the courts of Queensland.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#111111] mb-3">9. Contact</h2>
          <p>
            Legal Team, HelpingHandsAu Pty Ltd<br />
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
