import Pagination from "./Pagenation";

export default {
  title: "JS/Pagination",
  component: Pagination,

  argTypes: {
    total: {
      control: { type: "number" },
    },
    perPage: {
      control: { type: "number" },
    },
    btnColor: { control: "color" },
    btnHoverColor: { control: "color" },
    textColor: { control: "color" },
    btnTextColor: { control: "color" },
    color2: { control: "color" },

    fontSize: {
      control: { type: "number" },
    },
    curFontSize: {
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

export const BlobPagination = args => <Pagination {...args}></Pagination>;
