import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import CreateContainer from "./components/CreateContainer";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <AnimatePresence exitBeforeEnter>
      <div className="w-screen h-auto flex flex-col bg-primary">
        <Navbar />

        <main className="mt-24 w-full p-8">
          <Routes>
            <Route path="/" element={<MainContainer/>} />
            <Route path="/createitem" element={<CreateContainer/>} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
}

export default App;
