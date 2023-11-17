import InputComponent from "../Input";
import ButtonComponent from "../commons/Button";

const GetStarted = () => {
  return (
    <div className="bg-gradient-to-r from-violet-600 via-violet-800 to-pink-300 pb-24 pt-8 xl:pt-16 z-0">
      <div className="container mx-auto xl:w-10/12">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-white text-xl xl:text-3xl">
            Get started with Trello today
          </h1>
          <div className="mt-6 w-full flex flex-col justify-center xl:flex-row xl:space-x-4 space-y-4 xl:space-y-0">
            <InputComponent name="Email" variant="w-full xl:w-4/12" />
            <ButtonComponent variant="rounded-md text-white text-base font-normal p-3 bg-blue-500">
              Sign up - it&apos;s free!
            </ButtonComponent>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
