import Image from "next/image";
import { Button } from "@/components/ui/button";

export function AkshayaTritiyaSection() {
  return (
    <section className="bg-[#fde9bf] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Title */}
        <h2 className="text-center font-serif text-4xl font-bold text-[#5a1a0f] sm:text-5xl">
          Akshaya Tritiya Donation 2026
        </h2>

        {/* Quote Section */}
        <div className="mx-auto mt-12 max-w-3xl rounded-3xl border-4 border-[#8b3a1f] bg-[#fde9bf] px-8 py-12 relative">
          {/* Opening quote mark */}
          <div className="absolute left-6 top-4 text-7xl text-[#8b3a1f] leading-none">
            "
          </div>

          {/* Sanskrit Text */}
          <p className="text-center font-serif text-lg text-[#333] font-semibold">
            यक्तिषिद्ययते दान स्वस्य यदि वा बहु । तसर्वमयय स्याधे तेनेपमायया समृता ।।
          </p>

          {/* English Text */}
          <p className="mt-6 text-center text-base leading-relaxed text-[#333]">
            <span className="font-bold">Whatever charity is given on this day, whether it is very little or abundant, all of it certainly becomes inexhaustible (Akshaya).</span>
            <span className="ml-1">Even a small contribution brings <span className="italic">Akshaya Punya</span> and attracts unlimited blessings of Lord&apos;s for you and your family.</span>
          </p>

          {/* Closing quote mark */}
          <div className="absolute bottom-4 right-6 text-7xl text-[#8b3a1f] leading-none">
            "
          </div>
        </div>

        {/* Decorative divider */}
        <div className="mt-12 flex items-center justify-center gap-4">
          <div className="h-px flex-1 bg-[#8b3a1f]/40"></div>
          <div className="text-2xl text-[#8b3a1f]">۞۞۞</div>
          <div className="h-px flex-1 bg-[#8b3a1f]/40"></div>
        </div>

        {/* Main Content Grid */}
        <div className="mt-16 grid items-center gap-12 lg:grid-cols-[380px_1fr] lg:gap-16">
          {/* Left Image */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border-4 border-[#8b3a1f]">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-YQjeFVoJ3pdjurXdoX8BJo8GlbEGBZ.png"
              alt="Children receiving food charity"
              fill
              className="object-cover"
            />
            {/* Decorative sparkles */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-yellow-400/40 to-transparent"></div>
          </div>

          {/* Right Content */}
          <div className="max-w-2xl">
            <h3 className="font-serif text-3xl font-bold text-[#1a1a1a] sm:text-4xl">
              Donate on Akshaya Tritiya 2026 :
              <br />
              Donate for Everlasting Blessings
            </h3>

            <div className="mt-8 space-y-4">
              <p className="text-base leading-relaxed text-[#333]">
                Akshaya Tritiya is the most sacred day of the year — a day when the Sun and Moon are in their most powerful positions.
              </p>

              <p className="text-base leading-relaxed text-[#333]">
                Even the smallest act of charity done on this day gives <span className="font-bold">imperishable (Akshaya) punya.</span>
              </p>

              <p className="text-base leading-relaxed text-[#333]">
                Don&apos;t miss this sacred opportunity to attract everlasting blessings and prosperity.
              </p>

              <p className="text-base leading-relaxed text-[#333]">
                Receive the divine blessings of the Lord for you and your family — <br />
                <span className="font-bold">Help us build an iconic temple at Gupt Vrindavan Dham, feed the needy, and protect the lives of <span className="font-bold">16,000+ abandoned and homeless Gau Mata</span>.</span>
              </p>
            </div>

            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <a href="#" className="text-base font-semibold text-[#5a1a0f] hover:underline">
                Read More
              </a>
            </div>

            <div className="mt-8">
              <Button
                size="lg"
                className="rounded-full bg-[#6b3d2f] px-8 text-white hover:bg-[#5a3428]"
              >
                Donate Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
