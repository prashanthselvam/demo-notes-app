import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.Home}>
      <div className={styles.lander}>
        <h1>Scratch</h1>
        <p className="text-muted">A simple note taking app</p>
      </div>
    </div>
  );
};

export default Home;
