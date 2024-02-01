import Link from 'next/link'
import styles from './index.module.css'
import Menu from '../Menu'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Link href="/">Logo</Link>
        <Menu />
      </div>
    </header>
  )
}
