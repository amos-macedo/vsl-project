"use client";

import { useGetLanguageData } from "@/utils/language";
import { useRef, useState } from "react";
import toast from "react-hot-toast";

export type CostumerFormSchema = {
  name: string;
  email: string;
  phone: string;
  street: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
};

export const CostumerForm = ({
  onChange,
}: {
  onChange?: (data: CostumerFormSchema) => void;
}) => {
  const allData = useGetLanguageData();
  const lang = allData.lang ?? "pt";
  const data = useGetLanguageData().checkOut.personalForm;
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = () => {
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const values = Object.fromEntries(formData.entries()) as CostumerFormSchema;
    onChange?.(values);
  };

  return (
    <form
      ref={formRef}
      // onSubmit={handleSubmit}
      className="flex flex-col text-xs gap-4 w-full md:border border-slate-100 rounded-lg md:p-10"
    >
      <h1 className="md:text-3xl text-xl font-bold">{data.title}</h1>
      <p className="text-md text-slate-500">{data.subtitle}</p>
      <div>
        <div>{data.inputName.label}</div>
        <input
          className="w-full my-2 px-3 py-2 rounded-md border border-gray-300"
          type="text"
          name="name"
          placeholder={data.inputName.placeholder}
          required
          onChange={handleChange}
        />
      </div>

      <div>
        <div>{data.inputEmail.label}</div>
        <input
          className="w-full my-2 px-3 py-2 rounded-md border border-gray-300"
          type="email"
          name="email"
          placeholder={data.inputEmail.placeholder}
          required
          onChange={handleChange}
        />
      </div>

      <div>
        <div>{data.inputPhone.label}</div>
        <input
          className="w-full my-2 px-3 py-2 rounded-md border border-gray-300"
          name="phone"
          type="number"
          maxLength={11}
          placeholder={data.inputPhone.placeholder}
          required
          onChange={(e) => {
            const limited = e.target.value.slice(0, 11);
            e.target.value = limited;
            handleChange(); // envia pro pai
          }}
        />
      </div>

      <div>
        <div>{data.inputStreetCode.label}</div>
        <input
          className="w-full my-2 px-3 py-2 rounded-md border border-gray-300"
          name="street"
          type="text"
          placeholder={data.inputStreetCode.placeholder}
          required
          onChange={handleChange}
        />
      </div>

      <section className="flex gap-4 w-full">
        <div className="w-full">
          <div>{data.inputCountry.label}</div>
          <input
            className="w-full my-2 px-3 py-2 rounded-md border border-gray-300"
            name="country"
            type="text"
            placeholder={data.inputCountry.placeholder}
            required
            onChange={handleChange}
          />
        </div>

        <div className="w-full">
          <div>{data.inputState.label}</div>
          <input
            className="w-full my-2 px-3 py-2 rounded-md border border-gray-300"
            name="state"
            type="text"
            placeholder={data.inputState.placeholder}
            required
            onChange={handleChange}
          />
        </div>
      </section>

      <section className="flex gap-4 w-full p-0">
        <div className="w-full">
          <div>{data.inputCity.label}</div>
          <input
            className="w-full my-2 px-3 py-2 rounded-md border border-gray-300"
            name="city"
            type="text"
            placeholder={data.inputCity.placeholder}
            required
            onChange={handleChange}
          />
        </div>

        <div className="w-full">
          <div>{data.inputZipCode.label}</div>
          <input
            className="w-full my-2 px-3 py-2 rounded-md border border-gray-300"
            name="zipCode"
            type="number"
            maxLength={8}
            placeholder={data.inputZipCode.placeholder}
            required
            onChange={(e) => {
              const limited = e.target.value.slice(0, 8);
              e.target.value = limited;
              handleChange(); // envia pro pai
            }}
          />
        </div>
      </section>
    </form>
  );
};
