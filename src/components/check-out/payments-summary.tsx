"use client";

import { useGetLanguageData } from "@/utils/language";

type CardType = {
  name: string;
  number: string;
};

type ProductCardProps = {
  card: CardType;
};

export const PaymentsSummary = ({ card }: ProductCardProps) => {
  const allData = useGetLanguageData();
  const lang = allData.lang;

  return (
    <div className="w-full mx-auto rounded-lg  text-[#171A1FFF] bg-white md:border border-slate-200 shadow-xs md:p-10">
      <h1 className="text-md md:text-lg font-semibold  mb-6">
        {lang === "pt" ? "Forma de Pagamento" : "Payment Method"}
      </h1>

      <p className="text-sm ">
        {card.name} {lang === "pt" ? "termina em" : "ending in"}{" "}
        {`**** ${card.number.slice(-4)}`}
      </p>
    </div>
  );
};
