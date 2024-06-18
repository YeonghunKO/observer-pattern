import { useEffect, useState } from "react";
import Style from "./Modal.module.css";

export const Modal = ({ message }: { message: string }) => {
  if (!message) {
    return null;
  }
  const [aniClass, setAniClassName] = useState(Style["move-up"]);

  useEffect(() => {
    setTimeout(() => {
      setAniClassName(Style["move-down"]);
    }, 1000);
  }, []);

  return (
    <div className={`${Style.modal} ${aniClass}`}>
      <p>{message}</p>
    </div>
  );
};
