/*
 * Создайте компонент LoginControl, который будет управлять отображением форм для входа и выхода из системы. Компонент должен отображать форму для входа, если пользователь не авторизован, и форму для выхода, если пользователь авторизован. Реализуйте функциональность, чтобы при нажатии на кнопку "Войти" пользователь становился авторизованным, а при нажатии на кнопку "Выйти" — выходил из системы. Добавьте условный емейл адрес и пароль, который должен ввести пользователь. В случае не верного ввода – отображайте сообщение с ошибкой. Используйте стили в виде объекта.
 */

import React, { useState, useEffect } from "react";
import LogInForm from "./LogInForm";
import LogOutForm from "./LogOutForm";
import "../AnimatedDiv/ShowAndHide";
import { useFadeTransition } from "../../hooks/useFadeTransition";

export default function LoginControl() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const DURATION = 500;

  const loginTransition = useFadeTransition(DURATION, 10);
  const logoutTransition = useFadeTransition(DURATION, 10);

  useEffect(() => {
    loginTransition.show();
  }, []);

  const handleEmailChange = (val) => {
    setEmail(val);
    if (error) setError("");
  };

  const handlePasswordChange = (val) => {
    setPassword(val);
    if (error) setError("");
  };
  const handleLogin = (e) => {
    e.preventDefault();
    if (error) setError("");

    const dummyEmail = "dummy@email.com";
    const dummyPassword = "password";

    if (email !== dummyEmail || password !== dummyPassword) {
      setError("Wrong email or password");
      return;
    }

    loginTransition.hide();

    setTimeout(() => {
      logoutTransition.show();
    }, DURATION);
  };

  const handleLogout = (e) => {
    e.preventDefault();

    logoutTransition.hide();

    setTimeout(() => {
      setEmail("");
      setPassword("");
      setError("");
      loginTransition.show();
    }, DURATION);
  };

  return (
    <div
      style={{ position: "relative", overflow: "hidden", minHeight: "300px" }}
    >
      {loginTransition.shouldRender && (
        <LogInForm
          email={email}
          password={password}
          setEmail={handleEmailChange}
          setPassword={handlePasswordChange}
          handleLoggin={handleLogin}
          error={error}
          isVisible={loginTransition.isVisible}
        />
      )}

      {logoutTransition.shouldRender && (
        <LogOutForm
          handleLogout={handleLogout}
          isVisible={logoutTransition.isVisible}
        />
      )}
    </div>
  );
}
