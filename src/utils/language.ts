"use client";
import { Facebook, FlaskConical, Instagram, Leaf, Linkedin, Phone, ShieldCheck, Subtitles, Twitter } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { title } from "process";


export const useGetLanguageData = () => {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang");
  if (lang === "pt") return PtData;
  return EnData;
};

const PtData = {
  lang: "pt",
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
    products: {
      title: "Nossos produtos premium",
    },
    history: {
      title: "De uma pequena farmácia a líder em inovação",
      description:  `Fundada em 1985, a BioPharma começou como uma pequena farmácia familiar em uma cidade do interior, com a missão de oferecer medicamentos de qualidade e atendimento próximo à comunidade. Nos primeiros anos, enfrentamos diversos desafios, desde limitações de estoque até a necessidade de conquistar a confiança dos clientes. Com dedicação e foco em excelência, iniciamos investimentos em pesquisa e desenvolvimento, ampliando nossa linha de medicamentos genéricos e introduzindo práticas inovadoras de produção e controle de qualidade. Ao longo das décadas, expandimos nossas operações para diversas cidades e conquistamos reconhecimento nacional, sempre mantendo os valores de transparência,  responsabilidade \n e cuidado com a saúde. Hoje, a BioPharma é referência em soluções farmacêuticas, combinando tradição e inovação para atender milhões de pessoas com segurança e eficiência.`,
      url: "/history-img.png"
    },
    testimonials: {
      title: "O que nossos clientes dizem",
    },
    contact: {
      title: "Fale conosco",
      subtitle: "Entre em contato conosco para obter mais informações ou fazer uma pergunta",
      address: "Rua da Farmácia, 123, Cidade, Estado, País",
      phone: "+1 (800) 123-4567",
      email: "support@nutrapaqevsl.com",
      form: {
        title: "Nos envie uma mensagem",
        inputName: {
          label: "Nome",
          placeholder: "Seu nome",
        },
        inputEmail: {
          label: "Email",
          placeholder: "Seu email",
        },
        inputMessage: {
          label: "Mensagem",
          placeholder: "Sua mensagem",
        },
        button: "Enviar",
        status:{
          success: "Mensagem enviada com sucesso!",
          error: "Erro ao enviar mensagem.",
        }
      },
    }
  },

  checkOut: {
  personalForm: {
    title: "Informações do Cliente",
      subtitle: "Insira os detalhes de envio.",
      inputName: {
      label: "Nome Completo",
      placeholder: "Seu nome",
    },
    inputEmail: {
      label: "Endereço de Email",
      placeholder: "Seu email",
    },
    inputPhone: {
      label: "Número de Telefone",
      placeholder: "(11) 99999-9999",
    },
    inputStreetCode: {
      label: "Endereço",
      placeholder: "Rua Exemplo, 123",
    },
    inputState: {
      label: "Estado/Província",
      placeholder: "Selecione o Estado",
    },
    inputCountry: {
      label: "País",
      placeholder: "Selecione o País",
    },
    inputCity: {
      label: "Cidade",
      placeholder: "ExemploCity",
    },
    inputZipCode: {
      label: "CEP",
      placeholder: "12345-678",
    },
  },
  productDetails: {
    title: "Resumo do Pedido",
    subtotal: "Subtotal",
    shipping: {
      title: "Frete",
      price: 7.50
    },
    total: "Total",
    secure: "Checkout seguro com nossa Garantia de Reembolso de 30 dias.",
  },
  paymentForm: {
    title: "Detalhes de Pagamento",
    cardsImgs: [
      "/visa.png",
      "/visa.png",
      "/visa.png",
    ],
    cardNumber: {
      label: "Número do Cartão",
      placeholder: "1234 5678 9012 3456",
    },
    cardName: {
      label: "Nome no Cartão",
      placeholder: "João Silva",
    },
    expiration: {
      label: "Validade (MM/AA)",
      placeholder: "MM/AA",
    },
    cvv: {
      label: "CVV",
      placeholder: "123",
    },
    saveInfo: "Salvar informação de pagamento para a próxima compra.",
  },
  button: "Finalizar Compra",
  return: "Voltar para a Página Inicial",
},



  footer: {
  description:
    "A NutraPage VSL oferece produtos nutracêuticos premium desenvolvidos para o seu bem-estar e saúde ideais...",
        socials: [
      {
        icon: Instagram,
        url: "https://www.instagram.com/",
      },
      {
        icon: Facebook,
        url: "https://www.facebook.com/",
      },
      {
        icon: Twitter,
        url: "https://twitter.com/",
      },
      {
        icon: Linkedin,
        url: "https://www.linkedin.com/",
      },
    ],
    quickLinks: {
      title: "Links rápidos",
    },
    discover: {
      title: "Descubra mais",
      button: "Aprenda mais",
    },
  copyright: `© ${new Date().getFullYear()} Seu Nome. Todos os direitos reservados.`,
  },


  products: 
  [
    {
      id: "simbor-1",
      name: "Simbor",
      description:
        "Simbor é uma linha de produtos farmacêuticos de alta qualidade",
      price: 45.99,
      url: "/product.png",
      avaliation: 4,
    },
    {
      id: "nutravita-2",
      name: "NutraVita",
      description:
        "Simbor é uma linha de produtos farmacêuticos de alta qualidade",
      price: 59.9,
      url: "/product.png",
      avaliation: 5,
    },
    {
      id: "herbalcare-3",
      name: "HerbalCare",
      description:
        "Simbor é uma linha de produtos farmacêuticos de alta qualidade",
      price: 34.5,
      url: "/product.png",
      avaliation: 3,
    },
    {
      id: "omegaplus-4",
      name: "OmegaPlus",
      description:
        "Simbor é uma linha de produtos farmacêuticos de alta qualidade",
      price: 72.0,
      url: "/product.png",
      avaliation: 5,
    },
    {
      id: "calcistrong-5",
      name: "CalciStrong",
      description:
        "Suplemento de cálcio e vitamina D.",
      price: 39.99,
      url: "/product.png",
      avaliation: 4.5,
    },
    {
      id: "probiomax-6",
      name: "Probiomax",
      description:
        "Simbor é uma linha de produtos farmacêuticos de alta qualidade",
      price: 64.5,
      url: "/product.png",
      avaliation: 4,
    },
  ],
  testimonials: [
    {
      name: "Ana Souza",
      description: "Os produtos da BioPharma são de excelente qualidade. Estou muito satisfeita com o atendimento e a eficiência das entregas.",
      url: "/testimonial.jpg",
      avaliation: 5
    },
    {
      name: "Carlos Mendes",
      description: "Sempre confiei na BioPharma para medicamentos genéricos confiáveis. Recomendo a todos que buscam qualidade e segurança.",
      url: "/testimonial.jpg",
      avaliation: 4.5
    },
    {
      name: "Mariana Lima",
      description: "O suporte ao cliente é impecável e os produtos chegaram rapidamente. Uma marca que cumpre o que promete.",
      url: "/testimonial.jpg",
      avaliation: 5
    },
    {
      name: "Ricardo Alves",
      description: "Produtos de alta qualidade e preço justo. A BioPharma se tornou minha farmácia de confiança.",
      url: "/testimonial.jpg",
      avaliation: 4
    },
  ],
  
};

