import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Howithelps from "./components/Howithelps";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <Navbar />
      <Hero />
      <Howithelps />
    </main>
  );
}

export default App;
