"use client";

export const VideoPlayer = () => {
  return (
    <video controls width="100%" className="rounded-lg">
      <source
        src="https://www.dropbox.com/scl/fi/ke4d3d2atnc637eowt066/Emp-rio-da-sa-de-produtos-naturais..mp4?rlkey=5c8a85xt5c96o7tjleq3dj7pt&st=07h4ltlf&dl=1"
        type="video/mp4"
      />
      Seu navegador não suporta a tag de vídeo.
    </video>
  );
};
