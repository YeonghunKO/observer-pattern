import { ReactNode, useEffect, useState } from "react";
import Style from "./Modal.module.css";
import { useToast } from "../../hooks/useToast";

export const Modal = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  const [aniClass, setAniClassName] = useState("");
  const toasts = useToast();
  const handleClose = () => {
    setAniClassName(Style["move-down"]);
    onClose();
  };

  useEffect(() => {
    if (open) {
      setAniClassName(Style["move-up"]);
    }
  }, [open]);

  return (
    <div className={`${Style.modal} ${aniClass}`}>
      {toasts.map((toast) => (
        <p key={toast.id}>{toast.value}</p>
      ))}
      <button onClick={handleClose}>close</button>
    </div>
  );
};
