"use client";

import { useGetLanguageData } from "@/utils/language";
import { ProductCard } from "./product-card";

type ProductCarroselProps = {
  id?: string;
  onClick?: (id: string) => void;
};

export const ProductCarrosel = ({ id, onClick }: ProductCarroselProps) => {
  const data = useGetLanguageData();

  const lang = data.lang;
  return (
    <div className="flex scrollbar-hide flex-row  gap-7 justify-between items-center p-3 rounded-md md:max-w-[70em] w-full overflow-x-scroll scrollbar-hide">
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
            onClick={() => onClick?.(product.id)}
          />
        ))}
    </div>
  );
};
