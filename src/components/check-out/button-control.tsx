"use client";

import { useGetLanguageData } from "@/utils/language";
import { Button } from "../ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import { buildUrlWithUTMAndLang } from "@/utils/utmUtils";

type ProductCardProps = {
  onBuy?: () => void;
};

export const ButtonControl = ({ onBuy }: ProductCardProps) => {
  const allData = useGetLanguageData();

  const searchParams = useSearchParams();
  const router = useRouter();

  const currentLang = searchParams.get("lang");
  const handleReturn = () => {
    router.push(`/${currentLang ? `?lang=${currentLang}` : ""}`, {
      scroll: false,
    });
  };

  const pushUrl = () => {
    // Gera a URL somente no momento do clique, garantindo que o localStorage já esteja preenchido
    const baseUrl = `/${currentLang ? `?lang=${currentLang}` : ""}`;
    const fullUrl = buildUrlWithUTMAndLang(baseUrl);

    router.push(fullUrl, { scroll: false });
  };

  return (
    <div className="w-full flex flex-col gap-3 ">
      <Button
        onClick={onBuy}
        className="bg-[#499537FF] hover:bg-[#3a7d2f] w-full "
      >
        {allData.checkOut.button}
      </Button>
      <Button
        onClick={pushUrl}
        variant="outline"
        className="w-full  border-gray-400 text-gray-700 hover:border-[#499537FF] hover:text-[#499537FF]"
      >
        {allData.checkOut.return}
      </Button>
    </div>
  );
};
