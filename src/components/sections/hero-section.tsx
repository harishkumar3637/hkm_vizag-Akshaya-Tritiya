import Image from "next/image";
import { ArrowDown, Sparkles } from "lucide-react";

import { templeInfo } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { DonationCard } from "@/components/sections/donation-card";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#4f170f]">
      <div className="absolute inset-0">
        <Image
          src={templeInfo.heroImage}
          alt="Akshaya Tritiya celebration banner"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(55,12,9,0.92)_0%,rgba(89,23,14,0.82)_40%,rgba(120,46,18,0.46)_68%,rgba(120,46,18,0.26)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,216,134,0.28),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(255,181,79,0.26),transparent_28%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="mb-8 flex items-center justify-between rounded-full border border-white/15 bg-black/18 px-4 py-2 text-white/90 backdrop-blur md:max-w-max">
          <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.26em] sm:text-sm">
            <Sparkles className="h-4 w-4 text-[#ffd37a]" />
            Akshaya Tritiya 2026 Donation
          </div>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_430px] lg:gap-10">
          <div className="max-w-3xl pt-2 text-white lg:py-10">
            <div className="inline-flex items-center rounded-full border border-[#ffd188]/35 bg-[#f2c26a]/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.26em] text-[#ffe2a8]">
              Offer Seva and Daan that never diminishes
            </div>
            <h1 className="mt-6 max-w-3xl font-serif text-5xl leading-[0.95] sm:text-6xl lg:text-7xl">
              Akshaya Tritiya Donation
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/84 sm:text-lg">
              Make your Akshaya Tritiya donation at Gupt Vrindavan Dham and serve Sri Sri Krishna-Balaram through
              annadan, gau seva, temple offerings, and heartfelt daan on this eternally auspicious occasion.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="#donation-form">
                <Button size="lg" className="w-full sm:w-auto">
                  Donate Now
                </Button>
              </a>
              <a
                href="#benefits"
                className="inline-flex h-[52px] items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/15"
              >
                Explore Blessings
                <ArrowDown className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {[
                ["108+", "Minimum Sankalpa"],
                ["24/7", "Sacred temple prayers"],
                ["100%", "Mock responsive frontend"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-[26px] border border-white/14 bg-white/10 p-5 backdrop-blur-sm">
                  <div className="font-serif text-3xl text-[#ffd98a]">{value}</div>
                  <div className="mt-2 text-sm text-white/75">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:sticky lg:top-6">
            <DonationCard />
          </div>
        </div>
      </div>
    </section>
  );
}
