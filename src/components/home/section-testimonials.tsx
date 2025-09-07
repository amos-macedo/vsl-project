"use client";

import { useGetLanguageData } from "@/utils/language";
import { TestimonialCard } from "../testimonial-card";

export const SectionTestimonials = ({ id }: { id?: string }) => {
  const data = useGetLanguageData();

  const lang = data.lang;
  return (
    <section id="testimonials" className="bg-white  w-full  mt-20 py-20 ">
      <div className="flex  flex-col container items-center justify-center gap-10 md:max-w-[70em] w-full  mx-auto">
        <h1 className="md:text-3xl text-xl font-bold">
          {data.home.testimonials.title}
        </h1>

        <div className="flex scrollbar-hide flex-row gap-7 justify-between items-center p-3 rounded-md  w-full overflow-x-scroll ">
          {data.testimonials.map((product, index) => (
            <TestimonialCard
              key={index}
              image={product.url}
              name={product.name}
              description={product.description}
              grade={product.avaliation}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
