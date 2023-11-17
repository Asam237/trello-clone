import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import ButtonComponent from "../commons/Button";
import { useRef } from "react";
import { actions2 } from "../../assets/data/action";

const TrelloActionComponent = () => {
  const targetElementRef: any = useRef(null);
  const containerRef: any = useRef(null);

  const scrollToEnd = () => {
    if (containerRef.current && targetElementRef.current) {
      const container = containerRef.current;
      const targetElement = targetElementRef.current;

      container.scrollTo({
        left: targetElement.offsetLeft,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="bg-slate-50 pb-24 pt-8 xl:pt-16">
      <div className="container mx-auto xl:w-10/12">
        <h4 className="text-sm uppercase mt-1 font-bold">TRELLO IN ACTION</h4>
        <h2 className="text-3xl font-extrabold text-[#091e42] mt-2">
          Workflows for any project, big or small
        </h2>
        <div className="flex flex-col items-start justify-center space-y-4 xl:space-y-0 xl:flex-row xl:justify-between">
          <p className="text-lg text-gray-700 font-normal mt-6">
            No need to start from scratch. Jump-start your workflow with a
            proven playbook
            <br />
            designed for different teams. Customize it to make it yours.
          </p>
          <ButtonComponent variant="text-base font-normal px-4 py-2 border border-blue-600 rounded-md">
            Explore all Use Cases
          </ButtonComponent>
        </div>
        <div className="flex justify-end space-x-4 items-center mt-4">
          <HiArrowLeft
            size={32}
            className="rounded-full bg-gray-100 text-gray-700 p-2 border cursor-pointer"
            // onClick={() => setMyIndex(item.index - 1 < 0 ? 0 : item.index - 1)}
          />
          <HiArrowRight
            size={32}
            className="rounded-full bg-gray-100 text-gray-700 p-2 border cursor-pointer"
            onClick={scrollToEnd}
            // onClick={() => setMyIndex(item.index + 1 > 2 ? 2 : item.index + 1)}
          />
        </div>
        <div className="flex xl:flex-row flex-col space-y-4 lg:space-y-0 lg:space-x-8 pt-10 max-w-full">
          {actions2.map((item) => {
            return (
              <div
                key={item.title}
                className="w-full shadow-2xl border rounded-xl bg-white"
              >
                <div
                  className={`bg-${item.color}-500 rounded-tl-xl rounded-tr-xl h-14 p-4`}
                ></div>
                <div className="p-4">
                  <h2 className="text-2xl xl:text-3xl font-extrabold text-[#091e42] mt-2">
                    {item.title}
                  </h2>
                  <p className="text-base lg:text-lg text-gray-700 font-normal mt-4 h-32">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TrelloActionComponent;
