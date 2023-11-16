import Image from "next/image";
import { Integration } from "../../assets/imgs";
import ButtonComponent from "../commons/Button";
import { actions } from "../../assets/data/action";

const PowerfulComponent = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto lg:w-10/12 mt-48 mb-12">
        <h4 className="text-sm uppercase mt-1 font-bold">
          POWERFUL WAYS TO GROW
        </h4>
        <h2 className="text-2xl lg:text-3xl font-extrabold text-[#091e42] mt-2">
          Do more with Trello
        </h2>
        <p className="text-base lg:text-xl text-gray-700 font-normal mt-6 lg:w-7/12">
          Trello&apos;s intuitive features give any team the ability to quickly set
          up and customize workflows for just about anything.
        </p>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
          {actions.map((item) => {
            return (
              <div
                key={item.title}
                className="bg-[#FAFBFC] py-8 px-10 rounded-md"
              >
                <Image src={item.pic} alt="pic" className="w-20 h-20" />
                <h4 className="text-xl lg:text-2xl mt-4 font-bold">
                  {item.title}
                </h4>
                <p className="text-sm lg:text-base text-gray-700 font-normal mt-6 h-24">
                  {item.description}
                </p>
                <ButtonComponent variant="text-sm lg:text-base font-normal px-4 py-2 border border-blue-600 rounded-md mt-6">
                  {item.button}
                </ButtonComponent>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PowerfulComponent;
