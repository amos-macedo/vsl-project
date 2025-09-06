import { Star } from "lucide-react";
import { Button } from "./ui/button";

type IconCardProps = {
  image?: string;
  name?: string;
  description?: string;
  grade?: number;
  onClick?: () => void;
};

export const TestimonialCard = ({
  image,
  name,
  description,
  grade,
  onClick,
}: IconCardProps) => {
  return (
    <div className="flex flex-col gap-3 p-0 justify-center items-center  min-w-[80dvw] md:min-w-[300px]  min-h-[20em]  h-full rounded-lg bg-white border shadow-sm border-slate-300 md:shadow-none md:border-[#F5F5F5]  ">
      {image && (
        <img className="w-1/3  md:w-1/4 rounded-full  " src={image} alt="" />
      )}
      <div className="flex flex-col-reverse md:flex-col  gap-3 justify-center items-center  w-full p-6 md:pt-0 h-full">
        <div className="flex gap-3 flex-col justify-center items-center w-full ">
          <h1 className="md:text-xl text-xl  font-semibold">{name}</h1>

          <div className="flex gap-1 items-center">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                style={{
                  fill:
                    grade !== undefined && index + 1 <= grade
                      ? "#F7DC6F"
                      : "#eee",
                }}
                key={index}
                className="w-4 h-4"
                color={
                  grade !== undefined && index + 1 <= grade ? "#F2C464" : "#eee"
                }
              />
            ))}
          </div>
        </div>

        <p className="text-sm text-center text-slate-500 w-full">
          {`"${description}"`}
        </p>
      </div>
    </div>
  );
};
