import styles from "./styles.module.css";
import classnames from "classnames";
import { useReducer } from "react";
import { Rating } from "../Rating/Rating";
import { useRef } from "react";
import emailjs from '@emailjs/browser';
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const INITIAL_FORM_VALUE = {
  NAME: {value: "", touched: false, hasError: false },
  TEXT: {value: "", touched: false, hasError: false },
  EMAIL: {value: "", touched: false, hasError: false },
  RATING: 1,
};

const ERROR_MESSAGES = {
  EMPTY: "Requared field",
  MAXLENGTH: "Uncorrect string length: max length 5",
  ENAIL: "Input correct email"
}

const ACTIONS = {
  SETNAME: "setName",
  SETTEXT: "setText",
  SETEMAIL: "setEmail",
  SETRATING: "setRating",
  CLEAR: "clear",
};

const formReducer = (state, action) => {
  switch(action.type) {
    case ACTIONS.SETNAME:  {
      return {
        ...state, 
        NAME: { 
          value: action.payload, 
          touched: true,
          ...validation.isEmpty(action.payload), 
          ...validation.maxLength(action.payload) 
        }
      }
    }

    case ACTIONS.SETTEXT: {
      return {
        ...state, 
        TEXT: {
          value: action.payload,
          touched: true,
          ...validation.isEmpty(action.payload),
        } 
      }
    }

    case ACTIONS.SETEMAIL: {
      return {
        ...state, 
        EMAIL: {
          value: action.payload,
          touched: true,
          ...validation.isEmpty(action.payload),
          ...validation.isCorrectEmail(action.payload),
        } 
      }
    }

    case ACTIONS.SETRATING: {
      return {
        ...state,
        RATING: action.payload
      }
    }

    case ACTIONS.CLEAR: {
      return INITIAL_FORM_VALUE;
    }

    default: 
      return state;
  }
};

const validation = {
  isEmpty: (value) => {
    if (value.length < 1) {
      console.log(new Error(ERROR_MESSAGES.EMPTY));
      return { hasError: true }
    }
  },
  maxLength: (value) => {
    if (value.length > 5) {
      console.log(new Error(ERROR_MESSAGES.MAXLENGTH));
      return { hasError: true }
    }  
  },
  isCorrectEmail: (value) => {
    console.log(new Error(ERROR_MESSAGES.EMAIL));
    if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value))) {
      return { hasError: true }
    }
  }
}

const addValidationStyles = (hasError, touched) => {
  if (hasError) {
    return styles.error;
  }

  if (touched) {
    return styles.succes;
  }
}

export const FormElement = ({ value, onChange, type, className }) => {
  return (
    <div className={classnames(styles.formControl, className)}>
      <label htmlFor={type}>{type}</label>
      <input
        name={type}
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export const FormElementPicker = ({ name, value, onChange, type }) => {
  return (
    <div className={styles.formControl}>
      <label>Choose {name}</label>
      <Rating value={value} onChange={onChange} />
      <input className={styles.hidden} name={name}  type={type}  value={value} onChange={onChange}/>
    </div>
  )
}

export const NewReviewForm = ({ className }) => {
  const [formValue, dispatch] = useReducer(formReducer, INITIAL_FORM_VALUE);

  const [formError, setformError] = useState();
  const form = useRef();
  const navigate = useNavigate();
  const formHasError = Object.values(formValue).some(item => {
    return (item.hasError === true || item.touched === false)
  });

  const onNameChange = (event) => {
    dispatch({ type: ACTIONS.SETNAME, payload: event.target.value });
  };
  const onTextChange = (event) => {
    dispatch({ type: ACTIONS.SETTEXT, payload: event.target.value });
  };
  const onEmailChange = (event) => {
    dispatch({ type: ACTIONS.SETEMAIL, payload: event.target.value });
  };
  const onRatingChange = (value) => {
    dispatch({ type: ACTIONS.SETRATING, payload: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if(!formHasError) { 
      emailjs.sendForm('service_2r89coa', 'template_ja45kem', form.current, '4L5g0rGznARsA0Xfu')
        .then((result) => { 
          navigate('/success');
        }, (error) => {
          navigate('/error');
        });
    }
  }

  const addErrorMessage = () => {
    if(formHasError) {
      setformError(<div className={styles.error}> Form wasn't sent, please fix mistakes </div>)
    } 
  }

  return (
    <form ref={form} onSubmit={sendEmail} className={classnames(styles.root, className)}>
      <FormElement 
        value={formValue.NAME.value} 
        onChange={onNameChange} 
        type="name" 
        className={addValidationStyles(formValue.NAME.hasError, formValue.NAME.touched)}
      />
      <FormElement 
        value={formValue.TEXT.value} 
        onChange={onTextChange} 
        type="text" 
        className={addValidationStyles(formValue.TEXT.hasError, formValue.TEXT.touched)}
      />
      <FormElement 
        value={formValue.EMAIL.value} 
        onChange={onEmailChange} 
        type="email" 
        className={addValidationStyles(formValue.EMAIL.hasError, formValue.EMAIL.touched)}
      />
      <FormElementPicker
        name="rating"
        value={formValue.RATING}
        onChange={onRatingChange}
        type="number"
      />

      { formError }

      <div className={styles.buttons}>
        <button className={styles.clear}  onClick={addErrorMessage} type="submit">Send</button>
        <button className={styles.clear} onClick={() => dispatch({ type: ACTIONS.CLEAR })}>Clear</button>
      </div>
    </form>
  );
};
