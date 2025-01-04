"use client"
import styles from "./sponsor.module.css";
import img1 from "./_components/img1.png";
import img2 from "./_components/img2.png";
import img3 from "./_components/img3.png";
import img4 from "./_components/img4.png";
import img5 from "./_components/img5.png";
import img13 from "./_components/img13.png";
import img7 from "./_components/img7.png";
import img8 from "./_components/img8.png";
import img9 from "./_components/img9.png";
import img10 from "./_components/img10.png";
import img11 from "./_components/img11.png";
import img12 from "./_components/img12.png";
import line2 from "./_components/line2.png";

import dash1 from "./_components/dash1.png";
import dash2 from "./_components/dash2.png";
import Image from "next/image";

const sponsors = [
  { name: "Gplus", logo: img1, alt: "Gplus logo" },
  { name: "SBI", logo: img2, alt: "SBI logo" },
  { name: "Sparx1", logo: img3, alt: "Sparx logo" },
  { name: "Sparx2", logo: img4, alt: "Sparx logo" },
  { name: "PRAG NEWS", logo: img5, alt: "PRAG NEWS logo" },
  { name: "JioSaavn", logo: img2, alt: "JioSaavn logo" },
  { name: "Unstop", logo: img7, alt: "Unstop logo" },
  { name: "Edu Fabrica", logo: img8, alt: "Edu Fabrica logo" },
  { name: "NTPC", logo: img9, alt: "NTPC logo" },
  { name: "French Essence", logo: img13, alt: "French Essence logo" },
  { name: "E-media", logo: img11, alt: "E-media logo" },
  { name: "E-media2", logo: img10, alt: "E-media logo" },
  { name: "E-media3", logo: img12, alt: "E-media logo" },
];

const SponsorSection = () => {
  return (
    <div className={styles.sponsorsection}>
<Image src={dash1} alt="" className={styles.dash}/>
      <h2 className={styles.sponsortitle}>Sponsors</h2>
      <div className={styles.sponsorlogos}>
      <Image src={line2} className={styles.lines}/>
        {sponsors.map((sponsor, index) => (
          
          <div className={styles.sponsorlogo} key={index}>
            <Image src={sponsor.logo} alt={sponsor.alt} className={styles.sponsorImg}/>
          </div>
        ))}
       <Image src={line2} className={styles.lines} alt=""/>
      </div>
      <Image src={dash2} alt="" className={styles.dash}/>
    </div>
  );
};

export default SponsorSection;

