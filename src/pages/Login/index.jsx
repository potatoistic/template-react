import styles from "./Login.module.css";

import AuthService from "../../shared/services/auth";

const LoginPage = () => {
  const handleLogin = async () => {
    try {
      const dto = {
        username: "admin",
        password: "admin",
      };

      const data = await AuthService.loginHandler(dto);

      console.log(data);
    } catch (e) {
      console.error("Login.jsx: ", e);
    }
  };

  return (
    <div className={styles["login-page"]}>
      <h1>Login</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        doloremque, quidem quisquam, quisquam quisquam quisquam quisquam
        dignissimos.
      </p>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
