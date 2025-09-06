"use client";

import { useGetLanguageData } from "@/utils/language";
import { ProductCarrosel } from "../product-carrosel";

export const SectionProducts = ({ id }: { id?: string }) => {
  const data = useGetLanguageData();

  return (
    <section id="products" className="bg-white  w-full  mt-20   py-20 ">
      <div className="flex  flex-col  md:max-w-[70em] w-full  container items-center justify-center gap-10  mx-auto">
        <h1 className="md:text-3xl text-xl font-bold">
          {data.home.products.title}
        </h1>

        <ProductCarrosel
          id={id}
          onClick={(id) => {
            alert(id);
          }}
        />
      </div>
    </section>
  );
};
