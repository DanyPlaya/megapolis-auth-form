import { forwardRef } from "react";
import styles from "./toggle.module.css";

interface ToggleSwitchProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  onToggle: () => void;
  isChecked: boolean;
}

export const ToggleSwitch = forwardRef<HTMLInputElement, ToggleSwitchProps>(
  ({ label, isChecked, onToggle, id, ...props }, ref) => {
    return (
      <div className={styles.toggleWrapper}>
        <label className={styles.switchLabel} htmlFor={id + `-${label}`}>
          <span className={styles.labelText}>{label}</span>
          <input
            type="checkbox"
            id={id + `-${label}`}
            checked={isChecked}
            onChange={onToggle}
            className={styles.hiddenCheckbox}
            ref={ref}
            {...props}
          />
          <span className={styles.slider} />
        </label>
      </div>
    );
  }
);
