"use client";

import { useGetLanguageData } from "@/utils/language";
import { Button } from "../ui/button";
import { useState } from "react";
import toast from "react-hot-toast";

export const CostumerForm = () => {
  const data = useGetLanguageData().checkOut.personalForm;
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    setIsLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col text-xs gap-4 w-full"
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
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
        />
      </div>

      <div>
        <div>{data.inputEmail.label}</div>
        <input
          className="w-full my-2 px-3 py-2 rounded-md border border-gray-300"
          type="email"
          name="email"
          placeholder={data.inputEmail.placeholder}
          value={inputEmail}
          onChange={(e) => setInputEmail(e.target.value)}
          required
        />
      </div>

      <div>
        <div>{data.inputPhone.label}</div>
        <input
          className="w-full my-2 px-3 py-2 rounded-md border border-gray-300"
          type="number"
          placeholder={data.inputPhone.placeholder}
          required
        />
      </div>

      <div>
        <div>{data.inputStreetCode.label}</div>
        <input
          className="w-full my-2 px-3 py-2 rounded-md border border-gray-300"
          type="text"
          placeholder={data.inputStreetCode.placeholder}
          required
        />
      </div>

      <section className="flex gap-4 w-full">
        <div className="w-full">
          <div>{data.inputCountry.label}</div>
          <input
            className="w-full my-2 px-3 py-2 rounded-md border border-gray-300"
            type="text"
            placeholder={data.inputCountry.placeholder}
            required
          />
        </div>

        <div className="w-full">
          <div>{data.inputState.label}</div>
          <input
            className="w-full my-2 px-3 py-2 rounded-md border border-gray-300"
            type="number"
            placeholder={data.inputState.placeholder}
            required
          />
        </div>
      </section>

      <section className="flex gap-4 w-full p-0">
        <div className="w-full">
          <div>{data.inputCity.label}</div>
          <input
            className="w-full my-2 px-3 py-2 rounded-md border border-gray-300"
            type="text"
            placeholder={data.inputCity.placeholder}
            required
          />
        </div>

        <div className="w-full">
          <div>{data.inputZipCode.label}</div>
          <input
            className="w-full my-2 px-3 py-2 rounded-md border border-gray-300"
            type="number"
            placeholder={data.inputZipCode.placeholder}
            required
          />
        </div>
      </section>
    </form>
  );
};
