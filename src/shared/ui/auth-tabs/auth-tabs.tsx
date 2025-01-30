import styles from "./auth-tabs.module.css";
interface AuthTabsProps {
  activeTab: "login" | "register";
  onTabChange: (tab: "login" | "register") => void;
}

export const AuthTabs = ({ activeTab, onTabChange }: AuthTabsProps) => (
  <div className={styles.tabsContainer}>
    <button
      type="button"
      className={`${styles.tab} ${activeTab === "login" ? styles.active : ""}`}
      onClick={() => onTabChange("login")}
    >
      Войти
    </button>
    <button
      type="button"
      className={`${styles.tab} ${
        activeTab === "register" ? styles.active : ""
      }`}
      onClick={() => onTabChange("register")}
    >
      Регистрация
    </button>
  </div>
);
