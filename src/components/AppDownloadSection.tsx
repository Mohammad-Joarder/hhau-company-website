"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

// Apple & Google store SVG wordmarks (self-contained, no external deps)
function AppleStoreBadge() {
  return (
    <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden="true">
      <rect width="120" height="40" rx="7" fill="#111111"/>
      <path d="M15.5 20c0-2.76 1.46-5.18 3.67-6.58-.09-.13-.19-.26-.29-.38C17.84 11.65 16.2 11 14.5 11c-1.8 0-3.5.96-3.5.96S9.5 11 7.5 11C4.47 11 2 13.69 2 17c0 3.87 2.76 8 5.5 8 1.15 0 2.34-.67 3.5-.67 1.16 0 2.24.67 3.5.67.69 0 1.36-.27 1.96-.68A7.97 7.97 0 0115.5 20z" fill="white"/>
      <path d="M14.5 9c.61-.74 1-1.69 1-2.76 0-.08 0-.16-.01-.24C14.42 6.22 13.4 6.8 12.75 7.67 12.12 8.5 11.75 9.5 11.76 10.5c0 .08 0 .15.01.22.95-.03 1.89-.61 2.73-1.72z" fill="white"/>
      <text x="26" y="16" fontFamily="-apple-system,BlinkMacSystemFont,sans-serif" fontSize="6" fill="#AAAAAA" letterSpacing="0.5">Download on the</text>
      <text x="26" y="28" fontFamily="-apple-system,BlinkMacSystemFont,sans-serif" fontSize="13" fontWeight="600" fill="white" letterSpacing="-0.3">App Store</text>
    </svg>
  );
}

function GooglePlayBadge() {
  return (
    <svg viewBox="0 0 135 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden="true">
      <rect width="135" height="40" rx="7" fill="#111111"/>
      <path d="M8 11.5l11.5 11.5L8 34.5V11.5z" fill="url(#play-grad-a)"/>
      <path d="M22.5 19.5L8 11.5l9 9L22.5 19.5z" fill="url(#play-grad-b)"/>
      <path d="M22.5 20.5L8 28.5l9-9L22.5 20.5z" fill="url(#play-grad-c)"/>
      <path d="M8 11.5l14.5 8.5L8 28.5V11.5z" fill="url(#play-grad-d)"/>
      <defs>
        <linearGradient id="play-grad-a" x1="8" y1="11.5" x2="8" y2="34.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00B0FF"/><stop offset="1" stopColor="#0091EA"/>
        </linearGradient>
        <linearGradient id="play-grad-b" x1="8" y1="11.5" x2="22.5" y2="19.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00BFA5"/><stop offset="1" stopColor="#00E676"/>
        </linearGradient>
        <linearGradient id="play-grad-c" x1="8" y1="28.5" x2="22.5" y2="20.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF6D00"/><stop offset="1" stopColor="#FFAB40"/>
        </linearGradient>
        <linearGradient id="play-grad-d" x1="8" y1="11.5" x2="22.5" y2="20" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF1744"/><stop offset="1" stopColor="#FF5252"/>
        </linearGradient>
      </defs>
      <text x="30" y="16" fontFamily="-apple-system,BlinkMacSystemFont,sans-serif" fontSize="6" fill="#AAAAAA" letterSpacing="0.5">GET IT ON</text>
      <text x="30" y="28" fontFamily="-apple-system,BlinkMacSystemFont,sans-serif" fontSize="13" fontWeight="600" fill="white" letterSpacing="-0.3">Google Play</text>
    </svg>
  );
}

