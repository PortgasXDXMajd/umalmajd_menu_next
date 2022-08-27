import { FC, useState } from "react";
import styles from "../styles/spinner.module.css";

const Spinner: FC = () => {
  return (
    <div className={styles.spinnerContainer}>
      <div className={styles.loadingSpinner}></div>
    </div>
  );
};

export default Spinner;
