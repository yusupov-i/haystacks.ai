import Link from 'next/link';
import Button from '../Button';
import styles from './Nav.module.scss';

export default function Nav() {
  return (
    <nav className={styles.Nav}>
      <ul className={styles['Nav-list']}>
        <li className={styles['Nav-list__item']}>
          <Link href="/">
            <a className={styles['Nav-link']}>Technology</a>
          </Link>
        </li>
        <li className={styles['Nav-list__item']}>
          <Link href="/">
            <a className={styles['Nav-link']}>Use Cases</a>
          </Link>
        </li>
        <li className={styles['Nav-list__item']}>
          <Link href="/">
            <a className={styles['Nav-link']}>About</a>
          </Link>
        </li>
        <li className={styles['Nav-list__item']}>
          <Button href="/#section-requestDemo" variant="outline" size="xl">
            REQUEST DEMO
          </Button>
        </li>
      </ul>
    </nav>
  );
}
