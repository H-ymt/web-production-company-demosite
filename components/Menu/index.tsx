"use client"

import Link from "next/link"
import styles from "./index.module.scss"
import { usePathname } from "next/navigation"

export default function Menu() {
  const pathname = usePathname()

  return (
    <nav>
      <ul className={styles.navList}>
        <li>
          <Link
            className={`${styles.navLink} ${
              pathname === "/about" ? styles.isActive : ""
            }`}
            href="/about"
          >
            About
          </Link>
        </li>
        <li>
          <Link className={styles.navLink} href="/blog">
            Blog
          </Link>
        </li>
        <li>
          <Link className={styles.navLink} href="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}
