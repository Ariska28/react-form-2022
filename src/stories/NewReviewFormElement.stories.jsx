import { FormElement } from "../components/NewReviewForm/NewReviewFormElement/NewReviewFormElement";
import { TYPE, STATE } from "../components/NewReviewForm/config";
import { useState } from "react";

export default {
  title: 'FormElement',
  component: FormElement,
  argTypes: {
    type: { control: "select", options: [TYPE.TEXT, TYPE.NAME, TYPE.EMAIL], default: TYPE.NAME },
    state: {control: "select", options: [STATE.DEFAULT, STATE.DISABLED, STATE.ERROR, STATE.READONLY, STATE.SUCCESS ], default: STATE.DEFAULT }
  },
};

const Template = (args) => {
  const [value, setValue] = useState('');

  const handleOnChange = (event) => {
    setValue(event.target.value);
  };

  return <FormElement  value={value} onChange={handleOnChange} {...args} />
}

export const Primary = Template.bind({});
Primary.args = {
  name:"Text",
  state: STATE.DEFAULT,
  type: TYPE.TEXT 
};