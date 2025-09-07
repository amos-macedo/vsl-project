"use client";

import { useGetLanguageData } from "@/utils/language";
import { ProductCarrosel } from "../product-carrosel";
import { useRouter } from "next/navigation";
import { buildUrlWithUTMAndLang } from "@/utils/utmUtils";

export const SectionProducts = ({ id }: { id?: string }) => {
  const data = useGetLanguageData();
  const router = useRouter();

  // Função que gera URL e faz push
  const pushUrl = (productId: string) => {
    // Gera a URL somente no momento do clique, garantindo que o localStorage já esteja preenchido
    const baseUrl = `/check-out?id=${productId}`;
    const fullUrl = buildUrlWithUTMAndLang(baseUrl);

    router.push(fullUrl, { scroll: false });
  };

  return (
    <section id="products" className="bg-white w-full mt-20 py-20">
      <div className="flex flex-col md:max-w-[70em] w-full container items-center justify-center gap-10 mx-auto">
        <h1 className="md:text-3xl text-xl font-bold">
          {data.home.products.title}
        </h1>

        <ProductCarrosel
          id={id}
          onClick={(productId) => {
            pushUrl(productId); // Aqui pega UTMs + lang do storage + url atual
          }}
        />
      </div>
    </section>
  );
};
