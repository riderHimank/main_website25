"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./events.module.css";

import image1 from "./_Components/image1.jpeg";
import image2 from "./_Components/image2.png";
import image3 from "./_Components/next.png";
import image4 from "./_Components/Group38.png";
import image5 from "./_Components/image1.jpeg";

import enter from "./_Components/Group38.png";
import next from "./_Components/next.png";

const images = [
  { src: image1, name: "Pronites" },
  { src: image2, name: "Proshows" },
  { src: image3, name: "Creator's Camp" },
  { src: image4, name: "Critical Damage" },
  { src: image5, name: "Flickeringa" },
];

export default function Page() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(true);


  const assignImage = (index) => {
    setIsExpanded(false);
    setTimeout(() => {
      setCurrentIndex(index); 
      handleExpand();
    }, 1000);
  };

  const handleExpand = () => setIsExpanded(true);

  const handleNext = () => {
    // Step 1: Perform refresh
    setIsExpanded(false); // Collapse the component briefly
    setTimeout(() => {
      // setIsExpanded(true); // Re-expand the component after refresh

      // Step 2: Assign the next image
      const nextIndex = (currentIndex + 1) % images.length;
      setCurrentIndex(nextIndex);

      // Step 3: Execute the Click Me function
      handleExpand();
    }, 1000); // Timeout ensures the "refresh" effect is noticeable
  };

  return (
    <main>
      <div className={styles.mainPage}>
        <div className={`${styles.left} ${isExpanded ? styles.visible : ""}`}>
          <h1 className={styles.heading}>PRONITES</h1>
          <div className={styles.description}>
            <p className={styles.descriptionTxt}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
              expedita esse autem in consequuntur? Repudiandae earum dignissimos voluptate tempora!
            </p>
          </div>

          <button className={styles.enter}>
            <Image
              src={enter}
              className={styles.enterImage}
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
              src={images[currentIndex].src}
              className={styles.image1}
              alt="show's image"
              quality={100}
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className={`${styles.box1} ${isExpanded ? styles.box1Visible : ""}`}>
          <div className={styles.nextButton} onClick={handleNext}>
            <Image src={next} className={styles.nextImage} alt="next button" />
            <p className={styles.eventName}>{images[currentIndex].name}</p>
          </div>
          <div className={`${styles.right} ${isExpanded ? styles.up : ""}`}>
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
          {images.map((image, index) => (
            <button
              key={index}
              className={`${styles.link} ${
                currentIndex === index ? styles.selected : ""
              }`}
              onClick={() => assignImage(index)}
            >
              <p className={styles.txt}>{image.name}</p>
            </button>
          ))}
        </div>
      </footer>
      <div className={styles.mobileview}>
          <div className={styles.upper}>
            <div className={styles.upperLeft}>
              <h1 className={styles.heading}>PRONITES</h1>
              <div className={styles.nextButton} onClick={handleNext}>
                <Image src={next} className="w-10 h-9" alt="next button" />
                <p className={styles.eventName}>{images[currentIndex].name}</p>
              </div>
            </div>
            <div className={styles.center}>
              <div
                className={`${styles.mainImage} ${
                  isExpanded ? styles.mainImageExpanded : ""
                }`}
              >
                <Image
                  src={images[currentIndex].src}
                  className={styles.image1}
                  alt="show's image"
                  quality={100}
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
          <div className={styles.description}>
            <p className={styles.descriptionTxt}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
              expedita esse autem in consequuntur? Repudiandae earum dignissimos voluptate tempora!
            </p>
          </div>
          <div className={styles.lower}>
            <button className={styles.enter}>
            <Image
              src={enter}
              className={styles.enterImage}
              quality={100}
              alt="enter button"
            />
            </button>
          </div>
      </div>
    </main>
  );
}
