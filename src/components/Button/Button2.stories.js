import Button2 from "./Button2";

export default {
  title: "JS/Button",
  component: Button2,

  argTypes: {
    color1: { control: "color" },
    color2: { control: "color" },
    textColor: { control: "color" },
    textHoverColor: { control: "color" },
    text: { control: "text" },

    fontSize: {
      control: { type: "number" },
    },
    paddingWidth: {
      control: { type: "number" },
    },
    paddingHeight: {
      control: { type: "number" },
    },
  },
};

export const ShineButton = args => <Button2 {...args}></Button2>;
