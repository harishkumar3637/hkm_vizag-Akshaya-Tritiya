"use client";

import { useState } from "react";
import Image from "next/image";
import { Grid3x3, List } from "lucide-react";

import { akshayaTritiyaDaan } from "@/lib/data";
import { Button } from "@/components/ui/button";

export function AkshayaTritiyaDaan() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  return (
    <section className="py-[72px] sm:py-[88px]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div className="rounded-full bg-[#fde9bf] px-6 py-3">
            <h2 className="font-serif text-2xl font-bold text-[#6e2918]">AKSHAYA TRITIYA DAAN</h2>
          </div>

          <div className="flex gap-2">
            <Button
              variant={viewMode === "list" ? "default" : "outline"}
              size="icon"
              onClick={() => setViewMode("list")}
              className="h-10 w-10 rounded-lg"
            >
              <List className="h-5 w-5" />
            </Button>
            <Button
              variant={viewMode === "grid" ? "default" : "outline"}
              size="icon"
              onClick={() => setViewMode("grid")}
              className="h-10 w-10 rounded-lg"
            >
              <Grid3x3 className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div
          className={
            viewMode === "grid"
              ? "grid gap-6 md:grid-cols-2 lg:grid-cols-3"
              : "space-y-4"
          }
        >
          {akshayaTritiyaDaan.map((item) => (
            <div
              key={item.title}
              className="group overflow-hidden rounded-3xl bg-white shadow-sm transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex flex-col sm:flex-row">
                <div className="relative h-48 w-full sm:h-auto sm:w-48 flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="flex flex-1 flex-col justify-between bg-[#6e2918] p-6 text-white">
                  <h3 className="font-serif text-xl font-bold sm:text-2xl">
                    {item.title}
                  </h3>

                  <Button
                    size="lg"
                    className="mt-4 w-fit rounded-full bg-white text-[#6e2918] hover:bg-[#f0dec0]"
                  >
                    Donate
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex items-center justify-center gap-4 text-[#a1672e]">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#a1672e]/30" />
          <div className="text-3xl">⋯ ✦ ⋯</div>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#a1672e]/30" />
        </div>
      </div>
    </section>
  );
}
