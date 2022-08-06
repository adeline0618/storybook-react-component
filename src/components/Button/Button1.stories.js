// 컴포넌트를 불러옵니다.
import Button1 from "./Button1";

export default {
  title: "JS/Button",
  component: Button1,

  // 이번에 작성한 전달인자의 타입은 Storybook을 보고 직접 확인해보세요.
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
