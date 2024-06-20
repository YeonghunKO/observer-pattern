import { ChangeEvent, useState } from "react";
import { createPortal } from "react-dom";
import { Modal } from "./components/Modal";
import { showToast } from "./utils/showToast";
import { useToast } from "./hooks/useToast";

const Nested = () => {
  return (
    <div>
      <p>하하</p>
      <button
        onClick={() => {
          showToast("何でもいいです。");
        }}
      >
        何でもいいです。
      </button>
    </div>
  );
};

function App() {
  const [message, setMessage] = useState("");

  const toasts = useToast();

  const handleClick = () => {
    showToast(message);
  };

  const onChnage = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  return (
    <>
      <input style={{ margin: "10px" }} onChange={onChnage} />
      <button onClick={handleClick} type="button">
        클릭해보렴
      </button>
      <Nested />
      {createPortal(
        toasts.map((toast) => <Modal key={toast.id} message={toast.value} />),
        document.getElementById("portal") as HTMLDivElement
      )}
    </>
  );
}

export default App;
