import styles from "./styles.module.css";
import { FormElement } from "./NewReviewFormElement/NewReviewFormElement";

export const NewReviewForm = ({ className }) => {

  return (
    <form className={className}>
      <FormElement 
        name="Error" 
        type="text"
        state="error"
      />

      <FormElement 
        name="Succes" 
        type="text"
        state="success"
      />

      <FormElement 
        name="Read Only" 
        type="text"
        state="readOnly"
      />

      <FormElement 
        name="Disabled" 
        type="text"
        state="disabled"
      />
    
      <div className={styles.buttons}>
        <button className={styles.clear}>Send</button>
        <button className={styles.clear}>Clear</button>
      </div>
    </form>
  );
};
