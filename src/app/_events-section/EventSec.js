"use client";

import styles from "./events.module.css";

import rect from "./_components/rectangle.png";
import event2 from "./_components/event2.png";
import pshows from "./_components/pshows1.png";
import evbtn from "./_components/evbtn.png";
import compbtn from "./_components/compbtn.png";
import dashline from "./_components/dashline.svg";
import arrow from "./_components/arrow.png";

import Image from "next/image";

const EventSec = () => {
  const handleMM = (e, cardRef) => {
    const rectangle = cardRef.getBoundingClientRect();
    const x = e.clientX - rectangle.left;
    const y = e.clientY - rectangle.top;
    const centerX = rectangle.width / 3;
    const centerY = rectangle.height / 3;
    const rotateX = ((y - centerY) / centerY) * -15;
    const rotateY = ((x - centerX) / centerX) * 15;

    cardRef.style.setProperty("--rotateX", `${rotateX}deg`);
    cardRef.style.setProperty("--rotateY", `${rotateY}deg`);
    cardRef.classList.add(styles.tilt);
  };
  const handleML = (cardRef) => {
    cardRef.style.setProperty("--rotateX", "0deg");
    cardRef.style.setProperty("--rotateY", "0deg");
    cardRef.classList.remove(styles.tilt);
  };

  return (
    <div className={styles.events}>
      <div className={styles.heading}>
        <div className={styles.headersection}>
          <div className={styles.intro}>
            <h1 className={styles.inst1}>How about we </h1>
            <Image src={rect} alt="line" className={styles.underline} />
            <h1 className={styles.inst2}>
              have a <span>Look</span>
            </h1>
            <Image src={rect} alt="line" className={styles.underline2} />
            <div className={styles.high}>
              <h1 className={styles.inst3}>
                at the <span className={styles.highlight}>Highlights</span>
              </h1>
              <Image src={arrow} className={styles.arrow} />
            </div>
            <Image src={rect} alt="line" className={styles.underline3} />
          </div>
          <div className={styles.randomtextcontainer}>
            <span className={`${styles.randomtext} ${styles.rndtext1}`}>
              [a] This is Nice???
            </span>
            <span className={`${styles.randomtext} ${styles.rndtext2}`}>
              [a] Gotta grab that
            </span>
            <span className={`${styles.randomtext} ${styles.rndtext3}`}>
              [a] Game is on
            </span>
          </div>
        </div>
      </div>

      <div className={styles.cardssection}>
        <div className={styles.evcard}>
          <div
            className={styles.eventcard}
            onMouseMove={(e) => handleMM(e, e.currentTarget)}
            onMouseLeave={(e) => handleML(e.currentTarget)}
          >
            <Image src={pshows} alt="Pronites" />
          </div>
          <div
            className={styles.eventcard}
            onMouseMove={(e) => handleMM(e, e.currentTarget)}
            onMouseLeave={(e) => handleML(e.currentTarget)}
          >
            <Image src={event2} alt="Proshows" />
          </div>
        </div>

        {/* Text and Button for First Pair */}
        <div
          className={`${styles.eventstext} ${styles.eventcrd}`}
          id="event-crd"
        >
          <div className={styles.eventcontainer}>
            ` <img src={dashline} alt="ff" className={styles.lines} />`
            <h2 className={styles.usual}>
              <span>Exciting Events - </span>
              <br />
              <span>Performances, Talks and</span>
              <br />
              <span id="concerts">Concerts...</span>
              <br />
            </h2>
            <h2 className={styles.resp}>
              <span>Exciting Events -Performances, Talks and Concerts...</span>
            </h2>
            <Image src={dashline} alt="ff" className={styles.lines} />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              tristique purus eu libero egestas, sed bibendum felis tincidunt.
              Proin ultricies viverra mollis. Nullam vel quam tortor. Duis
              egestas libero velit,
            </p>
            <button className={styles.eventsbutton}>
              <Image src={evbtn} alt="ff" className={styles.evebtn} />
            </button>
          </div>
        </div>
      </div>

      <div className={`${styles.cardssection} ${styles.evText}`}>
        <div className={styles.eventstext}>
          <Image src={dashline} className={styles.lines} />
          <h2 className={styles.usual}>
            <span>Exciting Events - </span>
            <br />
            <span>Performances, Talks and</span>
            <br />
            <span className={styles.concerts}>Concerts...</span>
            <br />
          </h2>

          <h2 className={styles.resp}>
            <span>Exciting Events -Performances, Talks and Concerts...</span>
          </h2>
          <Image src={dashline} className={styles.lines} />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            tristique purus eu libero egestas, sed bibendum felis tincidunt.
            Proin ultricies viverra mollis. Nullam vel quam tortor. Duis egestas
            libero velit,
          </p>
          <button className={styles.eventsbutton}>
            <Image src={compbtn} alt="" className={styles.evebtn} />
          </button>
        </div>
        <div className={styles.evcard}>
          <div
            className={styles.eventcard}
            onMouseMove={(e) => handleMM(e, e.currentTarget)}
            onMouseLeave={(e) => handleML(e.currentTarget)}
          >
            <Image src={pshows} alt="Pronites" />
          </div>
          <div
            className={styles.eventcard}
            onMouseMove={(e) => handleMM(e, e.currentTarget)}
            onMouseLeave={(e) => handleML(e.currentTarget)}
          >
            <Image src={event2} alt="Proshows" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default EventSec;
