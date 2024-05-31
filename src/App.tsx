import { useState } from "react";
import { createPortal } from "react-dom";
import { Modal } from "./components/Modal";
import { showToast } from "./utils/showToast";

function App() {
  const [open, setOpen] = useState(false);
  const [initOpen, setInitOpen] = useState(true);

  const handleClick = () => {
    setOpen(true);

    if (initOpen) {
      setInitOpen(false);
    }

    showToast("토스트 내놔 🥪");
  };

  const handleModalClose = () => {
    setOpen(false);
  };

  return (
    <>
      <button onClick={handleClick} type="button">
        클릭해보렴
      </button>
      {createPortal(
        <Modal onClose={handleModalClose} open={open} initOpen={initOpen} />,
        document.getElementById("portal") as HTMLDivElement
      )}
    </>
  );
}

export default App;
