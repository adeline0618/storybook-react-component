// 컴포넌트를 불러옵니다.
import Button2 from "./Button2";

export default {
  title: "JS/Button",
  component: Button2,

  // 이번에 작성한 전달인자의 타입은 Storybook을 보고 직접 확인해보세요.
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
