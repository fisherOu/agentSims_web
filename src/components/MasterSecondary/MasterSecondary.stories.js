import { MasterSecondary } from ".";

export default {
  title: "Components/MasterSecondary",
  component: MasterSecondary,
  argTypes: {
    size: {
      options: ["default", "smaller", "large", "small"],
      control: { type: "select" },
    },
    type: {
      options: ["primary", "secondary"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    iconLeft: true,
    iconRight: true,
    size: "default",
    type: "primary",
    className: {},
    buttonTextClassName: {},
    text: "Default",
  },
};
