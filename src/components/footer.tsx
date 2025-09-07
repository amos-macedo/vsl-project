"use client";
import { useGetLanguageData } from "@/utils/language";
import {
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import { Button } from "./ui/button";

export const Footer = () => {
  const textData = useGetLanguageData();
  const links = [
    { link: "#home", name: textData.home.menu.home },
    { link: "#history", name: textData.home.menu.history },
    { link: "#products", name: textData.home.menu.products },
    { link: "#testimonials", name: textData.home.menu.testimonials },
    { link: "#contact", name: textData.home.menu.contact },
  ];
  return (
    <div className="w-full border-t">
      <div className="flex flex-col gap-3 md:max-w-[70em] w-full items-center mx-auto justify-center  p-3 text-[#171A1FFF]">
        <div className="flex flex-col gap-10 md:flex-row items-center md:justify-between w-full text-xs">
          <div className="flex flex-col gap-2 max-w-[17em] items-center md:items-start">
            <img src="/logo.png" alt="Logo" className="w-8 h-8" />
            <p className="text-center md:text-left">
              {textData.footer.description}
            </p>

            <div className="flex gap-4">
              {textData.footer.socials.map((social, index) => (
                <a target="_blank" key={index} href={social.url}>
                  <social.icon size={16} className="hover:text-green-700" />
                </a>
              ))}
            </div>
          </div>

          <div className="flex-col  items-center md:items-start">
            <p className="font-bold mb-2">Links rápidos</p>
            <div className="flex flex-col items-center md:items-start gap-1 p-0">
              {links.map((link, index) => (
                <a
                  className=" hover:text-green-700"
                  key={index}
                  href={link.link}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="flex-col text-xs items-center md:items-start">
            <p className="font-bold mb-2 text-center md:text-left">
              Descubra mais
            </p>
            <Button className=" cursor-pointer  hover:text-[#499537FF] hover:border-[#499537FF] border rounded-md py-2 px-3 text-xs text-[#171A1FFF] ">
              {" "}
              <ArrowRight size={14} className="hover:text-[#499537FF]" />
              Aprenda mais
            </Button>
          </div>
        </div>
        <p className="text-sm text-start w-full border-t pt-3">
          &copy; {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
      </div>
    </div>
  );
};
