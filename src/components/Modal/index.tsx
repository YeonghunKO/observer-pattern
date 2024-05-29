import { useEffect, useState } from "react";
import Style from "./Modal.module.css";

export const Modal = () => {
  const [aniClass, setAniClassName] = useState("");

  useEffect(() => {
    setAniClassName(Style["move-up"]);
    setTimeout(() => {
      setAniClassName(Style["move-down"]);
    }, 1000);
  }, []);

  return <div className={`${Style.modal} ${aniClass}`}>Modal</div>;
};
