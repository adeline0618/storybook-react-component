import Button3 from "./Button3";

export default {
  title: "JS/Button",
  component: Button3,

  argTypes: {
    color1: { control: "color" },
    color2: { control: "color" },
    textColor: { control: "color" },
    textHoverColor: { control: "color" },
    text: { control: "text" },

    fontSize: {
      control: { type: "number" },
    },
    width: {
      control: { type: "number" },
    },
    height: {
      control: { type: "number" },
    },
  },
};

export const BlobButton = args => <Button3 {...args}></Button3>;
