// 컴포넌트를 불러옵니다.
import Button from "./Button";

export default {
  title: "JS/Button",
  component: Button,

  // 이번에 작성한 전달인자의 타입은 Storybook을 보고 직접 확인해보세요.
  argTypes: {
    color1: { control: "color" },
    color2: { control: "color" },
    textColor: { control: "color" },
    text: { control: "text" },
    fontSize: {
      control: { type: "radio", options: ["16px", "20px", "24px", "28px"] },
    },
  },
};

export const GradientButton = args => <Button {...args}></Button>;
