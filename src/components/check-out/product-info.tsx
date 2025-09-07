"use client";

import { useGetLanguageData } from "@/utils/language";

export type ProductType = {
  id: string;
  name: string;
  price: number;
  url: string;
  description: string;
  avaliation: number;
};

type ProductCardProps = {
  children?: React.ReactNode;
  product: ProductType;
};

export const ProductInfo = ({ children, product }: ProductCardProps) => {
  const allData = useGetLanguageData();

  const lang = allData.lang;
  const data = allData.checkOut.productDetails;
  //   const product = allData.products.find((product) => product.id === productId);

  const productPrice = product?.price || 0;
  const shippingPrice = data.shipping?.price || 0;
  const total = productPrice + shippingPrice;

  return (
    <div className="w-full md:max-w-1/3 mx-auto rounded-lg   bg-white md:border border-slate-100 md:p-10">
      {/* Título */}
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
        {data.title}
      </h1>

      {/* Produto */}
      <div className="flex items-center gap-6 border-b pb-6">
        <img
          className="md:w-2/5 w-24 object-contain rounded-md "
          src={product?.url}
          alt={product?.name || "Product"}
        />
        <div>
          <h2 className="text-lg font-semibold text-gray-700">
            {product?.name}
          </h2>
          <p className="text-sm text-gray-500">
            {/* {lang === "pt" ? "Preço:" : "Price:"}{" "}
             <span className="font-bold text-gray-800">
              {lang === "pt" ? "R$" : "$"}
              {productPrice.toFixed(2)}
            </span> */}
            <span className="text-xs text-gray-800">
              {product?.description}
            </span>
          </p>
        </div>
      </div>

      {/* Resumo */}
      <div className="py-6 space-y-3 border-b">
        <div className="flex justify-between text-sm text-gray-600">
          <p>{data.subtotal}</p>
          <p>
            {lang === "pt" ? "R$" : "$"}
            {productPrice.toFixed(2)}
          </p>
        </div>
        <div className="flex justify-between text-sm text-gray-600">
          <p>{data.shipping.title}</p>
          <p>
            {lang === "pt" ? "R$" : "$"}
            {shippingPrice.toFixed(2)}
          </p>
        </div>
      </div>

      {/* Total */}
      <div className="flex justify-between items-center py-4">
        <p className="text-lg font-bold text-gray-800">{data.total}</p>
        <p className="text-lg font-bold text-green-600">
          {lang === "pt" ? "R$" : "$"}
          {total.toFixed(2)}
        </p>
      </div>

      {/* Garantia */}
      <p className="text-xs text-gray-500 italic mb-6">{data.secure}</p>

      {/* Botões */}
      <div className="hidden md:block">
        {children}
        {/* <ButtonControl /> */}
      </div>
    </div>
  );
};
