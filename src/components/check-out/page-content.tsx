"use client";

import { ButtonControl } from "@/components/check-out/button-control";
import {
  CostumerForm,
  CostumerFormSchema,
} from "@/components/check-out/costumer-form";
import {
  PaymentsForm,
  PaymentsFormSchema,
} from "@/components/check-out/payments-form";
import { ProductInfo } from "@/components/check-out/product-info";
import { useGetLanguageData } from "@/utils/language";
import { CircleCheck } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { ProductSummary } from "./product-summary";
import { PaymentsSummary } from "./payments-summary";
import { ShippingSummary } from "./shipping-summary";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { buildUrlWithUTMAndLang } from "@/utils/utmUtils";

type PageType = "checkOut" | "thankYou";

export default function CheckOutContent() {
  const [page, setPage] = useState<PageType>("checkOut");

  const allData = useGetLanguageData();
  const lang = allData.lang;
  const productId = useSearchParams().get("id");

  const product = allData.products.find((product) => product.id === productId);

  const searchParams = useSearchParams();
  const router = useRouter();

  const currentLang = searchParams.get("lang");

  const handleReturn = () => {
    router.push(`/${currentLang ? `?lang=${currentLang}` : ""}`, {
      scroll: false,
    });
  };

  const [costumerData, setConstumerData] = useState<CostumerFormSchema | null>(
    null
  );

  const [paymentsData, setPaymentsData] = useState<PaymentsFormSchema | null>(
    null
  );

  const handleBuy = () => {
    // if (!costumerData || !paymentsData) {
    //   toast.error(lang === "pt" ? "Preencha os dados" : "Fill in the data");

    //   console.log(costumerData, paymentsData);
    //   return;
    // }

    toast.success(
      lang === "pt"
        ? "Compra realizada com sucesso!"
        : "Order made successfully!"
    );
    setPage("thankYou");
  };

  const pushUrl = () => {
    const baseUrl = `/${currentLang ? `?lang=${currentLang}` : ""}`;
    const fullUrl = buildUrlWithUTMAndLang(baseUrl);

    router.push(fullUrl, { scroll: false });
  };

  return (
    <div className="w-full h-full">
      {page === "checkOut" ? (
        <>
          <div className=" md:flex-row flex md:max-w-[70em] flex-col-reverse p-10 mx-auto mt-20 w-full h-full items-start gap-16 justify-center">
            <div className="w-full  md:max-w-2/3 gap-20 h-full flex flex-col  items-center scroll-smooth">
              <CostumerForm
                onChange={(data) => {
                  setConstumerData(data);
                }}
              />

              <PaymentsForm onChange={(data) => setPaymentsData(data)} />
            </div>

            <ProductInfo
              product={{
                price: product?.price || 0,
                url: product?.url || "",
                name: product?.name || "",
                description: product?.description || "",
                avaliation: product?.avaliation || 0,
                id: product?.id || "",
              }}
            >
              <ButtonControl onBuy={handleBuy} />
            </ProductInfo>
          </div>

          <div className="block md:hidden p-10">
            <ButtonControl onBuy={handleBuy} />
          </div>
        </>
      ) : (
        <div className="flex flex-col p-6 md:p-10 md:max-w-[60dvw] mx-auto mt-20 w-full h-full items-start gap-16 justify-center">
          <section className="w-full bg-[#F5FBF4FF]  rounded-lg p-6 md:p-16 gap-4 h-full flex flex-col justify-center  items-center">
            <CircleCheck
              className=" w-40  text-green-500"
              size={70}
              color="#499537FF"
            />
            <h1 className="md:text-3xl text-xl font-bold">
              {lang === "pt"
                ? `Obrigado pela compras ${costumerData?.name}!`
                : `Thank you for your order ${costumerData?.name}!`}
            </h1>
            <p className="text-xs">
              {lang === "pt"
                ? "Sua compra foi feita com sucesso!"
                : "Your order was successful!"}
            </p>
          </section>
          <ProductSummary
            product={{
              price: product?.price || 0,
              url: product?.url || "",
              name: product?.name || "",
              description: product?.description || "",
              avaliation: product?.avaliation || 0,
              id: product?.id || "",
            }}
          />

          <section className="flex w-full flex-col gap-4 bg-[#FAFAFBFF] rounded-lg p-6">
            <PaymentsSummary
              card={{
                name: paymentsData?.name || "John Mayer",
                number: paymentsData?.number || "0000 0000 0000 0000",
              }}
            />
            <ShippingSummary
              address={{
                city: costumerData?.city || "Campina Grande",
                country: costumerData?.country || "Brazil",
                state: costumerData?.state || "Parana",
                street: costumerData?.street || "Av. Brasil",
              }}
            />
          </section>

          <Button
            onClick={pushUrl}
            variant="outline"
            className="mx-auto  border-gray-400 text-gray-700 hover:border-[#499537FF] hover:text-[#499537FF]"
          >
            {allData.checkOut.return}
          </Button>
        </div>
      )}
    </div>
  );
}
