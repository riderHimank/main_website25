"use client";
import React from "react";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./navbar.module.css";
import "./components/stone-slab.css";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const navOptions = [
    { label: "Home", path: "/" },
    { label: "Events", path: "/events" },
    { label: "Competitions", path: "/competitions" },
    { label: "MUN", path: "/mun" },
    { label: "Kartavya", path: "/kartavya" },
    { label: "Gallery", path: "/gallery" },
    { label: "Sponsers", path: "/sponsers" },
    { label: "Merch", path: "/merch" },
    { label: "Team", path: "/team" },
  ];

  const pathh = usePathname();

  return (
    <div className={styles.mainnav}>
      <img className={styles.logo} src="/alcherlogo1.png" alt="" />
      <div className={styles.options}>
        <ul>
          {navOptions.map((option, idx) => (
            <li
              key={idx}
              className={
                pathh === option.path ? styles["navActive"] : styles["nav"]
              }
            >
              <Link href={option.path}>{option.label}</Link>
            </li>
          ))}
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
