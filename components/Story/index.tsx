import Image from "next/image";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { stories } from "../../assets/data/story";
import { useState } from "react";

const StoryComponent = () => {
  const [myIndex, setMyIndex] = useState(0);

  return (
    <div className="bg-gradient-to-r from-[rgb(230,252,255)] to-white pb-24 pt-8 xl:pt-16 z-0">
      <div className="container mx-auto xl:w-10/12">
        {stories.map((item) => {
          return (
            <div
            key={item.name}
              className={`${
                item.index === myIndex ? "flex flex-col" : "hidden"
              }`}
            >
              <div className="flex justify-end space-x-4 items-center">
                <HiArrowLeft
                  size={32}
                  className="rounded-full bg-gray-100 text-gray-700 p-2 border cursor-pointer"
                  onClick={() =>
                    setMyIndex(item.index - 1 < 0 ? 0 : item.index - 1)
                  }
                />
                <HiArrowRight
                  size={32}
                  className="rounded-full bg-gray-100 text-gray-700 p-2 border cursor-pointer"
                  onClick={() =>
                    setMyIndex(item.index + 1 > 2 ? 2 : item.index + 1)
                  }
                />
              </div>
              <div key={item.index} className="mt-4 shadow-lg">
                <div className="flex flex-col xl:flex-row">
                  <div className="w-full xl:w-2/3 bg-white rounded-tl-lg rounded-tr-lg xl:rounded-tr-none xl:rounded-bl-lg">
                    <div className="p-10 flex flex-col h-full justify-between">
                      <p className="text-base xl:text-xl text-gray-700 font-normal mt-6">
                        {item.content}
                      </p>
                      <div className="my-20 h-[1px] w-32 bg-[#091E42]"></div>
                      <div>
                        <p className="text-sm xl:text-base text-[#091E42]">
                          {item.name}
                        </p>
                        <p className="text-sm xl:text-base text-[#091E42]">
                          {item.position}
                        </p>
                      </div>
                      <div className="flex items-center justify-between mt-6">
                        <Image src={item.logo} alt="picture" className="" />
                        <p className="text-sm xl:text-base text-blue-600 underline underline-offset-2">
                          Read the story
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full xl:w-1/3 bg-gradient-to-r from-indigo-500 to-rose-300 xl:rounded-tr-lg rounded-bl-lg xl:rounded-bl-none rounded-br-lg">
                    <div className="mt-6 p-10 flex flex-col justify-between h-full">
                      <p className="text-base xl:text-3xl text-white">
                        {item.header}
                      </p>
                      <p className="text-sm xl:text-base text-white mt-10 underline underline-offset-2">
                        Trello TechValidate Survey
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StoryComponent;
