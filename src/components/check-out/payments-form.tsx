"use client";

import { useGetLanguageData } from "@/utils/language";
import { useState } from "react";
import { Checkbox } from "../ui/checkbox";

export const PaymentsForm = () => {
  const data = useGetLanguageData().checkOut.paymentForm;

  const [checked, setChecked] = useState(false);

  return (
    <form className="flex flex-col text-xs gap-4 w-full">
      <h1 className="md:text-3xl text-xl font-bold">{data.title}</h1>

      <div className="flex gap-1">
        {data.cardsImgs.map((url, index) => (
          <img
            key={index}
            className="w-10 h-auto hidden md:block"
            src={url}
            alt=""
            width={30}
            height={0}
          />
        ))}
      </div>

      <div>
        <div>{data.cardName.label}</div>
        <input
          className="w-full my-2 px-3 py-2 rounded-md border border-gray-300"
          type="text"
          name="name"
          placeholder={data.cardName.placeholder}
          required
        />
      </div>

      <div>
        <div>{data.cardName.label}</div>
        <input
          className="w-full my-2 px-3 py-2 rounded-md border border-gray-300"
          type="email"
          name="email"
          placeholder={data.cardName.placeholder}
          required
        />
      </div>

      <section className="flex gap-4 w-full">
        <div className="w-full">
          <div>{data.expiration.label}</div>
          <input
            className="w-full my-2 px-3 py-2 rounded-md border border-gray-300"
            type="text"
            placeholder={data.expiration.placeholder}
            required
          />
        </div>

        <div className="w-full">
          <div>{data.cvv.label}</div>
          <input
            className="w-full my-2 px-3 py-2 rounded-md border border-gray-300"
            type="number"
            placeholder={data.cvv.placeholder}
            required
          />
        </div>
      </section>

      <div className="w-full flex gap-2">
        <Checkbox
          checked={checked}
          className="text-blue-600"
          onClick={() => setChecked(!checked)}
        />
        <div>{data.saveInfo}</div>
      </div>
    </form>
  );
};
