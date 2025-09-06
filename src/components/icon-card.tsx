type IconCardProps = {
  icon?: React.ReactNode;
  title?: string;
  description?: string;
};

export const IconCard = ({ icon, title, description }: IconCardProps) => {
  return (
    <div className="flex flex-col w-3/4 md:w-full gap-4 justify-center items-center p-6 rounded-md  bg-white ">
      {icon}

      <h1 className="md:text-xl text-xl text-center font-bold">{title}</h1>
      <p className="text-sm text-center text-slate-500">{description}</p>
    </div>
  );
};
