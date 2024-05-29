import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Module from "./App.module.css";
import Nested from "./components/Nested";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button type="button">클릭해보렴</button>
      <Nested />
    </>
  );
}

export default App;
