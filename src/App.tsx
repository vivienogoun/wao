// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Hero from "./components/layout/hero";
import Navbar from "./components/layout/navbar";

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Hero />
      </div>
    </>
  );
}

export default App;
