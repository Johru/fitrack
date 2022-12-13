import styles from '../styles/nav.module.css';
import styles2 from '../styles/layout.module.css';
import Image from 'next/image';
import Link from 'next/link';
import TBD from './TBD';

function Nav() {
  return (
    <div className={styles.top}>
      <p>&apos;LOGO&apos; Placeholder</p>
  
      <Link href="/homepage"><p>Home</p></Link>
      <Link href="/lists"><p>Lists</p></Link>
   
     
           <span className={styles2.tooltip}>
      <Link href=""> <Image src="/calendar.png" alt="Calendar Icon" width={50} height={50} /></Link>
      <TBD/>
      </span>
      <span></span>
      <span className={styles2.tooltip}>
      <button className={styles.navButton}> Login
       </button>
       <TBD/>
       </span>
    </div>
  )
}

export default Nav
