"use client";

export const VideoPlayer = () => {
  return (
    <video
      src="/video.mp4"
      className="rounded-md"
      controls
      style={{ width: "100%", height: "auto" }}
    >
      Seu navegador não suporta vídeos.
    </video>
  );
};