const platforms = [
  {
    id: "helpinghands",
    name: "HelpingHandsAu",
    tagline: "Hire trusted professionals",
    description: "Book verified local service providers for any task — cleanly, safely, and with full payment protection.",
    logoSrc: "/icon-helpinghandsau.png",
    brandColor: "#1AABF0",
    lightBg: "rgba(26,171,240,0.05)",
    borderColor: "rgba(26,171,240,0.15)",
    qrApple: "/qr-apple.png",
    qrAndroid: "/qr-android.png",
    appStoreLabel: "Download for iOS",
    playStoreLabel: "Download for Android",
    features: ["Browse verified providers", "Secure escrow payments", "Realtime job tracking", "Dispute protection"],
  },
  {
    id: "letsgo",
    name: "LetsGO",
    tagline: "Ride Smart. Pay Less.",
    description: "Australia's intelligent rideshare platform — book a driver in seconds, track your trip live, and pay securely.",
    logoSrc: "/icon_letsgo.png",
    brandColor: "#E8511A",
    lightBg: "rgba(232,81,26,0.05)",
    borderColor: "rgba(232,81,26,0.15)",
    qrApple: "/qr-apple.png",
    qrAndroid: "/qr-android.png",
    appStoreLabel: "Download for iOS",
    playStoreLabel: "Download for Android",
    features: ["Instant ride booking", "Live driver tracking", "Transparent pricing", "In-trip safety tools"],
  },
];

function QRCard({
  label,
  sublabel,
  qrSrc,
  qrAlt,
  icon,
  brandColor,
  delay,
}: {
  label: string;
  sublabel: string;
  qrSrc: string;
  qrAlt: string;
  icon: React.ReactNode;
  brandColor: string;
  delay: number;
}) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex flex-col items-center"
    >
      {/* QR frame */}
      <motion.div
        animate={{ y: hovered ? -4 : 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
        className="relative bg-white rounded-[24px] p-4 shadow-[0_8px_40px_rgba(0,0,0,0.1),0_2px_8px_rgba(0,0,0,0.06)] border border-[rgba(0,0,0,0.06)]"
        style={{ width: 180, height: 180 }}
      >
        {/* Corner accents */}
        <div className="absolute top-2 left-2 w-5 h-5 border-t-2 border-l-2 rounded-tl-lg" style={{ borderColor: brandColor }} />
        <div className="absolute top-2 right-2 w-5 h-5 border-t-2 border-r-2 rounded-tr-lg" style={{ borderColor: brandColor }} />
        <div className="absolute bottom-2 left-2 w-5 h-5 border-b-2 border-l-2 rounded-bl-lg" style={{ borderColor: brandColor }} />
        <div className="absolute bottom-2 right-2 w-5 h-5 border-b-2 border-r-2 rounded-br-lg" style={{ borderColor: brandColor }} />

        <Image
          src={qrSrc}
          alt={qrAlt}
          fill
          sizes="180px"
          className="object-contain p-3.5"
        />
      </motion.div>

      {/* Store badge below QR */}
      <div className="mt-4 flex items-center gap-2">
        <div className="text-[#4A4F4A]">{icon}</div>
        <div>
          <div className="text-[11px] font-bold text-[#111111] leading-tight">{label}</div>
          <div className="text-[10px] text-[#6B7280]">{sublabel}</div>
        </div>
      </div>
    </motion.div>
  );
}

