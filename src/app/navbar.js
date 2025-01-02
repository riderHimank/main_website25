import React from "react";
import styles from "./navbar.module.css";
import "./components/stone-slab.css";
const Navbar = () => {
  return (
    <div className={styles.mainnav}>
      <img className={styles.logo} src="/alcherlogo1.png" alt="" />
      <div className={styles.options}>
        <ul>
          <li className="active">Home</li>
          <li>Events</li>
          <li>Competitions</li>
          <li>MUN</li>
          <li>Kartavya</li>
          <li>Gallery</li>
          <li>Sponsers</li>
          <li>Merch</li>
          <li>Team</li>
        </ul>
      </div>
      <div className={styles.getcards}>
        <img src="/bgGetcards1.jpg" alt="" />
        <img className={styles.desc} src="/3_arrows.png" alt="" />
      </div>
    </div>
  );
};

export default Navbar;
