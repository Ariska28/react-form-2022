import styles from "./styles.module.css";
import { FormElement } from "./NewReviewFormElement/NewReviewFormElement";
import {STATE, TYPE} from "./config"

export const NewReviewForm = ({ className }) => {
  return (
    <form className={className}>
      <FormElement 
        name="Error" 
        type={TYPE.TEXT}
        state={STATE.ERROR}
        value="test"
      />

      <FormElement 
        name="Succes" 
        type={TYPE.TEXT}
        state={STATE.SUCCESS}
        value="test"
      />

      <FormElement 
        name="Read Only" 
        type={TYPE.TEXT}
        state={STATE.READONLY}
        value="test"
      />

      <FormElement 
        name="Disabled" 
        type={TYPE.TEXT}
        state={STATE.DISABLED}
        value="test"
      />
    
      <div className={styles.buttons}>
        <button className={styles.clear}>Send</button>
        <button className={styles.clear}>Clear</button>
      </div>
    </form>
  );
};
