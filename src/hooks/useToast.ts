import { useEffect, useState } from "react";
import { toastSubject } from "../utils/toastSubject";

type TToast = {
  value: string;
  id: number;
};

export const useToast = () => {
  const [toast, setToast] = useState<TToast[]>([]);

  useEffect(() => {
    let id: number;
    const handleToast = (message: string) => {
      const toastObj = { value: message, id: Date.now() };
      setToast((prev) => [...prev, toastObj]);

      clearTimeout(id);
      id = setTimeout(() => {
        setToast([]);
        console.log(toastObj);
      }, 5000);
    };

    toastSubject.subscribe(handleToast);

    return () => toastSubject.unSubscribe(handleToast);
  }, []);

  return toast;
};
