"use client";

import { useGetLanguageData } from "@/utils/language";
import { Button } from "../ui/button";

export const SectionBanner = () => {
  const data = useGetLanguageData();
  return (
    <section className="flex  w-full  mt-20 bg-[#F5FBF4FF] container items-center justify-center gap-10 py-20">
      <div className="flex max-w-4xl w-full h-full items-center gap-5 justify-center">
        <div className="w-1/2 flex flex-col gap-5 ">
          <h1 className="md:text-6xl text-xl font-bold">
            {data.home.banner.title}
          </h1>
          <p className="text-md text-slate-500">{data.home.banner.subtitle}</p>
          <Button className="bg-[#499537FF] self-start ">
            {data.home.banner.button}
          </Button>
        </div>

        <img
          key={1}
          className="w-1/2 h-auto hidden md:block"
          src={data.home.banner.url}
          alt=""
          width={30}
          height={0}
        />
      </div>
    </section>
  );
};
