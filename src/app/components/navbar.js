import React from "react";
import styles from "./navbar.module.css";
import "./stone-slab.css";
const Navbar = () => {
  return (
    <div className="py-4 px-20 bg-gray-900">
      <img className="h-16 w-40" src="/alcherlogo1.png" alt="" />
      <div className={styles.modules}>
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

// import React from "react";
// import styles from "./navbar.module.css";
// const Navbar = () => {
//   return (
//     <div className="py-4 px-20 bg-gray-900 ">
//       <img className="h-16 w-40" src="/alcherlogo1.png" alt="" />
//     </div>
//   );
// };

// export default Navbar;
