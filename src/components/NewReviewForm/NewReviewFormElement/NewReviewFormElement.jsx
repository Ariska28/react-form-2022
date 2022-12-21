import styles from "./styles.module.css";
import classnames from "classnames";

const STATES = {
  ERROR: 'error',
  SUCCESS: 'success',
  DISABLED: 'disabled',
  READONLY: 'readOnly'
}

export const FormElement = ({ name, type, state }) => {
  const pickState = {
    type: '',
    message: ''
  };

  if(state === STATES.ERROR) {
    pickState.type = STATES.ERROR
    pickState.message='The input has error'
  }

  if(state === STATES.SUCCESS) {
    pickState.type = STATES.SUCCESS
    pickState.message='All right'
  }

  if(state === STATES.DISABLED) {
    pickState.type = STATES.DISABLED
  }

  if(state === STATES.READONLY) {
    pickState.type = STATES.READONLY
  }

  return (
    <div 
      className={classnames(styles.formControl)}
      status={pickState.type}
    >
      <label htmlFor={name}>{name}</label>
       <input
        name={name}
        type={type}
        value=""
        disabled={pickState.type === 'disabled' ? true : false}
        readOnly={pickState.type === 'readOnly' ? true : false}
      />
      {pickState.message ? <span>{pickState.message}</span> : ''}
    </div>
  )
}