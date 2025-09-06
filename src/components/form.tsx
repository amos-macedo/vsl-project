import { useGetLanguageData } from "@/utils/language";
import { Button } from "./ui/button";
import { useState } from "react";
import toast from "react-hot-toast";

export const Form = () => {
  const data = useGetLanguageData();
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    try {
      setIsLoading(true);

      const res = await fetch(`https://formsubmit.co/${inputEmail}`, {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        toast.success(data.form.status.success);

        setInputEmail("");
        setInputMessage("");
        setInputName("");
      } else {
        toast.error(data.form.status.error);
        // alert(data.form.status.error);
      }
    } catch {
      toast.error(data.form.status.error);
    }

    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
      <div>
        <div>{data.form.inputName.label}</div>
        <input
          className="w-full my-2 px-3 py-2 rounded-md border border-gray-300"
          type="text"
          name="name"
          placeholder={data.form.inputName.placeholder}
          required
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
        />
      </div>

      <div>
        <div>{data.form.inputEmail.label}</div>
        <input
          className="w-full my-2 px-3 py-2 rounded-md border border-gray-300"
          type="email"
          name="email"
          placeholder={data.form.inputEmail.placeholder}
          value={inputEmail}
          onChange={(e) => setInputEmail(e.target.value)}
          required
        />
      </div>

      <div>
        <div>{data.form.inputMessage.label}</div>
        <textarea
          name="message"
          className="w-full my-2 min-h-20 px-3 py-2 rounded-md border border-gray-300"
          placeholder={data.form.inputMessage.placeholder}
          required
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
        />
      </div>

      <Button
        isLoading={isLoading}
        className="bg-[#499537FF] self-center w-full "
        type="submit"
      >
        {data.form.button}
      </Button>
    </form>
  );
};
