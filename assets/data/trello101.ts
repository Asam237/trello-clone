import { Carousel1, Carousel2, Carousel3 } from "../imgs";

type Trello101Type = {
  title: string;
  description: string;
  picture: any;
};

const trello101: Trello101Type[] = [
  {
    title: "Boards",
    description:
      "Trello boards keep tasks organized and work moving forward. In a glance, see everything from “things to do” to “aww yeah, we did it!",
    picture: Carousel1,
  },
  {
    title: "Lists",
    description:
      "The different stages of a task. Start as simple as To Do, Doing or Done—or build a workflow custom fit to your team's needs. There's no wrong way to Trello.",
    picture: Carousel2,
  },
  {
    title: "Cards",
    description:
      "Cards represent tasks and ideas and hold all the information to get the job done. As you make progress, move cards across lists to show their status.",
    picture: Carousel3,
  },
];

export { trello101 };
