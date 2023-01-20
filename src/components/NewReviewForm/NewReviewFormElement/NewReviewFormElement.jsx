import { useEffect } from "react";
import {STATE, STATUS_MESSAGE_MAP, TYPE} from "../config"
const MAX_LENGTH = 5;

const isMaxLengthCorrect = (value, num) => {
 return (value.length > num) ? false : true
}

const isEmailCorrect = (value) => {
  return !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) ? false : true
}

export const FormElement = ({ name, type, state = STATE.DEFAULT, onChange, value,  handleState = () => {}}) => {
    if(value) {
      switch(type) {
        case TYPE.TEXT: 
          if (isMaxLengthCorrect(value, MAX_LENGTH)) {
            state = STATE.SUCCESS;
          }
          else {
            state = STATE.ERROR;
          }
          break;
        
        case TYPE.NAME: 
          if (isMaxLengthCorrect(value, MAX_LENGTH)) {
            state = STATE.SUCCESS;
          }
          else {
            state = STATE.ERROR;
          }
          break;
    
        case TYPE.EMAIL: 
          if(isEmailCorrect(value)) {
            state = STATE.SUCCESS;
          }
          else {
            state = STATE.ERROR;
          }
          break;
        
        default: {
          state = STATE.DEFAULT;
        } 
      }
  }

  useEffect(() => {
    handleState([type, state]);
  }, [state]);

  return (
    <div 
      className="formControl"
      status={state}
    >
      <label htmlFor={name}>{name}</label>
       <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        disabled={state === STATE.DISABLED ? true : false}
        readOnly={state === STATE.READONLY ? true : false}
      />
      {STATUS_MESSAGE_MAP[state] ? <span>{STATUS_MESSAGE_MAP[state]}</span> : ''}
    </div>
  )
}