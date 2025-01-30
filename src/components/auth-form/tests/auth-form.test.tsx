import { describe, it, expect, vi } from "vitest";
import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthForm } from "../ui/auth-form";

vi.mock("../ui/auth-form.module.css", () => ({
  default: {
    active: "active",
    tab: "tab",
  },
}));

describe("AuthForm", () => {
  it("должен отображать вкладку 'Войти' по умолчанию", () => {
    render(
      <MemoryRouter>
        <AuthForm />
      </MemoryRouter>
    );

    waitFor(() =>
      expect(screen.queryByTestId("tab-login")).toHaveClass("active")
    );
    waitFor(() =>
      expect(screen.queryByTestId("login-form")).toBeInTheDocument()
    );
  });

  it("должен переключать вкладки на 'Регистрация' при клике", () => {
    render(
      <MemoryRouter>
        <AuthForm />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByTestId("tab-register"));
    waitFor(() =>
      expect(screen.queryByTestId("tab-register")).toHaveClass("active")
    );
    waitFor(() =>
      expect(screen.queryByTestId("register-form")).toBeInTheDocument()
    );
  });
});
