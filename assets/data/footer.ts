type FooterType = {
  title: string;
  description?: string;
  path: string;
};

const footer: FooterType[] = [
  {
    title: "About Trello",
    description: "What's behind the boards.",
    path: "#about",
  },
  {
    title: "Jobs",
    description: "Learn about open roles on the Trello team.",
    path: "#job",
  },
  {
    title: "Apps",
    description: "Download the Trello App for your Desktop or Mobile devices.",
    path: "#apps",
  },
  {
    title: "Contact us",
    description: "Need anything? Get in touch and we can help.",
    path: "#contact",
  },
];

const footer2: FooterType[] = [
  {
    title: "Privacy Policy",
    path: "#privacy",
  },
  {
    title: "Terms",
    path: "#terms",
  },
];


export { footer, footer2 };
