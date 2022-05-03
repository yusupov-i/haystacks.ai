import classNames from 'classnames';
import Link from 'next/link';
import styles from './Social.module.scss';

export default function Social() {
  return (
    <ul className={styles.list}>
      <li className={styles.listItem}>
        <a
          href="#!"
          target="_blank"
          className={classNames(
            styles.link,
            styles['link_youtube'],
            'icon-youtube'
          )}
        ></a>
      </li>
      <li className={styles.listItem}>
        <a
          href="#!"
          target="_blank"
          className={classNames(styles.link, 'icon-facebook')}
        ></a>
      </li>
      <li className={styles.listItem}>
        <a
          href="#!"
          target="_blank"
          className={classNames(styles.link, 'icon-linkedin')}
        ></a>
      </li>
      <li className={styles.listItem}>
        <a
          href="#!"
          target="_blank"
          className={classNames(
            styles.link,
            styles['link_twitter'],
            'icon-twitter'
          )}
        ></a>
      </li>
    </ul>
  );
}
