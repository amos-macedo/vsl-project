"use client";

import { useGetLanguageData } from "@/utils/language";
import { ProductCard } from "../product-card";

export const SectionProducts = ({ id }: { id?: string }) => {
  const data = useGetLanguageData();

  const lang = data.lang;
  return (
    <section id="products" className="bg-white  w-full  mt-20   py-20 ">
      <div className="flex  flex-col  w-full   container items-center justify-center gap-10  mx-auto">
        <h1 className="md:text-3xl text-xl font-bold">
          {data.home.products.title}
        </h1>

        <div className="flex  flex-row w-full gap-7 justify-between items-center p-3 rounded-md md:max-w-5xl overflow-x-scroll scrollbar-hide">
          {data.products
            .filter((product) => product.id !== id)
            .map((product, index) => (
              <ProductCard
                key={index}
                image={product.url}
                name={product.name}
                description={product.description}
                price={product.price}
                grade={product.avaliation}
                lang={lang}
              />
            ))}
        </div>
      </div>
    </section>
  );
};
