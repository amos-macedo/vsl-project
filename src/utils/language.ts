import { Description } from "@radix-ui/react-dialog";
import { url } from "inspector";
import { FlaskConical, Leaf, ShieldCheck } from "lucide-react";
import { useSearchParams } from "next/navigation";

export const useGetLanguageData = () => {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang");
  if (lang === "pt") return PtData;
  return EnData;
};

const PtData = {
  home: {
    menu: {
      home: "Home",
      history: "História",
      products: "Produtos",
      testimonials: "Depoimentos",
      contact: "Contato",
    },
    title: "Olá, seja bem-vindo ao meu site",
    subtitle: "Explore meu conteúdo em português",

    banner: {
      title: "Cuide da sua saúde com produtos de qualidade",
      subtitle: "Encontre os melhores produtos farmacêuticos para você e sua família",
      button: "Ver nossos produtos",
      url: "/banner.png"
    },
    video: {
        title: "Conhecendo a linha de produtos do Simbor",
        url: "BnUUraohdpA"
    },
    reasons: {
    title: "Por que escolher a NutraPage VSL?",
    items: [
        {
        icon: Leaf, // componente do ícone
        title: "Ingredientes naturais",
        subtitle:
            "Aproveite o poder da natureza com extratos botânicos de alta qualidade, cuidadosamente selecionados.",
        },
        {
        icon: FlaskConical,
        title: "Cientificamente comprovado",
        subtitle:
            "Fórmulas respaldadas por pesquisas rigorosas e testes científicos avançados para garantir eficácia.",
        },
        {
        icon: ShieldCheck,
        title: "Qualidade confiável",
        subtitle:
            "Compromisso com pureza, potência e segurança, assegurando que cada produto atenda aos mais altos padrões.",
        },
    ],
    },


  },
products: [
  {
    name: "Simbor",
    description:
      "O Simbor é uma linha de produtos farmacêuticos de alta qualidade, desenvolvida para atender às necessidades de cuidados com a saúde e bem-estar de indivíduos.",
    price: 45.99,
    url: "/simbor.png",
    avaliation: 4,
  },
  {
    name: "NutraVita",
    description:
      "Suplemento vitamínico completo que auxilia no fortalecimento do sistema imunológico e na manutenção da energia diária.",
    price: 59.9,
    url: "/nutravita.png",
    avaliation: 5,
  },
  {
    name: "HerbalCare",
    description:
      "Produto natural à base de ervas medicinais, ideal para promover relaxamento e melhorar a qualidade do sono.",
    price: 34.5,
    url: "/herbalcare.png",
    avaliation: 3,
  },
  {
    name: "OmegaPlus",
    description:
      "Rico em ômega-3, auxilia na saúde cardiovascular e no bom funcionamento do cérebro.",
    price: 72.0,
    url: "/omegaplus.png",
    avaliation: 5,
  },
  {
    name: "CalciStrong",
    description:
      "Suplemento de cálcio e vitamina D, desenvolvido para fortalecer ossos e dentes.",
    price: 39.99,
    url: "/calcistrong.png",
    avaliation: 4,
  },
  {
    name: "Probiomax",
    description:
      "Fórmula avançada de probióticos para equilíbrio da flora intestinal e melhora da digestão.",
    price: 64.5,
    url: "/probiomax.png",
    avaliation: 4,
  },
]

  
};

const EnData = {
  home: {
    menu: {
      home: "Home",
      history: "History",
      products: "Products",
      testimonials: "Testimonials",
      contact: "Contact us",
    },
    title: "Hello, welcome to my site",
    subtitle: "Explore my content in English",

    banner: {
      title: "Take care of your health with quality products",
      subtitle: "Find the best pharmaceutical products for you and your family",
      button: "See our products",
      url: "/banner.png"
    },

    video: {
        title: "Knowing the product line of Simbor",
        url: "BnUUraohdpA"
    },
    reasons: {
    title: "Por que escolher a NutraPage VSL?",
    items: [
        {
        icon: Leaf, // componente do ícone
        title: "Ingredientes naturais",
        subtitle:
            "Aproveite o poder da natureza com extratos botânicos de alta qualidade, cuidadosamente selecionados.",
        },
        {
        icon: FlaskConical,
        title: "Cientificamente comprovado",
        subtitle:
            "Fórmulas respaldadas por pesquisas rigorosas e testes científicos avançados para garantir eficácia.",
        },
        {
        icon: ShieldCheck,
        title: "Qualidade confiável",
        subtitle:
            "Compromisso com pureza, potência e segurança, assegurando que cada produto atenda aos mais altos padrões.",
        },
    ],
    },
  },
  products: [
  {
    name: "Simbor",
    description:
      "Simbor is a line of high-quality pharmaceutical products, developed to meet the health and wellness needs of individuals.",
    price: 45.99,
    url: "/simbor.png",
    avaliation: 4,
  },
  {
    name: "NutraVita",
    description:
      "A complete multivitamin supplement that helps strengthen the immune system and maintain daily energy.",
    price: 59.9,
    url: "/nutravita.png",
    avaliation: 5,
  },
  {
    name: "HerbalCare",
    description:
      "A natural product made from medicinal herbs, ideal for promoting relaxation and improving sleep quality.",
    price: 34.5,
    url: "/herbalcare.png",
    avaliation: 3,
  },
  {
    name: "OmegaPlus",
    description:
      "Rich in omega-3, it supports cardiovascular health and proper brain function.",
    price: 72.0,
    url: "/omegaplus.png",
    avaliation: 5,
  },
  {
    name: "CalciStrong",
    description:
      "Calcium and vitamin D supplement, developed to strengthen bones and teeth.",
    price: 39.99,
    url: "/calcistrong.png",
    avaliation: 4,
  },
  {
    name: "Probiomax",
    description:
      "An advanced probiotic formula for balancing intestinal flora and improving digestion.",
    price: 64.5,
    url: "/probiomax.png",
    avaliation: 4,
  },
]

};