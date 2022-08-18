import Button1 from "./Button1";

export default {
  title: "JS/Button",
  component: Button1,

  argTypes: {
    color1: { control: "color" },
    color2: { control: "color" },
    textColor: { control: "color" },
    text: { control: "text" },

    fontSize: {
      control: { type: "number" },
    },
    width: {
      control: { type: "number" },
    },
    heigth: {
      control: { type: "number" },
    },
  },
};

export const GradientButton = args => <Button1 {...args}></Button1>;
