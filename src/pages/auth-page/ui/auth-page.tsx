import { AuthForm } from "@/components/auth-form";
import TownImage from "@/shared/assets/images/town-image.png";
import styles from "./auth-page.module.css";
export const AuthPage = () => {
  return (
    <div className={styles.container}>
      <AuthForm />
      <img
        className={styles.townImage}
        src={TownImage}
        alt="Фоновое изображение"
      />
    </div>
  );
};
