import Image from "next/image";
import { Banner } from "../../assets/imgs";

const IntroComponent = () => {
  const bg = require("../../assets/imgs/bg.svg");
  return (
    <div>
      <div
        className="relative h-[70vh] bg-cover bg-center"
        style={{ backgroundImage: `url('../../assets/imgs/bg.svg')` }}
      >
        <div
          className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-rose-400"
          style={{ mixBlendMode: "normal" }}
        >
          <div className="container mx-auto xl:w-10/12 ">
            <div className="flex flex-col xl:flex-row py-10 xl:py-20">
              <div className="w-full xl:w-1/2">
                <h2 className="text-3xl xl:text-5xl font-extrabold text-white xl:w-10/12 leading-10">
                  Trello brings all your tasks, teammates, and tools together
                </h2>
                <p>
                  Keep everything in the same place—even if your team isnt.
                </p>
              </div>
              <div className="w-full xl:w-1/2">
                <Image src={Banner} alt="pic" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroComponent;
