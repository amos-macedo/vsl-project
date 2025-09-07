"use client";

import { useGetLanguageData } from "@/utils/language";
import { useRef, useState } from "react";
import { Checkbox } from "../ui/checkbox";

export type PaymentsFormSchema = {
  name: string;
  number: string;
  expiration: string;
  cvv: string;
};
export const PaymentsForm = ({
  onChange,
}: {
  onChange?: (data: PaymentsFormSchema) => void;
}) => {
  const data = useGetLanguageData().checkOut.paymentForm;

  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = () => {
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const values = Object.fromEntries(formData.entries()) as PaymentsFormSchema;
    onChange?.(values);
  };

  const [checked, setChecked] = useState(false);

  return (
    <form className="flex flex-col text-xs gap-4 w-full md:border border-slate-100 md:p-10 rounded-lg">
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
        <div>{data.cardNumber.label}</div>
        <input
          className="w-full my-2 px-3 py-2 rounded-md border border-gray-300"
          type="number"
          name="number"
          maxLength={16}
          placeholder={data.cardNumber.placeholder}
          required
          onChange={handleChange}
        />
      </div>

      <div>
        <div>{data.cardName.label}</div>
        <input
          className="w-full my-2 px-3 py-2 rounded-md border border-gray-300"
          type="name"
          name="text"
          placeholder={data.cardName.placeholder}
          required
          onChange={handleChange}
        />
      </div>

      <section className="flex gap-4 w-full">
        <div className="w-full">
          <div>{data.expiration.label}</div>
          <input
            className="w-full my-2 px-3 py-2 rounded-md border border-gray-300"
            type="text"
            name="expiration"
            maxLength={5}
            placeholder={data.expiration.placeholder}
            required
            onChange={handleChange}
          />
        </div>

        <div className="w-full">
          <div>{data.cvv.label}</div>
          <input
            className="w-full my-2 px-3 py-2 rounded-md border border-gray-300"
            type="number"
            name="cvv"
            maxLength={3}
            placeholder={data.cvv.placeholder}
            required
            onChange={(e) => {
              const limited = e.target.value.slice(0, 3);
              e.target.value = limited;
              handleChange(); // envia pro pai
            }}
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
