"use client";

import { useGetLanguageData } from "@/utils/language";

type AnddressType = {
  city: string;
  country: string;
  state: string;
  street: string;
};

type ProductCardProps = {
  address: AnddressType;
};

export const ShippingSummary = ({ address }: ProductCardProps) => {
  const allData = useGetLanguageData();
  const lang = allData.lang;

  return (
    <div className="w-full mx-auto rounded-lg  text-[#171A1FFF] bg-white md:border border-slate-200 shadow-xs p-6 md:p-10">
      <h1 className="text-md md:text-lg font-semibold  mb-6">
        {lang === "pt" ? "Endereço de Entrega" : "Shipping Address"}
      </h1>

      <p className="text-sm ">{address.street}</p>
      <p className="text-sm ">
        {address.city}
        {", "} {address.state}
      </p>
      <p className="text-sm ">{address.country}</p>
    </div>
  );
};
