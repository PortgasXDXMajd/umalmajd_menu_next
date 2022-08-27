import { NextPage } from "next";
import styles from "../styles/index.module.css";

const NotFoundPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>
        {" "}
        404 <br /> Page not found!!
      </p>
    </div>
  );
};

export default NotFoundPage;
