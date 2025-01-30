import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import styles from "./main-page.module.css";
export const MainPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.remove("auth");
    localStorage.removeItem("remember_me");
    navigate("/login");
  };

  return (
    <div className={styles.wrapper}>
      <h1 style={{ textAlign: "center" }}>Добро пожаловать!</h1>
      <button className={styles.logoutButton} onClick={handleLogout}>
        Выйти
      </button>
    </div>
  );
};
