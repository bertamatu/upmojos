import styles from "./page.module.css";
import Navigation from './components/Navigation/Navigation';
import Link from 'next/link';

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <div className={styles.page}>
      <Navigation />

      <main className={styles.main}>
        <div className={styles.heroSection}>
          <div className={styles.leftContent}>
            <div className={styles.circleContainer}>
              <div className={styles.circle}>
                <svg className={styles.chevronIcon} viewBox="0 0 24 24" fill="none">
                  <path d="M12 15.2L7.4 10.6L8.8 9.2L12 12.4L15.2 9.2L16.6 10.6L12 15.2Z" fill="currentColor" />
                </svg>
              </div>

              <div className={styles.textBlock}>
                <p className={styles.smallText}>INNOVATIVE</p>
                <p className={styles.boldText}>SOLUTIONS</p>
              </div>

              <div className={styles.divider} />

              <div className={styles.textBlock}>
                <p>TRANSFORM</p>
                <p>YOUR</p>
                <p className={styles.boldText}>VISION</p>
              </div>
              <div className={styles.textBlock}>
                <hr className={styles.dividerLine} />
                <p className={styles.smallText}>COLLABORATE AS</p>
                <p className={styles.boldText}>TECH PARTNER</p>
              </div>
            </div>
          </div>

          <div className={styles.rightContent}>
            <h1 className={styles.mainTitle}>
              ELEVATE<br />
              YOUR DIGITAL<br />
              PRESENCE
            </h1>

            <div className={styles.ctaButtons}>
              <Link href="/about" className={styles.aboutButton}>
                ABOUT
              </Link>
              <a href="mailto:hello@upmojos.com" className={styles.talkButton}>
                Let&apos;s talk →
              </a>
            </div>

            <div className={styles.timelineSection}>
              <div className={styles.timelineItem}>
                <span className={styles.timelineNumber}>01</span>
                <div className={styles.timelineLine} />
                <div className={styles.timelineContent}>
                  <div className={styles.timelineDot} style={{ backgroundColor: '#ff0044' }} />
                  <div className={styles.timelineTextBlock}>
                    <p className={styles.timelineTextPrimary}>Personal Brand</p>
                    <p className={styles.timelineTextSecondary}>Social Media Growth</p>
                  </div>
                  <span className={styles.timelineYear}>/ 2019</span>
                </div>
              </div>

              <div className={styles.timelineItem}>
                <span className={styles.timelineNumber}>02</span>
                <div className={styles.timelineLine} />
                <div className={styles.timelineContent}>
                  <div className={styles.timelineDot} style={{ backgroundColor: '#ff0044' }} />
                  <div className={styles.timelineTextBlock}>
                    <p className={styles.timelineTextPrimary}>Web Development</p>
                    <p className={styles.timelineTextSecondary}>Full-stack Solutions</p>
                  </div>
                  <span className={styles.timelineYear}>/ 2020</span>
                </div>
              </div>

              <div className={styles.timelineItem}>
                <span className={styles.timelineNumber}>03</span>
                <div className={styles.timelineLine} />
                <div className={styles.timelineContent}>
                  <div className={styles.timelineDot} style={{ backgroundColor: '#ff0044' }} />
                  <div className={styles.timelineTextBlock}>
                    <p className={styles.timelineTextPrimary}>Mobile Apps</p>
                    <p className={styles.timelineTextSecondary}>Cross-platform Development</p>
                  </div>
                  <span className={styles.timelineYear}>/ 2025</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          © {currentYear} UPMOJOS. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
