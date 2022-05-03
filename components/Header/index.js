import { useState, useLayoutEffect } from 'react';

import cn from 'classnames';
import styles from './Header.module.scss';

import logo from '../../assets/img/logo-white.png';
import Link from 'next/link';
import Container from '../Container';
import Image from 'next/image';
import Nav from '../Nav';
import classNames from 'classnames';

export default function Header({ transparent = true }) {
  const [navOpen, setNavOpen] = useState(false);

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
              <Image src={logo} alt="Haystack logo" />
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
            className={classNames(styles.navOpener, {
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
