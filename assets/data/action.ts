import { Gears, Integration, Search } from "../imgs";

type ActionType = {
  title: string;
  description: string;
  button: string;
  pic: any;
};

type Action2Type = {
  title: string;
  description: string;
  color: string;
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

const actions2: Action2Type[] = [
  {
    color: "pink",
    title: "Project management",
    description:
      "Keep tasks in order, deadlines on track, and team members aligned with Trello.",
  },
  {
    color: "blue",
    title: "Meetings",
    description:
      "Empower your team meetings to be more productive, empowering, and dare we say—fun.",
  },
  {
    color: "gray",
    title: "Onboarding",
    description:
      "Onboarding to a new company or project is a snap with Trellos visual layout of to-dos, resources, and progress tracking.",
  },
];

export { actions, actions2 };
