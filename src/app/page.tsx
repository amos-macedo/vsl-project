"use client";
import { Header } from "@/components/home/header";
import { SectionBanner } from "@/components/home/section-banner";
import { SectionReasons } from "@/components/home/section-reasons";
import { SectionVideo } from "@/components/home/section-video";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col items-center ">
      <Suspense fallback={<div>Loading...</div>}>
        <Header />

        <SectionBanner />
        <SectionVideo />
        <SectionReasons />
      </Suspense>
    </div>
  );
}
