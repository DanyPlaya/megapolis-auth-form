import { forwardRef } from "react";
import styles from "./form-button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export const FormButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ label, ...props }, ref) => {
    return (
      <button type="submit" className={styles.formButton} ref={ref} {...props}>
        {label}
      </button>
    );
  }
);
