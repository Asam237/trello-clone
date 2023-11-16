import ButtonComponent from "../commons/Button";

const TrelloActionComponent = () => {
  return (
    <div className="bg-slate-50 pb-24 pt-8 lg:pt-16">
      <div className="container mx-auto lg:w-10/12">
        <h4 className="text-sm uppercase mt-1 font-bold">TRELLO IN ACTION</h4>
        <h2 className="text-3xl font-extrabold text-[#091e42] mt-2">
          Workflows for any project, big or small
        </h2>
        <div className="flex flex-col items-start justify-center space-y-4 lg:space-y-0 lg:flex-row lg:justify-between">
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
      </div>
    </div>
  );
};

export default TrelloActionComponent;
