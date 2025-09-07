import { Star } from "lucide-react";
import { Button } from "./ui/button";

type ProductCardProps = {
  image?: string;
  name?: string;
  description?: string;
  price?: number;
  grade?: number;
  lang?: string;
  id?: string;
  onClick?: (id: string) => void;
};

export const ProductCard = ({
  image,
  name,
  description,
  price,
  grade,
  lang,
  id,
  onClick,
}: ProductCardProps) => {
  return (
    <div className="flex hover:shadow-xl hover:scale-102 ease-in-out duration-200 flex-col p-0 justify-center items-center  min-w-[80dvw] md:min-w-[300px]  min-h-[20em] md:min-h-[24em]  h-full rounded-md bg-white border border-slate-200 shadow-md ">
      {image && (
        <div className="w-full h-full p-0 md:p-6 ">
          <img
            className="w-full h-full rounded-none md:rounded-md "
            src={image}
            alt=""
          />
        </div>
      )}
      <div className="flex flex-col gap-4 justify-center items-center  w-full p-6 md:pt-0 h-full">
        <h1 className="md:text-xl text-xl text-start w-full font-bold">
          {name}
        </h1>
        <p className="text-sm text-start text-slate-500 w-full">
          {description}
        </p>

        <div className="flex justify-between items-center w-full ">
          <p className="text-[#499537FF] font-bold text-lg">
            {lang === "pt" ? "R$" : "$"}
            {price}
          </p>
          <div className="flex gap-2 items-center">
            <div className="flex gap-1 items-center">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  className="w-4 h-4"
                  color={
                    grade !== undefined && index + 1 <= grade
                      ? "#CC8F5CFF"
                      : "#ccc"
                  }
                />
              ))}
            </div>
            <p className="text-sm text-start text-slate-500 w-full">{`(${grade})`}</p>
          </div>
        </div>

        <Button
          className="bg-[#499537FF] hover:bg-[#3E7F3EFF] w-full"
          onClick={() => onClick?.(id || "")}
        >
          {lang === "pt" ? "Comprar" : "Buy"}
        </Button>
      </div>
    </div>
  );
};
