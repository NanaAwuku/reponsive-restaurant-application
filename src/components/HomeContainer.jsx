import React from "react";
import Dilevery from "../img/delivery.png";
import Hero from "../img/hero-2.jpg";
import { HeroData } from "../utils/data";


const HomeContainer = () => {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full "
      id="home"
    >
      <div className="py-2 flex flex-col items-start md:items-start  gap-5 justify-start  flex-1">
        <div className="flex justify-center items-center gap-2 bg-bgMetalGold px-4 py-1 rounded-full">
          <p className="text-base text-bgGold font-semibold">Bike Delivery</p>
          <div className="w-6 h-6 rounded-full overflow-hidden bg-white drop-shadow-xl">
            <img
              src={Dilevery}
              className="w-full h-full object-contain"
              alt="delivery"
            />
          </div>
        </div>
        <p className="text-[2.5rem] lg:text-[4.4rem] font-bold tracking-wide text md:text-left">
          Enjoy all Amazing Delicacies{" "}
          <span className="text-bgMetalGold text-[3rem] lg:text-[5rem]">
            Here!
          </span>{" "}
        </p>
        <p className="text-base text-textColor md:w-[80%] text-center md:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ab
          ex eaque, officia id incidunt cupiditate asperiores quas eius sed
          distinctio error aut tempora alias nesciunt quo delectus blanditiis!
        </p>
        <button
          type="button"
          className="bg-gradient-to-br from-bgGold to bg-bgMetalGold w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out "
        >
          Order Now
        </button>
      </div>
      <div className="py-2 flex-1 relative flex items-center">
        {/* <div className="w-full flex justify-center items-center relative"></div> */}
        <img
          src={Hero}
          className="lg:h-600 h-370 w-full lg:w-400 ml-auto mr-8 rounded"
          alt="hero-bg"
        />
        <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center lg:px-32  py-4 gap-4 flex-wrap ">
          { HeroData && HeroData.map(item =>(
            <div key={item.id} className="lg:w-190  p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg ">
            <img src={item.imgsrc} className="w-20 lg:w-40 -mt-10 lg:-mt-20" alt="icecrem" />
            <p className="text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4">{item.descp}</p>
            <p className="text-[12px] lg:text-sm text-primary font-semibold my-1 lg:my-3">
              {item.name}
            </p>
            <p className="text-sm font-semibold text-headingColor">
              <span className="text-xs text-bgGold">GH₵</span> {item.price}
            </p>
          </div>
          ))

          }
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;
