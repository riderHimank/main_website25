import React from 'react'
import CompetitionCard from "./competitionCard"
import styles from './comp-card.module.css'

const cometitions = () => {
    return (
        <>
            <div className={styles.compet}>
                <CompetitionCard />
                <CompetitionCard />
                <CompetitionCard />
                <CompetitionCard />
                <CompetitionCard />
                <CompetitionCard />
            </div>
        </>
    )
}

export default cometitions