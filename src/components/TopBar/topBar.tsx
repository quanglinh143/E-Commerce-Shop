import React from 'react'
// import styles from "./topBar.module.css";
import styles from './topBar.module.css'
import topBar from '../../assets/images/pics/topBar.jpg'
console.log(styles);
const TopBar = () => {
  return (
    <div className={styles.container}>
      <img className={styles.imageTopBar} src={topBar}/>
    </div>
  )
}

export default TopBar