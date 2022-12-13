import styles from '../styles/page.module.css'

function lists() {
  return (
<>

<button ><b>Create New List </b> </button> <br/>
<div className={styles.wrapper}>
<p className={styles.topRowItem}>List</p>
<p className={styles.topRowItem}>Exercises</p>
<p>Megacrunch</p><p>15</p>
<p>Killer Pushup</p><p></p>
<p>Thumping Jack</p><p>5</p>
</div>

    </>
  )
}

export default lists