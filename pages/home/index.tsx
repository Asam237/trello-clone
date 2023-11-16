import Trello101Component from "../../components/Trello101";
import TrelloActionComponent from "../../components/TrelloAction";
import ButtonComponent from "../../components/commons/Button";
import AppLayout from "../layout/app";

const Home = () => {
  return (
    <AppLayout>
      <Trello101Component />
      <TrelloActionComponent />
      <div className="bg-pink-500 h-[60vh]">
        <h1>Hello Word</h1>
      </div>
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
