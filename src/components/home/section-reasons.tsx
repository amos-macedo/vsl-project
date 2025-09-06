"use client";

import { useGetLanguageData } from "@/utils/language";
import { IconCard } from "../icon-card";

export const SectionReasons = () => {
  const data = useGetLanguageData();
  return (
    <section id="reasons" className=" bg-[#FAFAFBFF]  w-full  mt-20   py-20 ">
      <div className="flex  flex-col  w-full   container items-center justify-center gap-10 max-w-4xl mx-auto">
        <h1 className="md:text-3xl text-xl font-bold">
          {data.home.reasons.title}
        </h1>

        <div className="flex flex-col md:flex-row w-full gap-7 justify-between items-center p-3 rounded-md ">
          {data.home.reasons.items.map((reason, index) => (
            <IconCard
              key={index}
              icon={<reason.icon className="w-8 h-8" color="#499537FF" />}
              title={reason.title}
              description={reason.subtitle}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
