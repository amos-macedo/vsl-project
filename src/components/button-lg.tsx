import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface Language {
  label: string;
  value: string;
}

const languages: Language[] = [
  { label: "Português", value: "pt" },
  { label: "English", value: "en" },
];

export default function ButtonLg() {
  const [language, setLanguage] = useState<Language>(languages[0]);
  const [showOptions, setShowOptions] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const lang = searchParams.get("lang") || "pt";
    const selected = languages.find((l) => l.value === lang) || languages[0];
    setLanguage(selected);
  }, [searchParams]);

  const pathname = usePathname();

  const handleLanguageChange = (lang: Language) => {
    // Clona os parâmetros atuais
    const params = new URLSearchParams(searchParams.toString());

    // Atualiza apenas o lang
    params.set("lang", lang.value);

    // Mantém a mesma rota
    router.push(`${pathname}?${params.toString()}`, { scroll: false });

    setLanguage(lang);
    setShowOptions(false);
  };

  return (
    <div className="relative inline-block text-left">
      <Button
        type="button"
        onClick={() => setShowOptions(!showOptions)}
        className="inline-flex justify-center items-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
      >
        {language.value.toUpperCase()}
        <ChevronDown className="ml-2 h-5 w-5" aria-hidden="true" />
      </Button>

      {showOptions && (
        <ul className="absolute right-0 mt-2 w-40 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg z-50">
          {languages.map((lang) => (
            <li key={lang.value}>
              <button
                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => handleLanguageChange(lang)}
              >
                {lang.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
