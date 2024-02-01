import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <h1 className={styles.heroTitle}>
        Static site developed with Next.js and <a href="">Newt!</a>
      </h1>

      <a href="https://www.newt.so/" rel="noreferrer" target="_blank">
        About
      </a>
    </>
  )
}
