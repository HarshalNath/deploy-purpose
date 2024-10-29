import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Howithelps from "./components/Howithelps";
import Uses from "./components/Uses";
import Trust from "./components/trust";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <Navbar />
      <Hero />
      <Howithelps />
      <Uses />
      <Trust />
    </main>
  );
}

export default App;
