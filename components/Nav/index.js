import Link from 'next/link';
import { useRouter } from 'next/router';
import cn from 'classnames';

import styles from './Nav.module.scss';
import Button from '../Button';

export default function Nav() {
  const router = useRouter();

  const pathname = router.pathname;

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link href="/technology">
            <a
              className={cn(styles.link, {
                [styles.link_active]: pathname === '/technology'
              })}
            >
              Technology
            </a>
          </Link>
        </li>
        {/* <li className={styles.listItem}>
          <Link href="/">
            <a className={styles.link}>Use Cases</a>
          </Link>
        </li> */}
        <li className={styles.listItem}>
          <Link href="/about">
            <a
              className={cn(styles.link, {
                [styles.link_active]:
                  pathname.replace(/^\/([^\/]*).*$/, '$1') === 'about'
              })}
            >
              About
            </a>
          </Link>
        </li>
        <li className={styles.listItem}>
          <Button href="/#section-requestDemo" variant="outline" size="xl">
            REQUEST DEMO
          </Button>
        </li>
      </ul>
    </nav>
  );
}
