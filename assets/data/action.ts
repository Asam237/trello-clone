import { Gears, Integration, Search } from "../imgs";

type ActionType = {
  title: string;
  description: string;
  button: string;
  pic: any;
};

const actions: ActionType[] = [
  {
    title: "Integrations",
    button: "Explore all Use Cases",
    description:
      "Connect the apps your team already uses into your Trello workflow or add a Power-Up to fine-tune your specific needs.",
    pic: Integration,
  },
  {
    title: "Butler Automation",
    button: "Get to know Automation",
    description:
      "No-code automation is built into every Trello board. Focus on the work that matters most and let the robots do the rest.",
    pic: Gears,
  },
  {
    title: "Trello Enterprise",
    button: "Explore Entreprise",
    description:
      "The productivity tool teams love, paired with the features and security needed for scale.",
    pic: Search,
  },
];

export { actions };
