import { Ptc, Thoughtworks, Women } from "../imgs";

type StoryType = {
  index: number;
  content: string;
  name: string;
  position: string;
  logo: any;
  header: string;
};

const stories: StoryType[] = [
  {
    index: 0,
    name: "Joey Rosenberg",
    position: "Global Leadership Director at Women Who Code",
    content:
      "[Trello is] great for simplifying complex processes. As a manager, I can chunk [processes] down into bit-sized pieces for my team and then delegate that out, but still keep a birds eye view.",
    header:
      "75% of organizations report that Trello delivers value to their business within 30 days.",
    logo: Women,
  },
  {
    index: 1,
    name: "Sumeet Moghe",
    position: "Product Manager at ThoughtWorks",
    content:
      "Whether someone is in the office, working from home, or working on-site with a client, everyone can share context and information through Trello.",
    header: "81% of customers chose Trello for its ease of use.",
    logo: Thoughtworks,
  },
  {
    index: 2,
    name: "Jefferson Scomacao",
    position: "Development Manager at IKEA/PTC",
    content:
      "We used Trello to provide clarity on steps, requirements, and procedures. This was exceptional when communicating with teams that had deep cultural and language differences.",
    header:
      "74% of customers say Trello has improved communication with their co-workers and teams.",
    logo: Ptc,
  },
];

export { stories };
