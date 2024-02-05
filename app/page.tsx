import Image from "next/image"
import styles from "./page.module.scss"
import Button from "@/components/Button"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.heroContainer}>
          <h1 className={styles.heroTitle}>
            A web production company specializing in Jamstack
          </h1>
          <p className={styles.heroText}>
            We provide websites that are ultra-fast, secure, and resistant to mass access.
          </p>

          <Link href="/contact" className={styles.heroButton}>
            <Button size="lg" visual="primary">
              Contact
            </Button>
          </Link>
        </div>
        <Image src="/leadership-2.png" alt="hero" width={400} height={400} />

        <div className={styles.heroImages}>
          <Image src="/alignment.png" alt="hero" width={200} height={200} />
          <Image src="/analyze-data-6.png" alt="hero" width={200} height={200} />
          <Image src="/assistant-2.png" alt="hero" width={200} height={200} />
        </div>
      </div>
    </>
  )
}
