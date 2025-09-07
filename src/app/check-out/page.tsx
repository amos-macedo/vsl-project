import { ButtonControl } from "@/components/check-out/button-control";
import { CostumerForm } from "@/components/check-out/costumer-form";
import { PaymentsForm } from "@/components/check-out/payments-form";
import { ProductInfo } from "@/components/check-out/product-info";
import { Footer } from "@/components/footer";
import { Header } from "@/components/home/header";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="w-full h-full">
      <Suspense fallback={<div>Loading...</div>}>
        <Header hideMenu />
        <div className=" md:flex-row flex md:max-w-[70em] flex-col-reverse p-10 mx-auto mt-20 w-full h-full items-start gap-20 justify-center">
          <div className="w-full  md:max-w-2/3 gap-20 h-full flex flex-col  items-center scroll-smooth">
            <CostumerForm />

            <PaymentsForm />
          </div>

          <ProductInfo />
        </div>

        <div className="block md:hidden p-10">
          <ButtonControl />
        </div>

        <Footer />
      </Suspense>
    </div>
  );
}
