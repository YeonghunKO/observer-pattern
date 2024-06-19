import { useEffect, useState } from "react";
import { toastSubject } from "../utils/toastSubject";

type TToast = {
  value: string;
  id: number;
};

export const useToast = () => {
  const [toast, setToast] = useState<TToast[]>([]);

  useEffect(() => {
    const handleToast = (message: string) => {
      const toastObj = { value: message, id: Date.now() };
      setToast((prev) => [...prev, toastObj]);

      setTimeout(() => {
        setToast([]);
      }, 2000);
    };

    toastSubject.subscribe(handleToast);

    return () => toastSubject.unSubscribe(handleToast);
  }, []);

  return toast;
};
