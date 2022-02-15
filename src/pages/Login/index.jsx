import { useMutation } from "react-query";
import styles from "./Login.module.css";

import AuthService from "../../shared/services/auth";

const LoginPage = () => {
  const loginMutation = useMutation((dto) => AuthService.loginHandler(dto));
  const handleLogin = async () => {
    try {
      const dto = {
        username: "admin",
        password: "admin",
      };

      loginMutation.mutate(dto);
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
      { loginMutation.isError && <div>Something went wrong!</div>}
      <button onClick={handleLogin} disabled={loginMutation.isLoading}>
        Login
      </button>
    </div>
  );
};

export default LoginPage;
