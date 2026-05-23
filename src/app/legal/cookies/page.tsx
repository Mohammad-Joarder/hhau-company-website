import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Cookie Policy — HelpingHandsAu & LetsGO",
  description: "Information about cookies and tracking technologies used by HelpingHandsAu and LetsGO.",
};

export default function CookiePolicy() {
  return (
    <LegalLayout title="Cookie Policy" badge="Legal" lastUpdated="1 January 2025">
      <div className="space-y-8 text-sm text-[#4A4F4A] leading-relaxed">

        <section>
          <h2 className="text-xl font-semibold text-[#111111] mb-3">1. What Are Cookies</h2>
          <p>
            Cookies are small text files stored on your device when you visit our websites. We also
            use similar technologies including local storage, session storage, and device fingerprinting
            to support platform functionality and security.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#111111] mb-3">2. Types of Cookies We Use</h2>

          <h3 className="text-base font-semibold text-[#2A2D2A] mb-2">2.1 Essential Cookies</h3>
          <p className="mb-4">
            Required for the platform to function. Cannot be disabled. Includes authentication
            tokens, security session identifiers, and platform preference settings.
          </p>

          <h3 className="text-base font-semibold text-[#2A2D2A] mb-2">2.2 Analytics Cookies</h3>
          <p className="mb-4">
            Used to understand how users interact with our platforms. Data is anonymised and
            aggregated. You may opt out via the cookie banner.
          </p>

          <h3 className="text-base font-semibold text-[#2A2D2A] mb-2">2.3 Fraud Prevention Cookies</h3>
          <p className="mb-4">
            Used by our AI-assisted fraud prevention systems to identify anomalous behaviour.
            These cookies support platform safety and cannot be fully disabled for security reasons.
          </p>

          <h3 className="text-base font-semibold text-[#2A2D2A] mb-2">2.4 Payment Processing Cookies</h3>
          <p>
            Stripe sets cookies to support secure payment processing. These are governed by
            Stripe's cookie policy. We do not control Stripe's cookies.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#111111] mb-3">3. Managing Cookies</h2>
          <p>
            You can manage cookie preferences through our cookie consent banner, through your
            browser settings, or by contacting us. Note that disabling non-essential cookies
            may affect platform functionality.
          </p>
          <p className="mt-3">
            Most browsers allow you to view, manage, and delete cookies. Consult your browser's
            help documentation for instructions.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#111111] mb-3">4. Contact</h2>
          <p>
            Privacy Officer: {" "}
            <a href="mailto:admin@helpinghandsau.com" className="text-[#4A7C6B] hover:underline">
              admin@helpinghandsau.com
            </a>
          </p>
        </section>
      </div>
    </LegalLayout>
  );
}
