type PricingType = {
  index: number;
  title: string;
  cheap: string;
  subTitle: string;
  description: string;
  button: string;
};

const pricings: PricingType[] = [
  {
    index: 0,
    title: "free",
    cheap: "0",
    description: "For individuals or teams looking to organize any project.",
    button: "Get started",
    subTitle: "free for your whole team",
  },
  {
    index: 1,
    title: "standard",
    cheap: "5",
    description:
      "For small teams that need to manage work and scale collaboration.",
    button: "Sign up now",
    subTitle: "Per user/month if billed annually ($6 billed monthly)",
  },
  {
    index: 2,
    title: "premium",
    cheap: "10",
    description:
      "For teams that need to track and visualize multiple projects in several ways, including boards, timelines, calendars, etc.",
    button: "Try for free",
    subTitle: "Per user/month if billed annually ($12.50 billed monthly)",
  },
  {
    index: 3,
    title: "entreprise",
    cheap: "17.50",
    description:
      "For organizations that need to connect work across teams with more security and controls.",
    button: "Contact sales",
    subTitle:
      "Per user/month - billed annually ($210.00 annual price per user)",
  },
];

export { pricings };
