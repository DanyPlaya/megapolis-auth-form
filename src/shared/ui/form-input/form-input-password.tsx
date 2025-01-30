import { LockIcon } from "@/shared/assets/icons/lock-icon";
import { UnlockIcon } from "@/shared/assets/icons/unlock-icon";
import { forwardRef, useState } from "react";
import styles from "./form-input.module.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

export const FormInputPassword = forwardRef<HTMLInputElement, InputProps>(
  ({ label, id, ...props }, ref) => {
    const [type, setType] = useState<React.HTMLInputTypeAttribute>("password");

    const handleToggle = () => {
      setType((prev) => (prev === "password" ? "text" : "password"));
    };

    return (
      <div className={styles.formControl}>
        <label className={styles.formLabel} htmlFor={id}>
          {label}
        </label>
        <div className={styles.inputContainer}>
          <input
            className={styles.inputField}
            id={id + `-${label}`}
            type={type}
            ref={ref}
            {...props}
          />
          <button
            type="button"
            onClick={handleToggle}
            className={styles.iconButton}
          >
            {type === "password" ? (
              <LockIcon className={styles.inputIcon} />
            ) : (
              <UnlockIcon className={styles.inputIcon} />
            )}
          </button>
        </div>
      </div>
    );
  }
);
