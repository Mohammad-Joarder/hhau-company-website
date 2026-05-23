"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

interface LegalLayoutProps {
  title: string;
  badge: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export default function LegalLayout({ title, badge, lastUpdated, children }: LegalLayoutProps) {
  return (
    <div className="min-h-screen bg-[#F7F7F5]">
      {/* Header */}
      <div className="bg-white border-b border-[rgba(0,0,0,0.06)]">
        <div className="container-tight py-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[#6B7280] hover:text-[#111111] transition-colors mb-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3D7A7A] rounded"
          >
            <ArrowLeft size={14} />
            Back to Home
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#4A7C6B] mb-3 block">
              {badge}
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-[#111111] mb-3">{title}</h1>
            <p className="text-sm text-[#6B7280]">Last updated: {lastUpdated}</p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="container-tight py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl prose prose-sm prose-neutral"
          style={{
            "--tw-prose-body": "#4A4F4A",
            "--tw-prose-headings": "#111111",
            "--tw-prose-links": "#4A7C6B",
          } as React.CSSProperties}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}
