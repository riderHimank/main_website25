"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./events.module.css";

import image1 from "./_Components/image1.jpeg"
import image2 from "./_Components/image2.png"
import enter from "./_Components/Group38.png"
import next from "./_Components/next.png"

export default function Page() {
  const [currentImage, setCurrentImage] = useState(image1);
  const assignImage = (image) => {
    setCurrentImage(image);
    console.log("Current Image Updated:", image);
  };

  const [isExpanded, setIsExpanded] = useState(true);

  const handleExpand = () => setIsExpanded(true);
  const handleReset = () => setIsExpanded(false);

  return (
    <main>
      <div className={styles.mainPage}>
        <div className={`${styles.left} ${isExpanded ? styles.visible : ""}`}>
          <h1 className={styles.heading}>PRONITES</h1>
          <div className={styles.description} >
            <p className={styles.descriptionTxt}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
              expedita esse autem in consequuntur? Repudiandae earum dignissimos voluptate tempora! 
            </p>
          </div>
          
          <button className={styles.enter}>
            <Image
              src={enter}
              className="w-48 h-14"
              quality={100}
              alt="enter button"
            />
          </button>
        </div>
        <div className={styles.center}>
          <div
            className={`${styles.mainImage} ${
              isExpanded ? styles.mainImageExpanded : ""
            }`}
          >
            <Image
              src={currentImage}
              className={styles.image1}
              alt="show's image"
              quality={100}
              width={500}
              height={500}
            />
          </div>
          
        </div>
        <div className={`${styles.box1} ${isExpanded? styles.box1Visible : ""}`}>
        <div className={styles.nextButton}>
            <Image
              src={next}
              className=""
            />
            <p className={styles.eventName}>Pronite</p>
          </div>
        <div className={`${styles.right} ${isExpanded? styles.up : ""}`}>
          
        <p>Day 0 : Saaz</p>
          <hr />
          <p>Day 0 : Juggernaut</p>
          <hr />
          <p>Day 0 : Saaz</p>
          <hr />
          <p>Day 0 : Saaz</p>
          <hr />
        </div>
        </div>
      </div>
      <footer className={styles.footer}>
      <div className={styles.imagelinks}>
        <button
          className={`${styles.link} ${styles.i1} ${styles.selected}`}
          onClick={() => assignImage(image1)}
        >
          <p className={styles.txt}>Pronites</p>
        </button>
        <button
          className={`${styles.link} ${styles.i2}`}
          onClick={() => assignImage(image2)}
        >
          <p className={styles.txt}>Proshows</p>
        </button>
        <button
          className={`${styles.link} ${styles.i3}`}
          onClick={() => assignImage(image3)}
        >
          <p className={styles.txt}>Creator's Camp</p>
        </button>
        <button
          className={`${styles.link} ${styles.i4}`}
          onClick={() => assignImage(image4)}
        >
          <p className={styles.txt}>Critical Damage</p>
        </button>
        <button
          className={`${styles.link} ${styles.i5}`}
          onClick={() => assignImage(image5)}
        >
          <p className={styles.txt}>Flickeringa</p>
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
