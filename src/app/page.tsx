"use client";

import { HeaderHome } from "@/components/home/header-home";
import { IconCard } from "@/components/icon-card";
import { Button } from "@/components/ui/button";
import { useGetLanguageData } from "@/utils/language";
import { FlaskConical, HeartHandshake, Leaf, Pause, Play } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const textData = useGetLanguageData();

  const [isPlaying, setIsPlaying] = useState(false);

  const handleTogglePlayer = () => {
    setIsPlaying(!isPlaying);
    const video = document?.querySelector("video");
    if (video) {
      video.paused ? video.play() : video.pause();
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center ">
      <HeaderHome />

      <section className="flex  w-full  mt-20 bg-[#F5FBF4FF] container items-center justify-center gap-10 py-20">
        <div className="flex max-w-4xl w-full h-full items-center gap-5 justify-center">
          <div className="w-1/2 flex flex-col gap-5 ">
            <h1 className="md:text-6xl text-xl font-bold">
              {textData.home.banner.title}
            </h1>
            <p className="text-md text-slate-500">
              {textData.home.banner.subtitle}
            </p>
            <Button className="bg-[#499537FF] self-start ">
              {textData.home.banner.button}
            </Button>
          </div>

          <img
            key={1}
            className="w-1/2 h-auto hidden md:block"
            src={textData.home.banner.url}
            alt=""
            width={30}
            height={0}
          />
        </div>
      </section>

      <section className="flex  flex-col w-full  mt-20 container items-center justify-center gap-10 py-10">
        <h1 className="md:text-3xl text-xl font-bold">
          {textData.home.video.title}
        </h1>
        <div className="relative p-0">
          {isPlaying ? (
            <Pause
              color="white"
              className="w-20 h-20 z-50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              onClick={handleTogglePlayer}
            />
          ) : (
            <Play
              color="white"
              className="w-20 h-20 z-50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              onClick={handleTogglePlayer}
            />
          )}

          <video
            width="600"
            height="400"
            controls={false}
            className="rounded-xl relative bg-slate-200"
          >
            <source src="/video.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      <section className=" bg-[#FAFAFBFF]  w-full  mt-20   py-20 ">
        <div className="flex  flex-col  w-full   container items-center justify-center gap-10 max-w-4xl mx-auto">
          <h1 className="md:text-3xl text-xl font-bold">
            {textData.home.reasons.title}
          </h1>

          <div className="flex flex-col md:flex-row w-full gap-7 justify-between items-center p-3 rounded-md ">
            {textData.home.reasons.items.map((reason, index) => (
              <IconCard
                key={index}
                icon={<reason.icon className="w-8 h-8" color="#499537FF" />}
                title={reason.title}
                description={reason.subtitle}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
