import GetStarted from "../../components/GetStarted";
import IntroComponent from "../../components/Intro";
import JoinsComponent from "../../components/Joins";
import PowerfulComponent from "../../components/Powerful";
import PricingComponent from "../../components/Pricing";
import StoryComponent from "../../components/Story";
import Trello101Component from "../../components/Trello101";
import TrelloActionComponent from "../../components/TrelloAction";
import Works from "../../components/Works";
import ButtonComponent from "../../components/commons/Button";
import AppLayout from "../layout/app";

const Home = () => {
  return (
    <AppLayout>
      <IntroComponent />
      <Trello101Component />
      <TrelloActionComponent />
      <Works />
      <PowerfulComponent />
      <StoryComponent />
      <PricingComponent />
      <JoinsComponent />
      <GetStarted />
      {/* <div className="bg-pink-500 h-[60vh]">
        <h1>Hello Word</h1>
      </div> */}
      {/* <div className="p-10">
        <ButtonComponent variant="rounded-sm text-white text-base font-normal p-3 bg-blue-500">
          Hello World
        </ButtonComponent>
        <ButtonComponent variant="text-white text-lg font-normal p-4 bg-blue-600">
          Hello World 123
        </ButtonComponent>
      </div> */}
    </AppLayout>
  );
};

export default Home;
