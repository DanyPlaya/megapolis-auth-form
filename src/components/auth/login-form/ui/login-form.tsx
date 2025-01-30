import { FormButton } from "@/shared/ui/form-button";
import { FormInput } from "@/shared/ui/form-input";
import { FormInputPassword } from "@/shared/ui/form-input/form-input-password";
import { ToggleSwitch } from "@/shared/ui/toggle";
import { useId, useState } from "react";
import styles from "./login-form.module.css";
export const LoginForm = () => {
  const id = useId();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRemember, setIsRemember] = useState(false);
  const handleSubmit = () => {};
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <FormInput
        id={id}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        type="email"
        label="Логин"
        placeholder="Email адресс"
      />
      <FormInputPassword
        id={id}
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        minLength={4}
        label="Пароль"
        placeholder="******"
      />
      <div className={styles.controlsContainer}>
        <ToggleSwitch
          isChecked={isRemember}
          onToggle={() => setIsRemember((prev) => !prev)}
          id={id}
          label="Запомнить меня"
        />
        <FormButton label="Войти" />
      </div>
    </form>
  );
};
