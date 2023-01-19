import styles from "./styles.module.css";
import { FormElement } from "./NewReviewFormElement/NewReviewFormElement";
import {STATE, TYPE, INITIAL_FORM_VALUE, FORM_MESSAGES} from "./config"
import { useReducer } from "react";
import { useState } from "react";

const form_element_states = {};

const ACTIONS = {
  setName: "setName",
  setText: "setText",
  setEmail: "setEmail",
  clear: "clear",
};

const formReducer = (state, action) => {
  switch(action.type) {
    case ACTIONS.setName:  {
      return {
        ...state, 
        name: action.payload,
      }
    }
    case ACTIONS.setText: {
      return {
        ...state,
        text: action.payload
      }
    }
    case ACTIONS.setEmail: {
      return {
        ...state,
        email: action.payload
      }
    }
    case ACTIONS.clear: {
      return INITIAL_FORM_VALUE
    }
    default: 
      return state;
  }
}

export const NewReviewForm = ({ className }) => {
  const [formValue, dispatch] = useReducer(formReducer, INITIAL_FORM_VALUE);
  const [state, setState] = useState([TYPE.NAME, STATE.DEFAULT]);
  const [message, setMessage] = useState(FORM_MESSAGES.default);
  form_element_states[state[0]] = state[1];

  const handleState = (state) => {
    setState(state);
  }

  const onNameChange = (event) => {
    dispatch({ type: ACTIONS.setName, payload: event.target.value });
  };
  const onTextChange = (event) => {
    dispatch({ type: ACTIONS.setText, payload: event.target.value });
  };
  const onEmailChange = (event) => {
    dispatch({ type: ACTIONS.setEmail, payload: event.target.value });
  };

  const onClear = (event) => {
    event.preventDefault();
    return dispatch({ type: ACTIONS.clear });
  };

  const submit = (event) => {
    event.preventDefault();

    if(Object.values(form_element_states).includes(STATE.ERROR)) {
      return setMessage(FORM_MESSAGES.error);
    }

    if(Object.values(form_element_states).includes(STATE.DEFAULT)) {
      return setMessage(FORM_MESSAGES.empty);
    }

    return setMessage(FORM_MESSAGES.success);
  }

  return (
    <form className={className}>
       <FormElement 
        name="Text" 
        type={TYPE.TEXT}
        onChange={onTextChange}
        value={formValue.text}
        handleState={handleState}
      /> 

       <FormElement 
        name="Name" 
        type={TYPE.NAME}
        onChange={onNameChange}
        value={formValue.name}
        handleState={handleState}
      /> 

      <FormElement 
        name="Email" 
        type={TYPE.EMAIL}
        onChange={onEmailChange}
        value={formValue.email}
        handleState={handleState}
      /> 

      {/* <FormElement 
        name="Read Only" 
        type={TYPE.TEXT}
        state={STATE.READONLY}
        onChange={onTextChange}
        value={formValue.text}
        handleState={handleState}
      />

      <FormElement 
        name="Disabled" 
        type={TYPE.TEXT}
        state={STATE.DISABLED}
        onChange={onTextChange}
        value={formValue.text}
        handleState={handleState}
      /> */}

      {message}

      <div className={styles.buttons}>
        <button className={styles.clear} onClick={submit}>Send</button>
        <button className={styles.clear} onClick={onClear} >Clear</button>
      </div>
    </form>
  );
};