const EnData = {
  lang: "en",
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
    title: "Why choose the Simbor line?",
    items: [
      {
        icon: Leaf, // componente do ícone
        title: "Natural Ingredients",
        subtitle:
          "Harness the power of nature with high-quality botanical extracts, carefully selected.",
      },
      {
        icon: FlaskConical,
        title: "Scientifically Proven",
        subtitle:
          "Formulas backed by rigorous research and advanced scientific testing to ensure effectiveness.",
      },
      {
        icon: ShieldCheck,
        title: "Reliable Quality",
        subtitle:
          "Commitment to purity, potency, and safety, ensuring each product meets the highest standards.",
      },
    ],
    },
    products: {
      title: "Our premium products",
    },
    history: {
      title: "From a Small Pharmacy to a Leader in Innovation",
      description: "Founded in 1985, BioPharma began as a small family-run pharmacy in a provincial town, with the mission of providing high-quality medicines and personalized care to the community. In the early years, the company faced numerous challenges, from limited stock to building customer trust. Through dedication and a focus on excellence, BioPharma began investing in research and development, expanding its line of generic medicines and introducing innovative practices in production and quality control. Over the decades, the company expanded its operations to multiple cities and gained national recognition, always upholding values of transparency, responsibility, and care for health. Today, BioPharma is a benchmark in pharmaceutical solutions, blending tradition and innovation to safely and efficiently serve millions of people.",
      url: "/history-img.png"
    },
    testimonials: {
      title: "What our customers say",
    },
    contact: {
      title: "Contact us",
      subtitle: "Contact us for more information or to ask a question",
      address: "123 Main Street, Anytown, USA",
      phone: "+1 (800) 123-4567",
      email: "support@nutrapaqevsl.com",
      form: {
        title: "Send us a message",
        inputName: {
          label: "Name",
          placeholder: "Your name",
        },
        inputEmail: {
          label: "Email",
          placeholder: "Your email",
        },
        inputMessage: {
          label: "Message",
          placeholder: "Your message",
        },
        button: "Send",
        status:{
          success: "Message sent successfully!",
          error: "Error sending message.",
        }
      },
    },
  },  

  checkOut: {
    
    personalForm: {
      title: "Customer Information",
      subtitle: "Enter your shipping details.",
      inputName: {
        label: "Full Name",
        placeholder: "Your name",
      },
      inputEmail: {
        label: "Email Address",
        placeholder: "Your email",
      },
      inputPhone: {
        label: "Phone Number",
        placeholder: "(555) 555-5555",
      },
      inputStreetCode: {
        label: "Street Code",
        placeholder: "123 Main St",
      },
      inputState: {
        label: "State/Province",
        placeholder: "Select State",
      },
      inputCountry: {
        label: "Country",
        placeholder: "Select Country",
      },
      inputCity: {
        label: "City",
        placeholder: "Anytown",
      },
      inputZipCode: {
        label: "Zip Code",
        placeholder: "12345",
      },
    },
    productDetails: {
      title: "Order Summary",
      subtotal: "Subtotal",
      shipping: {
        title: "Shipping",
        price: 7.50
    },
      total: "Total",
      secure: "Secure checkout backed by our 30-Day Money-Back Guarantee.",
    },
    paymentForm: {
      title: "Payment Details",
      cardsImgs: [
        "/visa.png",
        "/visa.png",
        "/visa.png",
      ],
      cardNumber: {
        label: "Card Number",
        placeholder: "1234 5678 9012 3456",
      },
      cardName: {
        label: "Name on Card",
        placeholder: "John Mayer",
      },
      expiration: {
        label: "Expiration (MM/YY)",
        placeholder: "MM/YY",
      },
      cvv: {
        label: "CVV",
        placeholder: "123",
      },
      saveInfo: "Save this information for next time",
    },
    button: "Complete Purchase",
    return: "Return to Home",
  },

  footer: {
    description:
      "NutraPage VSL offers premium nutraceutical products designed for your optimal health and wellness...",
    socials: [
      {
        icon: Instagram,
        url: "https://www.instagram.com/",
      },
      {
        icon: Facebook,
        url: "https://www.facebook.com/",
      },
      {
        icon: Twitter,
        url: "https://twitter.com/",
      },
      {
        icon: Linkedin,
        url: "https://www.linkedin.com/",
      },
    ],
    quickLinks: {
      title: "Quick links",
    },
    discover: {
      title: "Discover more",
      button: "Learn more",
    },
    copyright: `© ${new Date().getFullYear()} Your Name. All rights reserved.`,
  },



  products: 
  [
    {
      id: "simbor-1",
      name: "Simbor",
      description:
        "Simbor is a line of high-quality pharmaceutical products",
      price: 45.99,
      url: "/product.png",
      avaliation: 4,
    },
    {
      id: "nutravita-2",
      name: "NutraVita",
      description:
        "Simbor is a line of high-quality pharmaceutical products",
      price: 59.9,
      url: "/product.png",
      avaliation: 5,
    },
    {
      id: "herbalcare-3",
      name: "HerbalCare",
      description:
        "Simbor is a line of high-quality pharmaceutical products",
      price: 34.5,
      url: "/product.png",
      avaliation: 3,
    },
    {
      id: "omegaplus-4",
      name: "OmegaPlus",
      description:
        "Simbor is a line of high-quality pharmaceutical products",
      price: 72.0,
      url: "/product.png",
      avaliation: 5,
    },
    {
      id: "calcistrong-5",
      name: "CalciStrong",
      description:
        "Simbor is a line of high-quality pharmaceutical products",
      price: 39.99,
      url: "/product.png",
      avaliation: 4.5,
    },
    {
      id: "probiomax-6",
      name: "Probiomax",
      description:
        "Simbor is a line of high-quality pharmaceutical products",
      price: 64.5,
      url: "/product.png",
      avaliation: 4,
    },
  ],
  testimonials: 
  [
      {
        name: "Ana Souza",
        description: "BioPharma's products are of excellent quality. I am very satisfied with the service and delivery efficiency.",
        url: "/testimonial.jpg",
        avaliation: 5
      },
      {
        name: "Carlos Mendes",
        description: "I have always trusted BioPharma for reliable generic medicines. I recommend it to anyone seeking quality and safety.",
        url: "/testimonial.jpg",
        avaliation: 4
      },
      {
        name: "Mariana Lima",
        description: "Customer support is impeccable and the products arrived quickly. A brand that delivers on its promises.",
        url: "/testimonial.jpg",
        avaliation: 5
      },
      {
        name: "Ricardo Alves",
        description: "High-quality products at a fair price. BioPharma has become my trusted pharmacy.",
        url: "/testimonial.jpg",
        avaliation: 4
      },
    ]


};