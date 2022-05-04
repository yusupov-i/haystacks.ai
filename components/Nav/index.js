import Link from 'next/link';
import { useRouter } from 'next/router';
import cn from 'classnames';

import styles from './Nav.module.scss';
import Button from '../Button';

export default function Nav() {
  const router = useRouter();

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link href="/technology">
            <a
              className={cn(styles.link, {
                [styles.link_active]: router.pathname === '/technology'
              })}
            >
              Technology
            </a>
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/">
            <a className={styles.link}>Use Cases</a>
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/">
            <a
              className={cn(styles.link, {
                [styles.link_active]: router.pathname === '/about'
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
