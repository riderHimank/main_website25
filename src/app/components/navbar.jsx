import React from "react";
import styles from "./navbar.module.css";
import "./stone-slab.css";
const Navbar = () => {
  return (
    <div className="py-4 px-20 bg-gray-900 flex justify-between">
      <img className="h-16 w-40" src="/alcherlogo1.png" alt="" />
      <div
        className="flex gap-10 font-extrabold"
        style={{
          fontFamily: "stoneSlab",
          color: "rgba(255, 235, 211, 1)",
          letterSpacing: "1.2px",
        }}
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
      <div className={styles.getcards}>
        <img src="/bgGetcards1.jpg" alt="" />
      </div>
    </div>
  );
};

export default Navbar;
