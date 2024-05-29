import { useState } from "react";
import { createPortal } from "react-dom";
import { Modal } from "./components/Modal";
import { showToast } from "./utils/showToast";
import Nested from "./components/Nested";

function App() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
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
      <Nested />
      {createPortal(
        <Modal onClose={handleModalClose} open={open} />,
        document.getElementById("portal") as HTMLDivElement
      )}
    </>
  );
}

export default App;
