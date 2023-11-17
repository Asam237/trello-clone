import Image from "next/image";
import { Visa } from "../../assets/imgs";

const JoinsComponent = () => {
  return (
    <div className="bg-gradient-to-r from-[rgb(230,252,255)] to-white pb-24 pt-8 xl:pt-16 z-0">
      <div className="container mx-auto xl:w-10/12">
        <h4 className="text-base xl:text-xl mt-1 font-bold text-center">
          Join over 2,000,000 teams worldwide that are using Trello to get more
          done.
        </h4>
        <div className="flex items-center justify-center pt-8">
          <Image alt="pic" src={Visa} />
        </div>
      </div>
    </div>
  );
};

export default JoinsComponent;
