import styles from "./styles.module.css";
import classnames from "classnames";
import {STATE, STATUS_MESSAGE_MAP} from "../config"

export const FormElement = ({ name, type, state, value }) => {

  return (
    <div 
      className={classnames(styles.formControl)}
      status={state}
    >
      <label htmlFor={name}>{name}</label>
       <input
        name={name}
        type={type}
        value={value}
        disabled={state === STATE.DISABLED ? true : false}
        readOnly={state === STATE.READONLY ? true : false}
      />
      {STATUS_MESSAGE_MAP[state] ? <span>{STATUS_MESSAGE_MAP[state]}</span> : ''}
    </div>
  )
}