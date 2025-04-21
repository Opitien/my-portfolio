import React from "react";
import styles from "./Stack.module.css";

const Stack: React.FC = () => {
  return (
    <section id="stack" className={styles.stackSection}>
      <h2 className={styles.heading}>Stack</h2>
      <div className={styles.grid}>
        <div className={styles.iconBox}>
          <img src="/javascript.svg" alt="JavaScript" />
          <p>JavaScript</p>
        </div>
        <div className={styles.iconBox}>
          <img src="/jquery.svg" alt="jQuery" />
          <p>jQuery</p>
        </div>
        <div className={styles.iconBox}>
          <img src="/css.svg" alt="CSS" />
          <p>CSS</p>
        </div>
        <div className={styles.iconBox}>
          <img src="/html5.svg" alt="HTML" />
          <p>HTML</p>
        </div>
        <div className={styles.iconBox}>
          <img src="/bootstrap.svg" alt="Bootstrap" />
          <p>Bootstrap</p>
        </div>
        <div className={styles.iconBox}>
          <img src="/nodedotjs.svg" alt="Node.js" />
          <p>Node.js</p>
        </div>
        <div className={styles.iconBox}>
          <img src="/gnubash.svg" alt="Bash" />
          <p>Bash</p>
        </div>
        <div className={styles.iconBox}>
          <img src="/git.svg" alt="Git" />
          <p>Git</p>
        </div>
      </div>
    </section>
  );
};

export default Stack;
