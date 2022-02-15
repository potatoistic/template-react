import { Link } from "react-router-dom";
import styles from "./Home.module.css";

const HomePage = () => {
  return (
    <div className={styles["home-page"]}>
      <h1 className="text-3xl font-bold underline text-green-500">Home</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        doloremque, quidem quisquam, quisquam quisquam quisquam quisquam
        dignissimos.
      </p>
      <Link to="/login">Lazy Login</Link>
      <Link to="/auth/login">Nested Auth - Login</Link>
      <Link to="/dashboard">Private Home</Link>
    </div>
  );
};

export default HomePage