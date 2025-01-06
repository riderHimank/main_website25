"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./events.module.css";

import image1 from "./_Components/deval_pan_digi.jpeg"

export default function Page() {
  var image= 1;
  const links= document.querySelectorAll('.link');
  const assignImage = (clicked) => {
    console.log(clicked);
  };
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpand = () => setIsExpanded(true);
  const handleReset = () => setIsExpanded(false);

  return (
    <main>
      <div className={styles.mainPage}>
        <div className={`${styles.left} ${isExpanded ? styles.visible : ""}`}>
          <h1 className={styles.heading}>PRONITES</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
            expedita esse autem in consequuntur? Repudiandae earum dignissimos voluptate tempora! Similique tenetur
            non laborum mollitia quos voluptatem nostrum eligendi fuga inventore.
          </p>
          <button className={styles.enter}>enter</button>
        </div>
        <div className={styles.center}>
          <div
            className={`${styles.mainImage} ${
              isExpanded ? styles.mainImageExpanded : ""
            }`}
          >
            {/* <Image
              src={frame}
              className={styles.frame}
              alt="Frame"
              quality={100}
              width={500}
              height={500}
            /> */}
            <Image
              src={image1}
              className={styles.image1}
              alt="show's image"
              quality={100}
              width={500}
              height={500}
            />
          </div>
          
        </div>
        <div className={`${styles.box1} ${isExpanded? styles.box1Visible : ""}`}>
        <div className={`${styles.right} ${isExpanded? styles.up : ""}`}>
        <p>Day 0: Saaz</p>
          <hr />
          <p>Day 0: Saaz</p>
          <hr />
          <p>Day 0: Saaz</p>
          <hr />
          <p>Day 0: Saaz</p>
          <hr />
        </div>
        </div>
      </div>
      <footer className={styles.footer}>
      <div>
      <div className={styles.imagelinks}>
        <button
          className={`${styles.link} ${styles.i1}`}
          onClick={() => assignImage(styles.i1)}
        >
          <p className={styles.txt}>Pronites1</p>
        </button>
        <button
          className={`${styles.link} ${styles.i2}`}
          onClick={() => assignImage(styles.i2)}
        >
          <p className={styles.txt}>Pronites2</p>
        </button>
        <button
          className={`${styles.link} ${styles.i3}`}
          onClick={() => assignImage(styles.i3)}
        >
          <p className={styles.txt}>Pronites3</p>
        </button>
        <button
          className={`${styles.link} ${styles.i4}`}
          onClick={() => assignImage(styles.i4)}
        >
          <p className={styles.txt}>Pronites4</p>
        </button>
        <button
          className={`${styles.link} ${styles.i5}`}
          onClick={() => assignImage(styles.i5)}
        >
          <p className={styles.txt}>Pronites5</p>
        </button>
      </div>
      </footer>
      <button className={styles.check} onClick={handleExpand}>
            Click Me
          </button>
          <button className={styles.check2} onClick={handleReset}>
            Refresh
          </button>
    </main>
  );
}
