import Link from "next/link";
import ButtonComponent from "../commons/Button";
import Image from "next/image";
import { Board1, Board2 } from "../../assets/imgs";

const Works = () => {
  return (
    <div className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-300 pb-24 pt-8 lg:pt-16 z-50">
      <div className="container mx-auto lg:w-10/12">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-white text-center text-xl lg:text-3xl">
            See work in a whole new way
          </h1>
          <p className="text-white text-sm lg:text-xl text-center py-2">
            View your team&apos;s projects from every angle and bring a fresh
            perspective to
            <br />
            the task at hand.
          </p>
          <ButtonComponent variant="text-sm lg:text-base font-normal px-4 py-3 border border-blue-600 rounded-md bg-white mt-6">
            Discover all Trello views
          </ButtonComponent>
        </div>
        <div className="mt-6 lg:mt-12">
          <div className="bg-white rounded-md p-6 shadow-lg">
            <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
              <div className="w-full lg:w-1/2">
                <Image alt="pic" className="h-full w-auto rounded-md" src={Board1} />
              </div>
              <div className="w-full lg:w-1/2">
                <div className="lg:ml-10 flex justify-center items-start flex-col">
                  <h1 className="font-extrabold text-black">
                    HIT DEADLINES EVERY TIME
                  </h1>
                  <p className="text-sm lg:text-lg text-gray-700 font-normal my-6">
                    From weekly sprints to annual planning, Timeline view keeps
                    all tasks on track. Quickly get a glimpse of what&apos;s coming
                    down the pipeline and identify any gaps that might impede
                    your team&apos;s progress.
                  </p>
                  <Link
                    href={"#"}
                    className="text-blue-600 text-sm lg:text-lg underline underline-offset-2"
                  >
                    Learn more about Timeline view
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 lg:mt-12 -mb-52 z-10">
          <div className="bg-white rounded-md p-6 shadow-lg">
            <div className="flex flex-col lg:flex-row-reverse space-y-4 lg:space-y-0 lg:space-x-4">
              <div className="w-full lg:w-1/2">
                <Image alt="pic" className="h-full w-auto rounded-md" src={Board2} />
              </div>
              <div className="w-full lg:w-1/2">
                <div className="lg:mr-10 flex justify-center items-start flex-col">
                  <h1 className="font-extrabold text-black">
                    STAY ON TOP OF TASKS
                  </h1>
                  <p className="text-sm lg:text-lg text-gray-700 font-normal my-6">
                    Start each day without any surprises. Whether scheduling an
                    editorial calendar or staying on top of to-dos, Calendar
                    view is like a crystal ball giving you a clear vision of
                    what work lies ahead.
                  </p>
                  <Link
                    href={"#"}
                    className="text-blue-600 text-sm lg:text-lg underline underline-offset-2"
                  >
                    Learn more about Calendar view
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
