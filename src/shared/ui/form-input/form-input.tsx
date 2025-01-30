import { forwardRef } from "react";
import styles from "./form-input.module.css";
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

export const FormInput = forwardRef<HTMLInputElement, InputProps>(
  ({ type, label, id, ...props }, ref) => {
    return (
      <div className={styles.formControl}>
        <label className={styles.formLabel} htmlFor={id + `-${label}`}>
          {label}
        </label>

        <input
          className={styles.inputField}
          id={id + `-${label}`}
          type={type}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
