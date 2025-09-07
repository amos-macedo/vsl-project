"use client";

import { useGetLanguageData } from "@/utils/language";
import { Pause, Play, Video } from "lucide-react";
import { useState } from "react";
import { VideoPlayer } from "./video-player";

export const SectionVideo = () => {
  const data = useGetLanguageData();

  const [isPlaying, setIsPlaying] = useState(false);
  const [hideControls, setHideControls] = useState(true);

  const handleTogglePlayer = () => {
    setIsPlaying(!isPlaying);
    const video = document?.querySelector("video");
    if (video) {
      video.paused ? video.play() : video.pause();
    }
  };

  setTimeout(() => {
    setHideControls(false);
  }, 1000);

  return (
    <section className="flex  flex-col w-full md:max-w-[70dvw]  mt-20 container items-center justify-center gap-10 p-10">
      <h1 className="md:text-3xl text-xl font-bold">{data.home.video.title}</h1>
      <div className="relative p-0">
        {hideControls && (
          <>
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
          </>
        )}

        <VideoPlayer />
      </div>
    </section>
  );
};
