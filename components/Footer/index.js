import Link from 'next/link';
import Image from 'next/image';

import styles from './Footer.module.scss';
import Banner from '../Banner';
import logo from '../../assets/img/logo-white.svg';
import Container from '../Container';
import classNames from 'classnames';
import Social from '../Social';

export default function Footer() {
  return (
    <footer>
      <Banner
        text="Work at Haystacks.ai - We are looking for people who want to build and disrupt"
        href="mailto:someone@web.com"
      />
      <div className={styles.up}>
        <Container>
          <div className={styles.upFrame}>
            <div className={styles.logo}>
              <Link href="/" passHref>
                <a>
                  <Image src={logo} alt="Haystack logo" />
                </a>
              </Link>
            </div>
            <nav className={styles.nav}>
              {/* <ul className={styles.navList}>
                <li>
                  <h3 className={classNames('h6', styles.navListTitle)}>
                    Use Cases
                  </h3>
                </li>
                <li>
                  <Link href="/">Acquisition management</Link>
                </li>
                <li>
                  <Link href="/">Portfolio management</Link>{' '}
                </li>
                <li>
                  <Link href="/">Data-as-a-service</Link>
                </li>
              </ul> */}
              <ul className={styles.navList}>
                <li>
                  <h3 className={classNames('h6', styles.navListTitle)}>
                    <Link href="/technology">Technology</Link>
                  </h3>
                </li>
                {/* <li>
                  <Link href="/">Platform</Link>
                </li>
                <li>
                  <Link href="/">Our Data</Link>
                </li> */}
              </ul>
              <ul className={styles.navList}>
                <li>
                  <h3 className={classNames('h6', styles.navListTitle)}>
                    <Link href="/about">About</Link>
                  </h3>
                </li>
                {/* <li>
                  <Link href="/">Mission</Link>
                </li>
                <li>
                  <Link href="/">Leadership</Link>
                </li>
                <li>
                  <Link href="/">Advisory Board</Link>
                </li>
                <li>
                  <Link href="/">Careers</Link>
                </li> */}
              </ul>
            </nav>
          </div>
        </Container>
      </div>
      <div className={styles.low}>
        <Container>
          <div className={styles.lowFrame}>
            {/* <Social /> */}
            <span className={styles.copy}>
              2022 &copy; HAYSTACKS.AI · <Link href="/terms">Terms of Use</Link>
            </span>
          </div>
        </Container>
      </div>
    </footer>
  );
}
