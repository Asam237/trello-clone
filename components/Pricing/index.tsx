import { pricings } from "../../assets/data/pricing";
import ButtonComponent from "../commons/Button";

const PricingComponent = () => {
  return (
    <div className="bg-gradient-to-r from-[rgb(230,252,255)] to-white pb-24 pt-8 lg:pt-16 z-0">
      <div className="container mx-auto lg:w-10/12">
        <div className="flex items-center justify-center flex-col">
          <h2 className="text-2xl lg:text-3xl font-extrabold text-[#091e42] mt-2">
            Trello priced your way
          </h2>
          <h4 className="text-lg lg:text-2xl mt-1 font-bold">
            Trusted by millions, Trello powers teams all around the world.
          </h4>
          <ButtonComponent variant="rounded-md text-white text-base font-normal p-3 bg-blue-500 mt-4">
            Compare plans
          </ButtonComponent>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {pricings.map((item) => {
              return (
                <div
                  key={item.title}
                  className={`bg-white ${
                    item.index === 2 ? "border-[#00B8D9] border-2" : "border"
                  } px-6 py-10`}
                >
                  <h4 className="text-base uppercase font-extrabold">
                    {item.title}
                  </h4>
                  <div className="py-6 lg:py-10">
                    <h1 className="text-3xl lg:text-5xl">
                      <span className="text-lg">$</span>
                      {item.cheap}
                      <span className="text-lg">USD</span>
                    </h1>
                    <p className="text-xs h-12 py-4">{item.subTitle}</p>
                  </div>
                  <div className="h-32 lg:h-44">
                    <p className="text-md lg:text-lg">{item.description}</p>
                  </div>
                  <ButtonComponent variant="text-sm lg:text-base font-normal px-4 py-2 border border-blue-600 rounded-md mt-6 mb-10 lg:mb-16 hover:bg-cyan-50">
                    {item.button}
                  </ButtonComponent>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingComponent;
