import { FormButton } from "@/shared/ui/form-button";
import { FormInput } from "@/shared/ui/form-input";
import { SyntheticEvent, useId, useState } from "react";
import styles from "./register-form.module.css";
export const RegisterForm = () => {
  const id = useId();
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [date, setDate] = useState<string>("");
  const handleFocus = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.target.type = "date";
    console.log();
  };

  const handleBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.value) {
      event.target.type = "text";
    }
  };

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
    e.preventDefault();
    alert("Вы успешно зарегистрировались");
  };
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <FormInput
        id={id}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        type="email"
        label="Email"
        placeholder="Email адресс"
      />
      <FormInput
        id={id}
        required
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        minLength={4}
        label="Имя"
        placeholder="Иванов Иван Иванович"
      />
      <div className={styles.controlsContainer}>
        <FormInput
          id={id}
          onFocus={handleFocus}
          onBlur={handleBlur}
          type="text"
          required
          value={date}
          onChange={(e) => setDate(e.target.value)}
          minLength={4}
          onClick={(e) => e.currentTarget.showPicker()}
          label="Дата рождения"
          placeholder="10.10.1980"
        />
        <FormButton label="Регистрация" />
      </div>
    </form>
  );
};
