"use client";

import { useGetLanguageData } from "@/utils/language";
import { ProductType } from "./product-info";

type ProductCardProps = {
  product: ProductType;
};

export const ProductSummary = ({ product }: ProductCardProps) => {
  const allData = useGetLanguageData();
  const lang = allData.lang;
  const data = allData.checkOut.productDetails;

  const productPrice = product?.price || 0;
  const shippingPrice = data.shipping?.price || 0;
  const total = productPrice + shippingPrice;

  return (
    <div className="w-full mx-auto rounded-lg   bg-white md:border border-slate-100 md:p-10">
      <h1 className="text-xl md:text-3xl font-bold text-gray-800 mb-6">
        {data.title}
      </h1>

      <div className="flex items-center gap-6 border-b pb-6">
        <img
          className="md:w-24 w-18 object-contain rounded-md "
          src={product?.url}
          alt={product?.name || "Product"}
        />
        <div>
          <h2 className="text-lg font-semibold text-gray-700">
            {product?.name}
          </h2>
          <p className="text-sm text-gray-500">
            {lang === "pt" ? "Preço:" : "Price:"}{" "}
            <span className="font-bold text-gray-800">
              {lang === "pt" ? "R$" : "$"}
              {productPrice.toFixed(2)}
            </span>
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center py-4">
        <p className="text-lg font-bold text-gray-800">{data.total}</p>
        <p className="text-lg font-bold text-green-600">
          {lang === "pt" ? "R$" : "$"}
          {total.toFixed(2)}
        </p>
      </div>
    </div>
  );
};
