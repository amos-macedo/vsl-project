import CheckOutContent from "@/components/check-out/page-content";
import { Footer } from "@/components/footer";
import { Header } from "@/components/home/header";
import { Suspense } from "react";

export default function CheckOut() {
  return (
    <div className="w-full h-full">
      <Suspense fallback={<div>Loading...</div>}>
        <Header hideMenu />
        <CheckOutContent />

        <Footer />
      </Suspense>
    </div>
  );
}
