import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import cn from 'classnames';

import styles from './Header.module.scss';
import Container from '../Container';
import Nav from '../Nav';
import logo from '../../assets/img/logo-white.svg';

export default function Header({ transparent = true }) {
  const [navOpen, setNavOpen] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (navOpen) {
      setNavOpen(!navOpen);
    }
  }, [router.asPath]);

  const handleNavClick = () => {
    if (!navOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }

    setNavOpen(!navOpen);
  };

  return (
    <header
      className={cn(styles.Header, {
        [styles['Header_transparent']]: transparent
      })}
    >
      <Container>
        <div className={styles['Header-frame']}>
          <Link href="/" passHref>
            <a className={styles['Header-logo']}>
              <Image src={logo} loading="eager" alt="Haystack logo" />
            </a>
          </Link>
          <div
            className={cn(styles.navHolder, {
              [styles['navHolder_open']]: navOpen
            })}
          >
            <div className={styles.navHolder__inner}>
              <Nav />
            </div>
          </div>
          <span
            className={cn(styles.navOpener, {
              [styles['navOpener-active']]: navOpen
            })}
            onClick={handleNavClick}
          >
            <span></span>
          </span>
        </div>
      </Container>
    </header>
  );
}
