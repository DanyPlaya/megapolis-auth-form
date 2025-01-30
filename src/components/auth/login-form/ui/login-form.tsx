import { FormButton } from "@/shared/ui/form-button";
import { FormInput } from "@/shared/ui/form-input";
import { FormInputPassword } from "@/shared/ui/form-input/form-input-password";
import { ToggleSwitch } from "@/shared/ui/toggle";
import { SyntheticEvent, useId, useState } from "react";
import styles from "./login-form.module.css";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
export const LoginForm = () => {
  const id = useId();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRemember, setIsRemember] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (e: SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Заполните все поля");
      return;
    }

    if (isRemember) {
      localStorage.setItem("remember_me", "true");
    }

    Cookies.set("auth", "true", {
      expires: 1,
      path: "/",
      secure: true,
      sameSite: "strict",
    });

    navigate("/", { replace: true });
  };

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
