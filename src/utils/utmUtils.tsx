"use client";
import { useEffect } from "react";

export const CaptureUTMs = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const params = new URLSearchParams(window.location.search);
    const utmParams: Record<string, string> = {};

    [
      "utm_source",
      "utm_medium",
      "utm_campaign",
      "utm_term",
      "utm_content",
    ].forEach((key) => {
      const value = params.get(key);
      if (value) utmParams[key] = value;
    });

    if (Object.keys(utmParams).length > 0) {
      localStorage.setItem("utmParams", JSON.stringify(utmParams));
    }
  }, []);

  return null; // Não precisa renderizar nada
};

/**

 * @param baseUrl 
 */
// src/utils/utmUtils.ts

// src/utils/utmUtils.ts

export function buildUrlWithUTMAndLang(baseUrl: string): string {
  if (typeof window === "undefined") return baseUrl;

  // Pega UTMs do localStorage
  const utmParams = JSON.parse(localStorage.getItem("utmParams") || "{}");

  // Pega lang da URL atual
  const currentParams = new URLSearchParams(window.location.search);
  const lang = currentParams.get("lang");
  if (lang) utmParams.lang = lang;

  // Cria URL object para merge
  const url = new URL(baseUrl, window.location.origin);
  const baseQuery = url.searchParams;

  // Adiciona UTMs/lang sem sobrescrever parâmetros existentes
  Object.entries(utmParams).forEach(([key, value]) => {
    if (!baseQuery.has(key)) {
      baseQuery.set(key, value as string);
    }
  });

  url.search = baseQuery.toString();

  // ⚠️ NÃO adicionar "?" manualmente, url.search já contém "?" se necessário
  return url.pathname + url.search;
}
