import Card1 from "./Card1";

export default {
  title: "JS/Card",
  component: Card1,

  argTypes: {
    color1: { control: "color" },
    color2: { control: "color" },
    category: { control: "text" },
    link: { control: "text" },
    imgURL: { control: "text" },
    title: { control: "text" },
    content: { control: "text" },
  },
};

export const SimpleCard = args => <Card1 {...args}></Card1>;
