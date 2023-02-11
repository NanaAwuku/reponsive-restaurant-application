import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import CreateContainer from "./components/CreateContainer";
import { AnimatePresence } from "framer-motion";
import { useStateValue } from "./context/StateProvider";
import { getAllFoodItems } from "./utils/firebaseFunctions";
import { useEffect } from "react";
import { actionType } from "./context/reducer";

function App() {
  const [{foodItems}, dispatch]= useStateValue();

  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AnimatePresence exitBeforeEnter>
      <div className="w-screen h-auto flex flex-col bg-primary">
        <Navbar />

        <main className="mt-14 md:mt-20 w-full px-4 md:px-15 py-4">
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
