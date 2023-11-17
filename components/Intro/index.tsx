import Image from "next/image";
import { Banner } from "../../assets/imgs";
import InputComponent from "../Input";
import ButtonComponent from "../commons/Button";

const IntroComponent = () => {
  const bg = require("../../assets/imgs/bg.svg");
  return (
    <div>
      <div
        className="relative h-[110vh] xl:h-[70vh] bg-cover bg-center"
        style={{ backgroundImage: `url('../../assets/imgs/bg.svg')` }}
      >
        <div
          className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-rose-400"
          style={{ mixBlendMode: "normal" }}
        >
          <div className="container mx-auto xl:w-10/12 ">
            <div className="flex flex-col xl:flex-row py-10 xl:py-20 space-y-4 xl:space-y-0">
              <div className="w-full xl:w-1/2">
                <h2 className="text-3xl xl:text-5xl font-extrabold text-white xl:w-10/12 leading-10">
                  Trello brings all your tasks, teammates, and tools together
                </h2>
                <p className="text-white py-6 text-xl xl:text-2xl">
                  Keep everything in the same place—even if your team isnt.
                </p>
                <div className="mt-6 w-full flex flex-col xl:flex-row xl:space-x-4 space-y-4 xl:space-y-0">
                  <InputComponent name="Email" variant="w-full xl:w-6/12" />
                  <ButtonComponent variant="rounded-md text-white text-base xl:text-lg font-normal py-3 px-6 bg-blue-500">
                    Sign up - it&apos;s free!
                  </ButtonComponent>
                </div>
              </div>
              <div className="w-full xl:w-1/2">
                <Image src={Banner} alt="pic" className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroComponent;
