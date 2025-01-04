import React from "react";
import styles from "./footer.module.css";
import "./components/stone-slab.css";
import "./components/game-tape.css";
const footer = () => {
  return (
    <div>
      <img className="w-full h-20 bg-gray-900 " src="/footUpBG.png" alt="" />
      <div className={styles.mainFooter}>
        <div
          className={styles.eventsSec}
          style={{ fontFamily: "stoneSlab", color: "rgba(255, 235, 211, 1)" }}
        >
          <ul>Home</ul>
          <ul>Events</ul>
          <ul>Competitions</ul>
          <ul>MUN</ul>
          <ul>Kartavya</ul>
          <ul>Gallery</ul>
          <ul>Sponsers</ul>
          <ul>Merch</ul>
          <ul>Team</ul>
        </div>
        <div className={styles.logoDiv}>
          <img className={styles.footerLogo} src="/footLogo.png" alt="" />
        </div>
        <div className={styles.prbheads}>
          <div className={styles.prbname1}>
            <p id={styles.name}>Raju Rastogi</p>
            <p>+91 4567812345</p>
            <p>rajuras@alcheringa.in</p>
          </div>
          <div className={styles.prbname2}>
            <p id={styles.name}>Farhan Quereshi</p>
            <p>+91 4567812345</p>
            <p>farhan@alcheringa.in</p>
          </div>
        </div>
        <div className={styles.design}>
          <div className={styles.designleft}>
            <img src="/name1.png" alt="" />
          </div>
          <div className={styles.designright}>
            <img src="/name2.png" alt="" />
          </div>
        </div>

        <div className={styles.oneline}>
          <div className={styles.lftline}>
            Designed and Developed by Alcher Creatives and Alcher Web Operations{" "}
          </div>
          <div className={styles.rgtline}>
            For Business Enquiries alcheringa@iitg.ac.in
          </div>
        </div>

        <div className={styles.followUs}>
          <p className={styles.followtxt}>Follow Us</p>
          <div className={styles.followicons}>
            <ul>
              <a href="https://www.instagram.com/alcheringaiitg/?hl=en">
                <img src="/instaicon.png" alt="" />
              </a>
            </ul>
            <ul>
              <a href="https://www.facebook.com/alcheringaiitg/">
                <img src="/fbicon.png" alt="" />
              </a>
            </ul>
            <ul>
              <a href="https://x.com/alcheringaiitg">
                <img src="/xicon.png" alt="" />
              </a>
            </ul>
            <ul>
              <a href="https://www.youtube.com/@alcheringaIITG">
                <img src="/yticon.png" alt="" />
              </a>
            </ul>
          </div>
        </div>
        <div className={styles.retroleft}>
          <img src="/txtretroleft.png" alt="" />
        </div>
        <div className={styles.retroright}>
          <img src="/txtretroright.png" alt="" />
        </div>

        <div className={styles.globecir}>
          <img src="/globe.png" alt="" />
        </div>

        <div className={styles.globecir2}>
          <img src="/globe2.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default footer;
