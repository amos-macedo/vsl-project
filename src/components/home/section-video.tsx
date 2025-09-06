"use client";

import { useGetLanguageData } from "@/utils/language";
import { Pause, Play } from "lucide-react";
import { useState } from "react";

export const SectionVideo = () => {
  const data = useGetLanguageData();

  const [isPlaying, setIsPlaying] = useState(false);

  const handleTogglePlayer = () => {
    setIsPlaying(!isPlaying);
    const video = document?.querySelector("video");
    if (video) {
      video.paused ? video.play() : video.pause();
    }
  };

  return (
    <section className="flex  flex-col w-full  mt-20 container items-center justify-center gap-10 py-10">
      <h1 className="md:text-3xl text-xl font-bold">{data.home.video.title}</h1>
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
  );
};
