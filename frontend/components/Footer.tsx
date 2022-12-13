import styles from '../styles/layout.module.css'
import TBD from './TBD';

function Footer() {
  return (
    <div className={styles.footer}>
      <hr></hr>
      <h4 className={styles.tooltip}>Instructions
      <TBD/>
      </h4>
    </div>
  )
}

export default Footer