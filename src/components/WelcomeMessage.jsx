import React from 'react'
import styles from "./WelcomeMessage.module.css"

const WelcomeMessage = () => {
  return (
    <div>
      <h1 className={styles.welcome}>Enjoy Your Day</h1>
      <h3 className={styles.subTitle}>Plan Your Day With ME</h3>
    </div>
  )
}

export default WelcomeMessage