function PlatformDownloadBlock({
  platform,
  reverse,
  index,
}: {
  platform: typeof platforms[0];
  reverse: boolean;
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
      className="relative bg-white rounded-[32px] overflow-hidden border border-[rgba(0,0,0,0.05)] shadow-[var(--shadow-card)]"
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at ${reverse ? "right" : "left"} top, ${platform.lightBg} 0%, transparent 60%)` }}
      />

      <div className={`relative z-10 flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} gap-0`}>

        {/* Left/Right: info panel */}
        <div className="flex-1 p-8 md:p-10 lg:p-12 flex flex-col justify-center">
          {/* Logo + name */}
          <div className="flex items-center gap-4 mb-6">
            <div className="relative w-14 h-14 flex-shrink-0 rounded-2xl bg-white shadow-[0_2px_12px_rgba(0,0,0,0.1)] border border-[rgba(0,0,0,0.06)] p-1.5">
              <Image src={platform.logoSrc} alt={platform.name} fill sizes="56px" className="object-contain p-1" />
            </div>
            <div>
              <div
                className="text-[9px] font-black uppercase tracking-[0.2em] mb-1"
                style={{ color: platform.brandColor }}
              >
                Now Available
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-[#111111]">{platform.name}</h3>
            </div>
          </div>

          <p className="text-[clamp(22px,2.5vw,30px)] font-semibold text-[#111111] tracking-tight leading-snug mb-3">
            {platform.tagline}
          </p>
          <p className="text-sm text-[#6B7280] leading-relaxed mb-7 max-w-sm">
            {platform.description}
          </p>

          {/* Feature list */}
          <ul className="space-y-2.5 mb-8">
            {platform.features.map((f) => (
              <li key={f} className="flex items-center gap-2.5">
                <div
                  className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: `${platform.brandColor}15` }}
                >
                  <svg viewBox="0 0 10 10" className="w-2.5 h-2.5" fill="none">
                    <path d="M2 5l2 2 4-4" stroke={platform.brandColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-sm text-[#4A4F4A] font-medium">{f}</span>
              </li>
            ))}
          </ul>

          {/* Store badges (click targets) */}
          <div className="flex flex-wrap gap-3">
            <a
              href="#"
              className="h-11 w-[150px] block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 rounded-lg hover:opacity-90 transition-opacity"
              style={{ ["--tw-ring-color" as string]: platform.brandColor }}
              aria-label={`${platform.appStoreLabel} — ${platform.name}`}
            >
              <AppleStoreBadge />
            </a>
            <a
              href="#"
              className="h-11 w-[150px] block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 rounded-lg hover:opacity-90 transition-opacity"
              style={{ ["--tw-ring-color" as string]: platform.brandColor }}
              aria-label={`${platform.playStoreLabel} — ${platform.name}`}
            >
              <GooglePlayBadge />
            </a>
          </div>
        </div>

        {/* Right/Left: QR codes panel */}
        <div
          className="lg:w-[380px] flex-shrink-0 flex items-center justify-center gap-6 p-8 md:p-10 lg:p-12 border-t lg:border-t-0 border-[rgba(0,0,0,0.05)]"
          style={{ borderLeft: reverse ? undefined : "1px solid rgba(0,0,0,0.04)", borderRight: reverse ? "1px solid rgba(0,0,0,0.04)" : undefined }}
        >
          <QRCard
            label="App Store"
            sublabel="Scan to download iOS"
            qrSrc={platform.qrApple}
            qrAlt={`Scan QR code to download ${platform.name} on the App Store`}
            brandColor={platform.brandColor}
            delay={0.15 + index * 0.1}
            icon={
              <svg viewBox="0 0 20 20" className="w-5 h-5 fill-current" aria-hidden="true">
                <path d="M14.69 10.5c-.01-2.27 1.86-3.36 1.94-3.41-1.06-1.55-2.71-1.76-3.3-1.78-1.4-.14-2.74.82-3.45.82-.7 0-1.78-.8-2.93-.78-1.5.02-2.9.87-3.67 2.2-1.57 2.72-.4 6.74 1.13 8.95.75 1.08 1.64 2.3 2.81 2.26 1.13-.04 1.56-.73 2.93-.73 1.36 0 1.75.73 2.93.71 1.21-.02 1.98-1.1 2.72-2.19.87-1.25 1.23-2.47 1.24-2.53-.03-.01-2.37-.91-2.35-3.52zM12.4 4.07c.62-.75.99-1.79.88-2.83-.85.04-1.87.57-2.48 1.29-.54.63-.93 1.64-.81 2.6.94.08 1.8-.44 2.41-1.06z"/>
              </svg>
            }
          />
          <QRCard
            label="Google Play"
            sublabel="Scan to download Android"
            qrSrc={platform.qrAndroid}
            qrAlt={`Scan QR code to download ${platform.name} on Google Play`}
            brandColor={platform.brandColor}
            delay={0.25 + index * 0.1}
            icon={
              <svg viewBox="0 0 20 20" className="w-5 h-5" aria-hidden="true">
                <path d="M3.18 1.09L11.5 9.4 3.18 17.72A1 1 0 012 16.8V2.02a1 1 0 011.18-.93z" fill="#00D2FF"/>
                <path d="M14.67 7.1L12 8.63 4.08 1 14.67 7.1z" fill="#00F076"/>
                <path d="M14.67 12.67L4.08 18.77 12 11.14l2.67 1.53z" fill="#FF3D00"/>
                <path d="M16 10.89a1 1 0 010 1.78l-1.33.78L11.5 9.4l3.17-3.05L16 7.13a1 1 0 010 1.78l-.01-.02v2z" fill="#FFD600"/>
              </svg>
            }
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function AppDownloadSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="download" className="section-padding bg-[#F7F7F5]" aria-labelledby="download-heading">
      <div className="container-tight">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
          className="text-center mb-16"
        >
          {/* Dual logo centrepiece above heading */}
          <div className="flex items-center justify-center gap-5 mb-8">
            <div className="flex items-center gap-3 bg-white rounded-2xl px-5 py-3 shadow-[var(--shadow-card)] border border-[rgba(0,0,0,0.05)]">
              <div className="relative w-9 h-9">
                <Image src="/icon-helpinghandsau.png" alt="HelpingHandsAu" fill sizes="36px" className="object-contain" />
              </div>
              <span className="text-sm font-semibold text-[#111111] tracking-tight">
                HelpingHands<span className="text-[#1AABF0]">Au</span>
              </span>
            </div>

            <div className="text-[#BEBEBE] text-xs font-medium" aria-hidden="true">+</div>

            <div className="flex items-center gap-3 bg-white rounded-2xl px-5 py-3 shadow-[var(--shadow-card)] border border-[rgba(0,0,0,0.05)]">
              <div className="relative w-9 h-9">
                <Image src="/icon_letsgo.png" alt="LetsGO" fill sizes="36px" className="object-contain" />
              </div>
              <span className="text-sm font-semibold text-[#111111] tracking-tight">
                Let&rsquo;s<span className="text-[#E8511A]">GO</span>
              </span>
            </div>
          </div>

          <span className="text-xs font-semibold uppercase tracking-widest text-[#4A4F4A] mb-4 block">
            Mobile Apps
          </span>
          <h2
            id="download-heading"
            className="text-[clamp(28px,4vw,52px)] font-semibold tracking-tight text-[#111111] max-w-2xl mx-auto text-balance"
          >
            Your community.
            <br />
            In your pocket.
          </h2>
          <p className="mt-5 text-base text-[#4A4F4A] max-w-lg mx-auto font-light leading-relaxed">
            Scan either QR code with your phone camera to download instantly —
            no App Store search needed.
          </p>
        </motion.div>

        {/* Platform download blocks */}
        <div className="flex flex-col gap-6">
          {platforms.map((platform, i) => (
            <PlatformDownloadBlock
              key={platform.id}
              platform={platform}
              reverse={i % 2 === 1}
              index={i}
            />
          ))}
        </div>

        {/* Bottom trust line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-10 text-center"
        >
          <div className="text-xs text-[#6B7280] flex items-center justify-center gap-2">
            <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 fill-[#4A7C6B] flex-shrink-0" aria-hidden="true">
              <path d="M8 1L2 4v4c0 3.55 2.56 6.88 6 7.93C11.44 14.88 14 11.55 14 8V4L8 1z"/>
            </svg>
            <span>Available on iOS &amp; Android · Free to download · Australian servers · Privacy Act 1988 compliant</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
