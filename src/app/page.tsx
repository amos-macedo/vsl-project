import { Footer } from "@/components/footer";
import { Header } from "@/components/home/header";
import { SectionBanner } from "@/components/home/section-banner";
import { SectionContact } from "@/components/home/section-contact";
import { SectionHistory } from "@/components/home/section-history";
import { SectionProducts } from "@/components/home/section-products";
import { SectionReasons } from "@/components/home/section-reasons";
import { SectionTestimonials } from "@/components/home/section-testimonials";
import { SectionVideo } from "@/components/home/section-video";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col items-center scroll-smooth overflow-y-scroll">
      <Suspense fallback={<div>Loading...</div>}>
        <Header />

        <SectionBanner />
        <SectionVideo />
        <SectionReasons />
        <SectionProducts />
        <SectionHistory />
        <SectionTestimonials />
        <SectionContact />

        <Footer />
      </Suspense>
    </div>
  );
}
