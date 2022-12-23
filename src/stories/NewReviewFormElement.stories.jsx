import { FormElement } from "../components/NewReviewForm/NewReviewFormElement/NewReviewFormElement";
import { TYPE, STATE } from "../components/NewReviewForm/config";

export default {
  title: 'FormElement',
  component: FormElement,
  argTypes: {
    type: { control: "select", options: [TYPE.TEXT, TYPE.EMAIL ], default: TYPE.TEXT },
    state: { control: "select", options: [STATE.SUCCESS, STATE.ERROR, STATE.DISABLED, STATE.READONLY ], default: STATE.SUCCESS }
  },
};

const Template = (args) => <FormElement {...args} />;

export const Element = Template.bind({});

Element.args = {
  name: "Input",
  type: TYPE.TEXT,
  state: STATE.SUCCESS,
  value: "Success",
};


