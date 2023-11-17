import { useState } from "react";
import { trello101 } from "../../assets/data/trello101";
import Image from "next/image";
import { Carousel1 } from "../../assets/imgs";

const Trello101Component = () => {
  const [card, setCard] = useState("Boards");
  const [pic, setPic]: any = useState(Carousel1);
  return (
    <div className="bg-gradient-to-r from-slate-50 via-blue-100 to-teal-100 pb-24 pt-2">
      <div className="container mx-auto xl:w-10/12 ">
        <h4 className="text-sm uppercase mt-1 font-bold">Trello 101</h4>
        <h2 className="text-3xl font-extrabold text-[#091e42] mt-2">
          A productivity powerhouse
        </h2>
        <p className="text-xl text-gray-700 font-normal mt-6 xl:w-7/12">
          Simple, flexible, and powerful. All it takes are boards, lists, and
          cards to get a clear view of who&apos;s doing what and what needs to
          get done. Learn more in our{" "}
          <span className="text-blue-600 underline">
            guide for getting started.
          </span>
        </p>
        <div className="mt-6 flex flex-col xl:flex-row items-start xl:space-x-4 w-full">
          <div className="w-full xl:w-1/3 flex flex-col space-y-8">
            {trello101.map((item) => {
              return (
                <div
                  key={item.title}
                  className={`relative ${
                    card === item.title
                      ? "bg-white text-gray-800 shadow-md rounded-md border-0 h-full p-4 md:p-6 relative text-left"
                      : ""
                  } cursor-pointer`}
                  onClick={() => {
                    setCard(item.title);
                    setPic(item.picture);
                  }}
                >
                  <div
                    className={`${
                      card === item.title
                        ? "absolute inset-0 bg-teal-400 rounded-l-md"
                        : ""
                    }`}
                    style={{ width: "0.5rem" }}
                  ></div>
                  <div className="relative pl-2">
                    <div>
                      <div>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="h-72 w-full xl:w-2/3 hidden xl:flex">
            <Image
              src={pic}
              alt="image"
              className={`w-full h-[60vh] bg-cover rounded-md hidden xl:flex`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trello101Component;
