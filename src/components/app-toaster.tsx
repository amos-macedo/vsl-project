"use client";

import { Toaster } from "react-hot-toast";

export function AppToaster() {
  return (
    <Toaster
      position="bottom-center"
      toastOptions={{
        duration: 3000,
        style: {
          background: "#111827", // fundo escuro
          color: "#f9fafb", // texto claro
          padding: "8px 16px",
          borderRadius: "6px",
          fontWeight: "500",
        },
      }}
    />
  );
}
