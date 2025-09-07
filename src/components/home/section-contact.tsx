"use client";
import { useGetLanguageData } from "@/utils/language";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "../contact-form";

export const SectionContact = () => {
  const data = useGetLanguageData();
  return (
    <section
      id="contact"
      className="flex  w-full  mt-20 bg-[#FAFAFBFF] container items-center justify-center  py-20"
    >
      <div className="flex flex-col   md:flex-row md:max-w-[70em] w-full h-full items-start gap-10 justify-between">
        <div className="md:w-1/2 w-full text-[#171A1FFF]  text-md p-6 md:p-0 flex flex-col gap-5 ">
          <h1 className=" text-4xl text-black font-bold">
            {data.home.contact.title}
          </h1>
          <p className="space-y-4 ">{data.home.contact.subtitle}</p>

          <div className="flex gap-4 items-center ">
            <Phone size={20} color="#499537FF" />
            <span>{data.home.contact.phone}</span>
          </div>
          <div className="flex gap-4 items-center">
            <Mail size={20} color="#499537FF" />
            <span>{data.home.contact.email}</span>
          </div>
          <div className="flex gap-4 items-center">
            <MapPin size={20} color="#499537FF" />
            <span>{data.home.contact.address}</span>
          </div>
        </div>
        <div className="md:w-1/2 w-full p-4 md:p-0">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};
