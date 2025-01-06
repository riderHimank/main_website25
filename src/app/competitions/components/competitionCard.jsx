import React from 'react'
import styles from './comp-card.module.css'

const competitionCard = () => {
  return (
    <>
        <div className={styles.compCard}>
            <div className={styles.cardImg}>
                <img src="./compCard.png" alt="" />
           </div>

           <div className={styles.compTitle}>
                Electric Heels
           </div>

           <div className={styles.compDetails}>
            <p>Group</p>
            <p>Freestyle Dance Competition</p>
           </div>

           <div className={styles.compVanueTime}>
            <div className={styles.compVanue}>
                <div className={styles.locIconComp}>
                    <img src="./Location.png" alt="" />
                </div>
                <p> Main Auditorium</p>
            </div>
            <div className={styles.compTime}>
                <div className={styles.timeIconComp}>
                    <img src="./Time_light@2x.png" alt="" />
                </div>
                <p>14 Sept,</p>
                <p>4:30 pm</p>
            </div>
           </div>
           <div className={styles.cardBtns}>
            <div className={styles.registerBtnComp}>
                
                <p>Register</p>
                <div className={styles.mapCompIcon}>
                    <img src="./External.png" alt="" />
                </div>
            </div>
            <div className={styles.registerBtnComp}>
            <p>Google Maps</p>
                <div className={styles.mapCompIcon}>
                    <img src="./Maps.png" alt="" />
                </div>
            </div>
           </div>
        </div>
        
    </>
  )
}

export default competitionCard