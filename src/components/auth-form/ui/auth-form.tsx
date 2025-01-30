import { LoginForm } from "@/components/auth/login-form";
import { RegisterForm } from "@/components/auth/register-form";
import { useState } from "react";
import styles from "./auth-form.module.css";
import { AuthTabs } from "@/shared/ui/auth-tabs";
export const AuthForm = () => {
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");
  return (
    <div className={styles.authForm}>
      <AuthTabs activeTab={activeTab} onTabChange={setActiveTab} />
      {activeTab === "login" ? (
        <LoginForm data-testid="login-form" />
      ) : (
        <RegisterForm data-testid="register-form" />
      )}
    </div>
  );
};
