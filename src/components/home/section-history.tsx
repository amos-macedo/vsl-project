"use client";

import { useGetLanguageData } from "@/utils/language";
import { Button } from "../ui/button";

export const SectionHistory = () => {
  const data = useGetLanguageData();
  return (
    <section
      id="history"
      className="flex  w-full  mt-20 bg-[#FAFAFBFF] container items-center justify-center  py-20"
    >
      <div className="flex flex-col-reverse md:flex-direction-normal  md:flex-row max-w-5xl w-full h-full items-center gap-10 justify-between">
        <div className="md:w-1/2 w-full p-6 md:p-0 flex flex-col gap-5 ">
          <h1 className=" text-3xl font-bold">{data.home.history.title}</h1>
          <p className="space-y-4 text-slate-500  text-md">
            {data.home.history.description}
          </p>
        </div>

        <img
          key={1}
          className="w-[90dvw] mx-auto md:w-1/2 h-auto  rounded-md"
          src={data.home.history.url}
          alt=""
          width={30}
          height={0}
        />
      </div>
    </section>
  );
};
