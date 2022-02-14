import { Link } from "react-router-dom";
import styles from "./Home.module.css";

const HomePage = () => {
  return (
    <div className={styles["home-page"]}>
      <h1>Home</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        doloremque, quidem quisquam, quisquam quisquam quisquam quisquam
        dignissimos.
      </p>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default HomePage