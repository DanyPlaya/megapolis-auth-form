import styles from "./app.module.css";
import { AuthPage } from "./pages/auth-page";

export function App() {
  return (
    <div className={styles.app}>
      <AuthPage />
    </div>
  );
}
